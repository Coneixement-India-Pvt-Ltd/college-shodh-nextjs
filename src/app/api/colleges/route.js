import connectDB from "@/middleware/mongodb";
import Colleges from "@/models/college.model";
import { NextResponse } from "next/server";
import { expandSearchQuery } from "@/utils/collegeAcronyms";

// GET Method
export const GET = async () => {
  await connectDB(); // Ensure the database connection is established
  try {
    // Fetch all colleges from MongoDB
    const colleges = await Colleges.find().skip(0).limit(10);
    const totalCount = await Colleges.countDocuments();
    return NextResponse.json(
      {
        colleges,
        pagination: {
          total: totalCount,
          page:1,
          limit:10,
          totalPages: Math.ceil(totalCount / 10),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching colleges:", error);
    return NextResponse.json({ error: "Error fetching colleges" }, { status: 500 });
  }
};

// POST Method
export const POST = async (req) => {
  await connectDB();
  try {
    const body = await req.json();
    const { course=null, city=null, state=null, naacRanking=null, nba=null, page = 1, limit = 10, search=null } = body;

    // Build the query object dynamically
    const query = {};

    // Add search filter with expanded terms
    if (search) {
      const expandedTerms = expandSearchQuery(search);
      const searchQueries = expandedTerms.map(term => ({
        $or: [
          { college_name: { $regex: new RegExp(term, 'i') } },
          { address: { $regex: new RegExp(term, 'i') } },
          { dept: { $regex: new RegExp(term, 'i') } },
          { university: { $regex: new RegExp(term, 'i') } }
        ]
      }));
      
      query.$or = searchQueries;
    }

    // Add city and state filter
    if (city || state) {
      const addressFilters = [];
      if (city) {
        addressFilters.push({ address: { $regex: new RegExp(city, 'i') } });
      }
      if (state) {
        addressFilters.push({ address: { $regex: new RegExp(state, 'i') } });
      }
      if (search) {
        query.$and = [{ $or: query.$or }, { $and: addressFilters }];
      } else {
        query.$and = addressFilters;
      }
    }

    // Add course filter
    if (course) {
      const courseFilter = { course: { $regex: new RegExp(course, 'i') } };
      if (query.$and) {
        query.$and.push(courseFilter);
      } else if (query.$or) {
        query.$and = [{ $or: query.$or }, courseFilter];
      } else {
        query.course = courseFilter.course;
      }
    }

    // Add NAAC ranking filter
    if (naacRanking) {
      const naacFilter = { naac: { $eq: naacRanking } };
      if (query.$and) {
        query.$and.push(naacFilter);
      } else if (query.$or) {
        query.$and = [{ $or: query.$or }, naacFilter];
      } else {
        query.naac = naacFilter.naac;
      }
    }

    // Add NBA filter
    if (nba) {
      const nbaFilter = { nba: { $regex: new RegExp(nba, 'i') } };
      if (query.$and) {
        query.$and.push(nbaFilter);
      } else if (query.$or) {
        query.$and = [{ $or: query.$or }, nbaFilter];
      } else {
        query.nba = nbaFilter.nba;
      }
    }

    // Calculate pagination
    const skip = (page - 1) * limit;
    const totalCount = await Colleges.countDocuments(query);

    // Fetch the filtered and paginated data with scoring
    const results = await Colleges.find(query)
      .skip(skip)
      .limit(limit);

    return NextResponse.json(
      {
        colleges: results,
        pagination: {
          total: totalCount,
          page,
          limit,
          totalPages: Math.ceil(totalCount / limit),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching colleges:', error);
    return NextResponse.json(
      { error: 'Error fetching colleges' },
      { status: 500 }
    );
  }
};
