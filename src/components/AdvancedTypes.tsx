import React from "react";

export default function AdvancedTypes() {
  return (
    <>
      <h2>AdvancedTypes</h2>
      <div className="ed15n151 gamut-xnwp68-StyledColumn e1y0e4q30">
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-interface-type"
                className="styles_h3__VPpU9"
              >
                TypeScript Interface Type
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                TypeScript allows you to specifically type an object using an
                interface that can be reused by multiple objects. To create an
                interface, use the{" "}
                <code className="styles_code__L5_fh">interface</code> keyword
                followed by the interface name and the typed object.
              </p>
            </div>
          </div>
          <div className="gamut-1a08trx-StyledColumn e1y0e4q30" />
          <div className="codeBlockColumn gamut-1hu5fhi-StyledColumn e1y0e4q30">
            <div className="gamut-1efsrtw-Box ebnwbv90">
              <pre
                data-testid="colorized-block"
                tabIndex={0}
                className="e1xf0hok0 gamut-1ous01k e1sl93ab0"
              >
                <div className="token-line">
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    interface
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Publication
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">isbn</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    author
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    publisher
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                </div>
              </pre>
            </div>
          </div>
        </div>
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-interface-define-objects-only"
                className="styles_h3__VPpU9"
              >
                TypeScript Interface Define Objects Only
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                In TypeScript, type aliases can define composite types such as
                objects and unions as well as primitive types such as numbers
                and strings; interface, however, can only define objects.
                Interface is useful in typing objects written for
                object-oriented programs.
              </p>
            </div>
          </div>
          <div className="gamut-1a08trx-StyledColumn e1y0e4q30" />
          <div className="codeBlockColumn gamut-1hu5fhi-StyledColumn e1y0e4q30">
            <div className="gamut-1efsrtw-Box ebnwbv90">
              <pre
                data-testid="colorized-block"
                tabIndex={0}
                className="e1xf0hok0 gamut-1ous01k e1sl93ab0"
              >
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Type alias can define a union type
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">type </span>
                  <span className="token constant" style={{ color: "#ff8973" }}>
                    ISBN
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> number </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    |
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Type alias can define an object type
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">type PublicationT </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">isbn</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token constant" style={{ color: "#ff8973" }}>
                    ISBN
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    author
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    publisher
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain">{"  "}</span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Interface can only define an object type
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    interface
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    PublicationI
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">isbn</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token constant" style={{ color: "#ff8973" }}>
                    ISBN
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    author
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    publisher
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                </div>
              </pre>
            </div>
          </div>
        </div>
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-interface-for-classes"
                className="styles_h3__VPpU9"
              >
                TypeScript Interface for Classes
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                To apply a TypeScript interface to a class, add the{" "}
                <code className="styles_code__L5_fh">implements</code> keyword
                after the class name followed by the interface name. TypeScript
                will check and ensure that the object actually implements all
                the properties and methods defined inside the interface.
              </p>
            </div>
          </div>
          <div className="gamut-1a08trx-StyledColumn e1y0e4q30" />
          <div className="codeBlockColumn gamut-1hu5fhi-StyledColumn e1y0e4q30">
            <div className="gamut-1efsrtw-Box ebnwbv90">
              <pre
                data-testid="colorized-block"
                tabIndex={0}
                className="e1xf0hok0 gamut-1ous01k e1sl93ab0"
              >
                <div className="token-line">
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    interface
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Shape
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">area</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> number</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span
                    className="token function-variable function"
                    style={{ color: "#ff8973" }}
                  >
                    computeArea
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    )
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =&gt;
                  </span>
                  <span className="token plain"> number</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    const
                  </span>
                  <span className="token plain"> </span>
                  <span className="token constant" style={{ color: "#ff8973" }}>
                    PI
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> number </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    22
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    /
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    7
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Circle class implements the Shape interface
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    class
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Circle
                  </span>
                  <span className="token plain"> </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    implements
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Shape
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    radius
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> number</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">area</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> number</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    constructor
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span
                    className="token parameter literal-property property"
                    style={{ color: "#ff8973" }}
                  >
                    radius
                  </span>
                  <span
                    className="token parameter operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span
                    className="token parameter"
                    style={{ color: "#ff8973" }}
                  >
                    {" "}
                    number
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    )
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"    "}</span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    this
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">radius </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> radius</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"    "}</span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    this
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">area </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    this
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    computeArea
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    )
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}computeArea </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    )
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token parameter"
                    style={{ color: "#ff8973" }}
                  >
                    number
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =&gt;
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"    "}</span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    return
                  </span>
                  <span className="token plain"> </span>
                  <span className="token constant" style={{ color: "#ff8973" }}>
                    PI
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    *
                  </span>
                  <span className="token plain"> </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    this
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">radius </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    *
                  </span>
                  <span className="token plain"> </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    this
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">radius</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> target </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    new
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Circle
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    3
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    )
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">console</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    log
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token plain">target</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">area</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    toFixed
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    2
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    )
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    )
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain">{"  "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Prints "28.29"
                  </span>
                </div>
              </pre>
            </div>
          </div>
        </div>
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-nested-interface"
                className="styles_h3__VPpU9"
              >
                TypeScript Nested Interface
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                TypeScript allows both type aliases and interface to be nested.
                An object typed with a nested interface should have all its
                properties structured the same way as the interface definition.
              </p>
            </div>
          </div>
          <div className="gamut-1a08trx-StyledColumn e1y0e4q30" />
          <div className="codeBlockColumn gamut-1hu5fhi-StyledColumn e1y0e4q30">
            <div className="gamut-1efsrtw-Box ebnwbv90">
              <pre
                data-testid="colorized-block"
                tabIndex={0}
                className="e1xf0hok0 gamut-1ous01k e1sl93ab0"
              >
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    // This is a nested interface
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    interface
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Course
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    description
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"    "}</span>
                  <span className="token literal-property property">name</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"    "}</span>
                  <span className="token literal-property property">
                    instructor
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"      "}</span>
                  <span className="token literal-property property">name</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"    "}</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"    "}</span>
                  <span className="token literal-property property">
                    prerequisites
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"      "}</span>
                  <span className="token literal-property property">
                    courses
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ]
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"    "}</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    class
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    myCourse
                  </span>
                  <span className="token plain"> </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    implements
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Course
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}description </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"    "}</span>
                  <span className="token literal-property property">name</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    ''
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"    "}</span>
                  <span className="token literal-property property">
                    instructor
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"      "}</span>
                  <span className="token literal-property property">name</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    ''
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"    "}</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"    "}</span>
                  <span className="token literal-property property">
                    prerequisites
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"      "}</span>
                  <span className="token literal-property property">
                    courses
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ]
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"    "}</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                </div>
              </pre>
            </div>
          </div>
        </div>
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-nesting-interfaces-inside-an-interface"
                className="styles_h3__VPpU9"
              >
                TypeScript Nesting Interfaces Inside an Interface
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                Since interfaces are composable, TypeScript allows you to nest
                interfaces within an interface.
              </p>
            </div>
          </div>
          <div className="gamut-1a08trx-StyledColumn e1y0e4q30" />
          <div className="codeBlockColumn gamut-1hu5fhi-StyledColumn e1y0e4q30">
            <div className="gamut-1efsrtw-Box ebnwbv90">
              <pre
                data-testid="colorized-block"
                tabIndex={0}
                className="e1xf0hok0 gamut-1ous01k e1sl93ab0"
              >
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Date is composed of primitive types
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    interface
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Date
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain"> </span>
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">month</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> number</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">day</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> number</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">year</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> number</span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Passport is composed of primitive types and nested with
                    another interface
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    interface
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Passport
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain"> </span>
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">id</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">name</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    citizenship
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    expiration
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> Date</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Ticket is composed of primitive types and nested with
                    another interface
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    interface
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Ticket
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">seat</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    expiration
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> Date</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token comment" style={{ color: "#939598" }}>
                    // TravelDocument is nested with two other interfaces
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    interface
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    TravelDocument
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    passport
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> Passport</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    ticket
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> Ticket</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                </div>
              </pre>
            </div>
          </div>
        </div>
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-interface-inheritance"
                className="styles_h3__VPpU9"
              >
                TypeScript Interface Inheritance
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                Like JavaScript classes, an interface can inherit properties and
                methods from another interface using the{" "}
                <code className="styles_code__L5_fh">extends</code> keyword.
                Members from the inherited interface are accessible in the new
                interface.
              </p>
            </div>
          </div>
          <div className="gamut-1a08trx-StyledColumn e1y0e4q30" />
          <div className="codeBlockColumn gamut-1hu5fhi-StyledColumn e1y0e4q30">
            <div className="gamut-1efsrtw-Box ebnwbv90">
              <pre
                data-testid="colorized-block"
                tabIndex={0}
                className="e1xf0hok0 gamut-1ous01k e1sl93ab0"
              >
                <div className="token-line">
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    interface
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Brand
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">brand</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Model inherits property from Brand
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    interface
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Model
                  </span>
                  <span className="token plain"> </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    extends
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Brand
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">model</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Car has a Model interface
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    class
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Car
                  </span>
                  <span className="token plain"> </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    implements
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Model
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}brand</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}model</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    constructor
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span
                    className="token parameter literal-property property"
                    style={{ color: "#ff8973" }}
                  >
                    brand
                  </span>
                  <span
                    className="token parameter operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span
                    className="token parameter"
                    style={{ color: "#ff8973" }}
                  >
                    {" "}
                    string
                  </span>
                  <span
                    className="token parameter punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span
                    className="token parameter"
                    style={{ color: "#ff8973" }}
                  >
                    {" "}
                  </span>
                  <span
                    className="token parameter literal-property property"
                    style={{ color: "#ff8973" }}
                  >
                    model
                  </span>
                  <span
                    className="token parameter operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span
                    className="token parameter"
                    style={{ color: "#ff8973" }}
                  >
                    {" "}
                    string
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    )
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"    "}</span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    this
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">brand </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> brand</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"    "}</span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    this
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">model </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> model</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    log
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    )
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"    "}console</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    log
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span
                    className="token template-string template-punctuation string"
                    style={{ color: "#ffe083" }}
                  >
                    `
                  </span>
                  <span
                    className="token template-string string"
                    style={{ color: "#ffe083" }}
                  >
                    Drive a{" "}
                  </span>
                  <span
                    className="token template-string interpolation interpolation-punctuation punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ${"{"}
                  </span>
                  <span
                    className="token template-string interpolation keyword"
                    style={{ color: "#b3ccff" }}
                  >
                    this
                  </span>
                  <span
                    className="token template-string interpolation punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token template-string interpolation">
                    brand
                  </span>
                  <span
                    className="token template-string interpolation interpolation-punctuation punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span
                    className="token template-string string"
                    style={{ color: "#ffe083" }}
                  >
                    {" "}
                  </span>
                  <span
                    className="token template-string interpolation interpolation-punctuation punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ${"{"}
                  </span>
                  <span
                    className="token template-string interpolation keyword"
                    style={{ color: "#b3ccff" }}
                  >
                    this
                  </span>
                  <span
                    className="token template-string interpolation punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token template-string interpolation">
                    model
                  </span>
                  <span
                    className="token template-string interpolation interpolation-punctuation punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span
                    className="token template-string string"
                    style={{ color: "#ffe083" }}
                  >
                    {" "}
                    today!
                  </span>
                  <span
                    className="token template-string template-punctuation string"
                    style={{ color: "#ffe083" }}
                  >
                    `
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    )
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    const
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">myCar</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> Car </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    new
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Car
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Nissan'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Sentra'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    )
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain"> </span>
                </div>
                <div className="token-line">
                  <span className="token plain">myCar</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    log
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    )
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain"> </span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Prints "Drive a Nissan Sentra today!"
                  </span>
                </div>
              </pre>
            </div>
          </div>
        </div>
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-interface-index-signature"
                className="styles_h3__VPpU9"
              >
                TypeScript Interface Index Signature
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                Property names of an object are assumed to be strings, but they
                can also be numbers. If you don’t know in advance the types of
                these property names, TypeScript allows you to use an index
                signature to specify the type for the property name inside an
                object. To specify an index signature, use square brackets,{" "}
                <code className="styles_code__L5_fh">[...]</code>, to surround
                the type notation for the property name.
              </p>
            </div>
          </div>
          <div className="gamut-1a08trx-StyledColumn e1y0e4q30" />
          <div className="codeBlockColumn gamut-1hu5fhi-StyledColumn e1y0e4q30">
            <div className="gamut-1efsrtw-Box ebnwbv90">
              <pre
                data-testid="colorized-block"
                tabIndex={0}
                className="e1xf0hok0 gamut-1ous01k e1sl93ab0"
              >
                <div className="token-line">
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    interface
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Code
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span className="token plain">code</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> number</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ]
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    const
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    codeToStates
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> Code </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    603
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'NH'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    617
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'MA'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    interface
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    ReverseCode
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span className="token plain">code</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ]
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> number</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    const
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    stateToCodes
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> ReverseCode </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token string-property property">'NH'</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    603
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string-property property">'MA'</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    617
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                </div>
              </pre>
            </div>
          </div>
        </div>
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-interface-optional-properties"
                className="styles_h3__VPpU9"
              >
                TypeScript Interface Optional Properties
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                TypeScript allows you to specify optional properties inside an
                interface. This is useful in situations where not all object
                properties have values assigned to them. To indicate if a
                property is optional, append a{" "}
                <code className="styles_code__L5_fh">?</code> symbol after the
                property name before the colon,{" "}
                <code className="styles_code__L5_fh">:</code>.
              </p>
            </div>
          </div>
          <div className="gamut-1a08trx-StyledColumn e1y0e4q30" />
          <div className="codeBlockColumn gamut-1hu5fhi-StyledColumn e1y0e4q30">
            <div className="gamut-1efsrtw-Box ebnwbv90">
              <pre
                data-testid="colorized-block"
                tabIndex={0}
                className="e1xf0hok0 gamut-1ous01k e1sl93ab0"
              >
                <div className="token-line">
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    interface
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token class-name"
                    style={{ color: "#ff8973" }}
                  >
                    Profile
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">name</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain"> </span>
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">age</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> number</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}hobbies</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ?
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ]
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token comment" style={{ color: "#939598" }}>
                    // The property, hobbies, is optional, but name and age are
                    required.
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    const
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    teacher
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> Profile </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token literal-property property">name</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Tom Sawyer'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">age</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    18
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain"> </span>
                </div>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
