import { validateApiConfig } from '../config/api';

export async function fetchTextFromUrl(url: string): Promise<string> {
  try {
    // Use a CORS proxy to fetch the content
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);
    
    if (!response.ok) {
      throw new Error('Failed to fetch content from URL');
    }
    
    const data = await response.json();
    const html = data.contents;
    
    // Parse the HTML content
    const doc = new DOMParser().parseFromString(html, 'text/html');
    
    // Try to find the main content
    const selectors = [
      'article',
      'main',
      '[role="main"]',
      '.article-content',
      '.post-content',
      '.entry-content',
      '#content',
      '.content'
    ];
    
    let content = '';
    
    // Try each selector until we find content
    for (const selector of selectors) {
      const element = doc.querySelector(selector);
      if (element?.textContent) {
        content = element.textContent.trim();
        break;
      }
    }
    
    // If no content found with selectors, use body content
    if (!content) {
      content = doc.body.textContent?.trim() || '';
    }
    
    // Clean up the content
    content = content
      .replace(/\s+/g, ' ')  // Replace multiple spaces with single space
      .replace(/\n+/g, '\n') // Replace multiple newlines with single newline
      .trim();
    
    if (!content) {
      throw new Error('No content found on the page');
    }
    
    return content;
  } catch (error) {
    console.error('URL fetching error:', error);
    throw new Error('Failed to fetch or parse URL content. Please check the URL and try again.');
  }
}