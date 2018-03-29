import { sin, cos, abs, atan2, asin } from "mathjs"
import * as util from "./util"

export const fromEuler = (x, y, z) => fromEulerRad(util.degToRad(x), util.degToRad(y), util.degToRad(z))

const fromEulerRad = (roll, pitch, yaw) => {
  const cy = cos(yaw / 2)
  const sy = sin(yaw / 2)
  const cr = cos(roll / 2)
  const sr = sin(roll / 2)
  const cp = cos(pitch / 2)
  const sp = sin(pitch / 2)

  return {
    w: cy * cr * cp + sy * sr * sp,
    x: cy * sr * cp - sy * cr * sp,
    y: cy * cr * sp + sy * sr * cp,
    z: sy * cr * cp - cy * sr * sp
  }
}

export const getEuler = ({w, x, y, z}) => {
  const yy = y * y
  const t0 = 2 * (w * x + y * z)
  const t1 = 1 - 2 * ( x * x + yy)

  var t2 = 2 * (w * y - z * x);
  t2 = t2 > 1 ? 1 : t2
  t2 = t2 < -1 ? -1 : t2

  const t3 = 2 * (w * z + x * y)
  const t4 = 1 - 2 * (yy + z * z)

  return {
    x: util.radToDeg(atan2(t0, t1)),
    y: util.radToDeg(asin(t2)),
    z: util.radToDeg(atan2(t3, t4))
  }
}