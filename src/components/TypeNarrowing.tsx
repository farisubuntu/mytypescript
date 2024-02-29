import React from "react";

export default function TypeNarrowing() {
  return (
    <>
      <h2>TypeNarrowing</h2>
      <div className="ed15n151 gamut-xnwp68-StyledColumn e1y0e4q30">
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-union-type-narrowing"
                className="styles_h3__VPpU9"
              >
                TypeScript Union Type Narrowing
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                Since a variable of a union type can assume one of several
                different types, you can help TypeScript infer the correct
                variable type using type narrowing. To narrow a variable to a
                specific type, implement a type guard. Use the{" "}
                <code className="styles_code__L5_fh">typeof</code> operator with
                the variable name and compare it with the type you expect for
                the variable.
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
                    const
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    choices
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
                  <span className="token plain">string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ]
                  </span>
                  <span className="token plain"> </span>
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
                    [
                  </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'NO'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'YES'
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
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    const
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token function-variable function"
                    style={{ color: "#ff8973" }}
                  >
                    processAnswer
                  </span>
                  <span className="token plain"> </span>
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
                    className="token parameter literal-property property"
                    style={{ color: "#ff8973" }}
                  >
                    answer
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
                    number{" "}
                  </span>
                  <span
                    className="token parameter operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    |
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
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    typeof
                  </span>
                  <span className="token plain"> answer </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ===
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'number'
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
                  <span className="token plain">choices</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span className="token plain">answer</span>
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
                  <span className="token plain"> </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    else
                  </span>
                  <span className="token plain"> </span>
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
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    typeof
                  </span>
                  <span className="token plain"> answer </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ===
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'boolean'
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
                    if
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token plain">answer</span>
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
                  <span className="token plain">{"      "}console</span>
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
                  <span className="token plain">choices</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    1
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
                  <span className="token plain">{"    "}</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"}"}
                  </span>
                  <span className="token plain"> </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    else
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
                  <span className="token plain">{"      "}console</span>
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
                  <span className="token plain">choices</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    0
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
                  <span className="token plain" />
                  <span className="token function" style={{ color: "#ff8973" }}>
                    processAnswer
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
                  <span className="token plain">{"    "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Prints "YES"
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token function" style={{ color: "#ff8973" }}>
                    processAnswer
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    0
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
                  <span className="token plain">{"       "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Prints "NO"
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
                id="heading-typescript-type-guard"
                className="styles_h3__VPpU9"
              >
                TypeScript Type Guard
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                A TypeScript type guard is a conditional statement that
                evaluates the type of a variable. It can be implemented with the{" "}
                <code className="styles_code__L5_fh">typeof</code> operator
                followed by the variable name and compare it with the type you
                expect for the variable.
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
                    // A type guard implemented with the typeof operator
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
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
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    typeof
                  </span>
                  <span className="token plain"> age </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ===
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'number'
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
                  <span className="token plain">{"  "}age</span>
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
                </div>
              </pre>
            </div>
          </div>
        </div>
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-type-guard-accepted-types-with-typeof"
                className="styles_h3__VPpU9"
              >
                TypeScript Type Guard Accepted Types with{" "}
                <code className="styles_code__L5_fh">typeof</code>
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-io8bzh-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                The <code className="styles_code__L5_fh">typeof</code> operator
                may be used to implement a TypeScript type guard to evaluate the
                type of a variable including{" "}
                <code className="styles_code__L5_fh">number</code>,{" "}
                <code className="styles_code__L5_fh">string</code> and{" "}
                <code className="styles_code__L5_fh">boolean</code>.
              </p>
            </div>
          </div>
          <div className="gamut-1a08trx-StyledColumn e1y0e4q30" />
          <div className="codeBlockColumn gamut-1gkks2k-StyledColumn e1y0e4q30">
            <div className="gamut-1efsrtw-Box ebnwbv90" />
          </div>
        </div>
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-type-guard-with-in-operator"
                className="styles_h3__VPpU9"
              >
                TypeScript Type Guard with{" "}
                <code className="styles_code__L5_fh">in</code> operator
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                If a variable is a union type, TypeScript offers another form of
                type guard using the{" "}
                <code className="styles_code__L5_fh">in</code> operator to check
                if the variable has a particular property.
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
                    /*
                  </span>
                </div>
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    In this example, 'swim' in pet uses the 'in' operator to
                    check if the property .swim is present on pet. TypeScript
                    recognizes this as a type guard and can successfully type
                    narrow this function parameter.
                  </span>
                </div>
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    */
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    function
                  </span>
                  <span className="token plain"> </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    move
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
                    pet
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
                    Fish{" "}
                  </span>
                  <span
                    className="token parameter operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    |
                  </span>
                  <span
                    className="token parameter"
                    style={{ color: "#ff8973" }}
                  >
                    {" "}
                    Bird
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
                    if
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'swim'
                  </span>
                  <span className="token plain"> </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    in
                  </span>
                  <span className="token plain"> pet</span>
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
                  <span className="token plain"> pet</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    swim
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
                  <span className="token plain">{"  "}</span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    return
                  </span>
                  <span className="token plain"> pet</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    fly
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
                id="heading-typescript-type-guard-if-else-statement"
                className="styles_h3__VPpU9"
              >
                TypeScript Type Guard{" "}
                <code className="styles_code__L5_fh">if-else</code> Statement
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                If a variable is of a union type, TypeScript can narrow the type
                of a variable using a type guard. A type guard can be
                implemented as a conditional expression in an{" "}
                <code className="styles_code__L5_fh">if</code> statement. If an{" "}
                <code className="styles_code__L5_fh">else</code> statement
                accompanies the <code className="styles_code__L5_fh">if</code>{" "}
                statement, TypeScript will infer that the{" "}
                <code className="styles_code__L5_fh">else</code> block serves as
                the type guard for the remaining member type(s) of the union.
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
                    roughAge
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
                    age
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
                    number{" "}
                  </span>
                  <span
                    className="token parameter operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    |
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
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    typeof
                  </span>
                  <span className="token plain"> age </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ===
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'number'
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
                  <span className="token comment" style={{ color: "#939598" }}>
                    // In this block, age is known to be a number
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
                  <span className="token plain">Math</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    round
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token plain">age</span>
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
                  <span className="token plain"> </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    else
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
                  <span className="token comment" style={{ color: "#939598" }}>
                    // In this block, age is known to be a string
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
                  <span className="token plain">age</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    split
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    "."
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
                    [
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    0
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
                  <span className="token plain" />
                  <span className="token function" style={{ color: "#ff8973" }}>
                    roughAge
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '3.5'
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
                    // Prints "3"
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token function" style={{ color: "#ff8973" }}>
                    roughAge
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    3.5
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
                  <span className="token plain">{"    "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Prints 4
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
                id="heading-typescript-type-guard-if-statement-function-return"
                className="styles_h3__VPpU9"
              >
                TypeScript Type Guard{" "}
                <code className="styles_code__L5_fh">if</code> Statement
                Function Return
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                If a variable is of a union type, TypeScript can narrow the type
                of a variable using a type guard. A type guard can be
                implemented as a conditional expression in an{" "}
                <code className="styles_code__L5_fh">if</code> statement. If the{" "}
                <code className="styles_code__L5_fh">if</code> block contains a{" "}
                <code className="styles_code__L5_fh">return</code> statement and
                is not followed by an{" "}
                <code className="styles_code__L5_fh">else</code> block,
                TypeScript will infer the rest of the code block outside the{" "}
                <code className="styles_code__L5_fh">if</code> statement block
                as a type guard for the remaining member type(s) of the union.
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
                    formatAge
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
                    age
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
                    number{" "}
                  </span>
                  <span
                    className="token parameter operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    |
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
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    typeof
                  </span>
                  <span className="token plain"> age </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ===
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'number'
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
                    return
                  </span>
                  <span className="token plain"> age</span>
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
                    // age must be a number
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
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    return
                  </span>
                  <span className="token plain"> age</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain"> </span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // age must not be a number
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
                  <span className="token function" style={{ color: "#ff8973" }}>
                    formatAge
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    3.5
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
                  <span className="token plain">{"    "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Prints "4"
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
                  <span className="token function" style={{ color: "#ff8973" }}>
                    formatAge
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '3.5'
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
                    // Prints "3.5"
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
