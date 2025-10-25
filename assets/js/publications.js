// Publications functionality
function togglePublication(pubId) {
  const content = document.getElementById(pubId);
  const header = content.previousElementSibling.previousElementSibling; // Get the header
  const icon = header.querySelector('.expand-icon');
  
  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    icon.textContent = '−';
    header.classList.add('expanded');
    
    // Hide any open BibTeX containers in this publication
    const bibtexContainer = content.querySelector(`#bibtex-${pubId}`);
    if (bibtexContainer) {
      bibtexContainer.style.display = 'none';
    }
  } else {
    content.style.display = 'none';
    icon.textContent = '+';
    header.classList.remove('expanded');
  }
}

function showBibtex(pubId) {
  const bibtexContainer = document.getElementById(`bibtex-${pubId}`);
  
  if (bibtexContainer.style.display === 'none' || bibtexContainer.style.display === '') {
    bibtexContainer.style.display = 'block';
  } else {
    bibtexContainer.style.display = 'none';
  }
}

function copyBibtex(pubId) {
  const bibtexCode = document.querySelector(`#bibtex-${pubId} .bibtex-code code`);
  const copyButton = document.querySelector(`#bibtex-${pubId} .copy-bibtex`);
  
  if (bibtexCode) {
    // Create a temporary textarea to copy the text
    const textarea = document.createElement('textarea');
    textarea.value = bibtexCode.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    // Provide visual feedback
    const originalText = copyButton.textContent;
    copyButton.textContent = 'Copied!';
    copyButton.style.backgroundColor = '#27ae60';
    
    setTimeout(() => {
      copyButton.textContent = originalText;
      copyButton.style.backgroundColor = '';
    }, 2000);
  }
}

// Tag filtering functionality
function initializeTagFiltering() {
  const tagButtons = document.querySelectorAll('.tag-btn');
  const publicationCards = document.querySelectorAll('.publication-card');
  
  tagButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      tagButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      
      const selectedTag = button.getAttribute('data-tag');
      
      publicationCards.forEach(card => {
        if (selectedTag === 'all') {
          card.classList.remove('hidden');
          card.style.display = 'block';
        } else {
          const cardTags = card.getAttribute('data-tags').split(',');
          if (cardTags.includes(selectedTag)) {
            card.classList.remove('hidden');
            card.style.display = 'block';
          } else {
            card.classList.add('hidden');
            card.style.display = 'none';
          }
        }
      });
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeTagFiltering();
});

// Smooth scroll for internal links
function smoothScroll(targetId) {
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}