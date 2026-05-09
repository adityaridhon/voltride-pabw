
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Mitra
 * 
 */
export type Mitra = $Result.DefaultSelection<Prisma.$MitraPayload>
/**
 * Model Armada
 * 
 */
export type Armada = $Result.DefaultSelection<Prisma.$ArmadaPayload>
/**
 * Model Dompet
 * 
 */
export type Dompet = $Result.DefaultSelection<Prisma.$DompetPayload>
/**
 * Model Pemesanan
 * 
 */
export type Pemesanan = $Result.DefaultSelection<Prisma.$PemesananPayload>
/**
 * Model TransaksiSaldo
 * 
 */
export type TransaksiSaldo = $Result.DefaultSelection<Prisma.$TransaksiSaldoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MITRA: 'MITRA',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatusKetersediaan: {
  TERSEDIA: 'TERSEDIA',
  DISEWA: 'DISEWA',
  PERAWATAN: 'PERAWATAN'
};

export type StatusKetersediaan = (typeof StatusKetersediaan)[keyof typeof StatusKetersediaan]


export const StatusPemesanan: {
  MENUNGGU: 'MENUNGGU',
  DIKONFIRMASI: 'DIKONFIRMASI',
  AKTIF: 'AKTIF',
  SELESAI: 'SELESAI',
  DIBATALKAN: 'DIBATALKAN'
};

export type StatusPemesanan = (typeof StatusPemesanan)[keyof typeof StatusPemesanan]


export const JenisTransaksi: {
  TOPUP: 'TOPUP',
  PEMBAYARAN: 'PEMBAYARAN',
  REFUND: 'REFUND'
};

export type JenisTransaksi = (typeof JenisTransaksi)[keyof typeof JenisTransaksi]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatusKetersediaan = $Enums.StatusKetersediaan

export const StatusKetersediaan: typeof $Enums.StatusKetersediaan

export type StatusPemesanan = $Enums.StatusPemesanan

export const StatusPemesanan: typeof $Enums.StatusPemesanan

export type JenisTransaksi = $Enums.JenisTransaksi

export const JenisTransaksi: typeof $Enums.JenisTransaksi

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mitra`: Exposes CRUD operations for the **Mitra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mitras
    * const mitras = await prisma.mitra.findMany()
    * ```
    */
  get mitra(): Prisma.MitraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.armada`: Exposes CRUD operations for the **Armada** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Armadas
    * const armadas = await prisma.armada.findMany()
    * ```
    */
  get armada(): Prisma.ArmadaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dompet`: Exposes CRUD operations for the **Dompet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dompets
    * const dompets = await prisma.dompet.findMany()
    * ```
    */
  get dompet(): Prisma.DompetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pemesanan`: Exposes CRUD operations for the **Pemesanan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pemesanans
    * const pemesanans = await prisma.pemesanan.findMany()
    * ```
    */
  get pemesanan(): Prisma.PemesananDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaksiSaldo`: Exposes CRUD operations for the **TransaksiSaldo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransaksiSaldos
    * const transaksiSaldos = await prisma.transaksiSaldo.findMany()
    * ```
    */
  get transaksiSaldo(): Prisma.TransaksiSaldoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    User: 'User',
    Mitra: 'Mitra',
    Armada: 'Armada',
    Dompet: 'Dompet',
    Pemesanan: 'Pemesanan',
    TransaksiSaldo: 'TransaksiSaldo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "session" | "verificationToken" | "user" | "mitra" | "armada" | "dompet" | "pemesanan" | "transaksiSaldo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Mitra: {
        payload: Prisma.$MitraPayload<ExtArgs>
        fields: Prisma.MitraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MitraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MitraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MitraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MitraPayload>
          }
          findFirst: {
            args: Prisma.MitraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MitraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MitraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MitraPayload>
          }
          findMany: {
            args: Prisma.MitraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MitraPayload>[]
          }
          create: {
            args: Prisma.MitraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MitraPayload>
          }
          createMany: {
            args: Prisma.MitraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MitraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MitraPayload>[]
          }
          delete: {
            args: Prisma.MitraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MitraPayload>
          }
          update: {
            args: Prisma.MitraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MitraPayload>
          }
          deleteMany: {
            args: Prisma.MitraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MitraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MitraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MitraPayload>[]
          }
          upsert: {
            args: Prisma.MitraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MitraPayload>
          }
          aggregate: {
            args: Prisma.MitraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMitra>
          }
          groupBy: {
            args: Prisma.MitraGroupByArgs<ExtArgs>
            result: $Utils.Optional<MitraGroupByOutputType>[]
          }
          count: {
            args: Prisma.MitraCountArgs<ExtArgs>
            result: $Utils.Optional<MitraCountAggregateOutputType> | number
          }
        }
      }
      Armada: {
        payload: Prisma.$ArmadaPayload<ExtArgs>
        fields: Prisma.ArmadaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArmadaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmadaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArmadaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmadaPayload>
          }
          findFirst: {
            args: Prisma.ArmadaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmadaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArmadaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmadaPayload>
          }
          findMany: {
            args: Prisma.ArmadaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmadaPayload>[]
          }
          create: {
            args: Prisma.ArmadaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmadaPayload>
          }
          createMany: {
            args: Prisma.ArmadaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArmadaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmadaPayload>[]
          }
          delete: {
            args: Prisma.ArmadaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmadaPayload>
          }
          update: {
            args: Prisma.ArmadaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmadaPayload>
          }
          deleteMany: {
            args: Prisma.ArmadaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArmadaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArmadaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmadaPayload>[]
          }
          upsert: {
            args: Prisma.ArmadaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArmadaPayload>
          }
          aggregate: {
            args: Prisma.ArmadaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArmada>
          }
          groupBy: {
            args: Prisma.ArmadaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArmadaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArmadaCountArgs<ExtArgs>
            result: $Utils.Optional<ArmadaCountAggregateOutputType> | number
          }
        }
      }
      Dompet: {
        payload: Prisma.$DompetPayload<ExtArgs>
        fields: Prisma.DompetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DompetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DompetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DompetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DompetPayload>
          }
          findFirst: {
            args: Prisma.DompetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DompetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DompetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DompetPayload>
          }
          findMany: {
            args: Prisma.DompetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DompetPayload>[]
          }
          create: {
            args: Prisma.DompetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DompetPayload>
          }
          createMany: {
            args: Prisma.DompetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DompetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DompetPayload>[]
          }
          delete: {
            args: Prisma.DompetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DompetPayload>
          }
          update: {
            args: Prisma.DompetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DompetPayload>
          }
          deleteMany: {
            args: Prisma.DompetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DompetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DompetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DompetPayload>[]
          }
          upsert: {
            args: Prisma.DompetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DompetPayload>
          }
          aggregate: {
            args: Prisma.DompetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDompet>
          }
          groupBy: {
            args: Prisma.DompetGroupByArgs<ExtArgs>
            result: $Utils.Optional<DompetGroupByOutputType>[]
          }
          count: {
            args: Prisma.DompetCountArgs<ExtArgs>
            result: $Utils.Optional<DompetCountAggregateOutputType> | number
          }
        }
      }
      Pemesanan: {
        payload: Prisma.$PemesananPayload<ExtArgs>
        fields: Prisma.PemesananFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PemesananFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PemesananFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload>
          }
          findFirst: {
            args: Prisma.PemesananFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PemesananFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload>
          }
          findMany: {
            args: Prisma.PemesananFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload>[]
          }
          create: {
            args: Prisma.PemesananCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload>
          }
          createMany: {
            args: Prisma.PemesananCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PemesananCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload>[]
          }
          delete: {
            args: Prisma.PemesananDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload>
          }
          update: {
            args: Prisma.PemesananUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload>
          }
          deleteMany: {
            args: Prisma.PemesananDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PemesananUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PemesananUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload>[]
          }
          upsert: {
            args: Prisma.PemesananUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PemesananPayload>
          }
          aggregate: {
            args: Prisma.PemesananAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePemesanan>
          }
          groupBy: {
            args: Prisma.PemesananGroupByArgs<ExtArgs>
            result: $Utils.Optional<PemesananGroupByOutputType>[]
          }
          count: {
            args: Prisma.PemesananCountArgs<ExtArgs>
            result: $Utils.Optional<PemesananCountAggregateOutputType> | number
          }
        }
      }
      TransaksiSaldo: {
        payload: Prisma.$TransaksiSaldoPayload<ExtArgs>
        fields: Prisma.TransaksiSaldoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransaksiSaldoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiSaldoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransaksiSaldoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiSaldoPayload>
          }
          findFirst: {
            args: Prisma.TransaksiSaldoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiSaldoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransaksiSaldoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiSaldoPayload>
          }
          findMany: {
            args: Prisma.TransaksiSaldoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiSaldoPayload>[]
          }
          create: {
            args: Prisma.TransaksiSaldoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiSaldoPayload>
          }
          createMany: {
            args: Prisma.TransaksiSaldoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransaksiSaldoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiSaldoPayload>[]
          }
          delete: {
            args: Prisma.TransaksiSaldoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiSaldoPayload>
          }
          update: {
            args: Prisma.TransaksiSaldoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiSaldoPayload>
          }
          deleteMany: {
            args: Prisma.TransaksiSaldoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransaksiSaldoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransaksiSaldoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiSaldoPayload>[]
          }
          upsert: {
            args: Prisma.TransaksiSaldoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiSaldoPayload>
          }
          aggregate: {
            args: Prisma.TransaksiSaldoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaksiSaldo>
          }
          groupBy: {
            args: Prisma.TransaksiSaldoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaksiSaldoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransaksiSaldoCountArgs<ExtArgs>
            result: $Utils.Optional<TransaksiSaldoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    user?: UserOmit
    mitra?: MitraOmit
    armada?: ArmadaOmit
    dompet?: DompetOmit
    pemesanan?: PemesananOmit
    transaksiSaldo?: TransaksiSaldoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    pemesanan: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    pemesanan?: boolean | UserCountOutputTypeCountPemesananArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PemesananWhereInput
  }


  /**
   * Count Type MitraCountOutputType
   */

  export type MitraCountOutputType = {
    armada: number
  }

  export type MitraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    armada?: boolean | MitraCountOutputTypeCountArmadaArgs
  }

  // Custom InputTypes
  /**
   * MitraCountOutputType without action
   */
  export type MitraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MitraCountOutputType
     */
    select?: MitraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MitraCountOutputType without action
   */
  export type MitraCountOutputTypeCountArmadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArmadaWhereInput
  }


  /**
   * Count Type ArmadaCountOutputType
   */

  export type ArmadaCountOutputType = {
    pemesanan: number
  }

  export type ArmadaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pemesanan?: boolean | ArmadaCountOutputTypeCountPemesananArgs
  }

  // Custom InputTypes
  /**
   * ArmadaCountOutputType without action
   */
  export type ArmadaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArmadaCountOutputType
     */
    select?: ArmadaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArmadaCountOutputType without action
   */
  export type ArmadaCountOutputTypeCountPemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PemesananWhereInput
  }


  /**
   * Count Type DompetCountOutputType
   */

  export type DompetCountOutputType = {
    transaksi: number
  }

  export type DompetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | DompetCountOutputTypeCountTransaksiArgs
  }

  // Custom InputTypes
  /**
   * DompetCountOutputType without action
   */
  export type DompetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DompetCountOutputType
     */
    select?: DompetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DompetCountOutputType without action
   */
  export type DompetCountOutputTypeCountTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiSaldoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: $Enums.Role | null
    noHp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: $Enums.Role | null
    noHp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    password: number
    role: number
    noHp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    noHp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    noHp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    noHp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: $Enums.Role
    noHp: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    noHp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    mitra?: boolean | User$mitraArgs<ExtArgs>
    dompet?: boolean | User$dompetArgs<ExtArgs>
    pemesanan?: boolean | User$pemesananArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    noHp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    noHp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    noHp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "password" | "role" | "noHp" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    mitra?: boolean | User$mitraArgs<ExtArgs>
    dompet?: boolean | User$dompetArgs<ExtArgs>
    pemesanan?: boolean | User$pemesananArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      mitra: Prisma.$MitraPayload<ExtArgs> | null
      dompet: Prisma.$DompetPayload<ExtArgs> | null
      pemesanan: Prisma.$PemesananPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      password: string | null
      role: $Enums.Role
      noHp: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mitra<T extends User$mitraArgs<ExtArgs> = {}>(args?: Subset<T, User$mitraArgs<ExtArgs>>): Prisma__MitraClient<$Result.GetResult<Prisma.$MitraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dompet<T extends User$dompetArgs<ExtArgs> = {}>(args?: Subset<T, User$dompetArgs<ExtArgs>>): Prisma__DompetClient<$Result.GetResult<Prisma.$DompetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pemesanan<T extends User$pemesananArgs<ExtArgs> = {}>(args?: Subset<T, User$pemesananArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly noHp: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.mitra
   */
  export type User$mitraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mitra
     */
    omit?: MitraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MitraInclude<ExtArgs> | null
    where?: MitraWhereInput
  }

  /**
   * User.dompet
   */
  export type User$dompetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dompet
     */
    select?: DompetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dompet
     */
    omit?: DompetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DompetInclude<ExtArgs> | null
    where?: DompetWhereInput
  }

  /**
   * User.pemesanan
   */
  export type User$pemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pemesanan
     */
    omit?: PemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    where?: PemesananWhereInput
    orderBy?: PemesananOrderByWithRelationInput | PemesananOrderByWithRelationInput[]
    cursor?: PemesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PemesananScalarFieldEnum | PemesananScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Mitra
   */

  export type AggregateMitra = {
    _count: MitraCountAggregateOutputType | null
    _min: MitraMinAggregateOutputType | null
    _max: MitraMaxAggregateOutputType | null
  }

  export type MitraMinAggregateOutputType = {
    id: string | null
    userId: string | null
    namaMitra: string | null
    noHp: string | null
    alamat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MitraMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    namaMitra: string | null
    noHp: string | null
    alamat: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MitraCountAggregateOutputType = {
    id: number
    userId: number
    namaMitra: number
    noHp: number
    alamat: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MitraMinAggregateInputType = {
    id?: true
    userId?: true
    namaMitra?: true
    noHp?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MitraMaxAggregateInputType = {
    id?: true
    userId?: true
    namaMitra?: true
    noHp?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MitraCountAggregateInputType = {
    id?: true
    userId?: true
    namaMitra?: true
    noHp?: true
    alamat?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MitraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mitra to aggregate.
     */
    where?: MitraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mitras to fetch.
     */
    orderBy?: MitraOrderByWithRelationInput | MitraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MitraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mitras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mitras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mitras
    **/
    _count?: true | MitraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MitraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MitraMaxAggregateInputType
  }

  export type GetMitraAggregateType<T extends MitraAggregateArgs> = {
        [P in keyof T & keyof AggregateMitra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMitra[P]>
      : GetScalarType<T[P], AggregateMitra[P]>
  }




  export type MitraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MitraWhereInput
    orderBy?: MitraOrderByWithAggregationInput | MitraOrderByWithAggregationInput[]
    by: MitraScalarFieldEnum[] | MitraScalarFieldEnum
    having?: MitraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MitraCountAggregateInputType | true
    _min?: MitraMinAggregateInputType
    _max?: MitraMaxAggregateInputType
  }

  export type MitraGroupByOutputType = {
    id: string
    userId: string
    namaMitra: string
    noHp: string | null
    alamat: string | null
    createdAt: Date
    updatedAt: Date
    _count: MitraCountAggregateOutputType | null
    _min: MitraMinAggregateOutputType | null
    _max: MitraMaxAggregateOutputType | null
  }

  type GetMitraGroupByPayload<T extends MitraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MitraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MitraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MitraGroupByOutputType[P]>
            : GetScalarType<T[P], MitraGroupByOutputType[P]>
        }
      >
    >


  export type MitraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    namaMitra?: boolean
    noHp?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    armada?: boolean | Mitra$armadaArgs<ExtArgs>
    dompet?: boolean | Mitra$dompetArgs<ExtArgs>
    _count?: boolean | MitraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mitra"]>

  export type MitraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    namaMitra?: boolean
    noHp?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mitra"]>

  export type MitraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    namaMitra?: boolean
    noHp?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mitra"]>

  export type MitraSelectScalar = {
    id?: boolean
    userId?: boolean
    namaMitra?: boolean
    noHp?: boolean
    alamat?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MitraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "namaMitra" | "noHp" | "alamat" | "createdAt" | "updatedAt", ExtArgs["result"]["mitra"]>
  export type MitraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    armada?: boolean | Mitra$armadaArgs<ExtArgs>
    dompet?: boolean | Mitra$dompetArgs<ExtArgs>
    _count?: boolean | MitraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MitraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MitraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MitraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mitra"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      armada: Prisma.$ArmadaPayload<ExtArgs>[]
      dompet: Prisma.$DompetPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      namaMitra: string
      noHp: string | null
      alamat: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mitra"]>
    composites: {}
  }

  type MitraGetPayload<S extends boolean | null | undefined | MitraDefaultArgs> = $Result.GetResult<Prisma.$MitraPayload, S>

  type MitraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MitraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MitraCountAggregateInputType | true
    }

  export interface MitraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mitra'], meta: { name: 'Mitra' } }
    /**
     * Find zero or one Mitra that matches the filter.
     * @param {MitraFindUniqueArgs} args - Arguments to find a Mitra
     * @example
     * // Get one Mitra
     * const mitra = await prisma.mitra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MitraFindUniqueArgs>(args: SelectSubset<T, MitraFindUniqueArgs<ExtArgs>>): Prisma__MitraClient<$Result.GetResult<Prisma.$MitraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mitra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MitraFindUniqueOrThrowArgs} args - Arguments to find a Mitra
     * @example
     * // Get one Mitra
     * const mitra = await prisma.mitra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MitraFindUniqueOrThrowArgs>(args: SelectSubset<T, MitraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MitraClient<$Result.GetResult<Prisma.$MitraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mitra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MitraFindFirstArgs} args - Arguments to find a Mitra
     * @example
     * // Get one Mitra
     * const mitra = await prisma.mitra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MitraFindFirstArgs>(args?: SelectSubset<T, MitraFindFirstArgs<ExtArgs>>): Prisma__MitraClient<$Result.GetResult<Prisma.$MitraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mitra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MitraFindFirstOrThrowArgs} args - Arguments to find a Mitra
     * @example
     * // Get one Mitra
     * const mitra = await prisma.mitra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MitraFindFirstOrThrowArgs>(args?: SelectSubset<T, MitraFindFirstOrThrowArgs<ExtArgs>>): Prisma__MitraClient<$Result.GetResult<Prisma.$MitraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mitras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MitraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mitras
     * const mitras = await prisma.mitra.findMany()
     * 
     * // Get first 10 Mitras
     * const mitras = await prisma.mitra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mitraWithIdOnly = await prisma.mitra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MitraFindManyArgs>(args?: SelectSubset<T, MitraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MitraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mitra.
     * @param {MitraCreateArgs} args - Arguments to create a Mitra.
     * @example
     * // Create one Mitra
     * const Mitra = await prisma.mitra.create({
     *   data: {
     *     // ... data to create a Mitra
     *   }
     * })
     * 
     */
    create<T extends MitraCreateArgs>(args: SelectSubset<T, MitraCreateArgs<ExtArgs>>): Prisma__MitraClient<$Result.GetResult<Prisma.$MitraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mitras.
     * @param {MitraCreateManyArgs} args - Arguments to create many Mitras.
     * @example
     * // Create many Mitras
     * const mitra = await prisma.mitra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MitraCreateManyArgs>(args?: SelectSubset<T, MitraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mitras and returns the data saved in the database.
     * @param {MitraCreateManyAndReturnArgs} args - Arguments to create many Mitras.
     * @example
     * // Create many Mitras
     * const mitra = await prisma.mitra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mitras and only return the `id`
     * const mitraWithIdOnly = await prisma.mitra.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MitraCreateManyAndReturnArgs>(args?: SelectSubset<T, MitraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MitraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mitra.
     * @param {MitraDeleteArgs} args - Arguments to delete one Mitra.
     * @example
     * // Delete one Mitra
     * const Mitra = await prisma.mitra.delete({
     *   where: {
     *     // ... filter to delete one Mitra
     *   }
     * })
     * 
     */
    delete<T extends MitraDeleteArgs>(args: SelectSubset<T, MitraDeleteArgs<ExtArgs>>): Prisma__MitraClient<$Result.GetResult<Prisma.$MitraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mitra.
     * @param {MitraUpdateArgs} args - Arguments to update one Mitra.
     * @example
     * // Update one Mitra
     * const mitra = await prisma.mitra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MitraUpdateArgs>(args: SelectSubset<T, MitraUpdateArgs<ExtArgs>>): Prisma__MitraClient<$Result.GetResult<Prisma.$MitraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mitras.
     * @param {MitraDeleteManyArgs} args - Arguments to filter Mitras to delete.
     * @example
     * // Delete a few Mitras
     * const { count } = await prisma.mitra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MitraDeleteManyArgs>(args?: SelectSubset<T, MitraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mitras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MitraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mitras
     * const mitra = await prisma.mitra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MitraUpdateManyArgs>(args: SelectSubset<T, MitraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mitras and returns the data updated in the database.
     * @param {MitraUpdateManyAndReturnArgs} args - Arguments to update many Mitras.
     * @example
     * // Update many Mitras
     * const mitra = await prisma.mitra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mitras and only return the `id`
     * const mitraWithIdOnly = await prisma.mitra.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MitraUpdateManyAndReturnArgs>(args: SelectSubset<T, MitraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MitraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mitra.
     * @param {MitraUpsertArgs} args - Arguments to update or create a Mitra.
     * @example
     * // Update or create a Mitra
     * const mitra = await prisma.mitra.upsert({
     *   create: {
     *     // ... data to create a Mitra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mitra we want to update
     *   }
     * })
     */
    upsert<T extends MitraUpsertArgs>(args: SelectSubset<T, MitraUpsertArgs<ExtArgs>>): Prisma__MitraClient<$Result.GetResult<Prisma.$MitraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mitras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MitraCountArgs} args - Arguments to filter Mitras to count.
     * @example
     * // Count the number of Mitras
     * const count = await prisma.mitra.count({
     *   where: {
     *     // ... the filter for the Mitras we want to count
     *   }
     * })
    **/
    count<T extends MitraCountArgs>(
      args?: Subset<T, MitraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MitraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mitra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MitraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MitraAggregateArgs>(args: Subset<T, MitraAggregateArgs>): Prisma.PrismaPromise<GetMitraAggregateType<T>>

    /**
     * Group by Mitra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MitraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MitraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MitraGroupByArgs['orderBy'] }
        : { orderBy?: MitraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MitraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMitraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mitra model
   */
  readonly fields: MitraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mitra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MitraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    armada<T extends Mitra$armadaArgs<ExtArgs> = {}>(args?: Subset<T, Mitra$armadaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArmadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dompet<T extends Mitra$dompetArgs<ExtArgs> = {}>(args?: Subset<T, Mitra$dompetArgs<ExtArgs>>): Prisma__DompetClient<$Result.GetResult<Prisma.$DompetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mitra model
   */
  interface MitraFieldRefs {
    readonly id: FieldRef<"Mitra", 'String'>
    readonly userId: FieldRef<"Mitra", 'String'>
    readonly namaMitra: FieldRef<"Mitra", 'String'>
    readonly noHp: FieldRef<"Mitra", 'String'>
    readonly alamat: FieldRef<"Mitra", 'String'>
    readonly createdAt: FieldRef<"Mitra", 'DateTime'>
    readonly updatedAt: FieldRef<"Mitra", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mitra findUnique
   */
  export type MitraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mitra
     */
    omit?: MitraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MitraInclude<ExtArgs> | null
    /**
     * Filter, which Mitra to fetch.
     */
    where: MitraWhereUniqueInput
  }

  /**
   * Mitra findUniqueOrThrow
   */
  export type MitraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mitra
     */
    omit?: MitraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MitraInclude<ExtArgs> | null
    /**
     * Filter, which Mitra to fetch.
     */
    where: MitraWhereUniqueInput
  }

  /**
   * Mitra findFirst
   */
  export type MitraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mitra
     */
    omit?: MitraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MitraInclude<ExtArgs> | null
    /**
     * Filter, which Mitra to fetch.
     */
    where?: MitraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mitras to fetch.
     */
    orderBy?: MitraOrderByWithRelationInput | MitraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mitras.
     */
    cursor?: MitraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mitras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mitras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mitras.
     */
    distinct?: MitraScalarFieldEnum | MitraScalarFieldEnum[]
  }

  /**
   * Mitra findFirstOrThrow
   */
  export type MitraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mitra
     */
    omit?: MitraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MitraInclude<ExtArgs> | null
    /**
     * Filter, which Mitra to fetch.
     */
    where?: MitraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mitras to fetch.
     */
    orderBy?: MitraOrderByWithRelationInput | MitraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mitras.
     */
    cursor?: MitraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mitras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mitras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mitras.
     */
    distinct?: MitraScalarFieldEnum | MitraScalarFieldEnum[]
  }

  /**
   * Mitra findMany
   */
  export type MitraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mitra
     */
    omit?: MitraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MitraInclude<ExtArgs> | null
    /**
     * Filter, which Mitras to fetch.
     */
    where?: MitraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mitras to fetch.
     */
    orderBy?: MitraOrderByWithRelationInput | MitraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mitras.
     */
    cursor?: MitraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mitras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mitras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mitras.
     */
    distinct?: MitraScalarFieldEnum | MitraScalarFieldEnum[]
  }

  /**
   * Mitra create
   */
  export type MitraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mitra
     */
    omit?: MitraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MitraInclude<ExtArgs> | null
    /**
     * The data needed to create a Mitra.
     */
    data: XOR<MitraCreateInput, MitraUncheckedCreateInput>
  }

  /**
   * Mitra createMany
   */
  export type MitraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mitras.
     */
    data: MitraCreateManyInput | MitraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mitra createManyAndReturn
   */
  export type MitraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mitra
     */
    omit?: MitraOmit<ExtArgs> | null
    /**
     * The data used to create many Mitras.
     */
    data: MitraCreateManyInput | MitraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MitraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mitra update
   */
  export type MitraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mitra
     */
    omit?: MitraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MitraInclude<ExtArgs> | null
    /**
     * The data needed to update a Mitra.
     */
    data: XOR<MitraUpdateInput, MitraUncheckedUpdateInput>
    /**
     * Choose, which Mitra to update.
     */
    where: MitraWhereUniqueInput
  }

  /**
   * Mitra updateMany
   */
  export type MitraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mitras.
     */
    data: XOR<MitraUpdateManyMutationInput, MitraUncheckedUpdateManyInput>
    /**
     * Filter which Mitras to update
     */
    where?: MitraWhereInput
    /**
     * Limit how many Mitras to update.
     */
    limit?: number
  }

  /**
   * Mitra updateManyAndReturn
   */
  export type MitraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mitra
     */
    omit?: MitraOmit<ExtArgs> | null
    /**
     * The data used to update Mitras.
     */
    data: XOR<MitraUpdateManyMutationInput, MitraUncheckedUpdateManyInput>
    /**
     * Filter which Mitras to update
     */
    where?: MitraWhereInput
    /**
     * Limit how many Mitras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MitraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mitra upsert
   */
  export type MitraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mitra
     */
    omit?: MitraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MitraInclude<ExtArgs> | null
    /**
     * The filter to search for the Mitra to update in case it exists.
     */
    where: MitraWhereUniqueInput
    /**
     * In case the Mitra found by the `where` argument doesn't exist, create a new Mitra with this data.
     */
    create: XOR<MitraCreateInput, MitraUncheckedCreateInput>
    /**
     * In case the Mitra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MitraUpdateInput, MitraUncheckedUpdateInput>
  }

  /**
   * Mitra delete
   */
  export type MitraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mitra
     */
    omit?: MitraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MitraInclude<ExtArgs> | null
    /**
     * Filter which Mitra to delete.
     */
    where: MitraWhereUniqueInput
  }

  /**
   * Mitra deleteMany
   */
  export type MitraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mitras to delete
     */
    where?: MitraWhereInput
    /**
     * Limit how many Mitras to delete.
     */
    limit?: number
  }

  /**
   * Mitra.armada
   */
  export type Mitra$armadaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Armada
     */
    select?: ArmadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Armada
     */
    omit?: ArmadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmadaInclude<ExtArgs> | null
    where?: ArmadaWhereInput
    orderBy?: ArmadaOrderByWithRelationInput | ArmadaOrderByWithRelationInput[]
    cursor?: ArmadaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArmadaScalarFieldEnum | ArmadaScalarFieldEnum[]
  }

  /**
   * Mitra.dompet
   */
  export type Mitra$dompetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dompet
     */
    select?: DompetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dompet
     */
    omit?: DompetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DompetInclude<ExtArgs> | null
    where?: DompetWhereInput
  }

  /**
   * Mitra without action
   */
  export type MitraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mitra
     */
    omit?: MitraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MitraInclude<ExtArgs> | null
  }


  /**
   * Model Armada
   */

  export type AggregateArmada = {
    _count: ArmadaCountAggregateOutputType | null
    _avg: ArmadaAvgAggregateOutputType | null
    _sum: ArmadaSumAggregateOutputType | null
    _min: ArmadaMinAggregateOutputType | null
    _max: ArmadaMaxAggregateOutputType | null
  }

  export type ArmadaAvgAggregateOutputType = {
    tahun: number | null
    hargaPerHari: Decimal | null
  }

  export type ArmadaSumAggregateOutputType = {
    tahun: number | null
    hargaPerHari: Decimal | null
  }

  export type ArmadaMinAggregateOutputType = {
    id: string | null
    mitraId: string | null
    namaKendaraan: string | null
    merek: string | null
    model: string | null
    tahun: number | null
    nomorPlat: string | null
    statusKetersediaan: $Enums.StatusKetersediaan | null
    hargaPerHari: Decimal | null
    foto: string | null
    deskripsi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArmadaMaxAggregateOutputType = {
    id: string | null
    mitraId: string | null
    namaKendaraan: string | null
    merek: string | null
    model: string | null
    tahun: number | null
    nomorPlat: string | null
    statusKetersediaan: $Enums.StatusKetersediaan | null
    hargaPerHari: Decimal | null
    foto: string | null
    deskripsi: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArmadaCountAggregateOutputType = {
    id: number
    mitraId: number
    namaKendaraan: number
    merek: number
    model: number
    tahun: number
    nomorPlat: number
    statusKetersediaan: number
    hargaPerHari: number
    foto: number
    deskripsi: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArmadaAvgAggregateInputType = {
    tahun?: true
    hargaPerHari?: true
  }

  export type ArmadaSumAggregateInputType = {
    tahun?: true
    hargaPerHari?: true
  }

  export type ArmadaMinAggregateInputType = {
    id?: true
    mitraId?: true
    namaKendaraan?: true
    merek?: true
    model?: true
    tahun?: true
    nomorPlat?: true
    statusKetersediaan?: true
    hargaPerHari?: true
    foto?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArmadaMaxAggregateInputType = {
    id?: true
    mitraId?: true
    namaKendaraan?: true
    merek?: true
    model?: true
    tahun?: true
    nomorPlat?: true
    statusKetersediaan?: true
    hargaPerHari?: true
    foto?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArmadaCountAggregateInputType = {
    id?: true
    mitraId?: true
    namaKendaraan?: true
    merek?: true
    model?: true
    tahun?: true
    nomorPlat?: true
    statusKetersediaan?: true
    hargaPerHari?: true
    foto?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArmadaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Armada to aggregate.
     */
    where?: ArmadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Armadas to fetch.
     */
    orderBy?: ArmadaOrderByWithRelationInput | ArmadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArmadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Armadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Armadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Armadas
    **/
    _count?: true | ArmadaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArmadaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArmadaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArmadaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArmadaMaxAggregateInputType
  }

  export type GetArmadaAggregateType<T extends ArmadaAggregateArgs> = {
        [P in keyof T & keyof AggregateArmada]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArmada[P]>
      : GetScalarType<T[P], AggregateArmada[P]>
  }




  export type ArmadaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArmadaWhereInput
    orderBy?: ArmadaOrderByWithAggregationInput | ArmadaOrderByWithAggregationInput[]
    by: ArmadaScalarFieldEnum[] | ArmadaScalarFieldEnum
    having?: ArmadaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArmadaCountAggregateInputType | true
    _avg?: ArmadaAvgAggregateInputType
    _sum?: ArmadaSumAggregateInputType
    _min?: ArmadaMinAggregateInputType
    _max?: ArmadaMaxAggregateInputType
  }

  export type ArmadaGroupByOutputType = {
    id: string
    mitraId: string
    namaKendaraan: string
    merek: string
    model: string
    tahun: number
    nomorPlat: string
    statusKetersediaan: $Enums.StatusKetersediaan
    hargaPerHari: Decimal
    foto: string | null
    deskripsi: string | null
    createdAt: Date
    updatedAt: Date
    _count: ArmadaCountAggregateOutputType | null
    _avg: ArmadaAvgAggregateOutputType | null
    _sum: ArmadaSumAggregateOutputType | null
    _min: ArmadaMinAggregateOutputType | null
    _max: ArmadaMaxAggregateOutputType | null
  }

  type GetArmadaGroupByPayload<T extends ArmadaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArmadaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArmadaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArmadaGroupByOutputType[P]>
            : GetScalarType<T[P], ArmadaGroupByOutputType[P]>
        }
      >
    >


  export type ArmadaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mitraId?: boolean
    namaKendaraan?: boolean
    merek?: boolean
    model?: boolean
    tahun?: boolean
    nomorPlat?: boolean
    statusKetersediaan?: boolean
    hargaPerHari?: boolean
    foto?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mitra?: boolean | MitraDefaultArgs<ExtArgs>
    pemesanan?: boolean | Armada$pemesananArgs<ExtArgs>
    _count?: boolean | ArmadaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["armada"]>

  export type ArmadaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mitraId?: boolean
    namaKendaraan?: boolean
    merek?: boolean
    model?: boolean
    tahun?: boolean
    nomorPlat?: boolean
    statusKetersediaan?: boolean
    hargaPerHari?: boolean
    foto?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mitra?: boolean | MitraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["armada"]>

  export type ArmadaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mitraId?: boolean
    namaKendaraan?: boolean
    merek?: boolean
    model?: boolean
    tahun?: boolean
    nomorPlat?: boolean
    statusKetersediaan?: boolean
    hargaPerHari?: boolean
    foto?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mitra?: boolean | MitraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["armada"]>

  export type ArmadaSelectScalar = {
    id?: boolean
    mitraId?: boolean
    namaKendaraan?: boolean
    merek?: boolean
    model?: boolean
    tahun?: boolean
    nomorPlat?: boolean
    statusKetersediaan?: boolean
    hargaPerHari?: boolean
    foto?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArmadaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mitraId" | "namaKendaraan" | "merek" | "model" | "tahun" | "nomorPlat" | "statusKetersediaan" | "hargaPerHari" | "foto" | "deskripsi" | "createdAt" | "updatedAt", ExtArgs["result"]["armada"]>
  export type ArmadaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mitra?: boolean | MitraDefaultArgs<ExtArgs>
    pemesanan?: boolean | Armada$pemesananArgs<ExtArgs>
    _count?: boolean | ArmadaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArmadaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mitra?: boolean | MitraDefaultArgs<ExtArgs>
  }
  export type ArmadaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mitra?: boolean | MitraDefaultArgs<ExtArgs>
  }

  export type $ArmadaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Armada"
    objects: {
      mitra: Prisma.$MitraPayload<ExtArgs>
      pemesanan: Prisma.$PemesananPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mitraId: string
      namaKendaraan: string
      merek: string
      model: string
      tahun: number
      nomorPlat: string
      statusKetersediaan: $Enums.StatusKetersediaan
      hargaPerHari: Prisma.Decimal
      foto: string | null
      deskripsi: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["armada"]>
    composites: {}
  }

  type ArmadaGetPayload<S extends boolean | null | undefined | ArmadaDefaultArgs> = $Result.GetResult<Prisma.$ArmadaPayload, S>

  type ArmadaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArmadaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArmadaCountAggregateInputType | true
    }

  export interface ArmadaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Armada'], meta: { name: 'Armada' } }
    /**
     * Find zero or one Armada that matches the filter.
     * @param {ArmadaFindUniqueArgs} args - Arguments to find a Armada
     * @example
     * // Get one Armada
     * const armada = await prisma.armada.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArmadaFindUniqueArgs>(args: SelectSubset<T, ArmadaFindUniqueArgs<ExtArgs>>): Prisma__ArmadaClient<$Result.GetResult<Prisma.$ArmadaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Armada that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArmadaFindUniqueOrThrowArgs} args - Arguments to find a Armada
     * @example
     * // Get one Armada
     * const armada = await prisma.armada.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArmadaFindUniqueOrThrowArgs>(args: SelectSubset<T, ArmadaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArmadaClient<$Result.GetResult<Prisma.$ArmadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Armada that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmadaFindFirstArgs} args - Arguments to find a Armada
     * @example
     * // Get one Armada
     * const armada = await prisma.armada.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArmadaFindFirstArgs>(args?: SelectSubset<T, ArmadaFindFirstArgs<ExtArgs>>): Prisma__ArmadaClient<$Result.GetResult<Prisma.$ArmadaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Armada that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmadaFindFirstOrThrowArgs} args - Arguments to find a Armada
     * @example
     * // Get one Armada
     * const armada = await prisma.armada.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArmadaFindFirstOrThrowArgs>(args?: SelectSubset<T, ArmadaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArmadaClient<$Result.GetResult<Prisma.$ArmadaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Armadas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmadaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Armadas
     * const armadas = await prisma.armada.findMany()
     * 
     * // Get first 10 Armadas
     * const armadas = await prisma.armada.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const armadaWithIdOnly = await prisma.armada.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArmadaFindManyArgs>(args?: SelectSubset<T, ArmadaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArmadaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Armada.
     * @param {ArmadaCreateArgs} args - Arguments to create a Armada.
     * @example
     * // Create one Armada
     * const Armada = await prisma.armada.create({
     *   data: {
     *     // ... data to create a Armada
     *   }
     * })
     * 
     */
    create<T extends ArmadaCreateArgs>(args: SelectSubset<T, ArmadaCreateArgs<ExtArgs>>): Prisma__ArmadaClient<$Result.GetResult<Prisma.$ArmadaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Armadas.
     * @param {ArmadaCreateManyArgs} args - Arguments to create many Armadas.
     * @example
     * // Create many Armadas
     * const armada = await prisma.armada.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArmadaCreateManyArgs>(args?: SelectSubset<T, ArmadaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Armadas and returns the data saved in the database.
     * @param {ArmadaCreateManyAndReturnArgs} args - Arguments to create many Armadas.
     * @example
     * // Create many Armadas
     * const armada = await prisma.armada.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Armadas and only return the `id`
     * const armadaWithIdOnly = await prisma.armada.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArmadaCreateManyAndReturnArgs>(args?: SelectSubset<T, ArmadaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArmadaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Armada.
     * @param {ArmadaDeleteArgs} args - Arguments to delete one Armada.
     * @example
     * // Delete one Armada
     * const Armada = await prisma.armada.delete({
     *   where: {
     *     // ... filter to delete one Armada
     *   }
     * })
     * 
     */
    delete<T extends ArmadaDeleteArgs>(args: SelectSubset<T, ArmadaDeleteArgs<ExtArgs>>): Prisma__ArmadaClient<$Result.GetResult<Prisma.$ArmadaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Armada.
     * @param {ArmadaUpdateArgs} args - Arguments to update one Armada.
     * @example
     * // Update one Armada
     * const armada = await prisma.armada.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArmadaUpdateArgs>(args: SelectSubset<T, ArmadaUpdateArgs<ExtArgs>>): Prisma__ArmadaClient<$Result.GetResult<Prisma.$ArmadaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Armadas.
     * @param {ArmadaDeleteManyArgs} args - Arguments to filter Armadas to delete.
     * @example
     * // Delete a few Armadas
     * const { count } = await prisma.armada.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArmadaDeleteManyArgs>(args?: SelectSubset<T, ArmadaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Armadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmadaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Armadas
     * const armada = await prisma.armada.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArmadaUpdateManyArgs>(args: SelectSubset<T, ArmadaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Armadas and returns the data updated in the database.
     * @param {ArmadaUpdateManyAndReturnArgs} args - Arguments to update many Armadas.
     * @example
     * // Update many Armadas
     * const armada = await prisma.armada.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Armadas and only return the `id`
     * const armadaWithIdOnly = await prisma.armada.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArmadaUpdateManyAndReturnArgs>(args: SelectSubset<T, ArmadaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArmadaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Armada.
     * @param {ArmadaUpsertArgs} args - Arguments to update or create a Armada.
     * @example
     * // Update or create a Armada
     * const armada = await prisma.armada.upsert({
     *   create: {
     *     // ... data to create a Armada
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Armada we want to update
     *   }
     * })
     */
    upsert<T extends ArmadaUpsertArgs>(args: SelectSubset<T, ArmadaUpsertArgs<ExtArgs>>): Prisma__ArmadaClient<$Result.GetResult<Prisma.$ArmadaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Armadas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmadaCountArgs} args - Arguments to filter Armadas to count.
     * @example
     * // Count the number of Armadas
     * const count = await prisma.armada.count({
     *   where: {
     *     // ... the filter for the Armadas we want to count
     *   }
     * })
    **/
    count<T extends ArmadaCountArgs>(
      args?: Subset<T, ArmadaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArmadaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Armada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmadaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArmadaAggregateArgs>(args: Subset<T, ArmadaAggregateArgs>): Prisma.PrismaPromise<GetArmadaAggregateType<T>>

    /**
     * Group by Armada.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArmadaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArmadaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArmadaGroupByArgs['orderBy'] }
        : { orderBy?: ArmadaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArmadaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArmadaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Armada model
   */
  readonly fields: ArmadaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Armada.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArmadaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mitra<T extends MitraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MitraDefaultArgs<ExtArgs>>): Prisma__MitraClient<$Result.GetResult<Prisma.$MitraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pemesanan<T extends Armada$pemesananArgs<ExtArgs> = {}>(args?: Subset<T, Armada$pemesananArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Armada model
   */
  interface ArmadaFieldRefs {
    readonly id: FieldRef<"Armada", 'String'>
    readonly mitraId: FieldRef<"Armada", 'String'>
    readonly namaKendaraan: FieldRef<"Armada", 'String'>
    readonly merek: FieldRef<"Armada", 'String'>
    readonly model: FieldRef<"Armada", 'String'>
    readonly tahun: FieldRef<"Armada", 'Int'>
    readonly nomorPlat: FieldRef<"Armada", 'String'>
    readonly statusKetersediaan: FieldRef<"Armada", 'StatusKetersediaan'>
    readonly hargaPerHari: FieldRef<"Armada", 'Decimal'>
    readonly foto: FieldRef<"Armada", 'String'>
    readonly deskripsi: FieldRef<"Armada", 'String'>
    readonly createdAt: FieldRef<"Armada", 'DateTime'>
    readonly updatedAt: FieldRef<"Armada", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Armada findUnique
   */
  export type ArmadaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Armada
     */
    select?: ArmadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Armada
     */
    omit?: ArmadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmadaInclude<ExtArgs> | null
    /**
     * Filter, which Armada to fetch.
     */
    where: ArmadaWhereUniqueInput
  }

  /**
   * Armada findUniqueOrThrow
   */
  export type ArmadaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Armada
     */
    select?: ArmadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Armada
     */
    omit?: ArmadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmadaInclude<ExtArgs> | null
    /**
     * Filter, which Armada to fetch.
     */
    where: ArmadaWhereUniqueInput
  }

  /**
   * Armada findFirst
   */
  export type ArmadaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Armada
     */
    select?: ArmadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Armada
     */
    omit?: ArmadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmadaInclude<ExtArgs> | null
    /**
     * Filter, which Armada to fetch.
     */
    where?: ArmadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Armadas to fetch.
     */
    orderBy?: ArmadaOrderByWithRelationInput | ArmadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Armadas.
     */
    cursor?: ArmadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Armadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Armadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Armadas.
     */
    distinct?: ArmadaScalarFieldEnum | ArmadaScalarFieldEnum[]
  }

  /**
   * Armada findFirstOrThrow
   */
  export type ArmadaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Armada
     */
    select?: ArmadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Armada
     */
    omit?: ArmadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmadaInclude<ExtArgs> | null
    /**
     * Filter, which Armada to fetch.
     */
    where?: ArmadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Armadas to fetch.
     */
    orderBy?: ArmadaOrderByWithRelationInput | ArmadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Armadas.
     */
    cursor?: ArmadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Armadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Armadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Armadas.
     */
    distinct?: ArmadaScalarFieldEnum | ArmadaScalarFieldEnum[]
  }

  /**
   * Armada findMany
   */
  export type ArmadaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Armada
     */
    select?: ArmadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Armada
     */
    omit?: ArmadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmadaInclude<ExtArgs> | null
    /**
     * Filter, which Armadas to fetch.
     */
    where?: ArmadaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Armadas to fetch.
     */
    orderBy?: ArmadaOrderByWithRelationInput | ArmadaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Armadas.
     */
    cursor?: ArmadaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Armadas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Armadas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Armadas.
     */
    distinct?: ArmadaScalarFieldEnum | ArmadaScalarFieldEnum[]
  }

  /**
   * Armada create
   */
  export type ArmadaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Armada
     */
    select?: ArmadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Armada
     */
    omit?: ArmadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmadaInclude<ExtArgs> | null
    /**
     * The data needed to create a Armada.
     */
    data: XOR<ArmadaCreateInput, ArmadaUncheckedCreateInput>
  }

  /**
   * Armada createMany
   */
  export type ArmadaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Armadas.
     */
    data: ArmadaCreateManyInput | ArmadaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Armada createManyAndReturn
   */
  export type ArmadaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Armada
     */
    select?: ArmadaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Armada
     */
    omit?: ArmadaOmit<ExtArgs> | null
    /**
     * The data used to create many Armadas.
     */
    data: ArmadaCreateManyInput | ArmadaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmadaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Armada update
   */
  export type ArmadaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Armada
     */
    select?: ArmadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Armada
     */
    omit?: ArmadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmadaInclude<ExtArgs> | null
    /**
     * The data needed to update a Armada.
     */
    data: XOR<ArmadaUpdateInput, ArmadaUncheckedUpdateInput>
    /**
     * Choose, which Armada to update.
     */
    where: ArmadaWhereUniqueInput
  }

  /**
   * Armada updateMany
   */
  export type ArmadaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Armadas.
     */
    data: XOR<ArmadaUpdateManyMutationInput, ArmadaUncheckedUpdateManyInput>
    /**
     * Filter which Armadas to update
     */
    where?: ArmadaWhereInput
    /**
     * Limit how many Armadas to update.
     */
    limit?: number
  }

  /**
   * Armada updateManyAndReturn
   */
  export type ArmadaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Armada
     */
    select?: ArmadaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Armada
     */
    omit?: ArmadaOmit<ExtArgs> | null
    /**
     * The data used to update Armadas.
     */
    data: XOR<ArmadaUpdateManyMutationInput, ArmadaUncheckedUpdateManyInput>
    /**
     * Filter which Armadas to update
     */
    where?: ArmadaWhereInput
    /**
     * Limit how many Armadas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmadaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Armada upsert
   */
  export type ArmadaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Armada
     */
    select?: ArmadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Armada
     */
    omit?: ArmadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmadaInclude<ExtArgs> | null
    /**
     * The filter to search for the Armada to update in case it exists.
     */
    where: ArmadaWhereUniqueInput
    /**
     * In case the Armada found by the `where` argument doesn't exist, create a new Armada with this data.
     */
    create: XOR<ArmadaCreateInput, ArmadaUncheckedCreateInput>
    /**
     * In case the Armada was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArmadaUpdateInput, ArmadaUncheckedUpdateInput>
  }

  /**
   * Armada delete
   */
  export type ArmadaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Armada
     */
    select?: ArmadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Armada
     */
    omit?: ArmadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmadaInclude<ExtArgs> | null
    /**
     * Filter which Armada to delete.
     */
    where: ArmadaWhereUniqueInput
  }

  /**
   * Armada deleteMany
   */
  export type ArmadaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Armadas to delete
     */
    where?: ArmadaWhereInput
    /**
     * Limit how many Armadas to delete.
     */
    limit?: number
  }

  /**
   * Armada.pemesanan
   */
  export type Armada$pemesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pemesanan
     */
    omit?: PemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    where?: PemesananWhereInput
    orderBy?: PemesananOrderByWithRelationInput | PemesananOrderByWithRelationInput[]
    cursor?: PemesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PemesananScalarFieldEnum | PemesananScalarFieldEnum[]
  }

  /**
   * Armada without action
   */
  export type ArmadaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Armada
     */
    select?: ArmadaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Armada
     */
    omit?: ArmadaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArmadaInclude<ExtArgs> | null
  }


  /**
   * Model Dompet
   */

  export type AggregateDompet = {
    _count: DompetCountAggregateOutputType | null
    _avg: DompetAvgAggregateOutputType | null
    _sum: DompetSumAggregateOutputType | null
    _min: DompetMinAggregateOutputType | null
    _max: DompetMaxAggregateOutputType | null
  }

  export type DompetAvgAggregateOutputType = {
    saldo: Decimal | null
  }

  export type DompetSumAggregateOutputType = {
    saldo: Decimal | null
  }

  export type DompetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    mitraId: string | null
    saldo: Decimal | null
  }

  export type DompetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    mitraId: string | null
    saldo: Decimal | null
  }

  export type DompetCountAggregateOutputType = {
    id: number
    userId: number
    mitraId: number
    saldo: number
    _all: number
  }


  export type DompetAvgAggregateInputType = {
    saldo?: true
  }

  export type DompetSumAggregateInputType = {
    saldo?: true
  }

  export type DompetMinAggregateInputType = {
    id?: true
    userId?: true
    mitraId?: true
    saldo?: true
  }

  export type DompetMaxAggregateInputType = {
    id?: true
    userId?: true
    mitraId?: true
    saldo?: true
  }

  export type DompetCountAggregateInputType = {
    id?: true
    userId?: true
    mitraId?: true
    saldo?: true
    _all?: true
  }

  export type DompetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dompet to aggregate.
     */
    where?: DompetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dompets to fetch.
     */
    orderBy?: DompetOrderByWithRelationInput | DompetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DompetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dompets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dompets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dompets
    **/
    _count?: true | DompetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DompetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DompetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DompetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DompetMaxAggregateInputType
  }

  export type GetDompetAggregateType<T extends DompetAggregateArgs> = {
        [P in keyof T & keyof AggregateDompet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDompet[P]>
      : GetScalarType<T[P], AggregateDompet[P]>
  }




  export type DompetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DompetWhereInput
    orderBy?: DompetOrderByWithAggregationInput | DompetOrderByWithAggregationInput[]
    by: DompetScalarFieldEnum[] | DompetScalarFieldEnum
    having?: DompetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DompetCountAggregateInputType | true
    _avg?: DompetAvgAggregateInputType
    _sum?: DompetSumAggregateInputType
    _min?: DompetMinAggregateInputType
    _max?: DompetMaxAggregateInputType
  }

  export type DompetGroupByOutputType = {
    id: string
    userId: string | null
    mitraId: string | null
    saldo: Decimal
    _count: DompetCountAggregateOutputType | null
    _avg: DompetAvgAggregateOutputType | null
    _sum: DompetSumAggregateOutputType | null
    _min: DompetMinAggregateOutputType | null
    _max: DompetMaxAggregateOutputType | null
  }

  type GetDompetGroupByPayload<T extends DompetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DompetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DompetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DompetGroupByOutputType[P]>
            : GetScalarType<T[P], DompetGroupByOutputType[P]>
        }
      >
    >


  export type DompetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mitraId?: boolean
    saldo?: boolean
    user?: boolean | Dompet$userArgs<ExtArgs>
    mitra?: boolean | Dompet$mitraArgs<ExtArgs>
    transaksi?: boolean | Dompet$transaksiArgs<ExtArgs>
    _count?: boolean | DompetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dompet"]>

  export type DompetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mitraId?: boolean
    saldo?: boolean
    user?: boolean | Dompet$userArgs<ExtArgs>
    mitra?: boolean | Dompet$mitraArgs<ExtArgs>
  }, ExtArgs["result"]["dompet"]>

  export type DompetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mitraId?: boolean
    saldo?: boolean
    user?: boolean | Dompet$userArgs<ExtArgs>
    mitra?: boolean | Dompet$mitraArgs<ExtArgs>
  }, ExtArgs["result"]["dompet"]>

  export type DompetSelectScalar = {
    id?: boolean
    userId?: boolean
    mitraId?: boolean
    saldo?: boolean
  }

  export type DompetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "mitraId" | "saldo", ExtArgs["result"]["dompet"]>
  export type DompetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Dompet$userArgs<ExtArgs>
    mitra?: boolean | Dompet$mitraArgs<ExtArgs>
    transaksi?: boolean | Dompet$transaksiArgs<ExtArgs>
    _count?: boolean | DompetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DompetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Dompet$userArgs<ExtArgs>
    mitra?: boolean | Dompet$mitraArgs<ExtArgs>
  }
  export type DompetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Dompet$userArgs<ExtArgs>
    mitra?: boolean | Dompet$mitraArgs<ExtArgs>
  }

  export type $DompetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dompet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      mitra: Prisma.$MitraPayload<ExtArgs> | null
      transaksi: Prisma.$TransaksiSaldoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      mitraId: string | null
      saldo: Prisma.Decimal
    }, ExtArgs["result"]["dompet"]>
    composites: {}
  }

  type DompetGetPayload<S extends boolean | null | undefined | DompetDefaultArgs> = $Result.GetResult<Prisma.$DompetPayload, S>

  type DompetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DompetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DompetCountAggregateInputType | true
    }

  export interface DompetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dompet'], meta: { name: 'Dompet' } }
    /**
     * Find zero or one Dompet that matches the filter.
     * @param {DompetFindUniqueArgs} args - Arguments to find a Dompet
     * @example
     * // Get one Dompet
     * const dompet = await prisma.dompet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DompetFindUniqueArgs>(args: SelectSubset<T, DompetFindUniqueArgs<ExtArgs>>): Prisma__DompetClient<$Result.GetResult<Prisma.$DompetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dompet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DompetFindUniqueOrThrowArgs} args - Arguments to find a Dompet
     * @example
     * // Get one Dompet
     * const dompet = await prisma.dompet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DompetFindUniqueOrThrowArgs>(args: SelectSubset<T, DompetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DompetClient<$Result.GetResult<Prisma.$DompetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dompet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DompetFindFirstArgs} args - Arguments to find a Dompet
     * @example
     * // Get one Dompet
     * const dompet = await prisma.dompet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DompetFindFirstArgs>(args?: SelectSubset<T, DompetFindFirstArgs<ExtArgs>>): Prisma__DompetClient<$Result.GetResult<Prisma.$DompetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dompet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DompetFindFirstOrThrowArgs} args - Arguments to find a Dompet
     * @example
     * // Get one Dompet
     * const dompet = await prisma.dompet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DompetFindFirstOrThrowArgs>(args?: SelectSubset<T, DompetFindFirstOrThrowArgs<ExtArgs>>): Prisma__DompetClient<$Result.GetResult<Prisma.$DompetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dompets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DompetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dompets
     * const dompets = await prisma.dompet.findMany()
     * 
     * // Get first 10 Dompets
     * const dompets = await prisma.dompet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dompetWithIdOnly = await prisma.dompet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DompetFindManyArgs>(args?: SelectSubset<T, DompetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DompetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dompet.
     * @param {DompetCreateArgs} args - Arguments to create a Dompet.
     * @example
     * // Create one Dompet
     * const Dompet = await prisma.dompet.create({
     *   data: {
     *     // ... data to create a Dompet
     *   }
     * })
     * 
     */
    create<T extends DompetCreateArgs>(args: SelectSubset<T, DompetCreateArgs<ExtArgs>>): Prisma__DompetClient<$Result.GetResult<Prisma.$DompetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dompets.
     * @param {DompetCreateManyArgs} args - Arguments to create many Dompets.
     * @example
     * // Create many Dompets
     * const dompet = await prisma.dompet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DompetCreateManyArgs>(args?: SelectSubset<T, DompetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dompets and returns the data saved in the database.
     * @param {DompetCreateManyAndReturnArgs} args - Arguments to create many Dompets.
     * @example
     * // Create many Dompets
     * const dompet = await prisma.dompet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dompets and only return the `id`
     * const dompetWithIdOnly = await prisma.dompet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DompetCreateManyAndReturnArgs>(args?: SelectSubset<T, DompetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DompetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dompet.
     * @param {DompetDeleteArgs} args - Arguments to delete one Dompet.
     * @example
     * // Delete one Dompet
     * const Dompet = await prisma.dompet.delete({
     *   where: {
     *     // ... filter to delete one Dompet
     *   }
     * })
     * 
     */
    delete<T extends DompetDeleteArgs>(args: SelectSubset<T, DompetDeleteArgs<ExtArgs>>): Prisma__DompetClient<$Result.GetResult<Prisma.$DompetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dompet.
     * @param {DompetUpdateArgs} args - Arguments to update one Dompet.
     * @example
     * // Update one Dompet
     * const dompet = await prisma.dompet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DompetUpdateArgs>(args: SelectSubset<T, DompetUpdateArgs<ExtArgs>>): Prisma__DompetClient<$Result.GetResult<Prisma.$DompetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dompets.
     * @param {DompetDeleteManyArgs} args - Arguments to filter Dompets to delete.
     * @example
     * // Delete a few Dompets
     * const { count } = await prisma.dompet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DompetDeleteManyArgs>(args?: SelectSubset<T, DompetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dompets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DompetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dompets
     * const dompet = await prisma.dompet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DompetUpdateManyArgs>(args: SelectSubset<T, DompetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dompets and returns the data updated in the database.
     * @param {DompetUpdateManyAndReturnArgs} args - Arguments to update many Dompets.
     * @example
     * // Update many Dompets
     * const dompet = await prisma.dompet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dompets and only return the `id`
     * const dompetWithIdOnly = await prisma.dompet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DompetUpdateManyAndReturnArgs>(args: SelectSubset<T, DompetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DompetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dompet.
     * @param {DompetUpsertArgs} args - Arguments to update or create a Dompet.
     * @example
     * // Update or create a Dompet
     * const dompet = await prisma.dompet.upsert({
     *   create: {
     *     // ... data to create a Dompet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dompet we want to update
     *   }
     * })
     */
    upsert<T extends DompetUpsertArgs>(args: SelectSubset<T, DompetUpsertArgs<ExtArgs>>): Prisma__DompetClient<$Result.GetResult<Prisma.$DompetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dompets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DompetCountArgs} args - Arguments to filter Dompets to count.
     * @example
     * // Count the number of Dompets
     * const count = await prisma.dompet.count({
     *   where: {
     *     // ... the filter for the Dompets we want to count
     *   }
     * })
    **/
    count<T extends DompetCountArgs>(
      args?: Subset<T, DompetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DompetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dompet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DompetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DompetAggregateArgs>(args: Subset<T, DompetAggregateArgs>): Prisma.PrismaPromise<GetDompetAggregateType<T>>

    /**
     * Group by Dompet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DompetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DompetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DompetGroupByArgs['orderBy'] }
        : { orderBy?: DompetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DompetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDompetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dompet model
   */
  readonly fields: DompetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dompet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DompetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Dompet$userArgs<ExtArgs> = {}>(args?: Subset<T, Dompet$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mitra<T extends Dompet$mitraArgs<ExtArgs> = {}>(args?: Subset<T, Dompet$mitraArgs<ExtArgs>>): Prisma__MitraClient<$Result.GetResult<Prisma.$MitraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transaksi<T extends Dompet$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, Dompet$transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiSaldoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dompet model
   */
  interface DompetFieldRefs {
    readonly id: FieldRef<"Dompet", 'String'>
    readonly userId: FieldRef<"Dompet", 'String'>
    readonly mitraId: FieldRef<"Dompet", 'String'>
    readonly saldo: FieldRef<"Dompet", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Dompet findUnique
   */
  export type DompetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dompet
     */
    select?: DompetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dompet
     */
    omit?: DompetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DompetInclude<ExtArgs> | null
    /**
     * Filter, which Dompet to fetch.
     */
    where: DompetWhereUniqueInput
  }

  /**
   * Dompet findUniqueOrThrow
   */
  export type DompetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dompet
     */
    select?: DompetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dompet
     */
    omit?: DompetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DompetInclude<ExtArgs> | null
    /**
     * Filter, which Dompet to fetch.
     */
    where: DompetWhereUniqueInput
  }

  /**
   * Dompet findFirst
   */
  export type DompetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dompet
     */
    select?: DompetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dompet
     */
    omit?: DompetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DompetInclude<ExtArgs> | null
    /**
     * Filter, which Dompet to fetch.
     */
    where?: DompetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dompets to fetch.
     */
    orderBy?: DompetOrderByWithRelationInput | DompetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dompets.
     */
    cursor?: DompetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dompets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dompets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dompets.
     */
    distinct?: DompetScalarFieldEnum | DompetScalarFieldEnum[]
  }

  /**
   * Dompet findFirstOrThrow
   */
  export type DompetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dompet
     */
    select?: DompetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dompet
     */
    omit?: DompetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DompetInclude<ExtArgs> | null
    /**
     * Filter, which Dompet to fetch.
     */
    where?: DompetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dompets to fetch.
     */
    orderBy?: DompetOrderByWithRelationInput | DompetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dompets.
     */
    cursor?: DompetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dompets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dompets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dompets.
     */
    distinct?: DompetScalarFieldEnum | DompetScalarFieldEnum[]
  }

  /**
   * Dompet findMany
   */
  export type DompetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dompet
     */
    select?: DompetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dompet
     */
    omit?: DompetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DompetInclude<ExtArgs> | null
    /**
     * Filter, which Dompets to fetch.
     */
    where?: DompetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dompets to fetch.
     */
    orderBy?: DompetOrderByWithRelationInput | DompetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dompets.
     */
    cursor?: DompetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dompets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dompets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dompets.
     */
    distinct?: DompetScalarFieldEnum | DompetScalarFieldEnum[]
  }

  /**
   * Dompet create
   */
  export type DompetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dompet
     */
    select?: DompetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dompet
     */
    omit?: DompetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DompetInclude<ExtArgs> | null
    /**
     * The data needed to create a Dompet.
     */
    data?: XOR<DompetCreateInput, DompetUncheckedCreateInput>
  }

  /**
   * Dompet createMany
   */
  export type DompetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dompets.
     */
    data: DompetCreateManyInput | DompetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dompet createManyAndReturn
   */
  export type DompetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dompet
     */
    select?: DompetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dompet
     */
    omit?: DompetOmit<ExtArgs> | null
    /**
     * The data used to create many Dompets.
     */
    data: DompetCreateManyInput | DompetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DompetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dompet update
   */
  export type DompetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dompet
     */
    select?: DompetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dompet
     */
    omit?: DompetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DompetInclude<ExtArgs> | null
    /**
     * The data needed to update a Dompet.
     */
    data: XOR<DompetUpdateInput, DompetUncheckedUpdateInput>
    /**
     * Choose, which Dompet to update.
     */
    where: DompetWhereUniqueInput
  }

  /**
   * Dompet updateMany
   */
  export type DompetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dompets.
     */
    data: XOR<DompetUpdateManyMutationInput, DompetUncheckedUpdateManyInput>
    /**
     * Filter which Dompets to update
     */
    where?: DompetWhereInput
    /**
     * Limit how many Dompets to update.
     */
    limit?: number
  }

  /**
   * Dompet updateManyAndReturn
   */
  export type DompetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dompet
     */
    select?: DompetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dompet
     */
    omit?: DompetOmit<ExtArgs> | null
    /**
     * The data used to update Dompets.
     */
    data: XOR<DompetUpdateManyMutationInput, DompetUncheckedUpdateManyInput>
    /**
     * Filter which Dompets to update
     */
    where?: DompetWhereInput
    /**
     * Limit how many Dompets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DompetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dompet upsert
   */
  export type DompetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dompet
     */
    select?: DompetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dompet
     */
    omit?: DompetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DompetInclude<ExtArgs> | null
    /**
     * The filter to search for the Dompet to update in case it exists.
     */
    where: DompetWhereUniqueInput
    /**
     * In case the Dompet found by the `where` argument doesn't exist, create a new Dompet with this data.
     */
    create: XOR<DompetCreateInput, DompetUncheckedCreateInput>
    /**
     * In case the Dompet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DompetUpdateInput, DompetUncheckedUpdateInput>
  }

  /**
   * Dompet delete
   */
  export type DompetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dompet
     */
    select?: DompetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dompet
     */
    omit?: DompetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DompetInclude<ExtArgs> | null
    /**
     * Filter which Dompet to delete.
     */
    where: DompetWhereUniqueInput
  }

  /**
   * Dompet deleteMany
   */
  export type DompetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dompets to delete
     */
    where?: DompetWhereInput
    /**
     * Limit how many Dompets to delete.
     */
    limit?: number
  }

  /**
   * Dompet.user
   */
  export type Dompet$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Dompet.mitra
   */
  export type Dompet$mitraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mitra
     */
    select?: MitraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mitra
     */
    omit?: MitraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MitraInclude<ExtArgs> | null
    where?: MitraWhereInput
  }

  /**
   * Dompet.transaksi
   */
  export type Dompet$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiSaldo
     */
    select?: TransaksiSaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiSaldo
     */
    omit?: TransaksiSaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiSaldoInclude<ExtArgs> | null
    where?: TransaksiSaldoWhereInput
    orderBy?: TransaksiSaldoOrderByWithRelationInput | TransaksiSaldoOrderByWithRelationInput[]
    cursor?: TransaksiSaldoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiSaldoScalarFieldEnum | TransaksiSaldoScalarFieldEnum[]
  }

  /**
   * Dompet without action
   */
  export type DompetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dompet
     */
    select?: DompetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dompet
     */
    omit?: DompetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DompetInclude<ExtArgs> | null
  }


  /**
   * Model Pemesanan
   */

  export type AggregatePemesanan = {
    _count: PemesananCountAggregateOutputType | null
    _avg: PemesananAvgAggregateOutputType | null
    _sum: PemesananSumAggregateOutputType | null
    _min: PemesananMinAggregateOutputType | null
    _max: PemesananMaxAggregateOutputType | null
  }

  export type PemesananAvgAggregateOutputType = {
    totalHarga: Decimal | null
  }

  export type PemesananSumAggregateOutputType = {
    totalHarga: Decimal | null
  }

  export type PemesananMinAggregateOutputType = {
    id: string | null
    userId: string | null
    armadaId: string | null
    tanggalSewa: Date | null
    tanggalSelesai: Date | null
    totalHarga: Decimal | null
    statusPemesanan: $Enums.StatusPemesanan | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PemesananMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    armadaId: string | null
    tanggalSewa: Date | null
    tanggalSelesai: Date | null
    totalHarga: Decimal | null
    statusPemesanan: $Enums.StatusPemesanan | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PemesananCountAggregateOutputType = {
    id: number
    userId: number
    armadaId: number
    tanggalSewa: number
    tanggalSelesai: number
    totalHarga: number
    statusPemesanan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PemesananAvgAggregateInputType = {
    totalHarga?: true
  }

  export type PemesananSumAggregateInputType = {
    totalHarga?: true
  }

  export type PemesananMinAggregateInputType = {
    id?: true
    userId?: true
    armadaId?: true
    tanggalSewa?: true
    tanggalSelesai?: true
    totalHarga?: true
    statusPemesanan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PemesananMaxAggregateInputType = {
    id?: true
    userId?: true
    armadaId?: true
    tanggalSewa?: true
    tanggalSelesai?: true
    totalHarga?: true
    statusPemesanan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PemesananCountAggregateInputType = {
    id?: true
    userId?: true
    armadaId?: true
    tanggalSewa?: true
    tanggalSelesai?: true
    totalHarga?: true
    statusPemesanan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PemesananAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pemesanan to aggregate.
     */
    where?: PemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pemesanans to fetch.
     */
    orderBy?: PemesananOrderByWithRelationInput | PemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pemesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pemesanans
    **/
    _count?: true | PemesananCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PemesananAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PemesananSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PemesananMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PemesananMaxAggregateInputType
  }

  export type GetPemesananAggregateType<T extends PemesananAggregateArgs> = {
        [P in keyof T & keyof AggregatePemesanan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePemesanan[P]>
      : GetScalarType<T[P], AggregatePemesanan[P]>
  }




  export type PemesananGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PemesananWhereInput
    orderBy?: PemesananOrderByWithAggregationInput | PemesananOrderByWithAggregationInput[]
    by: PemesananScalarFieldEnum[] | PemesananScalarFieldEnum
    having?: PemesananScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PemesananCountAggregateInputType | true
    _avg?: PemesananAvgAggregateInputType
    _sum?: PemesananSumAggregateInputType
    _min?: PemesananMinAggregateInputType
    _max?: PemesananMaxAggregateInputType
  }

  export type PemesananGroupByOutputType = {
    id: string
    userId: string
    armadaId: string
    tanggalSewa: Date
    tanggalSelesai: Date
    totalHarga: Decimal
    statusPemesanan: $Enums.StatusPemesanan
    createdAt: Date
    updatedAt: Date
    _count: PemesananCountAggregateOutputType | null
    _avg: PemesananAvgAggregateOutputType | null
    _sum: PemesananSumAggregateOutputType | null
    _min: PemesananMinAggregateOutputType | null
    _max: PemesananMaxAggregateOutputType | null
  }

  type GetPemesananGroupByPayload<T extends PemesananGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PemesananGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PemesananGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PemesananGroupByOutputType[P]>
            : GetScalarType<T[P], PemesananGroupByOutputType[P]>
        }
      >
    >


  export type PemesananSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    armadaId?: boolean
    tanggalSewa?: boolean
    tanggalSelesai?: boolean
    totalHarga?: boolean
    statusPemesanan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    armada?: boolean | ArmadaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pemesanan"]>

  export type PemesananSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    armadaId?: boolean
    tanggalSewa?: boolean
    tanggalSelesai?: boolean
    totalHarga?: boolean
    statusPemesanan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    armada?: boolean | ArmadaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pemesanan"]>

  export type PemesananSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    armadaId?: boolean
    tanggalSewa?: boolean
    tanggalSelesai?: boolean
    totalHarga?: boolean
    statusPemesanan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    armada?: boolean | ArmadaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pemesanan"]>

  export type PemesananSelectScalar = {
    id?: boolean
    userId?: boolean
    armadaId?: boolean
    tanggalSewa?: boolean
    tanggalSelesai?: boolean
    totalHarga?: boolean
    statusPemesanan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PemesananOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "armadaId" | "tanggalSewa" | "tanggalSelesai" | "totalHarga" | "statusPemesanan" | "createdAt" | "updatedAt", ExtArgs["result"]["pemesanan"]>
  export type PemesananInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    armada?: boolean | ArmadaDefaultArgs<ExtArgs>
  }
  export type PemesananIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    armada?: boolean | ArmadaDefaultArgs<ExtArgs>
  }
  export type PemesananIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    armada?: boolean | ArmadaDefaultArgs<ExtArgs>
  }

  export type $PemesananPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pemesanan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      armada: Prisma.$ArmadaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      armadaId: string
      tanggalSewa: Date
      tanggalSelesai: Date
      totalHarga: Prisma.Decimal
      statusPemesanan: $Enums.StatusPemesanan
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pemesanan"]>
    composites: {}
  }

  type PemesananGetPayload<S extends boolean | null | undefined | PemesananDefaultArgs> = $Result.GetResult<Prisma.$PemesananPayload, S>

  type PemesananCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PemesananFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PemesananCountAggregateInputType | true
    }

  export interface PemesananDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pemesanan'], meta: { name: 'Pemesanan' } }
    /**
     * Find zero or one Pemesanan that matches the filter.
     * @param {PemesananFindUniqueArgs} args - Arguments to find a Pemesanan
     * @example
     * // Get one Pemesanan
     * const pemesanan = await prisma.pemesanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PemesananFindUniqueArgs>(args: SelectSubset<T, PemesananFindUniqueArgs<ExtArgs>>): Prisma__PemesananClient<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pemesanan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PemesananFindUniqueOrThrowArgs} args - Arguments to find a Pemesanan
     * @example
     * // Get one Pemesanan
     * const pemesanan = await prisma.pemesanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PemesananFindUniqueOrThrowArgs>(args: SelectSubset<T, PemesananFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PemesananClient<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pemesanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PemesananFindFirstArgs} args - Arguments to find a Pemesanan
     * @example
     * // Get one Pemesanan
     * const pemesanan = await prisma.pemesanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PemesananFindFirstArgs>(args?: SelectSubset<T, PemesananFindFirstArgs<ExtArgs>>): Prisma__PemesananClient<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pemesanan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PemesananFindFirstOrThrowArgs} args - Arguments to find a Pemesanan
     * @example
     * // Get one Pemesanan
     * const pemesanan = await prisma.pemesanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PemesananFindFirstOrThrowArgs>(args?: SelectSubset<T, PemesananFindFirstOrThrowArgs<ExtArgs>>): Prisma__PemesananClient<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pemesanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PemesananFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pemesanans
     * const pemesanans = await prisma.pemesanan.findMany()
     * 
     * // Get first 10 Pemesanans
     * const pemesanans = await prisma.pemesanan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pemesananWithIdOnly = await prisma.pemesanan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PemesananFindManyArgs>(args?: SelectSubset<T, PemesananFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pemesanan.
     * @param {PemesananCreateArgs} args - Arguments to create a Pemesanan.
     * @example
     * // Create one Pemesanan
     * const Pemesanan = await prisma.pemesanan.create({
     *   data: {
     *     // ... data to create a Pemesanan
     *   }
     * })
     * 
     */
    create<T extends PemesananCreateArgs>(args: SelectSubset<T, PemesananCreateArgs<ExtArgs>>): Prisma__PemesananClient<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pemesanans.
     * @param {PemesananCreateManyArgs} args - Arguments to create many Pemesanans.
     * @example
     * // Create many Pemesanans
     * const pemesanan = await prisma.pemesanan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PemesananCreateManyArgs>(args?: SelectSubset<T, PemesananCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pemesanans and returns the data saved in the database.
     * @param {PemesananCreateManyAndReturnArgs} args - Arguments to create many Pemesanans.
     * @example
     * // Create many Pemesanans
     * const pemesanan = await prisma.pemesanan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pemesanans and only return the `id`
     * const pemesananWithIdOnly = await prisma.pemesanan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PemesananCreateManyAndReturnArgs>(args?: SelectSubset<T, PemesananCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pemesanan.
     * @param {PemesananDeleteArgs} args - Arguments to delete one Pemesanan.
     * @example
     * // Delete one Pemesanan
     * const Pemesanan = await prisma.pemesanan.delete({
     *   where: {
     *     // ... filter to delete one Pemesanan
     *   }
     * })
     * 
     */
    delete<T extends PemesananDeleteArgs>(args: SelectSubset<T, PemesananDeleteArgs<ExtArgs>>): Prisma__PemesananClient<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pemesanan.
     * @param {PemesananUpdateArgs} args - Arguments to update one Pemesanan.
     * @example
     * // Update one Pemesanan
     * const pemesanan = await prisma.pemesanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PemesananUpdateArgs>(args: SelectSubset<T, PemesananUpdateArgs<ExtArgs>>): Prisma__PemesananClient<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pemesanans.
     * @param {PemesananDeleteManyArgs} args - Arguments to filter Pemesanans to delete.
     * @example
     * // Delete a few Pemesanans
     * const { count } = await prisma.pemesanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PemesananDeleteManyArgs>(args?: SelectSubset<T, PemesananDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pemesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PemesananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pemesanans
     * const pemesanan = await prisma.pemesanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PemesananUpdateManyArgs>(args: SelectSubset<T, PemesananUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pemesanans and returns the data updated in the database.
     * @param {PemesananUpdateManyAndReturnArgs} args - Arguments to update many Pemesanans.
     * @example
     * // Update many Pemesanans
     * const pemesanan = await prisma.pemesanan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pemesanans and only return the `id`
     * const pemesananWithIdOnly = await prisma.pemesanan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PemesananUpdateManyAndReturnArgs>(args: SelectSubset<T, PemesananUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pemesanan.
     * @param {PemesananUpsertArgs} args - Arguments to update or create a Pemesanan.
     * @example
     * // Update or create a Pemesanan
     * const pemesanan = await prisma.pemesanan.upsert({
     *   create: {
     *     // ... data to create a Pemesanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pemesanan we want to update
     *   }
     * })
     */
    upsert<T extends PemesananUpsertArgs>(args: SelectSubset<T, PemesananUpsertArgs<ExtArgs>>): Prisma__PemesananClient<$Result.GetResult<Prisma.$PemesananPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pemesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PemesananCountArgs} args - Arguments to filter Pemesanans to count.
     * @example
     * // Count the number of Pemesanans
     * const count = await prisma.pemesanan.count({
     *   where: {
     *     // ... the filter for the Pemesanans we want to count
     *   }
     * })
    **/
    count<T extends PemesananCountArgs>(
      args?: Subset<T, PemesananCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PemesananCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pemesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PemesananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PemesananAggregateArgs>(args: Subset<T, PemesananAggregateArgs>): Prisma.PrismaPromise<GetPemesananAggregateType<T>>

    /**
     * Group by Pemesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PemesananGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PemesananGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PemesananGroupByArgs['orderBy'] }
        : { orderBy?: PemesananGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PemesananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPemesananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pemesanan model
   */
  readonly fields: PemesananFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pemesanan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PemesananClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    armada<T extends ArmadaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArmadaDefaultArgs<ExtArgs>>): Prisma__ArmadaClient<$Result.GetResult<Prisma.$ArmadaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pemesanan model
   */
  interface PemesananFieldRefs {
    readonly id: FieldRef<"Pemesanan", 'String'>
    readonly userId: FieldRef<"Pemesanan", 'String'>
    readonly armadaId: FieldRef<"Pemesanan", 'String'>
    readonly tanggalSewa: FieldRef<"Pemesanan", 'DateTime'>
    readonly tanggalSelesai: FieldRef<"Pemesanan", 'DateTime'>
    readonly totalHarga: FieldRef<"Pemesanan", 'Decimal'>
    readonly statusPemesanan: FieldRef<"Pemesanan", 'StatusPemesanan'>
    readonly createdAt: FieldRef<"Pemesanan", 'DateTime'>
    readonly updatedAt: FieldRef<"Pemesanan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pemesanan findUnique
   */
  export type PemesananFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pemesanan
     */
    omit?: PemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * Filter, which Pemesanan to fetch.
     */
    where: PemesananWhereUniqueInput
  }

  /**
   * Pemesanan findUniqueOrThrow
   */
  export type PemesananFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pemesanan
     */
    omit?: PemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * Filter, which Pemesanan to fetch.
     */
    where: PemesananWhereUniqueInput
  }

  /**
   * Pemesanan findFirst
   */
  export type PemesananFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pemesanan
     */
    omit?: PemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * Filter, which Pemesanan to fetch.
     */
    where?: PemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pemesanans to fetch.
     */
    orderBy?: PemesananOrderByWithRelationInput | PemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pemesanans.
     */
    cursor?: PemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pemesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pemesanans.
     */
    distinct?: PemesananScalarFieldEnum | PemesananScalarFieldEnum[]
  }

  /**
   * Pemesanan findFirstOrThrow
   */
  export type PemesananFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pemesanan
     */
    omit?: PemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * Filter, which Pemesanan to fetch.
     */
    where?: PemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pemesanans to fetch.
     */
    orderBy?: PemesananOrderByWithRelationInput | PemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pemesanans.
     */
    cursor?: PemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pemesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pemesanans.
     */
    distinct?: PemesananScalarFieldEnum | PemesananScalarFieldEnum[]
  }

  /**
   * Pemesanan findMany
   */
  export type PemesananFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pemesanan
     */
    omit?: PemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * Filter, which Pemesanans to fetch.
     */
    where?: PemesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pemesanans to fetch.
     */
    orderBy?: PemesananOrderByWithRelationInput | PemesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pemesanans.
     */
    cursor?: PemesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pemesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pemesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pemesanans.
     */
    distinct?: PemesananScalarFieldEnum | PemesananScalarFieldEnum[]
  }

  /**
   * Pemesanan create
   */
  export type PemesananCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pemesanan
     */
    omit?: PemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * The data needed to create a Pemesanan.
     */
    data: XOR<PemesananCreateInput, PemesananUncheckedCreateInput>
  }

  /**
   * Pemesanan createMany
   */
  export type PemesananCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pemesanans.
     */
    data: PemesananCreateManyInput | PemesananCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pemesanan createManyAndReturn
   */
  export type PemesananCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pemesanan
     */
    omit?: PemesananOmit<ExtArgs> | null
    /**
     * The data used to create many Pemesanans.
     */
    data: PemesananCreateManyInput | PemesananCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pemesanan update
   */
  export type PemesananUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pemesanan
     */
    omit?: PemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * The data needed to update a Pemesanan.
     */
    data: XOR<PemesananUpdateInput, PemesananUncheckedUpdateInput>
    /**
     * Choose, which Pemesanan to update.
     */
    where: PemesananWhereUniqueInput
  }

  /**
   * Pemesanan updateMany
   */
  export type PemesananUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pemesanans.
     */
    data: XOR<PemesananUpdateManyMutationInput, PemesananUncheckedUpdateManyInput>
    /**
     * Filter which Pemesanans to update
     */
    where?: PemesananWhereInput
    /**
     * Limit how many Pemesanans to update.
     */
    limit?: number
  }

  /**
   * Pemesanan updateManyAndReturn
   */
  export type PemesananUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pemesanan
     */
    omit?: PemesananOmit<ExtArgs> | null
    /**
     * The data used to update Pemesanans.
     */
    data: XOR<PemesananUpdateManyMutationInput, PemesananUncheckedUpdateManyInput>
    /**
     * Filter which Pemesanans to update
     */
    where?: PemesananWhereInput
    /**
     * Limit how many Pemesanans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pemesanan upsert
   */
  export type PemesananUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pemesanan
     */
    omit?: PemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * The filter to search for the Pemesanan to update in case it exists.
     */
    where: PemesananWhereUniqueInput
    /**
     * In case the Pemesanan found by the `where` argument doesn't exist, create a new Pemesanan with this data.
     */
    create: XOR<PemesananCreateInput, PemesananUncheckedCreateInput>
    /**
     * In case the Pemesanan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PemesananUpdateInput, PemesananUncheckedUpdateInput>
  }

  /**
   * Pemesanan delete
   */
  export type PemesananDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pemesanan
     */
    omit?: PemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
    /**
     * Filter which Pemesanan to delete.
     */
    where: PemesananWhereUniqueInput
  }

  /**
   * Pemesanan deleteMany
   */
  export type PemesananDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pemesanans to delete
     */
    where?: PemesananWhereInput
    /**
     * Limit how many Pemesanans to delete.
     */
    limit?: number
  }

  /**
   * Pemesanan without action
   */
  export type PemesananDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pemesanan
     */
    select?: PemesananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pemesanan
     */
    omit?: PemesananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PemesananInclude<ExtArgs> | null
  }


  /**
   * Model TransaksiSaldo
   */

  export type AggregateTransaksiSaldo = {
    _count: TransaksiSaldoCountAggregateOutputType | null
    _avg: TransaksiSaldoAvgAggregateOutputType | null
    _sum: TransaksiSaldoSumAggregateOutputType | null
    _min: TransaksiSaldoMinAggregateOutputType | null
    _max: TransaksiSaldoMaxAggregateOutputType | null
  }

  export type TransaksiSaldoAvgAggregateOutputType = {
    jumlah: Decimal | null
  }

  export type TransaksiSaldoSumAggregateOutputType = {
    jumlah: Decimal | null
  }

  export type TransaksiSaldoMinAggregateOutputType = {
    id: string | null
    dompetId: string | null
    jenis: $Enums.JenisTransaksi | null
    jumlah: Decimal | null
    keterangan: string | null
    tanggalTransaksi: Date | null
  }

  export type TransaksiSaldoMaxAggregateOutputType = {
    id: string | null
    dompetId: string | null
    jenis: $Enums.JenisTransaksi | null
    jumlah: Decimal | null
    keterangan: string | null
    tanggalTransaksi: Date | null
  }

  export type TransaksiSaldoCountAggregateOutputType = {
    id: number
    dompetId: number
    jenis: number
    jumlah: number
    keterangan: number
    tanggalTransaksi: number
    _all: number
  }


  export type TransaksiSaldoAvgAggregateInputType = {
    jumlah?: true
  }

  export type TransaksiSaldoSumAggregateInputType = {
    jumlah?: true
  }

  export type TransaksiSaldoMinAggregateInputType = {
    id?: true
    dompetId?: true
    jenis?: true
    jumlah?: true
    keterangan?: true
    tanggalTransaksi?: true
  }

  export type TransaksiSaldoMaxAggregateInputType = {
    id?: true
    dompetId?: true
    jenis?: true
    jumlah?: true
    keterangan?: true
    tanggalTransaksi?: true
  }

  export type TransaksiSaldoCountAggregateInputType = {
    id?: true
    dompetId?: true
    jenis?: true
    jumlah?: true
    keterangan?: true
    tanggalTransaksi?: true
    _all?: true
  }

  export type TransaksiSaldoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransaksiSaldo to aggregate.
     */
    where?: TransaksiSaldoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiSaldos to fetch.
     */
    orderBy?: TransaksiSaldoOrderByWithRelationInput | TransaksiSaldoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransaksiSaldoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiSaldos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiSaldos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransaksiSaldos
    **/
    _count?: true | TransaksiSaldoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaksiSaldoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaksiSaldoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaksiSaldoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaksiSaldoMaxAggregateInputType
  }

  export type GetTransaksiSaldoAggregateType<T extends TransaksiSaldoAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksiSaldo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksiSaldo[P]>
      : GetScalarType<T[P], AggregateTransaksiSaldo[P]>
  }




  export type TransaksiSaldoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiSaldoWhereInput
    orderBy?: TransaksiSaldoOrderByWithAggregationInput | TransaksiSaldoOrderByWithAggregationInput[]
    by: TransaksiSaldoScalarFieldEnum[] | TransaksiSaldoScalarFieldEnum
    having?: TransaksiSaldoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaksiSaldoCountAggregateInputType | true
    _avg?: TransaksiSaldoAvgAggregateInputType
    _sum?: TransaksiSaldoSumAggregateInputType
    _min?: TransaksiSaldoMinAggregateInputType
    _max?: TransaksiSaldoMaxAggregateInputType
  }

  export type TransaksiSaldoGroupByOutputType = {
    id: string
    dompetId: string
    jenis: $Enums.JenisTransaksi
    jumlah: Decimal
    keterangan: string | null
    tanggalTransaksi: Date
    _count: TransaksiSaldoCountAggregateOutputType | null
    _avg: TransaksiSaldoAvgAggregateOutputType | null
    _sum: TransaksiSaldoSumAggregateOutputType | null
    _min: TransaksiSaldoMinAggregateOutputType | null
    _max: TransaksiSaldoMaxAggregateOutputType | null
  }

  type GetTransaksiSaldoGroupByPayload<T extends TransaksiSaldoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaksiSaldoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaksiSaldoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaksiSaldoGroupByOutputType[P]>
            : GetScalarType<T[P], TransaksiSaldoGroupByOutputType[P]>
        }
      >
    >


  export type TransaksiSaldoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dompetId?: boolean
    jenis?: boolean
    jumlah?: boolean
    keterangan?: boolean
    tanggalTransaksi?: boolean
    dompet?: boolean | DompetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksiSaldo"]>

  export type TransaksiSaldoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dompetId?: boolean
    jenis?: boolean
    jumlah?: boolean
    keterangan?: boolean
    tanggalTransaksi?: boolean
    dompet?: boolean | DompetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksiSaldo"]>

  export type TransaksiSaldoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dompetId?: boolean
    jenis?: boolean
    jumlah?: boolean
    keterangan?: boolean
    tanggalTransaksi?: boolean
    dompet?: boolean | DompetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksiSaldo"]>

  export type TransaksiSaldoSelectScalar = {
    id?: boolean
    dompetId?: boolean
    jenis?: boolean
    jumlah?: boolean
    keterangan?: boolean
    tanggalTransaksi?: boolean
  }

  export type TransaksiSaldoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dompetId" | "jenis" | "jumlah" | "keterangan" | "tanggalTransaksi", ExtArgs["result"]["transaksiSaldo"]>
  export type TransaksiSaldoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dompet?: boolean | DompetDefaultArgs<ExtArgs>
  }
  export type TransaksiSaldoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dompet?: boolean | DompetDefaultArgs<ExtArgs>
  }
  export type TransaksiSaldoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dompet?: boolean | DompetDefaultArgs<ExtArgs>
  }

  export type $TransaksiSaldoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransaksiSaldo"
    objects: {
      dompet: Prisma.$DompetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dompetId: string
      jenis: $Enums.JenisTransaksi
      jumlah: Prisma.Decimal
      keterangan: string | null
      tanggalTransaksi: Date
    }, ExtArgs["result"]["transaksiSaldo"]>
    composites: {}
  }

  type TransaksiSaldoGetPayload<S extends boolean | null | undefined | TransaksiSaldoDefaultArgs> = $Result.GetResult<Prisma.$TransaksiSaldoPayload, S>

  type TransaksiSaldoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransaksiSaldoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaksiSaldoCountAggregateInputType | true
    }

  export interface TransaksiSaldoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransaksiSaldo'], meta: { name: 'TransaksiSaldo' } }
    /**
     * Find zero or one TransaksiSaldo that matches the filter.
     * @param {TransaksiSaldoFindUniqueArgs} args - Arguments to find a TransaksiSaldo
     * @example
     * // Get one TransaksiSaldo
     * const transaksiSaldo = await prisma.transaksiSaldo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransaksiSaldoFindUniqueArgs>(args: SelectSubset<T, TransaksiSaldoFindUniqueArgs<ExtArgs>>): Prisma__TransaksiSaldoClient<$Result.GetResult<Prisma.$TransaksiSaldoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransaksiSaldo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransaksiSaldoFindUniqueOrThrowArgs} args - Arguments to find a TransaksiSaldo
     * @example
     * // Get one TransaksiSaldo
     * const transaksiSaldo = await prisma.transaksiSaldo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransaksiSaldoFindUniqueOrThrowArgs>(args: SelectSubset<T, TransaksiSaldoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransaksiSaldoClient<$Result.GetResult<Prisma.$TransaksiSaldoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransaksiSaldo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiSaldoFindFirstArgs} args - Arguments to find a TransaksiSaldo
     * @example
     * // Get one TransaksiSaldo
     * const transaksiSaldo = await prisma.transaksiSaldo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransaksiSaldoFindFirstArgs>(args?: SelectSubset<T, TransaksiSaldoFindFirstArgs<ExtArgs>>): Prisma__TransaksiSaldoClient<$Result.GetResult<Prisma.$TransaksiSaldoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransaksiSaldo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiSaldoFindFirstOrThrowArgs} args - Arguments to find a TransaksiSaldo
     * @example
     * // Get one TransaksiSaldo
     * const transaksiSaldo = await prisma.transaksiSaldo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransaksiSaldoFindFirstOrThrowArgs>(args?: SelectSubset<T, TransaksiSaldoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransaksiSaldoClient<$Result.GetResult<Prisma.$TransaksiSaldoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransaksiSaldos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiSaldoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransaksiSaldos
     * const transaksiSaldos = await prisma.transaksiSaldo.findMany()
     * 
     * // Get first 10 TransaksiSaldos
     * const transaksiSaldos = await prisma.transaksiSaldo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaksiSaldoWithIdOnly = await prisma.transaksiSaldo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransaksiSaldoFindManyArgs>(args?: SelectSubset<T, TransaksiSaldoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiSaldoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransaksiSaldo.
     * @param {TransaksiSaldoCreateArgs} args - Arguments to create a TransaksiSaldo.
     * @example
     * // Create one TransaksiSaldo
     * const TransaksiSaldo = await prisma.transaksiSaldo.create({
     *   data: {
     *     // ... data to create a TransaksiSaldo
     *   }
     * })
     * 
     */
    create<T extends TransaksiSaldoCreateArgs>(args: SelectSubset<T, TransaksiSaldoCreateArgs<ExtArgs>>): Prisma__TransaksiSaldoClient<$Result.GetResult<Prisma.$TransaksiSaldoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransaksiSaldos.
     * @param {TransaksiSaldoCreateManyArgs} args - Arguments to create many TransaksiSaldos.
     * @example
     * // Create many TransaksiSaldos
     * const transaksiSaldo = await prisma.transaksiSaldo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransaksiSaldoCreateManyArgs>(args?: SelectSubset<T, TransaksiSaldoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransaksiSaldos and returns the data saved in the database.
     * @param {TransaksiSaldoCreateManyAndReturnArgs} args - Arguments to create many TransaksiSaldos.
     * @example
     * // Create many TransaksiSaldos
     * const transaksiSaldo = await prisma.transaksiSaldo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransaksiSaldos and only return the `id`
     * const transaksiSaldoWithIdOnly = await prisma.transaksiSaldo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransaksiSaldoCreateManyAndReturnArgs>(args?: SelectSubset<T, TransaksiSaldoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiSaldoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransaksiSaldo.
     * @param {TransaksiSaldoDeleteArgs} args - Arguments to delete one TransaksiSaldo.
     * @example
     * // Delete one TransaksiSaldo
     * const TransaksiSaldo = await prisma.transaksiSaldo.delete({
     *   where: {
     *     // ... filter to delete one TransaksiSaldo
     *   }
     * })
     * 
     */
    delete<T extends TransaksiSaldoDeleteArgs>(args: SelectSubset<T, TransaksiSaldoDeleteArgs<ExtArgs>>): Prisma__TransaksiSaldoClient<$Result.GetResult<Prisma.$TransaksiSaldoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransaksiSaldo.
     * @param {TransaksiSaldoUpdateArgs} args - Arguments to update one TransaksiSaldo.
     * @example
     * // Update one TransaksiSaldo
     * const transaksiSaldo = await prisma.transaksiSaldo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransaksiSaldoUpdateArgs>(args: SelectSubset<T, TransaksiSaldoUpdateArgs<ExtArgs>>): Prisma__TransaksiSaldoClient<$Result.GetResult<Prisma.$TransaksiSaldoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransaksiSaldos.
     * @param {TransaksiSaldoDeleteManyArgs} args - Arguments to filter TransaksiSaldos to delete.
     * @example
     * // Delete a few TransaksiSaldos
     * const { count } = await prisma.transaksiSaldo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransaksiSaldoDeleteManyArgs>(args?: SelectSubset<T, TransaksiSaldoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransaksiSaldos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiSaldoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransaksiSaldos
     * const transaksiSaldo = await prisma.transaksiSaldo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransaksiSaldoUpdateManyArgs>(args: SelectSubset<T, TransaksiSaldoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransaksiSaldos and returns the data updated in the database.
     * @param {TransaksiSaldoUpdateManyAndReturnArgs} args - Arguments to update many TransaksiSaldos.
     * @example
     * // Update many TransaksiSaldos
     * const transaksiSaldo = await prisma.transaksiSaldo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransaksiSaldos and only return the `id`
     * const transaksiSaldoWithIdOnly = await prisma.transaksiSaldo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransaksiSaldoUpdateManyAndReturnArgs>(args: SelectSubset<T, TransaksiSaldoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiSaldoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransaksiSaldo.
     * @param {TransaksiSaldoUpsertArgs} args - Arguments to update or create a TransaksiSaldo.
     * @example
     * // Update or create a TransaksiSaldo
     * const transaksiSaldo = await prisma.transaksiSaldo.upsert({
     *   create: {
     *     // ... data to create a TransaksiSaldo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransaksiSaldo we want to update
     *   }
     * })
     */
    upsert<T extends TransaksiSaldoUpsertArgs>(args: SelectSubset<T, TransaksiSaldoUpsertArgs<ExtArgs>>): Prisma__TransaksiSaldoClient<$Result.GetResult<Prisma.$TransaksiSaldoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransaksiSaldos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiSaldoCountArgs} args - Arguments to filter TransaksiSaldos to count.
     * @example
     * // Count the number of TransaksiSaldos
     * const count = await prisma.transaksiSaldo.count({
     *   where: {
     *     // ... the filter for the TransaksiSaldos we want to count
     *   }
     * })
    **/
    count<T extends TransaksiSaldoCountArgs>(
      args?: Subset<T, TransaksiSaldoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaksiSaldoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransaksiSaldo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiSaldoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransaksiSaldoAggregateArgs>(args: Subset<T, TransaksiSaldoAggregateArgs>): Prisma.PrismaPromise<GetTransaksiSaldoAggregateType<T>>

    /**
     * Group by TransaksiSaldo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiSaldoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransaksiSaldoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransaksiSaldoGroupByArgs['orderBy'] }
        : { orderBy?: TransaksiSaldoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransaksiSaldoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksiSaldoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransaksiSaldo model
   */
  readonly fields: TransaksiSaldoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransaksiSaldo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransaksiSaldoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dompet<T extends DompetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DompetDefaultArgs<ExtArgs>>): Prisma__DompetClient<$Result.GetResult<Prisma.$DompetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransaksiSaldo model
   */
  interface TransaksiSaldoFieldRefs {
    readonly id: FieldRef<"TransaksiSaldo", 'String'>
    readonly dompetId: FieldRef<"TransaksiSaldo", 'String'>
    readonly jenis: FieldRef<"TransaksiSaldo", 'JenisTransaksi'>
    readonly jumlah: FieldRef<"TransaksiSaldo", 'Decimal'>
    readonly keterangan: FieldRef<"TransaksiSaldo", 'String'>
    readonly tanggalTransaksi: FieldRef<"TransaksiSaldo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TransaksiSaldo findUnique
   */
  export type TransaksiSaldoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiSaldo
     */
    select?: TransaksiSaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiSaldo
     */
    omit?: TransaksiSaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiSaldoInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiSaldo to fetch.
     */
    where: TransaksiSaldoWhereUniqueInput
  }

  /**
   * TransaksiSaldo findUniqueOrThrow
   */
  export type TransaksiSaldoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiSaldo
     */
    select?: TransaksiSaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiSaldo
     */
    omit?: TransaksiSaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiSaldoInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiSaldo to fetch.
     */
    where: TransaksiSaldoWhereUniqueInput
  }

  /**
   * TransaksiSaldo findFirst
   */
  export type TransaksiSaldoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiSaldo
     */
    select?: TransaksiSaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiSaldo
     */
    omit?: TransaksiSaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiSaldoInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiSaldo to fetch.
     */
    where?: TransaksiSaldoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiSaldos to fetch.
     */
    orderBy?: TransaksiSaldoOrderByWithRelationInput | TransaksiSaldoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransaksiSaldos.
     */
    cursor?: TransaksiSaldoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiSaldos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiSaldos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransaksiSaldos.
     */
    distinct?: TransaksiSaldoScalarFieldEnum | TransaksiSaldoScalarFieldEnum[]
  }

  /**
   * TransaksiSaldo findFirstOrThrow
   */
  export type TransaksiSaldoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiSaldo
     */
    select?: TransaksiSaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiSaldo
     */
    omit?: TransaksiSaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiSaldoInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiSaldo to fetch.
     */
    where?: TransaksiSaldoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiSaldos to fetch.
     */
    orderBy?: TransaksiSaldoOrderByWithRelationInput | TransaksiSaldoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransaksiSaldos.
     */
    cursor?: TransaksiSaldoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiSaldos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiSaldos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransaksiSaldos.
     */
    distinct?: TransaksiSaldoScalarFieldEnum | TransaksiSaldoScalarFieldEnum[]
  }

  /**
   * TransaksiSaldo findMany
   */
  export type TransaksiSaldoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiSaldo
     */
    select?: TransaksiSaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiSaldo
     */
    omit?: TransaksiSaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiSaldoInclude<ExtArgs> | null
    /**
     * Filter, which TransaksiSaldos to fetch.
     */
    where?: TransaksiSaldoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransaksiSaldos to fetch.
     */
    orderBy?: TransaksiSaldoOrderByWithRelationInput | TransaksiSaldoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransaksiSaldos.
     */
    cursor?: TransaksiSaldoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransaksiSaldos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransaksiSaldos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransaksiSaldos.
     */
    distinct?: TransaksiSaldoScalarFieldEnum | TransaksiSaldoScalarFieldEnum[]
  }

  /**
   * TransaksiSaldo create
   */
  export type TransaksiSaldoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiSaldo
     */
    select?: TransaksiSaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiSaldo
     */
    omit?: TransaksiSaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiSaldoInclude<ExtArgs> | null
    /**
     * The data needed to create a TransaksiSaldo.
     */
    data: XOR<TransaksiSaldoCreateInput, TransaksiSaldoUncheckedCreateInput>
  }

  /**
   * TransaksiSaldo createMany
   */
  export type TransaksiSaldoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransaksiSaldos.
     */
    data: TransaksiSaldoCreateManyInput | TransaksiSaldoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransaksiSaldo createManyAndReturn
   */
  export type TransaksiSaldoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiSaldo
     */
    select?: TransaksiSaldoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiSaldo
     */
    omit?: TransaksiSaldoOmit<ExtArgs> | null
    /**
     * The data used to create many TransaksiSaldos.
     */
    data: TransaksiSaldoCreateManyInput | TransaksiSaldoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiSaldoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransaksiSaldo update
   */
  export type TransaksiSaldoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiSaldo
     */
    select?: TransaksiSaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiSaldo
     */
    omit?: TransaksiSaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiSaldoInclude<ExtArgs> | null
    /**
     * The data needed to update a TransaksiSaldo.
     */
    data: XOR<TransaksiSaldoUpdateInput, TransaksiSaldoUncheckedUpdateInput>
    /**
     * Choose, which TransaksiSaldo to update.
     */
    where: TransaksiSaldoWhereUniqueInput
  }

  /**
   * TransaksiSaldo updateMany
   */
  export type TransaksiSaldoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransaksiSaldos.
     */
    data: XOR<TransaksiSaldoUpdateManyMutationInput, TransaksiSaldoUncheckedUpdateManyInput>
    /**
     * Filter which TransaksiSaldos to update
     */
    where?: TransaksiSaldoWhereInput
    /**
     * Limit how many TransaksiSaldos to update.
     */
    limit?: number
  }

  /**
   * TransaksiSaldo updateManyAndReturn
   */
  export type TransaksiSaldoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiSaldo
     */
    select?: TransaksiSaldoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiSaldo
     */
    omit?: TransaksiSaldoOmit<ExtArgs> | null
    /**
     * The data used to update TransaksiSaldos.
     */
    data: XOR<TransaksiSaldoUpdateManyMutationInput, TransaksiSaldoUncheckedUpdateManyInput>
    /**
     * Filter which TransaksiSaldos to update
     */
    where?: TransaksiSaldoWhereInput
    /**
     * Limit how many TransaksiSaldos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiSaldoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransaksiSaldo upsert
   */
  export type TransaksiSaldoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiSaldo
     */
    select?: TransaksiSaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiSaldo
     */
    omit?: TransaksiSaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiSaldoInclude<ExtArgs> | null
    /**
     * The filter to search for the TransaksiSaldo to update in case it exists.
     */
    where: TransaksiSaldoWhereUniqueInput
    /**
     * In case the TransaksiSaldo found by the `where` argument doesn't exist, create a new TransaksiSaldo with this data.
     */
    create: XOR<TransaksiSaldoCreateInput, TransaksiSaldoUncheckedCreateInput>
    /**
     * In case the TransaksiSaldo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransaksiSaldoUpdateInput, TransaksiSaldoUncheckedUpdateInput>
  }

  /**
   * TransaksiSaldo delete
   */
  export type TransaksiSaldoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiSaldo
     */
    select?: TransaksiSaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiSaldo
     */
    omit?: TransaksiSaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiSaldoInclude<ExtArgs> | null
    /**
     * Filter which TransaksiSaldo to delete.
     */
    where: TransaksiSaldoWhereUniqueInput
  }

  /**
   * TransaksiSaldo deleteMany
   */
  export type TransaksiSaldoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransaksiSaldos to delete
     */
    where?: TransaksiSaldoWhereInput
    /**
     * Limit how many TransaksiSaldos to delete.
     */
    limit?: number
  }

  /**
   * TransaksiSaldo without action
   */
  export type TransaksiSaldoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiSaldo
     */
    select?: TransaksiSaldoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransaksiSaldo
     */
    omit?: TransaksiSaldoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiSaldoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    role: 'role',
    noHp: 'noHp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MitraScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    namaMitra: 'namaMitra',
    noHp: 'noHp',
    alamat: 'alamat',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MitraScalarFieldEnum = (typeof MitraScalarFieldEnum)[keyof typeof MitraScalarFieldEnum]


  export const ArmadaScalarFieldEnum: {
    id: 'id',
    mitraId: 'mitraId',
    namaKendaraan: 'namaKendaraan',
    merek: 'merek',
    model: 'model',
    tahun: 'tahun',
    nomorPlat: 'nomorPlat',
    statusKetersediaan: 'statusKetersediaan',
    hargaPerHari: 'hargaPerHari',
    foto: 'foto',
    deskripsi: 'deskripsi',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArmadaScalarFieldEnum = (typeof ArmadaScalarFieldEnum)[keyof typeof ArmadaScalarFieldEnum]


  export const DompetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    mitraId: 'mitraId',
    saldo: 'saldo'
  };

  export type DompetScalarFieldEnum = (typeof DompetScalarFieldEnum)[keyof typeof DompetScalarFieldEnum]


  export const PemesananScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    armadaId: 'armadaId',
    tanggalSewa: 'tanggalSewa',
    tanggalSelesai: 'tanggalSelesai',
    totalHarga: 'totalHarga',
    statusPemesanan: 'statusPemesanan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PemesananScalarFieldEnum = (typeof PemesananScalarFieldEnum)[keyof typeof PemesananScalarFieldEnum]


  export const TransaksiSaldoScalarFieldEnum: {
    id: 'id',
    dompetId: 'dompetId',
    jenis: 'jenis',
    jumlah: 'jumlah',
    keterangan: 'keterangan',
    tanggalTransaksi: 'tanggalTransaksi'
  };

  export type TransaksiSaldoScalarFieldEnum = (typeof TransaksiSaldoScalarFieldEnum)[keyof typeof TransaksiSaldoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'StatusKetersediaan'
   */
  export type EnumStatusKetersediaanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusKetersediaan'>
    


  /**
   * Reference to a field of type 'StatusKetersediaan[]'
   */
  export type ListEnumStatusKetersediaanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusKetersediaan[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'StatusPemesanan'
   */
  export type EnumStatusPemesananFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPemesanan'>
    


  /**
   * Reference to a field of type 'StatusPemesanan[]'
   */
  export type ListEnumStatusPemesananFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPemesanan[]'>
    


  /**
   * Reference to a field of type 'JenisTransaksi'
   */
  export type EnumJenisTransaksiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisTransaksi'>
    


  /**
   * Reference to a field of type 'JenisTransaksi[]'
   */
  export type ListEnumJenisTransaksiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisTransaksi[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    noHp?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    mitra?: XOR<MitraNullableScalarRelationFilter, MitraWhereInput> | null
    dompet?: XOR<DompetNullableScalarRelationFilter, DompetWhereInput> | null
    pemesanan?: PemesananListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    noHp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    mitra?: MitraOrderByWithRelationInput
    dompet?: DompetOrderByWithRelationInput
    pemesanan?: PemesananOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    noHp?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    mitra?: XOR<MitraNullableScalarRelationFilter, MitraWhereInput> | null
    dompet?: XOR<DompetNullableScalarRelationFilter, DompetWhereInput> | null
    pemesanan?: PemesananListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    noHp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    noHp?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MitraWhereInput = {
    AND?: MitraWhereInput | MitraWhereInput[]
    OR?: MitraWhereInput[]
    NOT?: MitraWhereInput | MitraWhereInput[]
    id?: StringFilter<"Mitra"> | string
    userId?: StringFilter<"Mitra"> | string
    namaMitra?: StringFilter<"Mitra"> | string
    noHp?: StringNullableFilter<"Mitra"> | string | null
    alamat?: StringNullableFilter<"Mitra"> | string | null
    createdAt?: DateTimeFilter<"Mitra"> | Date | string
    updatedAt?: DateTimeFilter<"Mitra"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    armada?: ArmadaListRelationFilter
    dompet?: XOR<DompetNullableScalarRelationFilter, DompetWhereInput> | null
  }

  export type MitraOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    namaMitra?: SortOrder
    noHp?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    armada?: ArmadaOrderByRelationAggregateInput
    dompet?: DompetOrderByWithRelationInput
  }

  export type MitraWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: MitraWhereInput | MitraWhereInput[]
    OR?: MitraWhereInput[]
    NOT?: MitraWhereInput | MitraWhereInput[]
    namaMitra?: StringFilter<"Mitra"> | string
    noHp?: StringNullableFilter<"Mitra"> | string | null
    alamat?: StringNullableFilter<"Mitra"> | string | null
    createdAt?: DateTimeFilter<"Mitra"> | Date | string
    updatedAt?: DateTimeFilter<"Mitra"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    armada?: ArmadaListRelationFilter
    dompet?: XOR<DompetNullableScalarRelationFilter, DompetWhereInput> | null
  }, "id" | "userId">

  export type MitraOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    namaMitra?: SortOrder
    noHp?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MitraCountOrderByAggregateInput
    _max?: MitraMaxOrderByAggregateInput
    _min?: MitraMinOrderByAggregateInput
  }

  export type MitraScalarWhereWithAggregatesInput = {
    AND?: MitraScalarWhereWithAggregatesInput | MitraScalarWhereWithAggregatesInput[]
    OR?: MitraScalarWhereWithAggregatesInput[]
    NOT?: MitraScalarWhereWithAggregatesInput | MitraScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mitra"> | string
    userId?: StringWithAggregatesFilter<"Mitra"> | string
    namaMitra?: StringWithAggregatesFilter<"Mitra"> | string
    noHp?: StringNullableWithAggregatesFilter<"Mitra"> | string | null
    alamat?: StringNullableWithAggregatesFilter<"Mitra"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Mitra"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Mitra"> | Date | string
  }

  export type ArmadaWhereInput = {
    AND?: ArmadaWhereInput | ArmadaWhereInput[]
    OR?: ArmadaWhereInput[]
    NOT?: ArmadaWhereInput | ArmadaWhereInput[]
    id?: StringFilter<"Armada"> | string
    mitraId?: StringFilter<"Armada"> | string
    namaKendaraan?: StringFilter<"Armada"> | string
    merek?: StringFilter<"Armada"> | string
    model?: StringFilter<"Armada"> | string
    tahun?: IntFilter<"Armada"> | number
    nomorPlat?: StringFilter<"Armada"> | string
    statusKetersediaan?: EnumStatusKetersediaanFilter<"Armada"> | $Enums.StatusKetersediaan
    hargaPerHari?: DecimalFilter<"Armada"> | Decimal | DecimalJsLike | number | string
    foto?: StringNullableFilter<"Armada"> | string | null
    deskripsi?: StringNullableFilter<"Armada"> | string | null
    createdAt?: DateTimeFilter<"Armada"> | Date | string
    updatedAt?: DateTimeFilter<"Armada"> | Date | string
    mitra?: XOR<MitraScalarRelationFilter, MitraWhereInput>
    pemesanan?: PemesananListRelationFilter
  }

  export type ArmadaOrderByWithRelationInput = {
    id?: SortOrder
    mitraId?: SortOrder
    namaKendaraan?: SortOrder
    merek?: SortOrder
    model?: SortOrder
    tahun?: SortOrder
    nomorPlat?: SortOrder
    statusKetersediaan?: SortOrder
    hargaPerHari?: SortOrder
    foto?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mitra?: MitraOrderByWithRelationInput
    pemesanan?: PemesananOrderByRelationAggregateInput
  }

  export type ArmadaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nomorPlat?: string
    AND?: ArmadaWhereInput | ArmadaWhereInput[]
    OR?: ArmadaWhereInput[]
    NOT?: ArmadaWhereInput | ArmadaWhereInput[]
    mitraId?: StringFilter<"Armada"> | string
    namaKendaraan?: StringFilter<"Armada"> | string
    merek?: StringFilter<"Armada"> | string
    model?: StringFilter<"Armada"> | string
    tahun?: IntFilter<"Armada"> | number
    statusKetersediaan?: EnumStatusKetersediaanFilter<"Armada"> | $Enums.StatusKetersediaan
    hargaPerHari?: DecimalFilter<"Armada"> | Decimal | DecimalJsLike | number | string
    foto?: StringNullableFilter<"Armada"> | string | null
    deskripsi?: StringNullableFilter<"Armada"> | string | null
    createdAt?: DateTimeFilter<"Armada"> | Date | string
    updatedAt?: DateTimeFilter<"Armada"> | Date | string
    mitra?: XOR<MitraScalarRelationFilter, MitraWhereInput>
    pemesanan?: PemesananListRelationFilter
  }, "id" | "nomorPlat">

  export type ArmadaOrderByWithAggregationInput = {
    id?: SortOrder
    mitraId?: SortOrder
    namaKendaraan?: SortOrder
    merek?: SortOrder
    model?: SortOrder
    tahun?: SortOrder
    nomorPlat?: SortOrder
    statusKetersediaan?: SortOrder
    hargaPerHari?: SortOrder
    foto?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArmadaCountOrderByAggregateInput
    _avg?: ArmadaAvgOrderByAggregateInput
    _max?: ArmadaMaxOrderByAggregateInput
    _min?: ArmadaMinOrderByAggregateInput
    _sum?: ArmadaSumOrderByAggregateInput
  }

  export type ArmadaScalarWhereWithAggregatesInput = {
    AND?: ArmadaScalarWhereWithAggregatesInput | ArmadaScalarWhereWithAggregatesInput[]
    OR?: ArmadaScalarWhereWithAggregatesInput[]
    NOT?: ArmadaScalarWhereWithAggregatesInput | ArmadaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Armada"> | string
    mitraId?: StringWithAggregatesFilter<"Armada"> | string
    namaKendaraan?: StringWithAggregatesFilter<"Armada"> | string
    merek?: StringWithAggregatesFilter<"Armada"> | string
    model?: StringWithAggregatesFilter<"Armada"> | string
    tahun?: IntWithAggregatesFilter<"Armada"> | number
    nomorPlat?: StringWithAggregatesFilter<"Armada"> | string
    statusKetersediaan?: EnumStatusKetersediaanWithAggregatesFilter<"Armada"> | $Enums.StatusKetersediaan
    hargaPerHari?: DecimalWithAggregatesFilter<"Armada"> | Decimal | DecimalJsLike | number | string
    foto?: StringNullableWithAggregatesFilter<"Armada"> | string | null
    deskripsi?: StringNullableWithAggregatesFilter<"Armada"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Armada"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Armada"> | Date | string
  }

  export type DompetWhereInput = {
    AND?: DompetWhereInput | DompetWhereInput[]
    OR?: DompetWhereInput[]
    NOT?: DompetWhereInput | DompetWhereInput[]
    id?: StringFilter<"Dompet"> | string
    userId?: StringNullableFilter<"Dompet"> | string | null
    mitraId?: StringNullableFilter<"Dompet"> | string | null
    saldo?: DecimalFilter<"Dompet"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    mitra?: XOR<MitraNullableScalarRelationFilter, MitraWhereInput> | null
    transaksi?: TransaksiSaldoListRelationFilter
  }

  export type DompetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    mitraId?: SortOrderInput | SortOrder
    saldo?: SortOrder
    user?: UserOrderByWithRelationInput
    mitra?: MitraOrderByWithRelationInput
    transaksi?: TransaksiSaldoOrderByRelationAggregateInput
  }

  export type DompetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    mitraId?: string
    AND?: DompetWhereInput | DompetWhereInput[]
    OR?: DompetWhereInput[]
    NOT?: DompetWhereInput | DompetWhereInput[]
    saldo?: DecimalFilter<"Dompet"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    mitra?: XOR<MitraNullableScalarRelationFilter, MitraWhereInput> | null
    transaksi?: TransaksiSaldoListRelationFilter
  }, "id" | "userId" | "mitraId">

  export type DompetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    mitraId?: SortOrderInput | SortOrder
    saldo?: SortOrder
    _count?: DompetCountOrderByAggregateInput
    _avg?: DompetAvgOrderByAggregateInput
    _max?: DompetMaxOrderByAggregateInput
    _min?: DompetMinOrderByAggregateInput
    _sum?: DompetSumOrderByAggregateInput
  }

  export type DompetScalarWhereWithAggregatesInput = {
    AND?: DompetScalarWhereWithAggregatesInput | DompetScalarWhereWithAggregatesInput[]
    OR?: DompetScalarWhereWithAggregatesInput[]
    NOT?: DompetScalarWhereWithAggregatesInput | DompetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dompet"> | string
    userId?: StringNullableWithAggregatesFilter<"Dompet"> | string | null
    mitraId?: StringNullableWithAggregatesFilter<"Dompet"> | string | null
    saldo?: DecimalWithAggregatesFilter<"Dompet"> | Decimal | DecimalJsLike | number | string
  }

  export type PemesananWhereInput = {
    AND?: PemesananWhereInput | PemesananWhereInput[]
    OR?: PemesananWhereInput[]
    NOT?: PemesananWhereInput | PemesananWhereInput[]
    id?: StringFilter<"Pemesanan"> | string
    userId?: StringFilter<"Pemesanan"> | string
    armadaId?: StringFilter<"Pemesanan"> | string
    tanggalSewa?: DateTimeFilter<"Pemesanan"> | Date | string
    tanggalSelesai?: DateTimeFilter<"Pemesanan"> | Date | string
    totalHarga?: DecimalFilter<"Pemesanan"> | Decimal | DecimalJsLike | number | string
    statusPemesanan?: EnumStatusPemesananFilter<"Pemesanan"> | $Enums.StatusPemesanan
    createdAt?: DateTimeFilter<"Pemesanan"> | Date | string
    updatedAt?: DateTimeFilter<"Pemesanan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    armada?: XOR<ArmadaScalarRelationFilter, ArmadaWhereInput>
  }

  export type PemesananOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    armadaId?: SortOrder
    tanggalSewa?: SortOrder
    tanggalSelesai?: SortOrder
    totalHarga?: SortOrder
    statusPemesanan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    armada?: ArmadaOrderByWithRelationInput
  }

  export type PemesananWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PemesananWhereInput | PemesananWhereInput[]
    OR?: PemesananWhereInput[]
    NOT?: PemesananWhereInput | PemesananWhereInput[]
    userId?: StringFilter<"Pemesanan"> | string
    armadaId?: StringFilter<"Pemesanan"> | string
    tanggalSewa?: DateTimeFilter<"Pemesanan"> | Date | string
    tanggalSelesai?: DateTimeFilter<"Pemesanan"> | Date | string
    totalHarga?: DecimalFilter<"Pemesanan"> | Decimal | DecimalJsLike | number | string
    statusPemesanan?: EnumStatusPemesananFilter<"Pemesanan"> | $Enums.StatusPemesanan
    createdAt?: DateTimeFilter<"Pemesanan"> | Date | string
    updatedAt?: DateTimeFilter<"Pemesanan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    armada?: XOR<ArmadaScalarRelationFilter, ArmadaWhereInput>
  }, "id">

  export type PemesananOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    armadaId?: SortOrder
    tanggalSewa?: SortOrder
    tanggalSelesai?: SortOrder
    totalHarga?: SortOrder
    statusPemesanan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PemesananCountOrderByAggregateInput
    _avg?: PemesananAvgOrderByAggregateInput
    _max?: PemesananMaxOrderByAggregateInput
    _min?: PemesananMinOrderByAggregateInput
    _sum?: PemesananSumOrderByAggregateInput
  }

  export type PemesananScalarWhereWithAggregatesInput = {
    AND?: PemesananScalarWhereWithAggregatesInput | PemesananScalarWhereWithAggregatesInput[]
    OR?: PemesananScalarWhereWithAggregatesInput[]
    NOT?: PemesananScalarWhereWithAggregatesInput | PemesananScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pemesanan"> | string
    userId?: StringWithAggregatesFilter<"Pemesanan"> | string
    armadaId?: StringWithAggregatesFilter<"Pemesanan"> | string
    tanggalSewa?: DateTimeWithAggregatesFilter<"Pemesanan"> | Date | string
    tanggalSelesai?: DateTimeWithAggregatesFilter<"Pemesanan"> | Date | string
    totalHarga?: DecimalWithAggregatesFilter<"Pemesanan"> | Decimal | DecimalJsLike | number | string
    statusPemesanan?: EnumStatusPemesananWithAggregatesFilter<"Pemesanan"> | $Enums.StatusPemesanan
    createdAt?: DateTimeWithAggregatesFilter<"Pemesanan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pemesanan"> | Date | string
  }

  export type TransaksiSaldoWhereInput = {
    AND?: TransaksiSaldoWhereInput | TransaksiSaldoWhereInput[]
    OR?: TransaksiSaldoWhereInput[]
    NOT?: TransaksiSaldoWhereInput | TransaksiSaldoWhereInput[]
    id?: StringFilter<"TransaksiSaldo"> | string
    dompetId?: StringFilter<"TransaksiSaldo"> | string
    jenis?: EnumJenisTransaksiFilter<"TransaksiSaldo"> | $Enums.JenisTransaksi
    jumlah?: DecimalFilter<"TransaksiSaldo"> | Decimal | DecimalJsLike | number | string
    keterangan?: StringNullableFilter<"TransaksiSaldo"> | string | null
    tanggalTransaksi?: DateTimeFilter<"TransaksiSaldo"> | Date | string
    dompet?: XOR<DompetScalarRelationFilter, DompetWhereInput>
  }

  export type TransaksiSaldoOrderByWithRelationInput = {
    id?: SortOrder
    dompetId?: SortOrder
    jenis?: SortOrder
    jumlah?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    tanggalTransaksi?: SortOrder
    dompet?: DompetOrderByWithRelationInput
  }

  export type TransaksiSaldoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransaksiSaldoWhereInput | TransaksiSaldoWhereInput[]
    OR?: TransaksiSaldoWhereInput[]
    NOT?: TransaksiSaldoWhereInput | TransaksiSaldoWhereInput[]
    dompetId?: StringFilter<"TransaksiSaldo"> | string
    jenis?: EnumJenisTransaksiFilter<"TransaksiSaldo"> | $Enums.JenisTransaksi
    jumlah?: DecimalFilter<"TransaksiSaldo"> | Decimal | DecimalJsLike | number | string
    keterangan?: StringNullableFilter<"TransaksiSaldo"> | string | null
    tanggalTransaksi?: DateTimeFilter<"TransaksiSaldo"> | Date | string
    dompet?: XOR<DompetScalarRelationFilter, DompetWhereInput>
  }, "id">

  export type TransaksiSaldoOrderByWithAggregationInput = {
    id?: SortOrder
    dompetId?: SortOrder
    jenis?: SortOrder
    jumlah?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    tanggalTransaksi?: SortOrder
    _count?: TransaksiSaldoCountOrderByAggregateInput
    _avg?: TransaksiSaldoAvgOrderByAggregateInput
    _max?: TransaksiSaldoMaxOrderByAggregateInput
    _min?: TransaksiSaldoMinOrderByAggregateInput
    _sum?: TransaksiSaldoSumOrderByAggregateInput
  }

  export type TransaksiSaldoScalarWhereWithAggregatesInput = {
    AND?: TransaksiSaldoScalarWhereWithAggregatesInput | TransaksiSaldoScalarWhereWithAggregatesInput[]
    OR?: TransaksiSaldoScalarWhereWithAggregatesInput[]
    NOT?: TransaksiSaldoScalarWhereWithAggregatesInput | TransaksiSaldoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransaksiSaldo"> | string
    dompetId?: StringWithAggregatesFilter<"TransaksiSaldo"> | string
    jenis?: EnumJenisTransaksiWithAggregatesFilter<"TransaksiSaldo"> | $Enums.JenisTransaksi
    jumlah?: DecimalWithAggregatesFilter<"TransaksiSaldo"> | Decimal | DecimalJsLike | number | string
    keterangan?: StringNullableWithAggregatesFilter<"TransaksiSaldo"> | string | null
    tanggalTransaksi?: DateTimeWithAggregatesFilter<"TransaksiSaldo"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    noHp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    mitra?: MitraCreateNestedOneWithoutUserInput
    dompet?: DompetCreateNestedOneWithoutUserInput
    pemesanan?: PemesananCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    noHp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    mitra?: MitraUncheckedCreateNestedOneWithoutUserInput
    dompet?: DompetUncheckedCreateNestedOneWithoutUserInput
    pemesanan?: PemesananUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    mitra?: MitraUpdateOneWithoutUserNestedInput
    dompet?: DompetUpdateOneWithoutUserNestedInput
    pemesanan?: PemesananUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    mitra?: MitraUncheckedUpdateOneWithoutUserNestedInput
    dompet?: DompetUncheckedUpdateOneWithoutUserNestedInput
    pemesanan?: PemesananUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    noHp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MitraCreateInput = {
    id?: string
    namaMitra: string
    noHp?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMitraInput
    armada?: ArmadaCreateNestedManyWithoutMitraInput
    dompet?: DompetCreateNestedOneWithoutMitraInput
  }

  export type MitraUncheckedCreateInput = {
    id?: string
    userId: string
    namaMitra: string
    noHp?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    armada?: ArmadaUncheckedCreateNestedManyWithoutMitraInput
    dompet?: DompetUncheckedCreateNestedOneWithoutMitraInput
  }

  export type MitraUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaMitra?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMitraNestedInput
    armada?: ArmadaUpdateManyWithoutMitraNestedInput
    dompet?: DompetUpdateOneWithoutMitraNestedInput
  }

  export type MitraUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    namaMitra?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    armada?: ArmadaUncheckedUpdateManyWithoutMitraNestedInput
    dompet?: DompetUncheckedUpdateOneWithoutMitraNestedInput
  }

  export type MitraCreateManyInput = {
    id?: string
    userId: string
    namaMitra: string
    noHp?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MitraUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaMitra?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MitraUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    namaMitra?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArmadaCreateInput = {
    id?: string
    namaKendaraan: string
    merek: string
    model: string
    tahun: number
    nomorPlat: string
    statusKetersediaan?: $Enums.StatusKetersediaan
    hargaPerHari: Decimal | DecimalJsLike | number | string
    foto?: string | null
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mitra: MitraCreateNestedOneWithoutArmadaInput
    pemesanan?: PemesananCreateNestedManyWithoutArmadaInput
  }

  export type ArmadaUncheckedCreateInput = {
    id?: string
    mitraId: string
    namaKendaraan: string
    merek: string
    model: string
    tahun: number
    nomorPlat: string
    statusKetersediaan?: $Enums.StatusKetersediaan
    hargaPerHari: Decimal | DecimalJsLike | number | string
    foto?: string | null
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pemesanan?: PemesananUncheckedCreateNestedManyWithoutArmadaInput
  }

  export type ArmadaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaKendaraan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    nomorPlat?: StringFieldUpdateOperationsInput | string
    statusKetersediaan?: EnumStatusKetersediaanFieldUpdateOperationsInput | $Enums.StatusKetersediaan
    hargaPerHari?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mitra?: MitraUpdateOneRequiredWithoutArmadaNestedInput
    pemesanan?: PemesananUpdateManyWithoutArmadaNestedInput
  }

  export type ArmadaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mitraId?: StringFieldUpdateOperationsInput | string
    namaKendaraan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    nomorPlat?: StringFieldUpdateOperationsInput | string
    statusKetersediaan?: EnumStatusKetersediaanFieldUpdateOperationsInput | $Enums.StatusKetersediaan
    hargaPerHari?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pemesanan?: PemesananUncheckedUpdateManyWithoutArmadaNestedInput
  }

  export type ArmadaCreateManyInput = {
    id?: string
    mitraId: string
    namaKendaraan: string
    merek: string
    model: string
    tahun: number
    nomorPlat: string
    statusKetersediaan?: $Enums.StatusKetersediaan
    hargaPerHari: Decimal | DecimalJsLike | number | string
    foto?: string | null
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArmadaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaKendaraan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    nomorPlat?: StringFieldUpdateOperationsInput | string
    statusKetersediaan?: EnumStatusKetersediaanFieldUpdateOperationsInput | $Enums.StatusKetersediaan
    hargaPerHari?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArmadaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mitraId?: StringFieldUpdateOperationsInput | string
    namaKendaraan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    nomorPlat?: StringFieldUpdateOperationsInput | string
    statusKetersediaan?: EnumStatusKetersediaanFieldUpdateOperationsInput | $Enums.StatusKetersediaan
    hargaPerHari?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DompetCreateInput = {
    id?: string
    saldo?: Decimal | DecimalJsLike | number | string
    user?: UserCreateNestedOneWithoutDompetInput
    mitra?: MitraCreateNestedOneWithoutDompetInput
    transaksi?: TransaksiSaldoCreateNestedManyWithoutDompetInput
  }

  export type DompetUncheckedCreateInput = {
    id?: string
    userId?: string | null
    mitraId?: string | null
    saldo?: Decimal | DecimalJsLike | number | string
    transaksi?: TransaksiSaldoUncheckedCreateNestedManyWithoutDompetInput
  }

  export type DompetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneWithoutDompetNestedInput
    mitra?: MitraUpdateOneWithoutDompetNestedInput
    transaksi?: TransaksiSaldoUpdateManyWithoutDompetNestedInput
  }

  export type DompetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mitraId?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaksi?: TransaksiSaldoUncheckedUpdateManyWithoutDompetNestedInput
  }

  export type DompetCreateManyInput = {
    id?: string
    userId?: string | null
    mitraId?: string | null
    saldo?: Decimal | DecimalJsLike | number | string
  }

  export type DompetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DompetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mitraId?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PemesananCreateInput = {
    id?: string
    tanggalSewa: Date | string
    tanggalSelesai: Date | string
    totalHarga: Decimal | DecimalJsLike | number | string
    statusPemesanan?: $Enums.StatusPemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPemesananInput
    armada: ArmadaCreateNestedOneWithoutPemesananInput
  }

  export type PemesananUncheckedCreateInput = {
    id?: string
    userId: string
    armadaId: string
    tanggalSewa: Date | string
    tanggalSelesai: Date | string
    totalHarga: Decimal | DecimalJsLike | number | string
    statusPemesanan?: $Enums.StatusPemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PemesananUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalSewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    statusPemesanan?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPemesananNestedInput
    armada?: ArmadaUpdateOneRequiredWithoutPemesananNestedInput
  }

  export type PemesananUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    armadaId?: StringFieldUpdateOperationsInput | string
    tanggalSewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    statusPemesanan?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PemesananCreateManyInput = {
    id?: string
    userId: string
    armadaId: string
    tanggalSewa: Date | string
    tanggalSelesai: Date | string
    totalHarga: Decimal | DecimalJsLike | number | string
    statusPemesanan?: $Enums.StatusPemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PemesananUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalSewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    statusPemesanan?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PemesananUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    armadaId?: StringFieldUpdateOperationsInput | string
    tanggalSewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    statusPemesanan?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiSaldoCreateInput = {
    id?: string
    jenis: $Enums.JenisTransaksi
    jumlah: Decimal | DecimalJsLike | number | string
    keterangan?: string | null
    tanggalTransaksi?: Date | string
    dompet: DompetCreateNestedOneWithoutTransaksiInput
  }

  export type TransaksiSaldoUncheckedCreateInput = {
    id?: string
    dompetId: string
    jenis: $Enums.JenisTransaksi
    jumlah: Decimal | DecimalJsLike | number | string
    keterangan?: string | null
    tanggalTransaksi?: Date | string
  }

  export type TransaksiSaldoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisTransaksiFieldUpdateOperationsInput | $Enums.JenisTransaksi
    jumlah?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalTransaksi?: DateTimeFieldUpdateOperationsInput | Date | string
    dompet?: DompetUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type TransaksiSaldoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dompetId?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisTransaksiFieldUpdateOperationsInput | $Enums.JenisTransaksi
    jumlah?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalTransaksi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiSaldoCreateManyInput = {
    id?: string
    dompetId: string
    jenis: $Enums.JenisTransaksi
    jumlah: Decimal | DecimalJsLike | number | string
    keterangan?: string | null
    tanggalTransaksi?: Date | string
  }

  export type TransaksiSaldoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisTransaksiFieldUpdateOperationsInput | $Enums.JenisTransaksi
    jumlah?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalTransaksi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiSaldoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dompetId?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisTransaksiFieldUpdateOperationsInput | $Enums.JenisTransaksi
    jumlah?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalTransaksi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type MitraNullableScalarRelationFilter = {
    is?: MitraWhereInput | null
    isNot?: MitraWhereInput | null
  }

  export type DompetNullableScalarRelationFilter = {
    is?: DompetWhereInput | null
    isNot?: DompetWhereInput | null
  }

  export type PemesananListRelationFilter = {
    every?: PemesananWhereInput
    some?: PemesananWhereInput
    none?: PemesananWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PemesananOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    noHp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    noHp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    noHp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type ArmadaListRelationFilter = {
    every?: ArmadaWhereInput
    some?: ArmadaWhereInput
    none?: ArmadaWhereInput
  }

  export type ArmadaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MitraCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    namaMitra?: SortOrder
    noHp?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MitraMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    namaMitra?: SortOrder
    noHp?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MitraMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    namaMitra?: SortOrder
    noHp?: SortOrder
    alamat?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumStatusKetersediaanFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKetersediaan | EnumStatusKetersediaanFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKetersediaan[] | ListEnumStatusKetersediaanFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKetersediaan[] | ListEnumStatusKetersediaanFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKetersediaanFilter<$PrismaModel> | $Enums.StatusKetersediaan
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type MitraScalarRelationFilter = {
    is?: MitraWhereInput
    isNot?: MitraWhereInput
  }

  export type ArmadaCountOrderByAggregateInput = {
    id?: SortOrder
    mitraId?: SortOrder
    namaKendaraan?: SortOrder
    merek?: SortOrder
    model?: SortOrder
    tahun?: SortOrder
    nomorPlat?: SortOrder
    statusKetersediaan?: SortOrder
    hargaPerHari?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArmadaAvgOrderByAggregateInput = {
    tahun?: SortOrder
    hargaPerHari?: SortOrder
  }

  export type ArmadaMaxOrderByAggregateInput = {
    id?: SortOrder
    mitraId?: SortOrder
    namaKendaraan?: SortOrder
    merek?: SortOrder
    model?: SortOrder
    tahun?: SortOrder
    nomorPlat?: SortOrder
    statusKetersediaan?: SortOrder
    hargaPerHari?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArmadaMinOrderByAggregateInput = {
    id?: SortOrder
    mitraId?: SortOrder
    namaKendaraan?: SortOrder
    merek?: SortOrder
    model?: SortOrder
    tahun?: SortOrder
    nomorPlat?: SortOrder
    statusKetersediaan?: SortOrder
    hargaPerHari?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArmadaSumOrderByAggregateInput = {
    tahun?: SortOrder
    hargaPerHari?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStatusKetersediaanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKetersediaan | EnumStatusKetersediaanFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKetersediaan[] | ListEnumStatusKetersediaanFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKetersediaan[] | ListEnumStatusKetersediaanFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKetersediaanWithAggregatesFilter<$PrismaModel> | $Enums.StatusKetersediaan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKetersediaanFilter<$PrismaModel>
    _max?: NestedEnumStatusKetersediaanFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TransaksiSaldoListRelationFilter = {
    every?: TransaksiSaldoWhereInput
    some?: TransaksiSaldoWhereInput
    none?: TransaksiSaldoWhereInput
  }

  export type TransaksiSaldoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DompetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mitraId?: SortOrder
    saldo?: SortOrder
  }

  export type DompetAvgOrderByAggregateInput = {
    saldo?: SortOrder
  }

  export type DompetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mitraId?: SortOrder
    saldo?: SortOrder
  }

  export type DompetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mitraId?: SortOrder
    saldo?: SortOrder
  }

  export type DompetSumOrderByAggregateInput = {
    saldo?: SortOrder
  }

  export type EnumStatusPemesananFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPemesanan | EnumStatusPemesananFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPemesanan[] | ListEnumStatusPemesananFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPemesanan[] | ListEnumStatusPemesananFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPemesananFilter<$PrismaModel> | $Enums.StatusPemesanan
  }

  export type ArmadaScalarRelationFilter = {
    is?: ArmadaWhereInput
    isNot?: ArmadaWhereInput
  }

  export type PemesananCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    armadaId?: SortOrder
    tanggalSewa?: SortOrder
    tanggalSelesai?: SortOrder
    totalHarga?: SortOrder
    statusPemesanan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PemesananAvgOrderByAggregateInput = {
    totalHarga?: SortOrder
  }

  export type PemesananMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    armadaId?: SortOrder
    tanggalSewa?: SortOrder
    tanggalSelesai?: SortOrder
    totalHarga?: SortOrder
    statusPemesanan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PemesananMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    armadaId?: SortOrder
    tanggalSewa?: SortOrder
    tanggalSelesai?: SortOrder
    totalHarga?: SortOrder
    statusPemesanan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PemesananSumOrderByAggregateInput = {
    totalHarga?: SortOrder
  }

  export type EnumStatusPemesananWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPemesanan | EnumStatusPemesananFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPemesanan[] | ListEnumStatusPemesananFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPemesanan[] | ListEnumStatusPemesananFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPemesananWithAggregatesFilter<$PrismaModel> | $Enums.StatusPemesanan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPemesananFilter<$PrismaModel>
    _max?: NestedEnumStatusPemesananFilter<$PrismaModel>
  }

  export type EnumJenisTransaksiFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisTransaksi | EnumJenisTransaksiFieldRefInput<$PrismaModel>
    in?: $Enums.JenisTransaksi[] | ListEnumJenisTransaksiFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisTransaksi[] | ListEnumJenisTransaksiFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisTransaksiFilter<$PrismaModel> | $Enums.JenisTransaksi
  }

  export type DompetScalarRelationFilter = {
    is?: DompetWhereInput
    isNot?: DompetWhereInput
  }

  export type TransaksiSaldoCountOrderByAggregateInput = {
    id?: SortOrder
    dompetId?: SortOrder
    jenis?: SortOrder
    jumlah?: SortOrder
    keterangan?: SortOrder
    tanggalTransaksi?: SortOrder
  }

  export type TransaksiSaldoAvgOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type TransaksiSaldoMaxOrderByAggregateInput = {
    id?: SortOrder
    dompetId?: SortOrder
    jenis?: SortOrder
    jumlah?: SortOrder
    keterangan?: SortOrder
    tanggalTransaksi?: SortOrder
  }

  export type TransaksiSaldoMinOrderByAggregateInput = {
    id?: SortOrder
    dompetId?: SortOrder
    jenis?: SortOrder
    jumlah?: SortOrder
    keterangan?: SortOrder
    tanggalTransaksi?: SortOrder
  }

  export type TransaksiSaldoSumOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type EnumJenisTransaksiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisTransaksi | EnumJenisTransaksiFieldRefInput<$PrismaModel>
    in?: $Enums.JenisTransaksi[] | ListEnumJenisTransaksiFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisTransaksi[] | ListEnumJenisTransaksiFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisTransaksiWithAggregatesFilter<$PrismaModel> | $Enums.JenisTransaksi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisTransaksiFilter<$PrismaModel>
    _max?: NestedEnumJenisTransaksiFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type MitraCreateNestedOneWithoutUserInput = {
    create?: XOR<MitraCreateWithoutUserInput, MitraUncheckedCreateWithoutUserInput>
    connectOrCreate?: MitraCreateOrConnectWithoutUserInput
    connect?: MitraWhereUniqueInput
  }

  export type DompetCreateNestedOneWithoutUserInput = {
    create?: XOR<DompetCreateWithoutUserInput, DompetUncheckedCreateWithoutUserInput>
    connectOrCreate?: DompetCreateOrConnectWithoutUserInput
    connect?: DompetWhereUniqueInput
  }

  export type PemesananCreateNestedManyWithoutUserInput = {
    create?: XOR<PemesananCreateWithoutUserInput, PemesananUncheckedCreateWithoutUserInput> | PemesananCreateWithoutUserInput[] | PemesananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PemesananCreateOrConnectWithoutUserInput | PemesananCreateOrConnectWithoutUserInput[]
    createMany?: PemesananCreateManyUserInputEnvelope
    connect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type MitraUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MitraCreateWithoutUserInput, MitraUncheckedCreateWithoutUserInput>
    connectOrCreate?: MitraCreateOrConnectWithoutUserInput
    connect?: MitraWhereUniqueInput
  }

  export type DompetUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DompetCreateWithoutUserInput, DompetUncheckedCreateWithoutUserInput>
    connectOrCreate?: DompetCreateOrConnectWithoutUserInput
    connect?: DompetWhereUniqueInput
  }

  export type PemesananUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PemesananCreateWithoutUserInput, PemesananUncheckedCreateWithoutUserInput> | PemesananCreateWithoutUserInput[] | PemesananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PemesananCreateOrConnectWithoutUserInput | PemesananCreateOrConnectWithoutUserInput[]
    createMany?: PemesananCreateManyUserInputEnvelope
    connect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type MitraUpdateOneWithoutUserNestedInput = {
    create?: XOR<MitraCreateWithoutUserInput, MitraUncheckedCreateWithoutUserInput>
    connectOrCreate?: MitraCreateOrConnectWithoutUserInput
    upsert?: MitraUpsertWithoutUserInput
    disconnect?: MitraWhereInput | boolean
    delete?: MitraWhereInput | boolean
    connect?: MitraWhereUniqueInput
    update?: XOR<XOR<MitraUpdateToOneWithWhereWithoutUserInput, MitraUpdateWithoutUserInput>, MitraUncheckedUpdateWithoutUserInput>
  }

  export type DompetUpdateOneWithoutUserNestedInput = {
    create?: XOR<DompetCreateWithoutUserInput, DompetUncheckedCreateWithoutUserInput>
    connectOrCreate?: DompetCreateOrConnectWithoutUserInput
    upsert?: DompetUpsertWithoutUserInput
    disconnect?: DompetWhereInput | boolean
    delete?: DompetWhereInput | boolean
    connect?: DompetWhereUniqueInput
    update?: XOR<XOR<DompetUpdateToOneWithWhereWithoutUserInput, DompetUpdateWithoutUserInput>, DompetUncheckedUpdateWithoutUserInput>
  }

  export type PemesananUpdateManyWithoutUserNestedInput = {
    create?: XOR<PemesananCreateWithoutUserInput, PemesananUncheckedCreateWithoutUserInput> | PemesananCreateWithoutUserInput[] | PemesananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PemesananCreateOrConnectWithoutUserInput | PemesananCreateOrConnectWithoutUserInput[]
    upsert?: PemesananUpsertWithWhereUniqueWithoutUserInput | PemesananUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PemesananCreateManyUserInputEnvelope
    set?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    disconnect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    delete?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    connect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    update?: PemesananUpdateWithWhereUniqueWithoutUserInput | PemesananUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PemesananUpdateManyWithWhereWithoutUserInput | PemesananUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PemesananScalarWhereInput | PemesananScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type MitraUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MitraCreateWithoutUserInput, MitraUncheckedCreateWithoutUserInput>
    connectOrCreate?: MitraCreateOrConnectWithoutUserInput
    upsert?: MitraUpsertWithoutUserInput
    disconnect?: MitraWhereInput | boolean
    delete?: MitraWhereInput | boolean
    connect?: MitraWhereUniqueInput
    update?: XOR<XOR<MitraUpdateToOneWithWhereWithoutUserInput, MitraUpdateWithoutUserInput>, MitraUncheckedUpdateWithoutUserInput>
  }

  export type DompetUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DompetCreateWithoutUserInput, DompetUncheckedCreateWithoutUserInput>
    connectOrCreate?: DompetCreateOrConnectWithoutUserInput
    upsert?: DompetUpsertWithoutUserInput
    disconnect?: DompetWhereInput | boolean
    delete?: DompetWhereInput | boolean
    connect?: DompetWhereUniqueInput
    update?: XOR<XOR<DompetUpdateToOneWithWhereWithoutUserInput, DompetUpdateWithoutUserInput>, DompetUncheckedUpdateWithoutUserInput>
  }

  export type PemesananUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PemesananCreateWithoutUserInput, PemesananUncheckedCreateWithoutUserInput> | PemesananCreateWithoutUserInput[] | PemesananUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PemesananCreateOrConnectWithoutUserInput | PemesananCreateOrConnectWithoutUserInput[]
    upsert?: PemesananUpsertWithWhereUniqueWithoutUserInput | PemesananUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PemesananCreateManyUserInputEnvelope
    set?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    disconnect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    delete?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    connect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    update?: PemesananUpdateWithWhereUniqueWithoutUserInput | PemesananUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PemesananUpdateManyWithWhereWithoutUserInput | PemesananUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PemesananScalarWhereInput | PemesananScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMitraInput = {
    create?: XOR<UserCreateWithoutMitraInput, UserUncheckedCreateWithoutMitraInput>
    connectOrCreate?: UserCreateOrConnectWithoutMitraInput
    connect?: UserWhereUniqueInput
  }

  export type ArmadaCreateNestedManyWithoutMitraInput = {
    create?: XOR<ArmadaCreateWithoutMitraInput, ArmadaUncheckedCreateWithoutMitraInput> | ArmadaCreateWithoutMitraInput[] | ArmadaUncheckedCreateWithoutMitraInput[]
    connectOrCreate?: ArmadaCreateOrConnectWithoutMitraInput | ArmadaCreateOrConnectWithoutMitraInput[]
    createMany?: ArmadaCreateManyMitraInputEnvelope
    connect?: ArmadaWhereUniqueInput | ArmadaWhereUniqueInput[]
  }

  export type DompetCreateNestedOneWithoutMitraInput = {
    create?: XOR<DompetCreateWithoutMitraInput, DompetUncheckedCreateWithoutMitraInput>
    connectOrCreate?: DompetCreateOrConnectWithoutMitraInput
    connect?: DompetWhereUniqueInput
  }

  export type ArmadaUncheckedCreateNestedManyWithoutMitraInput = {
    create?: XOR<ArmadaCreateWithoutMitraInput, ArmadaUncheckedCreateWithoutMitraInput> | ArmadaCreateWithoutMitraInput[] | ArmadaUncheckedCreateWithoutMitraInput[]
    connectOrCreate?: ArmadaCreateOrConnectWithoutMitraInput | ArmadaCreateOrConnectWithoutMitraInput[]
    createMany?: ArmadaCreateManyMitraInputEnvelope
    connect?: ArmadaWhereUniqueInput | ArmadaWhereUniqueInput[]
  }

  export type DompetUncheckedCreateNestedOneWithoutMitraInput = {
    create?: XOR<DompetCreateWithoutMitraInput, DompetUncheckedCreateWithoutMitraInput>
    connectOrCreate?: DompetCreateOrConnectWithoutMitraInput
    connect?: DompetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMitraNestedInput = {
    create?: XOR<UserCreateWithoutMitraInput, UserUncheckedCreateWithoutMitraInput>
    connectOrCreate?: UserCreateOrConnectWithoutMitraInput
    upsert?: UserUpsertWithoutMitraInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMitraInput, UserUpdateWithoutMitraInput>, UserUncheckedUpdateWithoutMitraInput>
  }

  export type ArmadaUpdateManyWithoutMitraNestedInput = {
    create?: XOR<ArmadaCreateWithoutMitraInput, ArmadaUncheckedCreateWithoutMitraInput> | ArmadaCreateWithoutMitraInput[] | ArmadaUncheckedCreateWithoutMitraInput[]
    connectOrCreate?: ArmadaCreateOrConnectWithoutMitraInput | ArmadaCreateOrConnectWithoutMitraInput[]
    upsert?: ArmadaUpsertWithWhereUniqueWithoutMitraInput | ArmadaUpsertWithWhereUniqueWithoutMitraInput[]
    createMany?: ArmadaCreateManyMitraInputEnvelope
    set?: ArmadaWhereUniqueInput | ArmadaWhereUniqueInput[]
    disconnect?: ArmadaWhereUniqueInput | ArmadaWhereUniqueInput[]
    delete?: ArmadaWhereUniqueInput | ArmadaWhereUniqueInput[]
    connect?: ArmadaWhereUniqueInput | ArmadaWhereUniqueInput[]
    update?: ArmadaUpdateWithWhereUniqueWithoutMitraInput | ArmadaUpdateWithWhereUniqueWithoutMitraInput[]
    updateMany?: ArmadaUpdateManyWithWhereWithoutMitraInput | ArmadaUpdateManyWithWhereWithoutMitraInput[]
    deleteMany?: ArmadaScalarWhereInput | ArmadaScalarWhereInput[]
  }

  export type DompetUpdateOneWithoutMitraNestedInput = {
    create?: XOR<DompetCreateWithoutMitraInput, DompetUncheckedCreateWithoutMitraInput>
    connectOrCreate?: DompetCreateOrConnectWithoutMitraInput
    upsert?: DompetUpsertWithoutMitraInput
    disconnect?: DompetWhereInput | boolean
    delete?: DompetWhereInput | boolean
    connect?: DompetWhereUniqueInput
    update?: XOR<XOR<DompetUpdateToOneWithWhereWithoutMitraInput, DompetUpdateWithoutMitraInput>, DompetUncheckedUpdateWithoutMitraInput>
  }

  export type ArmadaUncheckedUpdateManyWithoutMitraNestedInput = {
    create?: XOR<ArmadaCreateWithoutMitraInput, ArmadaUncheckedCreateWithoutMitraInput> | ArmadaCreateWithoutMitraInput[] | ArmadaUncheckedCreateWithoutMitraInput[]
    connectOrCreate?: ArmadaCreateOrConnectWithoutMitraInput | ArmadaCreateOrConnectWithoutMitraInput[]
    upsert?: ArmadaUpsertWithWhereUniqueWithoutMitraInput | ArmadaUpsertWithWhereUniqueWithoutMitraInput[]
    createMany?: ArmadaCreateManyMitraInputEnvelope
    set?: ArmadaWhereUniqueInput | ArmadaWhereUniqueInput[]
    disconnect?: ArmadaWhereUniqueInput | ArmadaWhereUniqueInput[]
    delete?: ArmadaWhereUniqueInput | ArmadaWhereUniqueInput[]
    connect?: ArmadaWhereUniqueInput | ArmadaWhereUniqueInput[]
    update?: ArmadaUpdateWithWhereUniqueWithoutMitraInput | ArmadaUpdateWithWhereUniqueWithoutMitraInput[]
    updateMany?: ArmadaUpdateManyWithWhereWithoutMitraInput | ArmadaUpdateManyWithWhereWithoutMitraInput[]
    deleteMany?: ArmadaScalarWhereInput | ArmadaScalarWhereInput[]
  }

  export type DompetUncheckedUpdateOneWithoutMitraNestedInput = {
    create?: XOR<DompetCreateWithoutMitraInput, DompetUncheckedCreateWithoutMitraInput>
    connectOrCreate?: DompetCreateOrConnectWithoutMitraInput
    upsert?: DompetUpsertWithoutMitraInput
    disconnect?: DompetWhereInput | boolean
    delete?: DompetWhereInput | boolean
    connect?: DompetWhereUniqueInput
    update?: XOR<XOR<DompetUpdateToOneWithWhereWithoutMitraInput, DompetUpdateWithoutMitraInput>, DompetUncheckedUpdateWithoutMitraInput>
  }

  export type MitraCreateNestedOneWithoutArmadaInput = {
    create?: XOR<MitraCreateWithoutArmadaInput, MitraUncheckedCreateWithoutArmadaInput>
    connectOrCreate?: MitraCreateOrConnectWithoutArmadaInput
    connect?: MitraWhereUniqueInput
  }

  export type PemesananCreateNestedManyWithoutArmadaInput = {
    create?: XOR<PemesananCreateWithoutArmadaInput, PemesananUncheckedCreateWithoutArmadaInput> | PemesananCreateWithoutArmadaInput[] | PemesananUncheckedCreateWithoutArmadaInput[]
    connectOrCreate?: PemesananCreateOrConnectWithoutArmadaInput | PemesananCreateOrConnectWithoutArmadaInput[]
    createMany?: PemesananCreateManyArmadaInputEnvelope
    connect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
  }

  export type PemesananUncheckedCreateNestedManyWithoutArmadaInput = {
    create?: XOR<PemesananCreateWithoutArmadaInput, PemesananUncheckedCreateWithoutArmadaInput> | PemesananCreateWithoutArmadaInput[] | PemesananUncheckedCreateWithoutArmadaInput[]
    connectOrCreate?: PemesananCreateOrConnectWithoutArmadaInput | PemesananCreateOrConnectWithoutArmadaInput[]
    createMany?: PemesananCreateManyArmadaInputEnvelope
    connect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusKetersediaanFieldUpdateOperationsInput = {
    set?: $Enums.StatusKetersediaan
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type MitraUpdateOneRequiredWithoutArmadaNestedInput = {
    create?: XOR<MitraCreateWithoutArmadaInput, MitraUncheckedCreateWithoutArmadaInput>
    connectOrCreate?: MitraCreateOrConnectWithoutArmadaInput
    upsert?: MitraUpsertWithoutArmadaInput
    connect?: MitraWhereUniqueInput
    update?: XOR<XOR<MitraUpdateToOneWithWhereWithoutArmadaInput, MitraUpdateWithoutArmadaInput>, MitraUncheckedUpdateWithoutArmadaInput>
  }

  export type PemesananUpdateManyWithoutArmadaNestedInput = {
    create?: XOR<PemesananCreateWithoutArmadaInput, PemesananUncheckedCreateWithoutArmadaInput> | PemesananCreateWithoutArmadaInput[] | PemesananUncheckedCreateWithoutArmadaInput[]
    connectOrCreate?: PemesananCreateOrConnectWithoutArmadaInput | PemesananCreateOrConnectWithoutArmadaInput[]
    upsert?: PemesananUpsertWithWhereUniqueWithoutArmadaInput | PemesananUpsertWithWhereUniqueWithoutArmadaInput[]
    createMany?: PemesananCreateManyArmadaInputEnvelope
    set?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    disconnect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    delete?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    connect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    update?: PemesananUpdateWithWhereUniqueWithoutArmadaInput | PemesananUpdateWithWhereUniqueWithoutArmadaInput[]
    updateMany?: PemesananUpdateManyWithWhereWithoutArmadaInput | PemesananUpdateManyWithWhereWithoutArmadaInput[]
    deleteMany?: PemesananScalarWhereInput | PemesananScalarWhereInput[]
  }

  export type PemesananUncheckedUpdateManyWithoutArmadaNestedInput = {
    create?: XOR<PemesananCreateWithoutArmadaInput, PemesananUncheckedCreateWithoutArmadaInput> | PemesananCreateWithoutArmadaInput[] | PemesananUncheckedCreateWithoutArmadaInput[]
    connectOrCreate?: PemesananCreateOrConnectWithoutArmadaInput | PemesananCreateOrConnectWithoutArmadaInput[]
    upsert?: PemesananUpsertWithWhereUniqueWithoutArmadaInput | PemesananUpsertWithWhereUniqueWithoutArmadaInput[]
    createMany?: PemesananCreateManyArmadaInputEnvelope
    set?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    disconnect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    delete?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    connect?: PemesananWhereUniqueInput | PemesananWhereUniqueInput[]
    update?: PemesananUpdateWithWhereUniqueWithoutArmadaInput | PemesananUpdateWithWhereUniqueWithoutArmadaInput[]
    updateMany?: PemesananUpdateManyWithWhereWithoutArmadaInput | PemesananUpdateManyWithWhereWithoutArmadaInput[]
    deleteMany?: PemesananScalarWhereInput | PemesananScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDompetInput = {
    create?: XOR<UserCreateWithoutDompetInput, UserUncheckedCreateWithoutDompetInput>
    connectOrCreate?: UserCreateOrConnectWithoutDompetInput
    connect?: UserWhereUniqueInput
  }

  export type MitraCreateNestedOneWithoutDompetInput = {
    create?: XOR<MitraCreateWithoutDompetInput, MitraUncheckedCreateWithoutDompetInput>
    connectOrCreate?: MitraCreateOrConnectWithoutDompetInput
    connect?: MitraWhereUniqueInput
  }

  export type TransaksiSaldoCreateNestedManyWithoutDompetInput = {
    create?: XOR<TransaksiSaldoCreateWithoutDompetInput, TransaksiSaldoUncheckedCreateWithoutDompetInput> | TransaksiSaldoCreateWithoutDompetInput[] | TransaksiSaldoUncheckedCreateWithoutDompetInput[]
    connectOrCreate?: TransaksiSaldoCreateOrConnectWithoutDompetInput | TransaksiSaldoCreateOrConnectWithoutDompetInput[]
    createMany?: TransaksiSaldoCreateManyDompetInputEnvelope
    connect?: TransaksiSaldoWhereUniqueInput | TransaksiSaldoWhereUniqueInput[]
  }

  export type TransaksiSaldoUncheckedCreateNestedManyWithoutDompetInput = {
    create?: XOR<TransaksiSaldoCreateWithoutDompetInput, TransaksiSaldoUncheckedCreateWithoutDompetInput> | TransaksiSaldoCreateWithoutDompetInput[] | TransaksiSaldoUncheckedCreateWithoutDompetInput[]
    connectOrCreate?: TransaksiSaldoCreateOrConnectWithoutDompetInput | TransaksiSaldoCreateOrConnectWithoutDompetInput[]
    createMany?: TransaksiSaldoCreateManyDompetInputEnvelope
    connect?: TransaksiSaldoWhereUniqueInput | TransaksiSaldoWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutDompetNestedInput = {
    create?: XOR<UserCreateWithoutDompetInput, UserUncheckedCreateWithoutDompetInput>
    connectOrCreate?: UserCreateOrConnectWithoutDompetInput
    upsert?: UserUpsertWithoutDompetInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDompetInput, UserUpdateWithoutDompetInput>, UserUncheckedUpdateWithoutDompetInput>
  }

  export type MitraUpdateOneWithoutDompetNestedInput = {
    create?: XOR<MitraCreateWithoutDompetInput, MitraUncheckedCreateWithoutDompetInput>
    connectOrCreate?: MitraCreateOrConnectWithoutDompetInput
    upsert?: MitraUpsertWithoutDompetInput
    disconnect?: MitraWhereInput | boolean
    delete?: MitraWhereInput | boolean
    connect?: MitraWhereUniqueInput
    update?: XOR<XOR<MitraUpdateToOneWithWhereWithoutDompetInput, MitraUpdateWithoutDompetInput>, MitraUncheckedUpdateWithoutDompetInput>
  }

  export type TransaksiSaldoUpdateManyWithoutDompetNestedInput = {
    create?: XOR<TransaksiSaldoCreateWithoutDompetInput, TransaksiSaldoUncheckedCreateWithoutDompetInput> | TransaksiSaldoCreateWithoutDompetInput[] | TransaksiSaldoUncheckedCreateWithoutDompetInput[]
    connectOrCreate?: TransaksiSaldoCreateOrConnectWithoutDompetInput | TransaksiSaldoCreateOrConnectWithoutDompetInput[]
    upsert?: TransaksiSaldoUpsertWithWhereUniqueWithoutDompetInput | TransaksiSaldoUpsertWithWhereUniqueWithoutDompetInput[]
    createMany?: TransaksiSaldoCreateManyDompetInputEnvelope
    set?: TransaksiSaldoWhereUniqueInput | TransaksiSaldoWhereUniqueInput[]
    disconnect?: TransaksiSaldoWhereUniqueInput | TransaksiSaldoWhereUniqueInput[]
    delete?: TransaksiSaldoWhereUniqueInput | TransaksiSaldoWhereUniqueInput[]
    connect?: TransaksiSaldoWhereUniqueInput | TransaksiSaldoWhereUniqueInput[]
    update?: TransaksiSaldoUpdateWithWhereUniqueWithoutDompetInput | TransaksiSaldoUpdateWithWhereUniqueWithoutDompetInput[]
    updateMany?: TransaksiSaldoUpdateManyWithWhereWithoutDompetInput | TransaksiSaldoUpdateManyWithWhereWithoutDompetInput[]
    deleteMany?: TransaksiSaldoScalarWhereInput | TransaksiSaldoScalarWhereInput[]
  }

  export type TransaksiSaldoUncheckedUpdateManyWithoutDompetNestedInput = {
    create?: XOR<TransaksiSaldoCreateWithoutDompetInput, TransaksiSaldoUncheckedCreateWithoutDompetInput> | TransaksiSaldoCreateWithoutDompetInput[] | TransaksiSaldoUncheckedCreateWithoutDompetInput[]
    connectOrCreate?: TransaksiSaldoCreateOrConnectWithoutDompetInput | TransaksiSaldoCreateOrConnectWithoutDompetInput[]
    upsert?: TransaksiSaldoUpsertWithWhereUniqueWithoutDompetInput | TransaksiSaldoUpsertWithWhereUniqueWithoutDompetInput[]
    createMany?: TransaksiSaldoCreateManyDompetInputEnvelope
    set?: TransaksiSaldoWhereUniqueInput | TransaksiSaldoWhereUniqueInput[]
    disconnect?: TransaksiSaldoWhereUniqueInput | TransaksiSaldoWhereUniqueInput[]
    delete?: TransaksiSaldoWhereUniqueInput | TransaksiSaldoWhereUniqueInput[]
    connect?: TransaksiSaldoWhereUniqueInput | TransaksiSaldoWhereUniqueInput[]
    update?: TransaksiSaldoUpdateWithWhereUniqueWithoutDompetInput | TransaksiSaldoUpdateWithWhereUniqueWithoutDompetInput[]
    updateMany?: TransaksiSaldoUpdateManyWithWhereWithoutDompetInput | TransaksiSaldoUpdateManyWithWhereWithoutDompetInput[]
    deleteMany?: TransaksiSaldoScalarWhereInput | TransaksiSaldoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPemesananInput = {
    create?: XOR<UserCreateWithoutPemesananInput, UserUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: UserCreateOrConnectWithoutPemesananInput
    connect?: UserWhereUniqueInput
  }

  export type ArmadaCreateNestedOneWithoutPemesananInput = {
    create?: XOR<ArmadaCreateWithoutPemesananInput, ArmadaUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: ArmadaCreateOrConnectWithoutPemesananInput
    connect?: ArmadaWhereUniqueInput
  }

  export type EnumStatusPemesananFieldUpdateOperationsInput = {
    set?: $Enums.StatusPemesanan
  }

  export type UserUpdateOneRequiredWithoutPemesananNestedInput = {
    create?: XOR<UserCreateWithoutPemesananInput, UserUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: UserCreateOrConnectWithoutPemesananInput
    upsert?: UserUpsertWithoutPemesananInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPemesananInput, UserUpdateWithoutPemesananInput>, UserUncheckedUpdateWithoutPemesananInput>
  }

  export type ArmadaUpdateOneRequiredWithoutPemesananNestedInput = {
    create?: XOR<ArmadaCreateWithoutPemesananInput, ArmadaUncheckedCreateWithoutPemesananInput>
    connectOrCreate?: ArmadaCreateOrConnectWithoutPemesananInput
    upsert?: ArmadaUpsertWithoutPemesananInput
    connect?: ArmadaWhereUniqueInput
    update?: XOR<XOR<ArmadaUpdateToOneWithWhereWithoutPemesananInput, ArmadaUpdateWithoutPemesananInput>, ArmadaUncheckedUpdateWithoutPemesananInput>
  }

  export type DompetCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<DompetCreateWithoutTransaksiInput, DompetUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: DompetCreateOrConnectWithoutTransaksiInput
    connect?: DompetWhereUniqueInput
  }

  export type EnumJenisTransaksiFieldUpdateOperationsInput = {
    set?: $Enums.JenisTransaksi
  }

  export type DompetUpdateOneRequiredWithoutTransaksiNestedInput = {
    create?: XOR<DompetCreateWithoutTransaksiInput, DompetUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: DompetCreateOrConnectWithoutTransaksiInput
    upsert?: DompetUpsertWithoutTransaksiInput
    connect?: DompetWhereUniqueInput
    update?: XOR<XOR<DompetUpdateToOneWithWhereWithoutTransaksiInput, DompetUpdateWithoutTransaksiInput>, DompetUncheckedUpdateWithoutTransaksiInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumStatusKetersediaanFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKetersediaan | EnumStatusKetersediaanFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKetersediaan[] | ListEnumStatusKetersediaanFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKetersediaan[] | ListEnumStatusKetersediaanFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKetersediaanFilter<$PrismaModel> | $Enums.StatusKetersediaan
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusKetersediaanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKetersediaan | EnumStatusKetersediaanFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKetersediaan[] | ListEnumStatusKetersediaanFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKetersediaan[] | ListEnumStatusKetersediaanFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKetersediaanWithAggregatesFilter<$PrismaModel> | $Enums.StatusKetersediaan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKetersediaanFilter<$PrismaModel>
    _max?: NestedEnumStatusKetersediaanFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumStatusPemesananFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPemesanan | EnumStatusPemesananFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPemesanan[] | ListEnumStatusPemesananFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPemesanan[] | ListEnumStatusPemesananFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPemesananFilter<$PrismaModel> | $Enums.StatusPemesanan
  }

  export type NestedEnumStatusPemesananWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPemesanan | EnumStatusPemesananFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPemesanan[] | ListEnumStatusPemesananFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPemesanan[] | ListEnumStatusPemesananFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPemesananWithAggregatesFilter<$PrismaModel> | $Enums.StatusPemesanan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPemesananFilter<$PrismaModel>
    _max?: NestedEnumStatusPemesananFilter<$PrismaModel>
  }

  export type NestedEnumJenisTransaksiFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisTransaksi | EnumJenisTransaksiFieldRefInput<$PrismaModel>
    in?: $Enums.JenisTransaksi[] | ListEnumJenisTransaksiFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisTransaksi[] | ListEnumJenisTransaksiFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisTransaksiFilter<$PrismaModel> | $Enums.JenisTransaksi
  }

  export type NestedEnumJenisTransaksiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisTransaksi | EnumJenisTransaksiFieldRefInput<$PrismaModel>
    in?: $Enums.JenisTransaksi[] | ListEnumJenisTransaksiFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisTransaksi[] | ListEnumJenisTransaksiFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisTransaksiWithAggregatesFilter<$PrismaModel> | $Enums.JenisTransaksi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisTransaksiFilter<$PrismaModel>
    _max?: NestedEnumJenisTransaksiFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    noHp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    mitra?: MitraCreateNestedOneWithoutUserInput
    dompet?: DompetCreateNestedOneWithoutUserInput
    pemesanan?: PemesananCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    noHp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    mitra?: MitraUncheckedCreateNestedOneWithoutUserInput
    dompet?: DompetUncheckedCreateNestedOneWithoutUserInput
    pemesanan?: PemesananUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    mitra?: MitraUpdateOneWithoutUserNestedInput
    dompet?: DompetUpdateOneWithoutUserNestedInput
    pemesanan?: PemesananUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    mitra?: MitraUncheckedUpdateOneWithoutUserNestedInput
    dompet?: DompetUncheckedUpdateOneWithoutUserNestedInput
    pemesanan?: PemesananUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    noHp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    mitra?: MitraCreateNestedOneWithoutUserInput
    dompet?: DompetCreateNestedOneWithoutUserInput
    pemesanan?: PemesananCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    noHp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    mitra?: MitraUncheckedCreateNestedOneWithoutUserInput
    dompet?: DompetUncheckedCreateNestedOneWithoutUserInput
    pemesanan?: PemesananUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    mitra?: MitraUpdateOneWithoutUserNestedInput
    dompet?: DompetUpdateOneWithoutUserNestedInput
    pemesanan?: PemesananUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    mitra?: MitraUncheckedUpdateOneWithoutUserNestedInput
    dompet?: DompetUncheckedUpdateOneWithoutUserNestedInput
    pemesanan?: PemesananUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MitraCreateWithoutUserInput = {
    id?: string
    namaMitra: string
    noHp?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    armada?: ArmadaCreateNestedManyWithoutMitraInput
    dompet?: DompetCreateNestedOneWithoutMitraInput
  }

  export type MitraUncheckedCreateWithoutUserInput = {
    id?: string
    namaMitra: string
    noHp?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    armada?: ArmadaUncheckedCreateNestedManyWithoutMitraInput
    dompet?: DompetUncheckedCreateNestedOneWithoutMitraInput
  }

  export type MitraCreateOrConnectWithoutUserInput = {
    where: MitraWhereUniqueInput
    create: XOR<MitraCreateWithoutUserInput, MitraUncheckedCreateWithoutUserInput>
  }

  export type DompetCreateWithoutUserInput = {
    id?: string
    saldo?: Decimal | DecimalJsLike | number | string
    mitra?: MitraCreateNestedOneWithoutDompetInput
    transaksi?: TransaksiSaldoCreateNestedManyWithoutDompetInput
  }

  export type DompetUncheckedCreateWithoutUserInput = {
    id?: string
    mitraId?: string | null
    saldo?: Decimal | DecimalJsLike | number | string
    transaksi?: TransaksiSaldoUncheckedCreateNestedManyWithoutDompetInput
  }

  export type DompetCreateOrConnectWithoutUserInput = {
    where: DompetWhereUniqueInput
    create: XOR<DompetCreateWithoutUserInput, DompetUncheckedCreateWithoutUserInput>
  }

  export type PemesananCreateWithoutUserInput = {
    id?: string
    tanggalSewa: Date | string
    tanggalSelesai: Date | string
    totalHarga: Decimal | DecimalJsLike | number | string
    statusPemesanan?: $Enums.StatusPemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
    armada: ArmadaCreateNestedOneWithoutPemesananInput
  }

  export type PemesananUncheckedCreateWithoutUserInput = {
    id?: string
    armadaId: string
    tanggalSewa: Date | string
    tanggalSelesai: Date | string
    totalHarga: Decimal | DecimalJsLike | number | string
    statusPemesanan?: $Enums.StatusPemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PemesananCreateOrConnectWithoutUserInput = {
    where: PemesananWhereUniqueInput
    create: XOR<PemesananCreateWithoutUserInput, PemesananUncheckedCreateWithoutUserInput>
  }

  export type PemesananCreateManyUserInputEnvelope = {
    data: PemesananCreateManyUserInput | PemesananCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type MitraUpsertWithoutUserInput = {
    update: XOR<MitraUpdateWithoutUserInput, MitraUncheckedUpdateWithoutUserInput>
    create: XOR<MitraCreateWithoutUserInput, MitraUncheckedCreateWithoutUserInput>
    where?: MitraWhereInput
  }

  export type MitraUpdateToOneWithWhereWithoutUserInput = {
    where?: MitraWhereInput
    data: XOR<MitraUpdateWithoutUserInput, MitraUncheckedUpdateWithoutUserInput>
  }

  export type MitraUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaMitra?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    armada?: ArmadaUpdateManyWithoutMitraNestedInput
    dompet?: DompetUpdateOneWithoutMitraNestedInput
  }

  export type MitraUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaMitra?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    armada?: ArmadaUncheckedUpdateManyWithoutMitraNestedInput
    dompet?: DompetUncheckedUpdateOneWithoutMitraNestedInput
  }

  export type DompetUpsertWithoutUserInput = {
    update: XOR<DompetUpdateWithoutUserInput, DompetUncheckedUpdateWithoutUserInput>
    create: XOR<DompetCreateWithoutUserInput, DompetUncheckedCreateWithoutUserInput>
    where?: DompetWhereInput
  }

  export type DompetUpdateToOneWithWhereWithoutUserInput = {
    where?: DompetWhereInput
    data: XOR<DompetUpdateWithoutUserInput, DompetUncheckedUpdateWithoutUserInput>
  }

  export type DompetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mitra?: MitraUpdateOneWithoutDompetNestedInput
    transaksi?: TransaksiSaldoUpdateManyWithoutDompetNestedInput
  }

  export type DompetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mitraId?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaksi?: TransaksiSaldoUncheckedUpdateManyWithoutDompetNestedInput
  }

  export type PemesananUpsertWithWhereUniqueWithoutUserInput = {
    where: PemesananWhereUniqueInput
    update: XOR<PemesananUpdateWithoutUserInput, PemesananUncheckedUpdateWithoutUserInput>
    create: XOR<PemesananCreateWithoutUserInput, PemesananUncheckedCreateWithoutUserInput>
  }

  export type PemesananUpdateWithWhereUniqueWithoutUserInput = {
    where: PemesananWhereUniqueInput
    data: XOR<PemesananUpdateWithoutUserInput, PemesananUncheckedUpdateWithoutUserInput>
  }

  export type PemesananUpdateManyWithWhereWithoutUserInput = {
    where: PemesananScalarWhereInput
    data: XOR<PemesananUpdateManyMutationInput, PemesananUncheckedUpdateManyWithoutUserInput>
  }

  export type PemesananScalarWhereInput = {
    AND?: PemesananScalarWhereInput | PemesananScalarWhereInput[]
    OR?: PemesananScalarWhereInput[]
    NOT?: PemesananScalarWhereInput | PemesananScalarWhereInput[]
    id?: StringFilter<"Pemesanan"> | string
    userId?: StringFilter<"Pemesanan"> | string
    armadaId?: StringFilter<"Pemesanan"> | string
    tanggalSewa?: DateTimeFilter<"Pemesanan"> | Date | string
    tanggalSelesai?: DateTimeFilter<"Pemesanan"> | Date | string
    totalHarga?: DecimalFilter<"Pemesanan"> | Decimal | DecimalJsLike | number | string
    statusPemesanan?: EnumStatusPemesananFilter<"Pemesanan"> | $Enums.StatusPemesanan
    createdAt?: DateTimeFilter<"Pemesanan"> | Date | string
    updatedAt?: DateTimeFilter<"Pemesanan"> | Date | string
  }

  export type UserCreateWithoutMitraInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    noHp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    dompet?: DompetCreateNestedOneWithoutUserInput
    pemesanan?: PemesananCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMitraInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    noHp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    dompet?: DompetUncheckedCreateNestedOneWithoutUserInput
    pemesanan?: PemesananUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMitraInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMitraInput, UserUncheckedCreateWithoutMitraInput>
  }

  export type ArmadaCreateWithoutMitraInput = {
    id?: string
    namaKendaraan: string
    merek: string
    model: string
    tahun: number
    nomorPlat: string
    statusKetersediaan?: $Enums.StatusKetersediaan
    hargaPerHari: Decimal | DecimalJsLike | number | string
    foto?: string | null
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pemesanan?: PemesananCreateNestedManyWithoutArmadaInput
  }

  export type ArmadaUncheckedCreateWithoutMitraInput = {
    id?: string
    namaKendaraan: string
    merek: string
    model: string
    tahun: number
    nomorPlat: string
    statusKetersediaan?: $Enums.StatusKetersediaan
    hargaPerHari: Decimal | DecimalJsLike | number | string
    foto?: string | null
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pemesanan?: PemesananUncheckedCreateNestedManyWithoutArmadaInput
  }

  export type ArmadaCreateOrConnectWithoutMitraInput = {
    where: ArmadaWhereUniqueInput
    create: XOR<ArmadaCreateWithoutMitraInput, ArmadaUncheckedCreateWithoutMitraInput>
  }

  export type ArmadaCreateManyMitraInputEnvelope = {
    data: ArmadaCreateManyMitraInput | ArmadaCreateManyMitraInput[]
    skipDuplicates?: boolean
  }

  export type DompetCreateWithoutMitraInput = {
    id?: string
    saldo?: Decimal | DecimalJsLike | number | string
    user?: UserCreateNestedOneWithoutDompetInput
    transaksi?: TransaksiSaldoCreateNestedManyWithoutDompetInput
  }

  export type DompetUncheckedCreateWithoutMitraInput = {
    id?: string
    userId?: string | null
    saldo?: Decimal | DecimalJsLike | number | string
    transaksi?: TransaksiSaldoUncheckedCreateNestedManyWithoutDompetInput
  }

  export type DompetCreateOrConnectWithoutMitraInput = {
    where: DompetWhereUniqueInput
    create: XOR<DompetCreateWithoutMitraInput, DompetUncheckedCreateWithoutMitraInput>
  }

  export type UserUpsertWithoutMitraInput = {
    update: XOR<UserUpdateWithoutMitraInput, UserUncheckedUpdateWithoutMitraInput>
    create: XOR<UserCreateWithoutMitraInput, UserUncheckedCreateWithoutMitraInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMitraInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMitraInput, UserUncheckedUpdateWithoutMitraInput>
  }

  export type UserUpdateWithoutMitraInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    dompet?: DompetUpdateOneWithoutUserNestedInput
    pemesanan?: PemesananUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMitraInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    dompet?: DompetUncheckedUpdateOneWithoutUserNestedInput
    pemesanan?: PemesananUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArmadaUpsertWithWhereUniqueWithoutMitraInput = {
    where: ArmadaWhereUniqueInput
    update: XOR<ArmadaUpdateWithoutMitraInput, ArmadaUncheckedUpdateWithoutMitraInput>
    create: XOR<ArmadaCreateWithoutMitraInput, ArmadaUncheckedCreateWithoutMitraInput>
  }

  export type ArmadaUpdateWithWhereUniqueWithoutMitraInput = {
    where: ArmadaWhereUniqueInput
    data: XOR<ArmadaUpdateWithoutMitraInput, ArmadaUncheckedUpdateWithoutMitraInput>
  }

  export type ArmadaUpdateManyWithWhereWithoutMitraInput = {
    where: ArmadaScalarWhereInput
    data: XOR<ArmadaUpdateManyMutationInput, ArmadaUncheckedUpdateManyWithoutMitraInput>
  }

  export type ArmadaScalarWhereInput = {
    AND?: ArmadaScalarWhereInput | ArmadaScalarWhereInput[]
    OR?: ArmadaScalarWhereInput[]
    NOT?: ArmadaScalarWhereInput | ArmadaScalarWhereInput[]
    id?: StringFilter<"Armada"> | string
    mitraId?: StringFilter<"Armada"> | string
    namaKendaraan?: StringFilter<"Armada"> | string
    merek?: StringFilter<"Armada"> | string
    model?: StringFilter<"Armada"> | string
    tahun?: IntFilter<"Armada"> | number
    nomorPlat?: StringFilter<"Armada"> | string
    statusKetersediaan?: EnumStatusKetersediaanFilter<"Armada"> | $Enums.StatusKetersediaan
    hargaPerHari?: DecimalFilter<"Armada"> | Decimal | DecimalJsLike | number | string
    foto?: StringNullableFilter<"Armada"> | string | null
    deskripsi?: StringNullableFilter<"Armada"> | string | null
    createdAt?: DateTimeFilter<"Armada"> | Date | string
    updatedAt?: DateTimeFilter<"Armada"> | Date | string
  }

  export type DompetUpsertWithoutMitraInput = {
    update: XOR<DompetUpdateWithoutMitraInput, DompetUncheckedUpdateWithoutMitraInput>
    create: XOR<DompetCreateWithoutMitraInput, DompetUncheckedCreateWithoutMitraInput>
    where?: DompetWhereInput
  }

  export type DompetUpdateToOneWithWhereWithoutMitraInput = {
    where?: DompetWhereInput
    data: XOR<DompetUpdateWithoutMitraInput, DompetUncheckedUpdateWithoutMitraInput>
  }

  export type DompetUpdateWithoutMitraInput = {
    id?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneWithoutDompetNestedInput
    transaksi?: TransaksiSaldoUpdateManyWithoutDompetNestedInput
  }

  export type DompetUncheckedUpdateWithoutMitraInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transaksi?: TransaksiSaldoUncheckedUpdateManyWithoutDompetNestedInput
  }

  export type MitraCreateWithoutArmadaInput = {
    id?: string
    namaMitra: string
    noHp?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMitraInput
    dompet?: DompetCreateNestedOneWithoutMitraInput
  }

  export type MitraUncheckedCreateWithoutArmadaInput = {
    id?: string
    userId: string
    namaMitra: string
    noHp?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dompet?: DompetUncheckedCreateNestedOneWithoutMitraInput
  }

  export type MitraCreateOrConnectWithoutArmadaInput = {
    where: MitraWhereUniqueInput
    create: XOR<MitraCreateWithoutArmadaInput, MitraUncheckedCreateWithoutArmadaInput>
  }

  export type PemesananCreateWithoutArmadaInput = {
    id?: string
    tanggalSewa: Date | string
    tanggalSelesai: Date | string
    totalHarga: Decimal | DecimalJsLike | number | string
    statusPemesanan?: $Enums.StatusPemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPemesananInput
  }

  export type PemesananUncheckedCreateWithoutArmadaInput = {
    id?: string
    userId: string
    tanggalSewa: Date | string
    tanggalSelesai: Date | string
    totalHarga: Decimal | DecimalJsLike | number | string
    statusPemesanan?: $Enums.StatusPemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PemesananCreateOrConnectWithoutArmadaInput = {
    where: PemesananWhereUniqueInput
    create: XOR<PemesananCreateWithoutArmadaInput, PemesananUncheckedCreateWithoutArmadaInput>
  }

  export type PemesananCreateManyArmadaInputEnvelope = {
    data: PemesananCreateManyArmadaInput | PemesananCreateManyArmadaInput[]
    skipDuplicates?: boolean
  }

  export type MitraUpsertWithoutArmadaInput = {
    update: XOR<MitraUpdateWithoutArmadaInput, MitraUncheckedUpdateWithoutArmadaInput>
    create: XOR<MitraCreateWithoutArmadaInput, MitraUncheckedCreateWithoutArmadaInput>
    where?: MitraWhereInput
  }

  export type MitraUpdateToOneWithWhereWithoutArmadaInput = {
    where?: MitraWhereInput
    data: XOR<MitraUpdateWithoutArmadaInput, MitraUncheckedUpdateWithoutArmadaInput>
  }

  export type MitraUpdateWithoutArmadaInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaMitra?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMitraNestedInput
    dompet?: DompetUpdateOneWithoutMitraNestedInput
  }

  export type MitraUncheckedUpdateWithoutArmadaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    namaMitra?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dompet?: DompetUncheckedUpdateOneWithoutMitraNestedInput
  }

  export type PemesananUpsertWithWhereUniqueWithoutArmadaInput = {
    where: PemesananWhereUniqueInput
    update: XOR<PemesananUpdateWithoutArmadaInput, PemesananUncheckedUpdateWithoutArmadaInput>
    create: XOR<PemesananCreateWithoutArmadaInput, PemesananUncheckedCreateWithoutArmadaInput>
  }

  export type PemesananUpdateWithWhereUniqueWithoutArmadaInput = {
    where: PemesananWhereUniqueInput
    data: XOR<PemesananUpdateWithoutArmadaInput, PemesananUncheckedUpdateWithoutArmadaInput>
  }

  export type PemesananUpdateManyWithWhereWithoutArmadaInput = {
    where: PemesananScalarWhereInput
    data: XOR<PemesananUpdateManyMutationInput, PemesananUncheckedUpdateManyWithoutArmadaInput>
  }

  export type UserCreateWithoutDompetInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    noHp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    mitra?: MitraCreateNestedOneWithoutUserInput
    pemesanan?: PemesananCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDompetInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    noHp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    mitra?: MitraUncheckedCreateNestedOneWithoutUserInput
    pemesanan?: PemesananUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDompetInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDompetInput, UserUncheckedCreateWithoutDompetInput>
  }

  export type MitraCreateWithoutDompetInput = {
    id?: string
    namaMitra: string
    noHp?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMitraInput
    armada?: ArmadaCreateNestedManyWithoutMitraInput
  }

  export type MitraUncheckedCreateWithoutDompetInput = {
    id?: string
    userId: string
    namaMitra: string
    noHp?: string | null
    alamat?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    armada?: ArmadaUncheckedCreateNestedManyWithoutMitraInput
  }

  export type MitraCreateOrConnectWithoutDompetInput = {
    where: MitraWhereUniqueInput
    create: XOR<MitraCreateWithoutDompetInput, MitraUncheckedCreateWithoutDompetInput>
  }

  export type TransaksiSaldoCreateWithoutDompetInput = {
    id?: string
    jenis: $Enums.JenisTransaksi
    jumlah: Decimal | DecimalJsLike | number | string
    keterangan?: string | null
    tanggalTransaksi?: Date | string
  }

  export type TransaksiSaldoUncheckedCreateWithoutDompetInput = {
    id?: string
    jenis: $Enums.JenisTransaksi
    jumlah: Decimal | DecimalJsLike | number | string
    keterangan?: string | null
    tanggalTransaksi?: Date | string
  }

  export type TransaksiSaldoCreateOrConnectWithoutDompetInput = {
    where: TransaksiSaldoWhereUniqueInput
    create: XOR<TransaksiSaldoCreateWithoutDompetInput, TransaksiSaldoUncheckedCreateWithoutDompetInput>
  }

  export type TransaksiSaldoCreateManyDompetInputEnvelope = {
    data: TransaksiSaldoCreateManyDompetInput | TransaksiSaldoCreateManyDompetInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDompetInput = {
    update: XOR<UserUpdateWithoutDompetInput, UserUncheckedUpdateWithoutDompetInput>
    create: XOR<UserCreateWithoutDompetInput, UserUncheckedCreateWithoutDompetInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDompetInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDompetInput, UserUncheckedUpdateWithoutDompetInput>
  }

  export type UserUpdateWithoutDompetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    mitra?: MitraUpdateOneWithoutUserNestedInput
    pemesanan?: PemesananUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDompetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    mitra?: MitraUncheckedUpdateOneWithoutUserNestedInput
    pemesanan?: PemesananUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MitraUpsertWithoutDompetInput = {
    update: XOR<MitraUpdateWithoutDompetInput, MitraUncheckedUpdateWithoutDompetInput>
    create: XOR<MitraCreateWithoutDompetInput, MitraUncheckedCreateWithoutDompetInput>
    where?: MitraWhereInput
  }

  export type MitraUpdateToOneWithWhereWithoutDompetInput = {
    where?: MitraWhereInput
    data: XOR<MitraUpdateWithoutDompetInput, MitraUncheckedUpdateWithoutDompetInput>
  }

  export type MitraUpdateWithoutDompetInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaMitra?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMitraNestedInput
    armada?: ArmadaUpdateManyWithoutMitraNestedInput
  }

  export type MitraUncheckedUpdateWithoutDompetInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    namaMitra?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    armada?: ArmadaUncheckedUpdateManyWithoutMitraNestedInput
  }

  export type TransaksiSaldoUpsertWithWhereUniqueWithoutDompetInput = {
    where: TransaksiSaldoWhereUniqueInput
    update: XOR<TransaksiSaldoUpdateWithoutDompetInput, TransaksiSaldoUncheckedUpdateWithoutDompetInput>
    create: XOR<TransaksiSaldoCreateWithoutDompetInput, TransaksiSaldoUncheckedCreateWithoutDompetInput>
  }

  export type TransaksiSaldoUpdateWithWhereUniqueWithoutDompetInput = {
    where: TransaksiSaldoWhereUniqueInput
    data: XOR<TransaksiSaldoUpdateWithoutDompetInput, TransaksiSaldoUncheckedUpdateWithoutDompetInput>
  }

  export type TransaksiSaldoUpdateManyWithWhereWithoutDompetInput = {
    where: TransaksiSaldoScalarWhereInput
    data: XOR<TransaksiSaldoUpdateManyMutationInput, TransaksiSaldoUncheckedUpdateManyWithoutDompetInput>
  }

  export type TransaksiSaldoScalarWhereInput = {
    AND?: TransaksiSaldoScalarWhereInput | TransaksiSaldoScalarWhereInput[]
    OR?: TransaksiSaldoScalarWhereInput[]
    NOT?: TransaksiSaldoScalarWhereInput | TransaksiSaldoScalarWhereInput[]
    id?: StringFilter<"TransaksiSaldo"> | string
    dompetId?: StringFilter<"TransaksiSaldo"> | string
    jenis?: EnumJenisTransaksiFilter<"TransaksiSaldo"> | $Enums.JenisTransaksi
    jumlah?: DecimalFilter<"TransaksiSaldo"> | Decimal | DecimalJsLike | number | string
    keterangan?: StringNullableFilter<"TransaksiSaldo"> | string | null
    tanggalTransaksi?: DateTimeFilter<"TransaksiSaldo"> | Date | string
  }

  export type UserCreateWithoutPemesananInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    noHp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    mitra?: MitraCreateNestedOneWithoutUserInput
    dompet?: DompetCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPemesananInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    noHp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    mitra?: MitraUncheckedCreateNestedOneWithoutUserInput
    dompet?: DompetUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPemesananInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPemesananInput, UserUncheckedCreateWithoutPemesananInput>
  }

  export type ArmadaCreateWithoutPemesananInput = {
    id?: string
    namaKendaraan: string
    merek: string
    model: string
    tahun: number
    nomorPlat: string
    statusKetersediaan?: $Enums.StatusKetersediaan
    hargaPerHari: Decimal | DecimalJsLike | number | string
    foto?: string | null
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mitra: MitraCreateNestedOneWithoutArmadaInput
  }

  export type ArmadaUncheckedCreateWithoutPemesananInput = {
    id?: string
    mitraId: string
    namaKendaraan: string
    merek: string
    model: string
    tahun: number
    nomorPlat: string
    statusKetersediaan?: $Enums.StatusKetersediaan
    hargaPerHari: Decimal | DecimalJsLike | number | string
    foto?: string | null
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArmadaCreateOrConnectWithoutPemesananInput = {
    where: ArmadaWhereUniqueInput
    create: XOR<ArmadaCreateWithoutPemesananInput, ArmadaUncheckedCreateWithoutPemesananInput>
  }

  export type UserUpsertWithoutPemesananInput = {
    update: XOR<UserUpdateWithoutPemesananInput, UserUncheckedUpdateWithoutPemesananInput>
    create: XOR<UserCreateWithoutPemesananInput, UserUncheckedCreateWithoutPemesananInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPemesananInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPemesananInput, UserUncheckedUpdateWithoutPemesananInput>
  }

  export type UserUpdateWithoutPemesananInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    mitra?: MitraUpdateOneWithoutUserNestedInput
    dompet?: DompetUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPemesananInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    mitra?: MitraUncheckedUpdateOneWithoutUserNestedInput
    dompet?: DompetUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ArmadaUpsertWithoutPemesananInput = {
    update: XOR<ArmadaUpdateWithoutPemesananInput, ArmadaUncheckedUpdateWithoutPemesananInput>
    create: XOR<ArmadaCreateWithoutPemesananInput, ArmadaUncheckedCreateWithoutPemesananInput>
    where?: ArmadaWhereInput
  }

  export type ArmadaUpdateToOneWithWhereWithoutPemesananInput = {
    where?: ArmadaWhereInput
    data: XOR<ArmadaUpdateWithoutPemesananInput, ArmadaUncheckedUpdateWithoutPemesananInput>
  }

  export type ArmadaUpdateWithoutPemesananInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaKendaraan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    nomorPlat?: StringFieldUpdateOperationsInput | string
    statusKetersediaan?: EnumStatusKetersediaanFieldUpdateOperationsInput | $Enums.StatusKetersediaan
    hargaPerHari?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mitra?: MitraUpdateOneRequiredWithoutArmadaNestedInput
  }

  export type ArmadaUncheckedUpdateWithoutPemesananInput = {
    id?: StringFieldUpdateOperationsInput | string
    mitraId?: StringFieldUpdateOperationsInput | string
    namaKendaraan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    nomorPlat?: StringFieldUpdateOperationsInput | string
    statusKetersediaan?: EnumStatusKetersediaanFieldUpdateOperationsInput | $Enums.StatusKetersediaan
    hargaPerHari?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DompetCreateWithoutTransaksiInput = {
    id?: string
    saldo?: Decimal | DecimalJsLike | number | string
    user?: UserCreateNestedOneWithoutDompetInput
    mitra?: MitraCreateNestedOneWithoutDompetInput
  }

  export type DompetUncheckedCreateWithoutTransaksiInput = {
    id?: string
    userId?: string | null
    mitraId?: string | null
    saldo?: Decimal | DecimalJsLike | number | string
  }

  export type DompetCreateOrConnectWithoutTransaksiInput = {
    where: DompetWhereUniqueInput
    create: XOR<DompetCreateWithoutTransaksiInput, DompetUncheckedCreateWithoutTransaksiInput>
  }

  export type DompetUpsertWithoutTransaksiInput = {
    update: XOR<DompetUpdateWithoutTransaksiInput, DompetUncheckedUpdateWithoutTransaksiInput>
    create: XOR<DompetCreateWithoutTransaksiInput, DompetUncheckedCreateWithoutTransaksiInput>
    where?: DompetWhereInput
  }

  export type DompetUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: DompetWhereInput
    data: XOR<DompetUpdateWithoutTransaksiInput, DompetUncheckedUpdateWithoutTransaksiInput>
  }

  export type DompetUpdateWithoutTransaksiInput = {
    id?: StringFieldUpdateOperationsInput | string
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneWithoutDompetNestedInput
    mitra?: MitraUpdateOneWithoutDompetNestedInput
  }

  export type DompetUncheckedUpdateWithoutTransaksiInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mitraId?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type PemesananCreateManyUserInput = {
    id?: string
    armadaId: string
    tanggalSewa: Date | string
    tanggalSelesai: Date | string
    totalHarga: Decimal | DecimalJsLike | number | string
    statusPemesanan?: $Enums.StatusPemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PemesananUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalSewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    statusPemesanan?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    armada?: ArmadaUpdateOneRequiredWithoutPemesananNestedInput
  }

  export type PemesananUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    armadaId?: StringFieldUpdateOperationsInput | string
    tanggalSewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    statusPemesanan?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PemesananUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    armadaId?: StringFieldUpdateOperationsInput | string
    tanggalSewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    statusPemesanan?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArmadaCreateManyMitraInput = {
    id?: string
    namaKendaraan: string
    merek: string
    model: string
    tahun: number
    nomorPlat: string
    statusKetersediaan?: $Enums.StatusKetersediaan
    hargaPerHari: Decimal | DecimalJsLike | number | string
    foto?: string | null
    deskripsi?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArmadaUpdateWithoutMitraInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaKendaraan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    nomorPlat?: StringFieldUpdateOperationsInput | string
    statusKetersediaan?: EnumStatusKetersediaanFieldUpdateOperationsInput | $Enums.StatusKetersediaan
    hargaPerHari?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pemesanan?: PemesananUpdateManyWithoutArmadaNestedInput
  }

  export type ArmadaUncheckedUpdateWithoutMitraInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaKendaraan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    nomorPlat?: StringFieldUpdateOperationsInput | string
    statusKetersediaan?: EnumStatusKetersediaanFieldUpdateOperationsInput | $Enums.StatusKetersediaan
    hargaPerHari?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pemesanan?: PemesananUncheckedUpdateManyWithoutArmadaNestedInput
  }

  export type ArmadaUncheckedUpdateManyWithoutMitraInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaKendaraan?: StringFieldUpdateOperationsInput | string
    merek?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    tahun?: IntFieldUpdateOperationsInput | number
    nomorPlat?: StringFieldUpdateOperationsInput | string
    statusKetersediaan?: EnumStatusKetersediaanFieldUpdateOperationsInput | $Enums.StatusKetersediaan
    hargaPerHari?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PemesananCreateManyArmadaInput = {
    id?: string
    userId: string
    tanggalSewa: Date | string
    tanggalSelesai: Date | string
    totalHarga: Decimal | DecimalJsLike | number | string
    statusPemesanan?: $Enums.StatusPemesanan
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PemesananUpdateWithoutArmadaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalSewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    statusPemesanan?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPemesananNestedInput
  }

  export type PemesananUncheckedUpdateWithoutArmadaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tanggalSewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    statusPemesanan?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PemesananUncheckedUpdateManyWithoutArmadaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tanggalSewa?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    totalHarga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    statusPemesanan?: EnumStatusPemesananFieldUpdateOperationsInput | $Enums.StatusPemesanan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiSaldoCreateManyDompetInput = {
    id?: string
    jenis: $Enums.JenisTransaksi
    jumlah: Decimal | DecimalJsLike | number | string
    keterangan?: string | null
    tanggalTransaksi?: Date | string
  }

  export type TransaksiSaldoUpdateWithoutDompetInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisTransaksiFieldUpdateOperationsInput | $Enums.JenisTransaksi
    jumlah?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalTransaksi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiSaldoUncheckedUpdateWithoutDompetInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisTransaksiFieldUpdateOperationsInput | $Enums.JenisTransaksi
    jumlah?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalTransaksi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiSaldoUncheckedUpdateManyWithoutDompetInput = {
    id?: StringFieldUpdateOperationsInput | string
    jenis?: EnumJenisTransaksiFieldUpdateOperationsInput | $Enums.JenisTransaksi
    jumlah?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalTransaksi?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}