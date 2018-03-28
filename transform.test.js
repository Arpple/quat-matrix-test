import * as trans from "./trasnform"

describe("transform", () => {
  describe("convert in-out", () => {

    const rotConvert = (x, y, z) => trans.getRotation(trans.setRotation(x, y, z))

    const expectRot = (r, x, y, z) => {
      expect(r.x).toBeCloseTo(x)
      expect(r.y).toBeCloseTo(y)
      expect(r.z).toBeCloseTo(z)
    }

    it("0 0 0 ", () => {
      const rot = rotConvert(0, 0, 0)
      expectRot(rot, 0, 0, 0)
    })

    it("90 0 0 ", () => {
      const rot = rotConvert(90, 0, 0)
      expectRot(rot, 90, 0, 0)
    })

    it("45 0 0", () => {
      const rot = rotConvert(45, 0, 0)
      expectRot(rot, 45, 0, 0)
    })

    it("90 90 0", () => {
      const rot = rotConvert(90, 90, 0)
      expectRot(rot, 90, 90, 0)
    })

    it("45 45 0", () => {
      const rot = rotConvert(45, 45, 0)
      expectRot(rot, 45, 45, 0)
    })

    it("89 89 89", () => {
      const rot = rotConvert(89, 89, 89)
      expectRot(rot, 89, 89, 89)
    })

    it("89.99 89.99 89.99", () => {
      const rot = rotConvert(89.99, 89.99, 89.99)
      expectRot(rot, 89.99, 89.99, 89.99)
    })

    it("90 90 90", () => {
      const rot = rotConvert(90, 9, 90)
      expectRot(rot, 90, 90, 90)
    })

    it("120 60 45", () => {
      const rot = rotConvert(120, 60, 45)
      expectRot(rot, 120, 60, 45)
    })

  })
})