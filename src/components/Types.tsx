
export default function Types() {
  return (
    <>
      <h2>Types</h2>
      <div className="ed15n151 gamut-xnwp68-StyledColumn e1y0e4q30">
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3 id="heading-typescript" className="styles_h3__VPpU9">
                TypeScript
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-io8bzh-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                The TypeScript programming language is a superset of JavaScript
                that adds types to JavaScript using a set of tools called a type
                system.{" "}
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
              <h3 id="heading-primitive-types" className="styles_h3__VPpU9">
                Primitive Types
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                All “primitive”, or built-in data types in JavaScript are
                recognized by TypeScript.
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
                  <span className="token string" style={{ color: "#ffe083" }}>
                    "Hello, world!"
                  </span>
                  <span className="token plain">{"  "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // string
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token number" style={{ color: "#ff8973" }}>
                    42
                  </span>
                  <span className="token plain">{"               "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // number
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token boolean">true</span>
                  <span className="token plain">{"             "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // boolean
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    null
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    undefined
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
                id="heading-typescript-type-inference"
                className="styles_h3__VPpU9"
              >
                TypeScript Type Inference
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                Type inference assumes the expected type of the variable
                throughout a program based on the data type of the value
                initially assigned to it at declaration. Type inference will log
                a complaint if the variable is later reassigned to a different
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
                    let
                  </span>
                  <span className="token plain"> first </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Anders'
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
                  <span className="token plain">first </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    1337
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain"> </span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Type 'number' is not assignable to type 'string'
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
                id="heading-the-shape-of-an-object"
                className="styles_h3__VPpU9"
              >
                The Shape of an Object
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                TypeScript knows the <em>shape</em> of an object—what member
                properties it does or doesn’t contain. TypeScript will log an
                error if the code attempts to access members of an object known
                not to exist. It may even suggest possible corrections.
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
                    let
                  </span>
                  <span className="token plain"> firstName </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'muriel!'
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
                  <span className="token plain">firstName</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    toUppercase
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
                    // error: Property 'toUppercase' does not exist on type
                    'string'. Did you mean 'toUpperCase'?
                  </span>
                </div>
              </pre>
            </div>
          </div>
        </div>
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3 id="heading-typescript-any" className="styles_h3__VPpU9">
                Typescript any
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                When a variable is declared without being assigned an initial
                value, TypeScript considers it to be of type{" "}
                <code className="styles_code__L5_fh">any</code>. A variable of
                this type can be reassigned without generating any error from
                TypeScript.
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
                    let
                  </span>
                  <span className="token plain"> first</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">first </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Anders'
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
                  <span className="token plain">first </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    1337
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
              </pre>
            </div>
          </div>
        </div>
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-supports-type-annotations"
                className="styles_h3__VPpU9"
              >
                TypeScript Supports Type Annotations
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                Adding a type annotation ensures that a variable can only ever
                be assigned to that type. This can be useful when declaring a
                variable without an initial value. Type annotations get removed
                when compiled to JavaScript. The type declaration is provided by
                appending a variable with a colon (
                <code className="styles_code__L5_fh">:</code>) and the type (eg.{" "}
                <code className="styles_code__L5_fh">number</code>).
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
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">first</span>
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
                  <span className="token plain">first </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Anders'
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
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Error: Type 'number' is not assignable to type 'string'
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">first </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    1337
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
      </div>
    </>
  );
}
