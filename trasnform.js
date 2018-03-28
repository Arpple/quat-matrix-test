import { sqrt } from "mathjs"

import * as quat from "./quat"

export const setRotation = (x, y, z) => setRotationQuat(quat.fromEuler(x, y, z))

const setRotationQuat = ({x, y, z, w}) => {
  const x2 = 2 * x, y2 = 2 * y, z2 = 2 * z
  const xx = x * x2, xy = x * y2, xz = x * z2
  const yy = y * y2, yz = y * z2, zz = z * z2
  const wx = w * x2, wy = w * y2, wz = w * z2

  const m0 = 1 - (yy + zz)
  const m4 = xy - wz
  const m8 = xz + wy

  const m1 = xy + wz
  const m5 = 1 - (xx + zz)
  const m9 = yz - wx

  const m2 = xz - wy
  const m6 = yz + wx
  const m10 = 1 - (xx + yy)

  return [
    [m0, m1, m2, 0],
    [m4, m5, m6, 0],
    [m8, m9, m10, 0],
    [0, 0, 0, 1]
  ]
}

export const getRotation = (m) => quat.getEuler(getRotationQuat(m))

const getRotationQuat = (m) => {
  const m11 = m[0][0], m12 = m[1][0], m13 = m[2][0]
  const m21 = m[0][1], m22 = m[1][1], m23 = m[2][1]
  const m31 = m[0][2], m32 = m[1][2], m33 = m[2][2]

  const trace = m11 + m22 + m33

  if(trace > 0) {
    const s = 0.5 / sqrt(trace + 1)
    return { 
      w: 0.25 / s, 
      x: (m32 - m23) * s, 
      y: (m13 - m31) * s,
      z: (m21 - m12) * s
    }
  }
  else if(m11 > m22 && m11 > m33) {
    const s = 2 * sqrt(1 + m11 - m22 - m33)
    return {
      w: (m32 - m23) / s,
      x: 0.25 * s,
      y: (m12 + m21) / s,
      z: (m13 + m31) / s
    }
  }
  else if(m22 > m33) {
    s = 2 * sqrt(1 + m22 - m11 - m33)
    return {
      w: (m13 - m31) / s,
      x: (m12 + m21) / s,
      y: 0.25 * s,
      z: (m23 + m32) / s
    }
  }
  else {
    s = 2 * sqrt(1 + m33 - m11 - m22)
    return {
      w: (m21 - m12) / s,
      x: (m13 + m31) / s,
      y: (m23 + m32) / s,
      z: 0.25 * s
    }
  }
}