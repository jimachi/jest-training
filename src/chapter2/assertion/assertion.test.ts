test('testを利用してテストケースを作成する', () => {
  const result = true
  const expected = true
  expect(result).toBe(expected)
})

it('itを利用してテストケースを作成する', () => {
  // toBeはMatcher関数
  expect(true).toBe(true)
})

const numberValue = 0
const stringValue = '文字列'
const booleanValue = true

// toBeでプリミティブな値を評価
it('evaluates as equal for all the same primitive values when using the toBe function', () => {
  expect(numberValue).toBe(0)
  expect(stringValue).toBe('文字列')
  expect(booleanValue).toBe(true)
})

// toEqualでプリミティブな値を評価
it('evaluates as equal for all the same primitive values when using the toEqual function', () => {
  expect(numberValue).toEqual(0)
  expect(stringValue).toEqual('文字列')
  expect(booleanValue).toEqual(true)
})

// toStrictEqualでプリミティブな値を評価
it('evaluates as equal for all the same primitive values when using the toStrictEqual function', () => {
  expect(numberValue).toStrictEqual(0)
  expect(stringValue).toStrictEqual('文字列')
  expect(booleanValue).toStrictEqual(true)
})

type CanType = {
  flavor: string
  ounces: number
}

const can1: CanType = {
  flavor: 'grapefruit',
  ounces: 12,
}

const can2: CanType = {
  flavor: 'grapefruit',
  ounces: 12,
}

const can3: CanType = can2

class Can {
  flavor: string
  ounces: number

  constructor({ flavor, ounces }: CanType) {
    this.flavor = flavor
    this.ounces = ounces
  }
}

const can4 = new Can({
  flavor: 'grapefruit',
  ounces: 12,
})

// can1とcan2は異なると評価される
it('can1 and can2 are not the exact same instance', () => {
  expect(can1).not.toBe(can2)
})

// can2とcan3は等しいと評価される
it('can2 and can3 are the same instance', () => {
  expect(can2).toBe(can3)
})

// can1とcan2は等しいと評価される
it('can1 and can2 have the same properties', () => {
  expect(can1).toEqual(can2)
})

// can2とcan4は等しいと評価される
it('can2 and can4 have the same properties', () => {
  expect(can2).toEqual(can4)
})

// 生成元のクラスを考慮する以外のtoEqualとtoStrictEqualの違い
it('differences between toEqual and toStrictEqual', () => {
  // undefinedを持つプロパティはtoEqualでは無視される
  expect({ foo: NaN, bar: undefined }).toEqual({ foo: NaN })

  // undefinedを持つプロパティはtoStrictEqualでは一致しないと評価される
  expect({ foo: NaN, bar: undefined }).not.toStrictEqual({ foo: NaN })

  // undefineやemptyを持つArrayはtoEqualでは同じと評価される
  expect([, undefined, 1]).toEqual([undefined, , 1])

  // undefineやemptyを持つArrayはtoStrictEqualでは同じと評価される
  expect([, undefined, 1]).not.toStrictEqual([undefined, , 1])
})

// can2とcan4は等しくないと評価される
it('can2 and can4 are different class', () => {
  expect(can2).not.toStrictEqual(can4)
})

it('"0" should be Truthy', () => {
  expect('0').toBeTruthy()
})

it('0 should be Falsy', () => {
  expect(0).toBeFalsy()
})

it('should be null', () => {
  expect(null).toBe(null)
  expect(null).toBeNull()
})

it('should be undefined', () => {
  expect(undefined).toBe(undefined)
  expect(undefined).toBeUndefined()
})

it('should be null or undefined', () => {
  let a
  expect(a == null).toBe(true)
  a = null
  expect(a == null).toBe(true)
})

const hoge = () => ({ hoge: 'hogehoge', number: 0 })

it('hoge return anything', () => {
  // 期待値がnullやundefinedでないことを評価
  expect(hoge()).toEqual(expect.anything())

  // 期待値の一部のプロパティがnullやundefinedでないことを評価
  expect(hoge()).toEqual({
    hoge: 'hogehoge',
    number: expect.anything(),
  })

  // 期待値の一部のプロパティnumberがNumber型であることを評価
  expect(hoge()).toEqual({
    hoge: 'hogehoge',
    number: expect.any(Number),
  })
})

it('0.1 + 0.2 returns 0.3', () => {
  expect(0.1 + 0.2).toBeCloseTo(0.3)
})

it('0.301 and 0.3 are different when numDigits is 3', () => {
  expect(0.3 + 0.001).not.toBeCloseTo(0.3, 3)
})

it('0.1 + 0.2 is greater than 0.3', () => {
  expect(0.1 + 0.2).toBeGreaterThan(0.3)
  expect(0.1 + 0.2 > 0.3).toBe(true)
})

it('0.1 + 0.2 is greater than 0.3 or 0.1 + 0.2 equals to 0.30000000000004', () => {
  expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.3)
  expect(0.1 + 0.2).toBeGreaterThanOrEqual(0.30000000000000004)
  expect(0.1 + 0.2 >= 0.3).toBe(true)
  expect(0.1 + 0.2 >= 0.30000000000000004).toBe(true)
})

it('0.1 + 0.2 is less than 0.3 or 0.1 + 0.2 equals to 0.30000000000004', () => {
  expect(0.1 + 0.2).toBeLessThanOrEqual(0.4)
  expect(0.1 + 0.2).toBeLessThanOrEqual(0.30000000000000004)
  expect(0.1 + 0.2 <= 0.4).toBe(true)
  expect(0.1 + 0.2 <= 0.30000000000000004).toBe(true)
})

const log1 =
  '10.0.0.3 - - [30/Jan/2023:12:20:12 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"'
const log2 =
  '10.0.0.11 - - [30/Jan/2023:12:20:40 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"'
const log3 =
  '10.0.0.99 - - [30/Jan/2023:12:20:40 +0000] "GET / HTTP/1.1" 200 615 "-" "curl/7.74.0" "-"'

it('contains 10.0.0.3 IP address', () => {
  expect(log1).toEqual(expect.stringContaining('10.0.0.3'))
})

it('contain IP address between 10.0.0.0 and 10.0.0.99', () => {
  // 10.0.0.0から10.0.0.99までのIPアドレスにマッチするための正規表現
  const expected = /^10.0.0.([1-9]?[0-9]) /

  // expect.stringMatching
  expect(log1).toEqual(expect.stringMatching(expected))
  expect(log2).toEqual(expect.stringMatching(expected))
  expect(log3).toEqual(expect.stringMatching(expected))

  // toMatch
  expect(log1).toMatch(expected)
  expect(log2).toMatch(expected)
  expect(log3).toMatch(expected)

  // toBe
  const regex = new RegExp(expected)
  expect(regex.test(log1)).toBe(true)
  expect(regex.test(log2)).toBe(true)
  expect(regex.test(log3)).toBe(true)
})
