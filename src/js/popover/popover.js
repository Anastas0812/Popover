export class Popover {
  constructor() {
    this.button = document.querySelector('button');
    this.popover = null;

    this.button.addEventListener('click', () => {
      this.showPopover();
      console.log('click');
    });
  }

  showPopover() {
    if (!this.popover) {
      this.popover = document.createElement('div');
      this.popover.className = 'custom-popover';
      this.popover.innerHTML = `
      <div class="popover-content">
        <h3>Popover title</h3>
        <p>And here's some amazing content. It's very engaging. Right?</p>
      </div>
      <div class="popover-arrow"></div>
      `;
      document.body.append(this.popover);
    }

    this.popover.classList.toggle('active');

    const buttonRect = this.button.getBoundingClientRect();
    const popoverWidth = this.popover.offsetWidth;
    this.popover.style.top = (buttonRect.top - this.popover.offsetHeight + 10) + 'px';
    this.popover.style.left = buttonRect.left + buttonRect.width / 2 - popoverWidth / 2 + 'px';
  }
}