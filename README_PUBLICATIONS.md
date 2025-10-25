# Managing Publications

This website uses a data-driven approach to manage publications, making it easy to add, edit, and maintain your research papers.

## How to Add a New Publication

To add a new publication, edit the `_data/publications.yml` file and add a new entry to the `publications` list:

```yaml
- id: unique_paper_id
  title: "Your Paper Title"
  authors: ["Author 1", "Author 2", "Author 3"]
  venue: "Conference/Journal Name"
  venue_type: "conference"  # conference, journal, workshop, thesis, preprint
  year: 2024
  abstract: "Your paper abstract goes here..."
  tags: ["tag1", "tag2", "tag3"]
  links:
    paper: "https://link-to-paper.com"
    code: "https://github.com/yourrepo"
    slides: "https://link-to-slides.com"
    bibtex: |
      @inproceedings{author2024title,
        title={Your Paper Title},
        author={Author 1 and Author 2 and Author 3},
        booktitle={Conference Name},
        year={2024}
      }
```

## Publication Structure

Each publication entry includes:

- **id**: Unique identifier for the publication (used internally)
- **title**: The paper title
- **authors**: List of authors
- **venue**: Where the paper was published
- **venue_type**: Type of publication (affects icon and styling)
- **year**: Publication year
- **abstract**: Brief description of the work
- **tags**: Research area tags for filtering
- **links**: Optional links (paper, code, slides, etc.)

## Available Tags

Current tags are defined in `_data/config.yml`:

- `all`: Shows all publications
- `reinforcement-learning`: Reinforcement Learning papers
- `multi-agent`: Multi-Agent Systems research
- `graph-neural-networks`: Graph Neural Networks
- `robotics`: Robotics applications
- `simulation`: Simulation tools and environments
- `optimization`: Optimization techniques

To add new tags, edit `_data/config.yml` and add entries to the `tags` section.

## Venue Types

Available venue types (defined in `_data/config.yml`):

- `conference`: Research conferences (red badge)
- `journal`: Academic journals (green badge)
- `workshop`: Workshops and symposiums (orange badge)
- `thesis`: Theses and dissertations (purple badge)
- `preprint`: Preprints and arXiv papers (gray badge)

## BibTeX Integration

The system supports inline BibTeX entries. Add the BibTeX citation under the `links.bibtex` field using YAML's multiline string format (using `|`). Users can expand publications to see the abstract and click "BibTeX" to view and copy the citation.

## Automatic Features

The system automatically:

- Sorts publications by year (newest first)
- Generates expandable cards for each publication
- Creates tag filtering buttons
- Styles venue badges based on type
- Provides BibTeX copy functionality
- Maintains responsive design

## Files to Edit

- `_data/publications.yml`: Main publication data
- `_data/config.yml`: Tags and venue type configuration
- `projects.md`: The page layout (usually no changes needed)
- `assets/css/fullpage-style.css`: Styling (for customization)
- `assets/js/publications.js`: JavaScript functionality (for customization)

## Converting from BibTeX Files

To convert from traditional BibTeX files:

1. Parse your `.bib` file
2. Extract the required fields (title, authors, venue, year, abstract)
3. Convert to the YAML format shown above
4. Add appropriate tags based on the research area
5. Add any additional links (paper, code, slides)

This approach provides the flexibility of BibTeX with the maintainability of structured data.