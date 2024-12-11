// Common college acronyms and their full forms
export const collegeAcronyms = {
  'iit': 'Indian Institute of Technology',
  'nit': 'National Institute of Technology',
  'bits': 'Birla Institute of Technology and Science',
  'vit': 'Vellore Institute of Technology',
  'iiit': 'Indian Institute of Information Technology',
  'mit': 'Manipal Institute of Technology',
  'srm': 'Sri Ramaswamy Memorial',
  'lpu': 'Lovely Professional University',
  'dtu': 'Delhi Technological University',
  'nsit': 'Netaji Subhas Institute of Technology',
  'iisc': 'Indian Institute of Science',
  'nift': 'National Institute of Fashion Technology',
  'aiims': 'All India Institute of Medical Sciences',
  'jnu': 'Jawaharlal Nehru University',
  'du': 'Delhi University',
  'iim': 'Indian Institute of Management'
};

// Function to expand acronyms into search terms
export const expandSearchQuery = (query) => {
  const lowerQuery = query.toLowerCase();
  const words = lowerQuery.split(' ');
  
  let expandedTerms = new Set([query]); // Include original query
  
  // Add expanded forms for each word
  words.forEach(word => {
    if (collegeAcronyms[word]) {
      expandedTerms.add(collegeAcronyms[word]);
      // Also add partial matches of the full form
      const fullForm = collegeAcronyms[word].toLowerCase();
      fullForm.split(' ').forEach(term => {
        if (term.length > 2) { // Only add meaningful terms
          expandedTerms.add(term);
        }
      });
    }
  });

  // Handle special cases where acronym might be part of a word
  Object.entries(collegeAcronyms).forEach(([acronym, fullForm]) => {
    if (lowerQuery.includes(acronym)) {
      expandedTerms.add(fullForm);
    }
  });

  return Array.from(expandedTerms);
};
