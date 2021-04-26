class MenuItem {
  constructor(el) {
    this.DOM = { el: el }; //create DOM obj that contain an element
    this.DOM.textsGroupEl = this.DOM.el.querySelector("svg > g"); //find the container of the text
    this.filterId = this.DOM.el.querySelector("svg filter").id;
    [this.DOM.text_1, this.DOM.text_2] = this.DOM.textsGroupEl.querySelectorAll(
      "text"
    ); //select all text in the container

    this.DOM.feBlur = document.querySelector(
      `#${this.filterId} > feGaussianBlur`
    );
    // find the feBlur to manipulate

    this.primitiveValues = { stdDeviation: 0 }; // blur val

    this.createTimeline(); //create a gsap timeline
    this.initEvents(); //tie timeline to hover events
  }
  initEvents() {
    this.onMouseEnterFn = () => {
      this.DOM.textsGroupEl.style.filter = `url(#${this.filterId})`; //apply filter
      this.tl.play();
    };

    this.onMouseLeaveFn = () => {
      this.DOM.textsGroupEl.style.filter = `url(#${this.filterId})`;
      this.tl.reverse();
    };
    this.DOM.el.addEventListener("mouseenter", this.onMouseEnterFn);
    this.DOM.el.addEventListener("mouseleave", this.onMouseLeaveFn);
  }
  createTimeline() {
    this.tl = gsap
      .timeline({
        paused: true,
        onComplete: () => {
          this.DOM.textsGroupEl.style.filter = "none";
        },
        onReverseComplete: () => {
          this.DOM.textsGroupEl.style.filter = "none";
        },
        onUpdate: () => {
          this.DOM.feBlur.setAttribute(
            "stdDeviation",
            this.primitiveValues.stdDeviation
          );
        }, // manipulate a created val and set the feblur val
      })

      .to(
        this.primitiveValues,
        {
          duration: 0.8,
          ease: "none",
          startAt: { stdDeviation: 0 },
          stdDeviation: 1,
        },
        0
      )
      .to(this.primitiveValues, {
        duration: 0.8,
        ease: "none",
        stdDeviation: 0,
      })

      .to(
        this.DOM.text_1,
        {
          duration: 1.6,
          ease: "none", // Power1.easeInOut
          opacity: 0,
        },
        0
      )
      .to(
        this.DOM.text_2,
        {
          duration: 1.6,
          ease: "none", // Power1.easeInOut
          opacity: 1,
        },
        0
      );
  }
}

class Menu {
  constructor(el) {
    this.DOM = { el: el };
    this.items = [];
    [...this.DOM.el.querySelectorAll(".menu__item")].forEach((item) =>
      this.items.push(new MenuItem(item))
    );
  }
}

const menu = new Menu(document.querySelector("nav.menu"));
