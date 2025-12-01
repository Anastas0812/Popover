import { Popover } from '../popover/popover.js';

describe('Popover', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="widget">
        <button>Click to toggle popover</button>
      </div>
    `;
  });

  test('should create popover on button click', () => {
    const popover = new Popover();
    const button = document.querySelector('button');
    button.click();
  
    const popoverElement = document.querySelector('.custom-popover');
    expect(popoverElement).not.toBeNull();
    expect(popoverElement.classList.contains('active')).toBeTruthy();
  });

  test('should toggle popover on multiple clicks', () => {
    const popover = new Popover();
    const button = document.querySelector('button');
    //1 click
    button.click();
    const popoverElement = document.querySelector('.custom-popover');
    expect(popoverElement.classList.contains('active')).toBeTruthy();
    //2 click
    button.click();
    expect(popoverElement.classList.contains('active')).toBeFalsy();
  });
  
  test('should have correct content', () => {
    const popover = new Popover();
    const button = document.querySelector('button');
    button.click();
    
    const title = document.querySelector('.custom-popover h3');
    const content = document.querySelector('.custom-popover p');
    
    expect(title.textContent).toBe('Popover title');
    expect(content.textContent).toBe('And here\'s some amazing content. It\'s very engaging. Right?');
  });

  test('popover should be close to button', () => {
    document.body.innerHTML = `
      <div style="height: 100vh; display: flex; align-items: center; justify-content: center;">
        <button style="position: relative;">Click to toggle popover</button>
      </div>
    `;
    const popover = new Popover();
    const button = document.querySelector('button');
    button.click();
    
    const popoverElement = document.querySelector('.custom-popover');
    const buttonRect = button.getBoundingClientRect();
    const popoverRect = popoverElement.getBoundingClientRect();
    
    expect(popoverElement).not.toBeNull();
    const distance = buttonRect.top - popoverRect.bottom;
    expect(distance).toBeLessThanOrEqual(30);
    expect(distance).toBeGreaterThanOrEqual(0);
  });
});


