import * as quat from "./quat"

const expectQuat = (q, w, x, y, z) => {
  expect(q.w).toBeCloseTo(w)
  expect(q.x).toBeCloseTo(x)
  expect(q.y).toBeCloseTo(y)
  expect(q.z).toBeCloseTo(z)
}




describe("quat", () => {
  describe("from euler", () => {
    it("0 0 0", () => {
      expectQuat(quat.fromEuler(0, 0, 0), 
        1, 0, 0, 0
      )
    })

    it("90 0 0", () => {
      expectQuat(quat.fromEuler(90, 0, 0),
          0.707, 0.707, 0, 0
      )
    })

    it("45 0 0", () => {
      expectQuat(quat.fromEuler(45, 0, 0),
        0.924, 0.383, 0, 0
      )
    })

    it("90 90 0", () => {
      expectQuat(quat.fromEuler(90, 90, 0),
        0.5, 0.5, 0.5, -0.5
      )
    })

    it("45 45 0", () => {
      expectQuat(quat.fromEuler(45, 45, 0),
        0.854, 0.354, 0.354, -0.146
      )
    })
    
    it("89 89 89", () => {
      expectQuat(quat.fromEuler(89, 89, 89),
        0.707, 0.006, 0.707, 0.006
      ) 
    })

    it("89.99 89.99 89.99", () => {
      expectQuat(quat.fromEuler(89.99, 89.99, 89.99),
        0.707, 0, 0.707, 0
      ) 
    })

    it("90 90 90", () => {
      expectQuat(quat.fromEuler(90, 90, 90),
        0.707, 0, 0.707, 0
      ) 
    })

    it("120 60 45", () => {
      expectQuat(quat.fromEuler(120, 60, 45),
        0.566, 0.597, 0.518, -0.234
      )
    })
  })

  describe("convert back to euler", () => {

    const expectEuler = (e, x, y, z) => {
      expect(e.x).toBeCloseTo(x)
      expect(e.y).toBeCloseTo(y)
      expect(e.z).toBeCloseTo(z)
    }

    const euler = (x, y, z) => quat.getEuler(quat.fromEuler(x, y, z))

    it("0 0 0", () => {
      const e = euler(0, 0, 0)
      expectEuler(e, 0, 0, 0)
    })

    it("90 0 0", () => {
      const e = euler(90, 0, 0)
      expectEuler(e, 90, 0, 0)
    })

    it("45 0 0", () => {
      const e = euler(45, 0, 0)
      expectEuler(e, 45, 0, 0)
    })

    it("90 90 0", () => {
      const e = euler(90, 90, 0)
      expectEuler(e, 90, 90, 0)
    })

    it("45 45 0", () => {
      const e = euler(45, 45, 0)
      expectEuler(e, 45, 45, 0)
    })

    it("89 89 89", () => {
      const e = euler(89, 89, 89)
      expectEuler(e, 89, 89, 89)
    })

    it("89.99 89.99 89.99", () => {
      const e = euler(89.99, 89.99, 89.99)
      expectEuler(e, 89.99, 89.99, 89.99)
    })


    it("90 90 90", () => {
      const e = euler(90, 90, 90)
      expectEuler(e, 90, 90, 90)
    })

    it("120 60 45", () => {
      const e = euler(120, 60, 45)
      expectEuler(e, 120, 60, 45)
    })
  })
})

[ 0, 0.7071068, 0.7071068, 0 ]