const IcCloseModal = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="16" height="16" fill="#020202" />
    <rect width="16" height="16" fill="url(#pattern0_230_98)" />
    <defs>
      <pattern
        id="pattern0_230_98"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_230_98" transform="scale(0.00390625)" />
      </pattern>
      <image
        id="image0_230_98"
        width="256"
        height="256"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAJY0lEQVR4Ae3dy5HgRg4FQM16N66sDXuUDePKmrcfB4ADmvEIMHVFk6hKsF9QwVLr1z//9e///BX858/fv38F22tNICqQ/v37R3T3mhMgEBUQAFF+zQlkBQRA1l93AlEBARDl15xAVkAAZP11JxAVEABRfs0JZAUEQNZfdwJRgV/p75Dd7p0T6ITU3yzw9t8vbwBvfnqsjcDDAgLgYWC3J/BmAQHw5ulYG4GHBQTAw8BuT+DNAgLgzdOxNgIPCwiAh4HdnsCbBQTAm6djbQQeFnj9OYBu/84JdELqTwq8/Tt/t3dvAJ2QOoHDAgLg8HBtjUAnIAA6IXUChwUEwOHh2hqBTkAAdELqBA4LCIDDw7U1Ap2AAOiE1AkcFlh/DqCbjXMCnZB6JbD9O3+1t//XvAF0QuoEDgsIgMPDtTUCnYAA6ITUCRwWEACHh2trBDoBAdAJqRM4LCAADg/X1gh0AgKgE1IncFjgV7e3699BnRPonoDb9a8/394Abj/fdkegFBAAJY8igdsCAuD2fO2OQCkgAEoeRQK3BQTA7fnaHYFSQACUPIoEbgsIgNvztTsCpUB7DqC8+n/Fr39H7XzUswKez9rfG0Dto0rgtIAAOD1emyNQCwiA2keVwGkBAXB6vDZHoBYQALWPKoHTAgLg9HhtjkAtIABqH1UCpwXG5wA6Hd9hOyH1iYDna6Ln/wsw03M1geUC/hVg+QAtn8BEQABM9FxLYLmAAFg+QMsnMBEQABM91xJYLiAAlg/Q8glMBATARM+1BJYLPH4OoPPxHbcT+nbd8/Hs/L0BPOvr7gReLSAAXj0eiyPwrIAAeNbX3Qm8WkAAvHo8FkfgWQEB8KyvuxN4tYAAePV4LI7AswIC4FlfdyfwaoH4OYBOx3fgTmh33Xyz8/MGkPXXnUBUQABE+TUnkBUQAFl/3QlEBQRAlF9zAlkBAZD1151AVEAARPk1J5AVEABZf90JRAVefw6g0/EduRPK1s0n69919wbQCakTOCwgAA4P19YIdAICoBNSJ3BYQAAcHq6tEegEBEAnpE7gsIAAODxcWyPQCQiATkidwGGB9ecAutn4Dt0Jzep8Z37pq70BpCegP4GggAAI4mtNIC0gANIT0J9AUEAABPG1JpAWEADpCehPICggAIL4WhNICwiA9AT0JxAUOH8OoLP1HbsW4lP7bK96A9g+QesnMBAQAAM8lxLYLiAAtk/Q+gkMBATAAM+lBLYLCIDtE7R+AgMBATDAcymB7QICYPsErZ/AQODz5wA6u+vfwbv9b6//+fu3Z7wYojeAAkeJwHUBAXB9wvZHoBAQAAWOEoHrAgLg+oTtj0AhIAAKHCUC1wUEwPUJ2x+BQkAAFDhKBK4L+EY6nLBzAkPA4eW+888AvQHM/FxNYLWAAFg9PosnMBMQADM/VxNYLSAAVo/P4gnMBATAzM/VBFYLCIDV47N4AjMBATDzczWB1QLOATw8PucEZsC+88/8uqu9AXRC6gQOCwiAw8O1NQKdgADohNQJHBYQAIeHa2sEOgEB0AmpEzgsIAAOD9fWCHQCAqATUidwWMA5gPBwv35OwHf+7APoDSDrrzuBqIAAiPJrTiArIACy/roTiAoIgCi/5gSyAgIg6687gaiAAIjya04gKyAAsv66E4gKCIAov+YEsgICIOuvO4GogACI8mtOICsgALL+uhOICgiAKL/mBLICAiDrrzuBqIAAiPJrTiArIACy/roTiAr4ewAP83/9v/ef8vp7AVPB+npvALWPKoHTAgLg9HhtjkAtIABqH1UCpwUEwOnx2hyBWkAA1D6qBE4LCIDT47U5ArWAAKh9VAmcFnAOYDhe3/mHgMPLnROYAXoDmPm5msBqAQGwenwWT2AmIABmfq4msFpAAKwen8UTmAkIgJmfqwmsFhAAq8dn8QRmAgJg5udqAqsFnANoxuc7fwP08rJzAvWAvAHUPqoETgsIgNPjtTkCtYAAqH1UCZwWEACnx2tzBGoBAVD7qBI4LSAATo/X5gjUAgKg9lElcFrg8+cArn/nn34H53P69/8vbwC352t3BEoBAVDyKBK4LSAAbs/X7giUAgKg5FEkcFtAANyer90RKAUEQMmjSOC2gAC4PV+7I1AKnD8H4Dt2Of9xke+YMHoDbwBRfs0JZAUEQNZfdwJRAQEQ5decQFZAAGT9dScQFRAAUX7NCWQFBEDWX3cCUQEBEOXXnEBWYP05AN+hsw9Q1918OqFs3RtA1l93AlEBARDl15xAVkAAZP11JxAVEABRfs0JZAUEQNZfdwJRAQEQ5decQFZAAGT9dScQFXj9OQDfkaPPx+PNzfdx4rKBN4CSR5HAbQEBcHu+dkegFBAAJY8igdsCAuD2fO2OQCkgAEoeRQK3BQTA7fnaHYFSQACUPIoEbgvEzwH4Dnz7AZvuzvMxFayv9wZQ+6gSOC0gAE6P1+YI1AICoPZRJXBaQACcHq/NEagFBEDto0rgtIAAOD1emyNQCwiA2keVwGmBx88B+I57+vmJb87zNRuBN4CZn6sJrBYQAKvHZ/EEZgICYObnagKrBQTA6vFZPIGZgACY+bmawGoBAbB6fBZPYCYgAGZ+riawWmB8DsB32NXzP794z2c9Ym8AtY8qgdMCAuD0eG2OQC0gAGofVQKnBQTA6fHaHIFaQADUPqoETgsIgNPjtTkCtYAAqH1UCZwWaM8B+I56ev6f39zXn29vAJ//FQDwZQEB8OXp2/vnBQTA5x8BAF8WEABfnr69f15AAHz+EQDwZQEB8OXp2/vnBQTA5x8BAF8W+PX176BfHr699wLXfz+8AfTPgJ8gcFZAAJwdrY0R6AUEQG/kJwicFRAAZ0drYwR6AQHQG/kJAmcFBMDZ0doYgV5AAPRGfoLAWYH15wD+/P27/ZsGZ6dnY3GB7ecEvAHEHyELIJATEAA5e50JxAUEQHwEFkAgJyAAcvY6E4gLCID4CCyAQE5AAOTsdSYQFxAA8RFYAIGcwOvPAfjOn3s4dJ4LvP2cgDeA+YzdgcBaAQGwdnQWTmAuIADmhu5AYK2AAFg7OgsnMBcQAHNDdyCwVkAArB2dhROYCwiAuaE7EFgrED8H4Dv/2mfHwn9AIH1OwBvADwzRLQhsFRAAWydn3QR+QEAA/ACiWxDYKiAAtk7Ougn8gIAA+AFEtyCwVUAAbJ2cdRP4AQEB8AOIbkFgq8B/AWw80sJLeN7+AAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export default IcCloseModal;
