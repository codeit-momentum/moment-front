import js from "@eslint/js";
import globals from "globals";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";

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
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // TypeScript 규칙: 명확하게 @typescript-eslint 설정 적용
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
      "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
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
    },
  },
];
