import js from "@eslint/js";
import globals from "globals";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y"; // 접근성 플러그인 추가

export default [
  {
    ignores: ["dist"], // 검사 제외 폴더
  },
  {
    files: ["**/*.{ts,tsx}"], // TypeScript 파일 검사
    languageOptions: {
      ecmaVersion: 2020, // ECMAScript 2020 적용
      globals: globals.browser, // 브라우저 환경에서 사용되는 전역 변수 허용
      parser: tsParser, // TypeScript 파서 적용
    },
    plugins: {
      "@typescript-eslint": tsPlugin, // @typescript-eslint 플러그인 추가
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y, // 접근성 관련 플러그인 추가
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // 태그 관련 규칙 (경고 수준)
      "react/no-unknown-property": "warn", // HTML 속성 잘못 사용 경고
      "jsx-a11y/alt-text": "warn", // 이미지 태그의 alt 속성 누락 시 경고
      "react/self-closing-comp": [
        "warn",
        { component: true, html: true }, // children이 없는 경우 단일 태그 사용 권장
      ],
      "react/jsx-no-useless-fragment": "warn", // 불필요한 Fragment 사용 제한
      "react/jsx-pascal-case": "warn", // 컴포넌트 네이밍 PascalCase 권장
      "react/jsx-no-duplicate-props": "warn", // JSX에서 중복 props 방지
      "react/jsx-boolean-value": ["warn", "never"], // 불필요한 `={true}` 생략 권장

      // TypeScript 네이밍 컨벤션 (유연한 적용)
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          leadingUnderscore: "allow", // _변수명 허용
          trailingUnderscore: "allow", // 변수명_ 허용
        },
        {
          selector: "typeLike",
          format: ["PascalCase"], // 클래스, 타입, 인터페이스는 PascalCase 적용
        },
      ],

      // 변수 선언 관련 규칙
      "prefer-const": "error", // let 대신 const 사용 강제
      "no-var": "error", // var 사용 금지

      // 주석 및 들여쓰기
      indent: ["error", 2], // 2탭 들여쓰기 적용

      // React 관련 규칙
      "arrow-body-style": ["warn", "as-needed"],
      "prefer-arrow-callback": "warn",
      "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }], // JSX 파일 확장자 제한
      "react/prop-types": "off", // TypeScript 사용 시 PropTypes 필요 없음

      // 반복문, 조건문 관련
      "no-restricted-syntax": [
        "error",
        {
          selector: "ForStatement",
          message:
            "Use array methods like .map(), .filter() or .forEach() instead of for loops.",
        },
      ],
      "no-unused-expressions": ["error", { allowTernary: true }],

      // 기타 규칙
      eqeqeq: ["error", "always"], // 삼중 등호(===) 사용 강제
      "no-console": "warn", // console 사용 경고
      "react/jsx-key": "error", // React key 필수 사용

      // 추가된 규칙들
      "react/jsx-max-props-per-line": [
        "error",
        { maximum: 1, when: "multiline" },
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowExpressions: true, // 함수 표현식에서는 반환 타입 생략 가능
        },
      ],

      // 새로운 기타 규칙 (warn 추가)
      "prefer-destructuring": ["warn", { object: true, array: false }], // 구조분해 할당 권장
      "prefer-template": "warn", // 템플릿 리터럴 사용 권장
      "react/no-array-index-key": "warn", // key로 index 사용 경고
    },
  },
];
