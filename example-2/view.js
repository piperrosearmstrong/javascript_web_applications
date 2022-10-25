class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = 'I was created dynamically using JS.';
    this.mainContainerEl.append(newParagraph);
  }
}

module.exports = View;