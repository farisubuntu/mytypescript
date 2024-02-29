
export default function UnionTypes() {
  return (
    <>
      <h2>UnionTypes</h2>
      <div className="ed15n151 gamut-xnwp68-StyledColumn e1y0e4q30">
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-enum-type"
                className="styles_h3__VPpU9"
              >
                TypeScript Enum Type
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                A programmer can define a set of possible values for a variable
                using TypeScript’s complex type called enum.
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
                    enum
                  </span>
                  <span className="token plain"> MaritalStatus </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}Single</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}Married</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}Separated</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}Divorced</span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
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
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    employee
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
                  <span className="token plain"> MaritalStatus</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> number</span>
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
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Bob Jones'
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
                  <span className="token plain">{"  "}MaritalStatus</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">Single</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    39
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
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
                </div>
              </pre>
            </div>
          </div>
        </div>
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-numeric-and-string-enum-types"
                className="styles_h3__VPpU9"
              >
                TypeScript Numeric and String Enum Types
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                TypeScript supports two types of enum: numeric enum and string
                enum. Members of a numeric enum have a corresponding numeric
                value assigned to them, while members of a string enum must have
                a corresponding string value assigned to them.
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
                    // This is a numeric enum type
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    enum
                  </span>
                  <span className="token plain"> ClassGrade </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}Freshman </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    9
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
                  <span className="token plain">{"  "}Sophomore</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}Junior</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}Senior</span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
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
                  <span className="token comment" style={{ color: "#939598" }}>
                    // This is a string enum type
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    enum
                  </span>
                  <span className="token plain"> ClassName </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}Freshman </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'FRESHMAN'
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
                  <span className="token plain">{"  "}Sophomore </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'SOPHOMORE'
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
                  <span className="token plain">{"  "}Junior </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'JUNIOR'
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
                  <span className="token plain">{"  "}Senior </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'SENIOR'
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
                    studentClass
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> ClassName </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> ClassName</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">Junior</span>
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
                  <span className="token literal-property property">
                    studentGrade
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> ClassGrade </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> ClassGrade</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">Junior</span>
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
                    I am a{" "}
                  </span>
                  <span
                    className="token template-string interpolation interpolation-punctuation punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ${"{"}
                  </span>
                  <span className="token template-string interpolation">
                    studentClass
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
                    in{" "}
                  </span>
                  <span
                    className="token template-string interpolation interpolation-punctuation punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ${"{"}
                  </span>
                  <span className="token template-string interpolation">
                    studentGrade
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
                    th grade.
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
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Prints "I am a JUNIOR in 11th grade."
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
                id="heading-typescript-numeric-enum-type-initializers"
                className="styles_h3__VPpU9"
              >
                TypeScript Numeric Enum Type Initializers
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                By default, TypeScript assigns a value of{" "}
                <code className="styles_code__L5_fh">0</code> to the first
                member of a numeric enum type and auto-increments the value of
                the rest of the members. However, you can override the default
                value for any member by assigning specific numeric values to
                some or all of the members.
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
                    // This numeric enum type begins with a 1, instead of the
                    default 0
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    enum
                  </span>
                  <span className="token plain"> Weekdays </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}Monday </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    1
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
                  <span className="token plain">{"  "}Tuesday</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}Wednesday</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}Thursday</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}Friday</span>
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
                    // This is a numeric enum type with all explicit values
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    enum
                  </span>
                  <span className="token plain"> Grades </span>
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
                  <span className="token constant" style={{ color: "#ff8973" }}>
                    A
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    90
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
                  <span className="token plain">{"  "}</span>
                  <span className="token constant" style={{ color: "#ff8973" }}>
                    B
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    80
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
                  <span className="token plain">{"  "}</span>
                  <span className="token constant" style={{ color: "#ff8973" }}>
                    C
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    70
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
                  <span className="token plain">{"  "}</span>
                  <span className="token constant" style={{ color: "#ff8973" }}>
                    D
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    60
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
                    // This numeric enum type has only some explicit values
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    enum
                  </span>
                  <span className="token plain"> Prizes </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}Pencil </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    5
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
                  <span className="token plain">{"  "}Ruler</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain">{"     "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // No error: value is 6
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}Eraser </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    10
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
                  <span className="token plain">
                    {"  "}Pen{"        "}
                  </span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // No error: value is 11
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
                    const
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">day</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> Weekdays </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> Weekdays</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">Wednesday</span>
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
                  <span className="token literal-property property">grade</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain">Grades </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> Grades</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token constant" style={{ color: "#ff8973" }}>
                    B
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
                  <span className="token literal-property property">prize</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain">Prizes </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> Prizes</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">Pen</span>
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
                    On day{" "}
                  </span>
                  <span
                    className="token template-string interpolation interpolation-punctuation punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ${"{"}
                  </span>
                  <span className="token template-string interpolation">
                    day
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
                    of the week, I got{" "}
                  </span>
                  <span
                    className="token template-string interpolation interpolation-punctuation punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ${"{"}
                  </span>
                  <span className="token template-string interpolation">
                    grade
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
                    on my test! I won a prize with{" "}
                  </span>
                  <span
                    className="token template-string interpolation interpolation-punctuation punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ${"{"}
                  </span>
                  <span className="token template-string interpolation">
                    prize
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
                    points!
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
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Prints "On day 3 of the week, I got 80 on my test! I won
                    a prize with 11 points!"
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
                id="heading-typescript-numeric-enum-variable-assignment"
                className="styles_h3__VPpU9"
              >
                TypeScript Numeric Enum Variable Assignment
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                You can assign a valid numeric value to a variable whose type is
                a numeric enum.
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
                    enum
                  </span>
                  <span className="token plain"> Weekend </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}Friday </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    5
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
                  <span className="token plain">{"  "}Saturday</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}Sunday</span>
                </div>
                <div className="token-line">
                  <span className="token plain" />
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
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Assign a valid value of Weekend
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    const
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">today</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> Weekend </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    7
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain">{"       "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // No error
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
                    Today is the{" "}
                  </span>
                  <span
                    className="token template-string interpolation interpolation-punctuation punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ${"{"}
                  </span>
                  <span className="token template-string interpolation">
                    today
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
                    th day of the week!
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
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Prints "Today is the 7th day of the week!"
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
                id="heading-typescript-string-enum-variable-assignment"
                className="styles_h3__VPpU9"
              >
                TypeScript String Enum Variable Assignment
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                Unlike a numeric enum type which allows a number to be assigned
                to its member, a string enum type does not allow a string to be
                assigned to its member. Doing so will cause a TypeScript error.
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
                    enum
                  </span>
                  <span className="token plain"> MaritalStatus </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    {"{"}
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}Single </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'SINGLE'
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
                  <span className="token plain">{"  "}Married </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'MARRIED'
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
                  <span className="token plain">{"  "}Separated </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'SEPARATED'
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
                  <span className="token plain">{"  "}Divorced </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'DIVORCED'
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
                  <span className="token plain">{"  "}Widowed </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'WIDOWED'
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
                    // Assign a string to a string enum type
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    eligibility
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> MaritalStatus</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">eligibility </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'SEPARATED'
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
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Error: Type '"SEPARATED"' is not assignable to type
                    'MaritalStatus'.
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
                  <span className="token plain">eligibility </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> MaritalStatus</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">Separated</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain">{"  "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // No error
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
                id="heading-typescript-object-type"
                className="styles_h3__VPpU9"
              >
                TypeScript Object Type
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                A JavaScript object literal consists of property-value pairs. To
                type-annotate an object literal, use the TypeScript object type
                and specify what properties must be provided and their
                accompanying value types.
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
                    // Define an object type for car
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">car</span>
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
                  <span className="token literal-property property">make</span>
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
                    ,
                  </span>
                  <span className="token plain"> </span>
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
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">year</span>
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
                  <span className="token plain">car </span>
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
                  <span className="token literal-property property">make</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Toyota'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">model</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Camry'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">year</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    2020
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
                  <span className="token comment" style={{ color: "#939598" }}>
                    // No error
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">car </span>
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
                  <span className="token literal-property property">make</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
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
                  <span className="token literal-property property">mode</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Sentra'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">year</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    2019
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
                  <span className="token plain" />
                  <span className="token comment" style={{ color: "#939598" }}>
                    /*
                  </span>
                </div>
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    Error: Type '{"{"}make: string; mode: string; year: number;
                    {"}"}' is not assignable to
                  </span>
                </div>
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    type '{"{"}make: string; model: string; year: number;{"}"}'.
                  </span>
                </div>
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    Object literal may only specify known properties, but 'mode'
                    does not exist in
                  </span>
                </div>
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    type '{"{"}make: string; model: string; year: number;{"}"}'.
                  </span>
                </div>
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    Did you mean to write 'model'?
                  </span>
                </div>
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    */
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">car </span>
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
                  <span className="token literal-property property">make</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Chevrolet'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">model</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Monte Carlo'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">year</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '1995'
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
                  <span className="token plain" />
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Error: Type 'string' is not assignable to type 'number'.
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
                id="heading-typescript-type-alias"
                className="styles_h3__VPpU9"
              >
                TypeScript Type Alias
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                Instead of redeclaring the same complex object type everywhere
                it is used, TypeScript provides a simple way to reuse this
                object type. By creating an alias with the{" "}
                <code className="styles_code__L5_fh">type</code> keyword, you
                can assign a data type to it. To create a type alias, follow
                this syntax:
                <br />
                <code className="styles_code__L5_fh">
                  type MyString = string;
                </code>
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
                    // This is a type alias
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">type Student </span>
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
                    ,
                  </span>
                  <span className="token plain" />
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
                    ,
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
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
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">boris</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> Student </span>
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
                    'Boris'
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
                    35
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
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
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'JavaScript'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'TypeScript'
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
                id="heading-typescript-multiple-alias-references"
                className="styles_h3__VPpU9"
              >
                TypeScript Multiple Alias References
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                You can create multiple type aliases that define the same data
                type, and use the aliases as assignments to variables.
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
                    // This is also a type alias with the same type as Student
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">type Employee </span>
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
                    ,
                  </span>
                  <span className="token plain" />
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
                    ,
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
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
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    studentBoris
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> Student </span>
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
                    'Boris'
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
                    35
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
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
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'JavaScript'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'TypeScript'
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
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    employeeBoris
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> Employee </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> studentBoris</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain">{"     "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // No error
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
                  <span className="token plain">studentBoris </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ===
                  </span>
                  <span className="token plain"> employeeBoris</span>
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
                    // Prints true
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
                id="heading-typescript-function-type-alias"
                className="styles_h3__VPpU9"
              >
                TypeScript Function Type Alias
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                In JavaScript, a function can be assigned to a variable. In
                TypeScript, a function type alias can be used to annotate a
                variable. Declare a function type alias following this syntax:
              </p>
              <p className="styles_p__TNq46">
                <code className="styles_code__L5_fh">
                  type NumberArrayToNumber = (numberArray: number[]) =&gt;
                  number
                </code>
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
                    // This is a function type alias
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">type </span>
                  <span
                    className="token function-variable function"
                    style={{ color: "#ff8973" }}
                  >
                    NumberArrayToNumber
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
                    numberArray
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
                    className="token parameter punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span
                    className="token parameter punctuation"
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
                    // This function uses a function type alias
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    sumAll
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token function-variable function"
                    style={{ color: "#ff8973" }}
                  >
                    NumberArrayToNumber
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    function
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
                    numbers
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
                    className="token parameter punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span
                    className="token parameter punctuation"
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
                    let
                  </span>
                  <span className="token plain"> sum </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    0
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
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    for
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> i</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    0
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain"> i </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &lt;
                  </span>
                  <span className="token plain"> numbers</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">length</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain"> i</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ++
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
                  <span className="token plain">{"    "}sum </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    +=
                  </span>
                  <span className="token plain"> numbers</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span className="token plain">i</span>
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
                  <span className="token plain"> sum</span>
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
                    // This function also uses the same function type alias
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    computeAverage
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token function-variable function"
                    style={{ color: "#ff8973" }}
                  >
                    NumberArrayToNumber
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    function
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
                    numbers
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
                    className="token parameter punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span
                    className="token parameter punctuation"
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
                  <span className="token plain"> </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    sumAll
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token plain">numbers</span>
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
                    /
                  </span>
                  <span className="token plain">numbers</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">length</span>
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
                  <span className="token function" style={{ color: "#ff8973" }}>
                    computeAverage
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
                    [
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    5
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    10
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    15
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
                    )
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain">{"   "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Prints 10
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
                id="heading-typescript-generic-type-alias"
                className="styles_h3__VPpU9"
              >
                TypeScript Generic Type Alias
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                In addition to the generic Array type,{" "}
                <code className="styles_code__L5_fh">Array&lt;T&gt;</code>,
                custom user-defined generic types are also supported by
                TypeScript. To define a generic type alias, use the{" "}
                <code className="styles_code__L5_fh">type</code> keyword
                followed by the alias name and angle brackets{" "}
                <code className="styles_code__L5_fh">&lt;...&gt;</code>{" "}
                containing a symbol for the generic type and assign it a custom
                definition. The symbol can be any alphanumeric character or
                string.
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
                    // This is a generic type alias
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">type Collection</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &lt;
                  </span>
                  <span className="token constant" style={{ color: "#ff8973" }}>
                    G
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &gt;
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
                    ,
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    quantity
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
                    ,
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    content
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token constant" style={{ color: "#ff8973" }}>
                    G
                  </span>
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
                  <span className="token plain" />
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
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    bookCollection
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> Collection</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &lt;
                  </span>
                  <span className="token plain">string</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &gt;
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
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Nursery Books'
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
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    quantity
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    3
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
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    content
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
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Goodnight Moon'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Humpty Dumpty'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Green Eggs &amp; Ham'
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
                  <span className="token plain" />
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
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    primeNumberCollection
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> Collection</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &lt;
                  </span>
                  <span className="token plain">number</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &gt;
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
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'First 5 Prime Numbers'
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
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    quantity
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    5
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
                  <span className="token plain">{"  "}</span>
                  <span className="token literal-property property">
                    content
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
                  <span className="token number" style={{ color: "#ff8973" }}>
                    2
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    3
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    5
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    7
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    11
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
                  <span className="token plain" />
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
                id="heading-typescript-generic-function-type-alias"
                className="styles_h3__VPpU9"
              >
                TypeScript Generic Function Type Alias
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                With the TypeScript <em>generic function</em> type alias, a
                function can take parameters of generic types and return a
                generic type. To turn a function into a generic function type
                alias, add angle brackets,{" "}
                <code className="styles_code__L5_fh">&lt;...&gt;</code>{" "}
                containing a generic type symbol after the function name, and
                use the symbol to annotate the parameter type and return type
                where applicable.
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
                    // This is a generic function type alias
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    function
                  </span>
                  <span className="token plain"> findMiddleMember</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &lt;
                  </span>
                  <span className="token constant" style={{ color: "#ff8973" }}>
                    M
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &gt;
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token plain">members</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token constant" style={{ color: "#ff8973" }}>
                    M
                  </span>
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
                    )
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> </span>
                  <span className="token constant" style={{ color: "#ff8973" }}>
                    M
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
                  <span className="token plain"> members</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span className="token plain">Math</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    floor
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token plain">members</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">length</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    /
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
                    // Call function for an array of strings
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
                  <span className="token plain">findMiddleMember</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &lt;
                  </span>
                  <span className="token plain">string</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &gt;
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
                    [
                  </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'I'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'am'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'very'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'happy'
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
                    // Prints "very"
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
                    // Call function for an array of numbers
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
                  <span className="token plain">findMiddleMember</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &lt;
                  </span>
                  <span className="token plain">number</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &gt;
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
                    [
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    210
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    369
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    102
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
                    )
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain">{"     "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Prints 369
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
                id="heading-typescript-type-for-one-dimensional-array"
                className="styles_h3__VPpU9"
              >
                TypeScript Type for One-dimensional Array
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                The type annotation for a one-dimensional array in TypeScript is
                similar to a primitive data type, except we add a{" "}
                <code className="styles_code__L5_fh">[]</code> after the type.
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
                    // zipcodes is an array of strings
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    zipcodes
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
                    '03255'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '02134'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '08002'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '03063'
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
                    // Pushing a number to zipcodes will generate an error
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Error: Argument of type 'number' is not assignable to
                    parameter of type 'string'.
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">zipcodes</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    push
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    90210
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
                </div>
              </pre>
            </div>
          </div>
        </div>
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-generic-type-for-one-dimensional-array"
                className="styles_h3__VPpU9"
              >
                TypeScript Generic Type for One-Dimensional Array
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                The type for a one-dimensional array in TypeScript can be
                annotated with{" "}
                <code className="styles_code__L5_fh">Array&lt;T&gt;</code>,
                where <code className="styles_code__L5_fh">T</code> stands for
                the type.
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
                    // zipcodes is an array of strings
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    zipcodes
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> Array</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &lt;
                  </span>
                  <span className="token plain">string</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &gt;
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
                    '03255'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '02134'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '08002'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '03063'
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
                    // Pushing a number to zipcodes will generate an error
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Error: Argument of type 'number' is not assignable to
                    parameter of type 'string'.
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">zipcodes</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    push
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    90210
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
                </div>
              </pre>
            </div>
          </div>
        </div>
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-type-for-multi-dimensional-array"
                className="styles_h3__VPpU9"
              >
                TypeScript Type for Multi-dimensional Array
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                The type for a multi-dimensional array can be annotated by
                adding an extra <code className="styles_code__L5_fh">[]</code>{" "}
                for each extra dimension of the array.
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
                    // one-dimensional arrays
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    zipcodesNH
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
                    '03255'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '03050'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '03087'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '03063'
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
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    zipcodesMA
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
                    '02334'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '01801'
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
                    // two-dimensional array
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    zipcodes
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
                    [
                  </span>
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
                  <span className="token plain">zipcodesNH</span>
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
                    // Pushing a one-dimensional array to a two-dimensional
                    array
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">zipcodes</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    push
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token plain">zipcodesMA</span>
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
                  <span className="token plain">zipcodes</span>
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
                    // prints [["03255", "03050", "03087", "03063"], ["02334",
                    "01801"]]
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
                id="heading-typescript-empty-array-initialization"
                className="styles_h3__VPpU9"
              >
                TypeScript Empty Array Initialization
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                An array of any dimension can be initialized as an empty array
                without generating any error.
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
                    // one-dimensional empty array
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">axis</span>
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
                    // two-dimensional empty array
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    coordinates
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
                    [
                  </span>
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
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain">axis</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    push
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'x'
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
                  <span className="token plain">axis</span>
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
                  <span className="token plain">{"        "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // prints ["x"]
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
                  <span className="token plain">coordinates</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    push
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
                    [
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    3
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    5
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
                  <span className="token plain">coordinates</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    push
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
                    [
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    7
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
                  <span className="token plain">coordinates</span>
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
                    // prints [[3, 5], [7]]
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
                id="heading-typescript-tuple-type"
                className="styles_h3__VPpU9"
              >
                TypeScript Tuple Type
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                An array that has a fixed size of similar or different element
                types arranged in a particular sequence is defined as a tuple in
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
                  <span className="token comment" style={{ color: "#939598" }}>
                    // This is an array
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    header
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
                    'Name'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Age'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Smoking'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'Salary'
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
                  <span className="token comment" style={{ color: "#939598" }}>
                    // This is a tuple
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    profile
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
                  <span className="token plain"> number</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> boolean</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> number</span>
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
                    'Kobe'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    39
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token boolean">true</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    150000
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
                </div>
              </pre>
            </div>
          </div>
        </div>
        <div className="gamut-imw2wj-LayoutGrid eapwrau0">
          <div className="reviewCardTitleColumn gamut-cdomtw-StyledColumn e1y0e4q30">
            <div className="styles_spacing-tight__REuA6 gamut-gy5le em4gu660">
              <h3
                id="heading-typescript-tuple-type-syntax"
                className="styles_h3__VPpU9"
              >
                TypeScript Tuple Type Syntax
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                To annotate a tuple in TypeScript, add a colon (
                <code className="styles_code__L5_fh">:</code>) followed by
                square brackets (
                <code className="styles_code__L5_fh">[...]</code>) containing a
                list of comma-separated types.
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
                    // This is a tuple
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    profile
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
                  <span className="token plain"> number</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> boolean</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> number</span>
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
                    'Kobe'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    39
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token boolean">true</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    150000
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
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain">profile</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    2
                  </span>
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
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'false'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain">{"   "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Error: Type 'string' is not assignable to type 'boolean'.
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">profile</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    3
                  </span>
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
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    null
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain">{"      "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Error: Type 'null' is not assignable to type 'number'.
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
                id="heading-typescript-tuple-type-length-and-order"
                className="styles_h3__VPpU9"
              >
                TypeScript Tuple Type Length and Order
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                A tuple in Typescript is declared with a fixed number of
                elements and hence, cannot be assigned to a tuple with a
                different number of elements. Similarly, a tuple maintains a
                strict ordering of its elements and therefore, the type for each
                element is enforced. A transcompiler error will be generated if
                any of these conditions is violated.
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
                  <span className="token literal-property property">
                    employee
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
                  <span className="token plain"> number</span>
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
                    'Manager'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    null
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
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Error: Type 'null' is not assignable to type 'number'.
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
                  <span className="token plain"> </span>
                  <span className="token literal-property property">grade</span>
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
                  <span className="token plain"> number</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> boolean</span>
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
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'TypeScript'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    85
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token boolean">true</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'beginner'
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
                  <span className="token comment" style={{ color: "#939598" }}>
                    /*
                  </span>
                </div>
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    Error: Type '[string, number, true, string]'
                  </span>
                </div>
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    is not assignable to type '[string, number, boolean]'.
                  </span>
                </div>
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    Source has 4 element(s) but target allows only 3.
                  </span>
                </div>
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    */
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
                id="heading-typescript-tuple-array-assignment"
                className="styles_h3__VPpU9"
              >
                TypeScript Tuple Array Assignment
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                Although a tuple may have all elements of the same type and
                resembles an array, a tuple is still its own type. A tuple
                cannot expand, while an array can. Hence, assigning an array to
                a tuple that matches the same type and length will generate an
                error.
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
                    // This is a tuple
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    eventDate
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
                    'January'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '2'
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
                    // This is an array
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    newDate
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
                    'January'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '12'
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
                  <span
                    className="token plain"
                    style={{ display: "inline-block" }}
                  >
                    {"\n"}
                  </span>
                </div>
                <div className="token-line">
                  <span className="token plain">eventDate </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> newDate</span>
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
                  <span className="token comment" style={{ color: "#939598" }}>
                    /*
                  </span>
                </div>
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    Error: Type 'string[]' is not assignable to type '[string,
                    string]'.
                  </span>
                </div>
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    Target requires 2 element(s) but source may have fewer.
                  </span>
                </div>
                <div className="token-line">
                  <span className="token comment" style={{ color: "#939598" }}>
                    */
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
                id="heading-typescript-array-type-inference"
                className="styles_h3__VPpU9"
              >
                TypeScript Array Type Inference
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                When an array variable is declared without an explicit type
                annotation, TypeScript automatically infers such a variable
                instance to be an array instead of a tuple.
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
                  <span className="token plain"> mixed </span>
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
                    'one'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    2
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    3
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'four'
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
                  <span className="token plain">{"     "}</span>
                </div>
                <div className="token-line">
                  <span className="token plain">mixed</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    4
                  </span>
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
                  <span className="token number" style={{ color: "#ff8973" }}>
                    5
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain">{"                 "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // no error because an array is expandable
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
                  <span className="token plain">mixed</span>
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
                  <span className="token plain">{"           "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // prints ["one", 2, 3, "four", 5]
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
                id="heading-typescript-array-type-inference-on-tuple-concat"
                className="styles_h3__VPpU9"
              >
                TypeScript Array Type Inference on Tuple{" "}
                <code className="styles_code__L5_fh">.concat()</code>
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                The JavaScript method,{" "}
                <code className="styles_code__L5_fh">.concat()</code> can be
                called on a TypeScript tuple, and this produces a new array type
                instead of a tuple.
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
                    // This is a tuple
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
                    threeWords
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
                  <span className="token plain"> string</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> number</span>
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
                    'Won'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    5
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'games'
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
                    // Calling .concat() on a tuple returns an array
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> moreWords </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> threeWords</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token function" style={{ color: "#ff8973" }}>
                    concat
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
                    [
                  </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'last'
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    'night'
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
                    // An array is expandable
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">moreWords</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    5
                  </span>
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
                    (
                  </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '!'
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
                  <span className="token plain">moreWords</span>
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
                  <span className="token comment" style={{ color: "#939598" }}>
                    // This prints ["Won", 5, "games", "last", "night", "!"]
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
                id="heading-typescript-function-rest-parameter-any-array-type"
                className="styles_h3__VPpU9"
              >
                TypeScript Function Rest Parameter Any Array Type
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                A rest parameter inside a function is implicitly assigned an
                array type of <code className="styles_code__L5_fh">any[]</code>{" "}
                by TypeScript.
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
                  <span className="token plain"> sumAllNumbers </span>
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
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ...
                  </span>
                  <span className="token plain">numberList</span>
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
                  <span className="token plain">{"  "}</span>
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Error: Rest parameter 'numberList' implicitly has an
                    'any[]' type.
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain">{"  "}</span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> sum </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    0
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
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    for
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> i</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    0
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain"> i </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &lt;
                  </span>
                  <span className="token plain"> numberList</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">length</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain"> i</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ++
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
                  <span className="token plain">{"    "}sum </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    +=
                  </span>
                  <span className="token plain"> numberList</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span className="token plain">i</span>
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
                  <span className="token plain"> sum</span>
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
                    // Notice third argument is a string
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
                    sumAllNumbers
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    100
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    70
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '30'
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
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Prints a string "17030 instead of a number 200
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
                id="heading-typescript-function-rest-parameter-explicit-type"
                className="styles_h3__VPpU9"
              >
                TypeScript Function Rest Parameter Explicit Type
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                Explicitly type annotating a rest parameter of a function will
                alert TypeScript to check for type inconsistency between the
                rest parameter and the function call arguments.
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
                  <span className="token plain"> sumAllNumbers </span>
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
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ...
                  </span>
                  <span className="token plain">numberList</span>
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
                  <span className="token plain">{"  "}</span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> sum </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    0
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
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    for
                  </span>
                  <span className="token plain"> </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token keyword" style={{ color: "#b3ccff" }}>
                    let
                  </span>
                  <span className="token plain"> i</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    =
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    0
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain"> i </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    &lt;
                  </span>
                  <span className="token plain"> numberList</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    .
                  </span>
                  <span className="token plain">length</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ;
                  </span>
                  <span className="token plain"> i</span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ++
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
                  <span className="token plain">{"    "}sum </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    +=
                  </span>
                  <span className="token plain"> numberList</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    [
                  </span>
                  <span className="token plain">i</span>
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
                  <span className="token plain"> sum</span>
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
                    sumAllNumbers
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    100
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    70
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token string" style={{ color: "#ffe083" }}>
                    '30'
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
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Error: Argument of type 'string' is not assignable to
                    parameter of type 'number'.
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
                id="heading-typescript-tuple-type-spread-syntax"
                className="styles_h3__VPpU9"
              >
                TypeScript Tuple Type Spread Syntax
              </h3>
            </div>
          </div>
          <div className="reviewCardTextColumn gamut-1gampgi-StyledColumn e1y0e4q30">
            <div className="ef7pjk00 gamut-11xy6op ev5q66l0">
              <p className="styles_p__TNq46">
                Spread syntax can be used with a tuple as an argument to a
                function call whose parameter types match those of the tuple
                elements.
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
                    modulo
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
                    dividend
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
                    divisor
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
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    :
                  </span>
                  <span className="token plain"> number </span>
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
                  <span className="token plain"> dividend </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    %
                  </span>
                  <span className="token plain"> divisor</span>
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
                    numbers
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
                  <span className="token plain">number</span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> number</span>
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
                  <span className="token number" style={{ color: "#ff8973" }}>
                    6
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ,
                  </span>
                  <span className="token plain"> </span>
                  <span className="token number" style={{ color: "#ff8973" }}>
                    4
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
                    // Call modulo() with a tuple
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
                    modulo
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span className="token plain">numbers</span>
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
                  <span className="token plain" />
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Error: Expected 2 arguments, but got 1.
                  </span>
                  <span className="token plain" />
                </div>
                <div className="token-line">
                  <span className="token plain" />
                  <span className="token comment" style={{ color: "#939598" }}>
                    // Prints NaN
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
                    // Call modulo() with spread syntax
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
                    modulo
                  </span>
                  <span
                    className="token punctuation"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    (
                  </span>
                  <span
                    className="token operator"
                    style={{ color: "rgb(212, 212, 212)" }}
                  >
                    ...
                  </span>
                  <span className="token plain">numbers</span>
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
                  <span className="token plain" />
                  <span className="token comment" style={{ color: "#939598" }}>
                    // No error, prints 2
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
