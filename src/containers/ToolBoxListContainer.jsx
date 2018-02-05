import React from "react";
import ToolBoxList from "../components/ToolBoxList";
import ToolBoxPopOver from "../components/ToolBoxPopOver";
import FaUser from "react-icons/lib/fa/user";

class ToolBoxListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.itemListOnClickHandler = this.itemListOnClickHandler.bind(this);
    this.popOverOnClickHandler = this.popOverOnClickHandler.bind(this);
    this.windowResizeHandler = this.windowResizeHandler.bind(this);
    this.windowClickHandler = this.windowClickHandler.bind(this);
    this.windowKeyDownHandler = this.windowKeyDownHandler.bind(this);
    this.deactivatePopOver = this.deactivatePopOver.bind(this);

    this.state = {
      items: [
        {
          id: 1,
          label: "Java",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 2,
          label: "Java EE",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 3,
          label: "C#",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 4,
          label: "Ruby",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 5,
          label: "PHP",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 6,
          label: "JavaScript",
          description: `Often abbreviated as <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JS</a>, 
            it is a high-level, dynamic, weakly typed,
            prototype-based, multi-paradigm, and interpreted programming language.`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 7,
          label: "Typescript",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 8,
          label: "HTML5",
          description: `A markup language used for structuring and presenting content on the 
            World Wide Web. It is the fifth and current major version of the 
            <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">HTML</a> standard.`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 9,
          label: "CSS / CSS3",
          description: `Cascading Style Sheets - a style sheet 
            <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">language</a> 
            used for describing the presentation of a document written in HTML.`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 10,
          label: "SCSS/SASS",
          description: `A scripting <a href="http://sass-lang.com/" target="_blank">language</a> 
          that is interpreted or compiled into Cascading Style Sheets (CSS).`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },       
        {
          id: 11,
          label: "Git",
          description: `Git is a <a href="https://en.wikipedia.org/wiki/Git" target="_blank">version control</a> system for tracking changes 
            in computer files and coordinating work on those files among multiple people.`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 12,
          label: "Github",
          description: `A web-based Git version control repository hosting service.`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 13,
          label: "Gatsby",
          description: `A static PWA (Progressive Web App) 
            <a href="https://www.gatsbyjs.org/" target="_blank">generator</a>. Gatsby lets 
            you build blazing-fast sites with your data, whatever the source.`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 14,
          label: "Vue.js",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },       
        {
          id: 15,
          label: "Ruby On Rails",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 16,
          label: "ASP.NET",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 17,
          label: "ADO Entity Framework",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        
        {
          id: 18,
          label: "Django",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 19,
          label: "SQL",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 20,
          label: "ORACLE PL/SQL",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 21,
          label: "Transact-SQL",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 22,
          label: "MySQL",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 23,
          label: "Oracle SQL Developer",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 24,
          label: "Microsoft SQL Sever",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 25,
          label: "PostgreSQL",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 26,
          label: "Red Hat/ CentOS",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        {
          id: 27,
          label: "Windows Server",
          description: `I'm working on this description`,
          comment: `I promiste to write a comment about this later <b> :( </b>`
        },
        // {
        //   id: 17,
        //   label: "PHP",
        //   description: `A server-side scripting <a href="http://php.net/" target="_blank">language</a> designed primarily 
        //     for web development but also used as a general-purpose programming language.`,
        //   comment: `Currently, my only contact with PHP is when theming WP.`
        // }
      ],
      activatedItem: null,
      popOver: {
        isActive: false,
        topPx: "auto",
        bottomPX: "auto",
        leftPx: "auto",
        rightPx: "auto",
        description: "",
        comment: ""
      },
      popOverPosition: null
    };
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.windowResizeHandler, false);
      window.addEventListener("click", this.windowClickHandler, false);
      window.addEventListener("keydown", this.windowKeyDownHandler, false);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.windowResizeHandler, false);
      window.removeEventListener("click", this.windowClickHandler, false);
      window.removeEventListener("keydown", this.windowKeyDownHandler, false);
    }
  }

  componentWillReceiveProps(nextProps) {
    //
  }

  windowKeyDownHandler(e) {
    if (this.state.activatedItem && e.which == 27) {
      this.deactivatePopOver();
    }
  }

  windowResizeHandler() {
    if (this.state.activatedItem) {
      this.deactivatePopOver();
    }
  }

  windowClickHandler(e) {
    const isValidClickTarget =
      e.target.nodeName === "A" || e.target.nodeName === "BUTTON"
        ? true
        : false;
    if (!isValidClickTarget && this.state.activatedItem) {
      this.deactivatePopOver();
    }
  }

  itemListOnClickHandler(e, id) {
    const anchor = {
      offsetTop: e.target.offsetTop,
      offsetLeft: e.target.offsetLeft,
      offsetWidth: e.target.offsetWidth,
      offsetHeight: e.target.offsetHeight
    };
    /*
      check why the initial shape of the code does'n work in iPhone 4
      it semas as array.find() function is not transpiled corectlyu
      const popOver = this.state.items.find(el => el.id === id);
    */
    const popOver = this.state.items.filter(el => el.id === id)[0];
    this.positionPopOver(anchor, popOver);

    this.setState(() => ({
      activatedItem: id
    }));
  }

  positionPopOver(anchor, popOver) {
    const popWidth = 200;
    const popHeight = 100;
    const body = document.querySelector("body");

    const spaceUnder =
      body.offsetHeight - anchor.offsetTop - anchor.offsetHeight;
    const spaceOnRight =
      body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth;

    const verticalPositionUnder = spaceUnder >= anchor.offsetTop ? true : false;
    const horizontalPositionOnRight =
      spaceOnRight >= anchor.offsetLeft ? true : false;

    const verticalPosition = verticalPositionUnder
      ? anchor.offsetTop
      : anchor.offsetTop - popHeight + anchor.offsetHeight;
    const horizontalPosition = horizontalPositionOnRight
      ? anchor.offsetLeft
      : anchor.offsetLeft - popWidth + anchor.offsetWidth;

    const topPx = verticalPositionUnder
      ? `${anchor.offsetTop + anchor.offsetHeight}px`
      : `auto`;
    const bottomPx = verticalPositionUnder
      ? `auto`
      : `${body.offsetHeight - anchor.offsetTop}px`;
    const leftPx = horizontalPositionOnRight
      ? `${anchor.offsetLeft}px`
      : `auto`;
    const rightPx = horizontalPositionOnRight
      ? `auto`
      : `${body.offsetWidth - anchor.offsetLeft - anchor.offsetWidth}px`;
    const positionUnderModifierClass = "";

    this.setState(() => ({
      popOver: {
        isActive: true,
        topPx: topPx,
        bottomPx: bottomPx,
        leftPx: leftPx,
        rightPx: rightPx,
        modifierClasses: `${positionUnderModifierClass}`,
        description: popOver.description,
        comment: popOver.comment
      },
      popOverPosition: verticalPositionUnder ? "under" : "above"
    }));
  }

  popOverOnClickHandler() {
    this.deactivatePopOver();
  }

  deactivatePopOver() {
    this.setState(() => ({
      popOver: {
        isActive: false
      },
      activatedItem: null,
      popOverPosition: null
    }));
  }

  render() {
    return (
      <div>
        <ToolBoxList
          items={this.state.items}
          activatedItem={this.state.activatedItem}
          itemOnClick={this.itemListOnClickHandler}
          popOverPosition={this.state.popOverPosition}
        />
        {this.state.popOver.isActive && (
          <ToolBoxPopOver
            top={this.state.popOver.topPx}
            bottom={this.state.popOver.bottomPx}
            left={this.state.popOver.leftPx}
            right={this.state.popOver.rightPx}
            modifierClasses={this.state.popOver.modifierClasses}
            description={this.state.popOver.description}
            comment={this.state.popOver.comment}
            onClick={this.popOverOnClickHandler}
          />
        )}
      </div>
    );
  }
}

export default ToolBoxListContainer;
