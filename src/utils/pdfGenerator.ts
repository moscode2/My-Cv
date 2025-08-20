import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async () => {
  try {
    // Get the CV container element
    const element = document.querySelector('.max-w-4xl') as HTMLElement;
    
    if (!element) {
      console.error('CV element not found');
      return;
    }

    // Hide the download button temporarily
    const downloadButton = document.querySelector('button[title="Download as PDF"]') as HTMLElement;
    if (downloadButton) {
      downloadButton.style.display = 'none';
    }

    // Configure html2canvas options for better quality
    const canvas = await html2canvas(element, {
      scale: 2, // Higher resolution
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: element.scrollWidth,
      height: element.scrollHeight,
    });

    // Show the download button again
    if (downloadButton) {
      downloadButton.style.display = 'flex';
    }

    // Calculate PDF dimensions
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 295; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    // Create PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    let position = 0;

    // Add the first page
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add additional pages if content is longer than one page
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // Add clickable links to the PDF
    // Get all links from the header section
    const headerLinks = element.querySelectorAll('header a');
    const scale = imgWidth / element.scrollWidth;
    
    headerLinks.forEach((link) => {
      const rect = link.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      
      // Calculate relative position within the CV element
      const x = (rect.left - elementRect.left) * scale;
      const y = (rect.top - elementRect.top) * scale;
      const width = rect.width * scale;
      const height = rect.height * scale;
      
      const href = link.getAttribute('href');
      if (href) {
        // Add clickable link area to PDF
        pdf.link(x, y, width, height, { url: href });
      }
    });

    // Add links for project URLs
    const projectLinks = element.querySelectorAll('section a[href]');
    projectLinks.forEach((link) => {
      const rect = link.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      
      const x = (rect.left - elementRect.left) * scale;
      const y = (rect.top - elementRect.top) * scale;
      const width = rect.width * scale;
      const height = rect.height * scale;
      
      const href = link.getAttribute('href');
      if (href && href.startsWith('http')) {
        pdf.link(x, y, width, height, { url: href });
      }
    });

    // Download the PDF
    pdf.save('Moses_Onyango_CV.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('There was an error generating the PDF. Please try again.');
  }
};