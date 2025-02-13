const IcStamp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="50"
    height="50"
    fill="none"
  >
    <path fill="url(#a)" d="M0 0h50v50H0z" />
    <defs>
      <pattern
        id="a"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width="128"
        height="128"
      />
    </defs>
  </svg>
);

export default IcStamp;
