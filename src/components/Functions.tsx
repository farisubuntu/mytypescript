import React from "react";

export default function Functions() {
  return (
    <>
      <h2>Functions</h2>
      <div className="ed15n151 gamut-xnwp68-StyledColumn e1y0e4q30">
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-parameter-type-annotations"
                className="styles_h3__VPpU9"
              >
                TypeScript Parameter Type Annotations
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                Function parameters may be given type annotations with the same
                syntax as variable declarations – a colon next to the name. The
                type annotations ensure that the parameters are of the correct
                type.
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
                    function
                  </span>
                  <span className="token plain"> </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    greet
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
                    noun
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
                  <span className="token plain">{"  "}console</span>
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
                    Hello,{" "}
                  </span>
                  <span
                    className="token template-string interpolation interpolation-punctuation punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ${"{"}
                  </span>
                  <span className="token template-string interpolation">
                    noun
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
                    !
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
                  <span className="token function" style={{ color: "#ff8973" }}>
                    greet
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'World'
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
                    // Prints: Hello, World{"  "}
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
                  <span className="token function" style={{ color: "#ff8973" }}>
                    greet
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    2020
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
                    // Argument of type 'number' is not assignable to parameter
                    of type 'string'.
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
                id="heading-typescript-optional-parameter"
                className="styles_h3__VPpU9"
              >
                TypeScript Optional Parameter
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                Sometimes we would like to skip providing values to function
                calls. We can declare some parameters in a function to be
                optional if a value is not provided for all arguments in a
                function. We do this by adding a question mark symbol,{" "}
                <code className="styles_code__L5_fh">?</code>, after the
                parameter name before the colon,{" "}
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
                    function
                  </span>
                  <span className="token plain"> </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    greet
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span
                    className="token parameter"
                    style={{ color: "#ff8973" }}
                  >
                    name
                  </span>
                  <span
                    className="token parameter operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ?
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
                  <span className="token plain">{"  "}console</span>
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
                    Hello,{" "}
                  </span>
                  <span
                    className="token template-string interpolation interpolation-punctuation punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ${"{"}
                  </span>
                  <span className="token template-string interpolation">
                    {" "}
                    name{" "}
                  </span>
                  <span
                    className="token template-string interpolation operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ||
                  </span>
                  <span className="token template-string interpolation"> </span>
                  <span
                    className="token template-string interpolation string"
                    style={{ color: "#ffe083" }}
                  >
                    'stranger'
                  </span>
                  <span className="token template-string interpolation"> </span>
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
                    !
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
                  <span className="token function" style={{ color: "#ff8973" }}>
                    greet
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
                    // Prints: Hello, stranger!
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
                id="heading-typescript-default-parameters"
                className="styles_h3__VPpU9"
              >
                TypeScript Default Parameters
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                If we assign a function parameter to have a default value,
                TypeScript will infer the parameter type to be the same as the
                default value’s type.
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
                    function
                  </span>
                  <span className="token plain"> </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    exponentiation
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span
                    className="token parameter"
                    style={{ color: "#ff8973" }}
                  >
                    power{" "}
                  </span>
                  <span
                    className="token parameter operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span
                    className="token parameter"
                    style={{ color: "#ff8973" }}
                  >
                    {" "}
                  </span>
                  <span
                    className="token parameter number"
                    style={{ color: "#ff8973" }}
                  >
                    1
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
                  <span className="token plain">{"  "}console</span>
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
                  <span className="token number" style={{ color: "#ff8973" }}>
                    4
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    **
                  </span>
                  <span className="token plain"> power</span>
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
                  <span className="token function" style={{ color: "#ff8973" }}>
                    exponentiation
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
                    // Prints: 4
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
                  <span className="token function" style={{ color: "#ff8973" }}>
                    exponentiation
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    4
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
                    // Prints: 256
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
                  <span className="token function" style={{ color: "#ff8973" }}>
                    exponentiation
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token boolean">true</span>
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
                    // Error: Argument of type 'true' is not assignable to
                    parameter of type 'number | undefined'.
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
                id="heading-typescript-inferring-return-types"
                className="styles_h3__VPpU9"
              >
                TypeScript Inferring Return Types
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                By looking at the types of the values in a function’s&nbsp;
                <code className="styles_code__L5_fh">return</code>
                &nbsp;statement, TypeScript can infer the{" "}
                <code className="styles_code__L5_fh">return</code> type of a
                function.
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
                    function
                  </span>
                  <span className="token plain"> </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    factOrFiction
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
                  <span className="token plain">{"  "}</span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    return
                  </span>
                  <span className="token plain"> Math</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    random
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
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &gt;=
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    .5
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ?
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'true'
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'false'
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
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    const
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    myAnswer
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> boolean </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    factOrFiction
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
                    // Type 'string' is not assignable to type 'boolean'
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
                id="heading-typescript-void-return-type"
                className="styles_h3__VPpU9"
              >
                TypeScript Void Return Type
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                If a function does not return any value, then you can specify{" "}
                <code className="styles_code__L5_fh">void</code> as a return
                type using type annotation.
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
                    function
                  </span>
                  <span className="token plain"> </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    sayHello
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
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    void
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
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Hello!'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    )
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
                  <span className="token plain"> </span>
                </div>
              </pre>
            </div>
          </div>
        </div>
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-explicit-return-types"
                className="styles_h3__VPpU9"
              >
                TypeScript Explicit Return Types
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                We can be explicit about what type a function returns by adding
                type annotation (<code className="styles_code__L5_fh">:</code>{" "}
                followed by the type) after a function’s closing parenthesis,{" "}
                <code className="styles_code__L5_fh">)</code>.
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
                    function
                  </span>
                  <span className="token plain"> </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    trueOrFalse
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
                    value
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
                    boolean
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
                  <span className="token plain"> boolean </span>
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
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    if
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token plain">value</span>
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
                    return
                  </span>
                  <span className="token plain"> </span>
                  <span className="token boolean">true</span>
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
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    return
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'false'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain"> </span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Typescript Error: Type 'string' is not assignable to type
                    'boolean'.
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
      </div>
    </>
  );
}
