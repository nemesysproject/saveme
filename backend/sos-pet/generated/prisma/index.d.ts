
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model adoption
 * 
 */
export type adoption = $Result.DefaultSelection<Prisma.$adoptionPayload>
/**
 * Model adoptionstatus
 * 
 */
export type adoptionstatus = $Result.DefaultSelection<Prisma.$adoptionstatusPayload>
/**
 * Model person
 * 
 */
export type person = $Result.DefaultSelection<Prisma.$personPayload>
/**
 * Model pet
 * 
 */
export type pet = $Result.DefaultSelection<Prisma.$petPayload>
/**
 * Model petinshelter
 * 
 */
export type petinshelter = $Result.DefaultSelection<Prisma.$petinshelterPayload>
/**
 * Model petkind
 * 
 */
export type petkind = $Result.DefaultSelection<Prisma.$petkindPayload>
/**
 * Model petmedia
 * 
 */
export type petmedia = $Result.DefaultSelection<Prisma.$petmediaPayload>
/**
 * Model shelter
 * 
 */
export type shelter = $Result.DefaultSelection<Prisma.$shelterPayload>
/**
 * Model viewplace
 * 
 */
export type viewplace = $Result.DefaultSelection<Prisma.$viewplacePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Adoptions
 * const adoptions = await prisma.adoption.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Adoptions
   * const adoptions = await prisma.adoption.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.adoption`: Exposes CRUD operations for the **adoption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adoptions
    * const adoptions = await prisma.adoption.findMany()
    * ```
    */
  get adoption(): Prisma.adoptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adoptionstatus`: Exposes CRUD operations for the **adoptionstatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adoptionstatuses
    * const adoptionstatuses = await prisma.adoptionstatus.findMany()
    * ```
    */
  get adoptionstatus(): Prisma.adoptionstatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.personDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pet`: Exposes CRUD operations for the **pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.petDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.petinshelter`: Exposes CRUD operations for the **petinshelter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Petinshelters
    * const petinshelters = await prisma.petinshelter.findMany()
    * ```
    */
  get petinshelter(): Prisma.petinshelterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.petkind`: Exposes CRUD operations for the **petkind** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Petkinds
    * const petkinds = await prisma.petkind.findMany()
    * ```
    */
  get petkind(): Prisma.petkindDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.petmedia`: Exposes CRUD operations for the **petmedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Petmedias
    * const petmedias = await prisma.petmedia.findMany()
    * ```
    */
  get petmedia(): Prisma.petmediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shelter`: Exposes CRUD operations for the **shelter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shelters
    * const shelters = await prisma.shelter.findMany()
    * ```
    */
  get shelter(): Prisma.shelterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viewplace`: Exposes CRUD operations for the **viewplace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Viewplaces
    * const viewplaces = await prisma.viewplace.findMany()
    * ```
    */
  get viewplace(): Prisma.viewplaceDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    adoption: 'adoption',
    adoptionstatus: 'adoptionstatus',
    person: 'person',
    pet: 'pet',
    petinshelter: 'petinshelter',
    petkind: 'petkind',
    petmedia: 'petmedia',
    shelter: 'shelter',
    viewplace: 'viewplace'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "adoption" | "adoptionstatus" | "person" | "pet" | "petinshelter" | "petkind" | "petmedia" | "shelter" | "viewplace"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      adoption: {
        payload: Prisma.$adoptionPayload<ExtArgs>
        fields: Prisma.adoptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adoptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adoptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>
          }
          findFirst: {
            args: Prisma.adoptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adoptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>
          }
          findMany: {
            args: Prisma.adoptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>[]
          }
          create: {
            args: Prisma.adoptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>
          }
          createMany: {
            args: Prisma.adoptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adoptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>[]
          }
          delete: {
            args: Prisma.adoptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>
          }
          update: {
            args: Prisma.adoptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>
          }
          deleteMany: {
            args: Prisma.adoptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adoptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adoptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>[]
          }
          upsert: {
            args: Prisma.adoptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionPayload>
          }
          aggregate: {
            args: Prisma.AdoptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdoption>
          }
          groupBy: {
            args: Prisma.adoptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdoptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.adoptionCountArgs<ExtArgs>
            result: $Utils.Optional<AdoptionCountAggregateOutputType> | number
          }
        }
      }
      adoptionstatus: {
        payload: Prisma.$adoptionstatusPayload<ExtArgs>
        fields: Prisma.adoptionstatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adoptionstatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionstatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adoptionstatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionstatusPayload>
          }
          findFirst: {
            args: Prisma.adoptionstatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionstatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adoptionstatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionstatusPayload>
          }
          findMany: {
            args: Prisma.adoptionstatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionstatusPayload>[]
          }
          create: {
            args: Prisma.adoptionstatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionstatusPayload>
          }
          createMany: {
            args: Prisma.adoptionstatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adoptionstatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionstatusPayload>[]
          }
          delete: {
            args: Prisma.adoptionstatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionstatusPayload>
          }
          update: {
            args: Prisma.adoptionstatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionstatusPayload>
          }
          deleteMany: {
            args: Prisma.adoptionstatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adoptionstatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adoptionstatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionstatusPayload>[]
          }
          upsert: {
            args: Prisma.adoptionstatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adoptionstatusPayload>
          }
          aggregate: {
            args: Prisma.AdoptionstatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdoptionstatus>
          }
          groupBy: {
            args: Prisma.adoptionstatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdoptionstatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.adoptionstatusCountArgs<ExtArgs>
            result: $Utils.Optional<AdoptionstatusCountAggregateOutputType> | number
          }
        }
      }
      person: {
        payload: Prisma.$personPayload<ExtArgs>
        fields: Prisma.personFieldRefs
        operations: {
          findUnique: {
            args: Prisma.personFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.personFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          findFirst: {
            args: Prisma.personFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.personFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          findMany: {
            args: Prisma.personFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>[]
          }
          create: {
            args: Prisma.personCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          createMany: {
            args: Prisma.personCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.personCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>[]
          }
          delete: {
            args: Prisma.personDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          update: {
            args: Prisma.personUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          deleteMany: {
            args: Prisma.personDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.personUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.personUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>[]
          }
          upsert: {
            args: Prisma.personUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.personGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.personCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      pet: {
        payload: Prisma.$petPayload<ExtArgs>
        fields: Prisma.petFieldRefs
        operations: {
          findUnique: {
            args: Prisma.petFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.petFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          findFirst: {
            args: Prisma.petFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.petFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          findMany: {
            args: Prisma.petFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>[]
          }
          create: {
            args: Prisma.petCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          createMany: {
            args: Prisma.petCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.petCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>[]
          }
          delete: {
            args: Prisma.petDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          update: {
            args: Prisma.petUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          deleteMany: {
            args: Prisma.petDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.petUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.petUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>[]
          }
          upsert: {
            args: Prisma.petUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.petGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.petCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      petinshelter: {
        payload: Prisma.$petinshelterPayload<ExtArgs>
        fields: Prisma.petinshelterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.petinshelterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petinshelterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.petinshelterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petinshelterPayload>
          }
          findFirst: {
            args: Prisma.petinshelterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petinshelterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.petinshelterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petinshelterPayload>
          }
          findMany: {
            args: Prisma.petinshelterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petinshelterPayload>[]
          }
          create: {
            args: Prisma.petinshelterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petinshelterPayload>
          }
          createMany: {
            args: Prisma.petinshelterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.petinshelterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petinshelterPayload>[]
          }
          delete: {
            args: Prisma.petinshelterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petinshelterPayload>
          }
          update: {
            args: Prisma.petinshelterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petinshelterPayload>
          }
          deleteMany: {
            args: Prisma.petinshelterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.petinshelterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.petinshelterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petinshelterPayload>[]
          }
          upsert: {
            args: Prisma.petinshelterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petinshelterPayload>
          }
          aggregate: {
            args: Prisma.PetinshelterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePetinshelter>
          }
          groupBy: {
            args: Prisma.petinshelterGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetinshelterGroupByOutputType>[]
          }
          count: {
            args: Prisma.petinshelterCountArgs<ExtArgs>
            result: $Utils.Optional<PetinshelterCountAggregateOutputType> | number
          }
        }
      }
      petkind: {
        payload: Prisma.$petkindPayload<ExtArgs>
        fields: Prisma.petkindFieldRefs
        operations: {
          findUnique: {
            args: Prisma.petkindFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petkindPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.petkindFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petkindPayload>
          }
          findFirst: {
            args: Prisma.petkindFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petkindPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.petkindFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petkindPayload>
          }
          findMany: {
            args: Prisma.petkindFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petkindPayload>[]
          }
          create: {
            args: Prisma.petkindCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petkindPayload>
          }
          createMany: {
            args: Prisma.petkindCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.petkindCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petkindPayload>[]
          }
          delete: {
            args: Prisma.petkindDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petkindPayload>
          }
          update: {
            args: Prisma.petkindUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petkindPayload>
          }
          deleteMany: {
            args: Prisma.petkindDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.petkindUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.petkindUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petkindPayload>[]
          }
          upsert: {
            args: Prisma.petkindUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petkindPayload>
          }
          aggregate: {
            args: Prisma.PetkindAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePetkind>
          }
          groupBy: {
            args: Prisma.petkindGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetkindGroupByOutputType>[]
          }
          count: {
            args: Prisma.petkindCountArgs<ExtArgs>
            result: $Utils.Optional<PetkindCountAggregateOutputType> | number
          }
        }
      }
      petmedia: {
        payload: Prisma.$petmediaPayload<ExtArgs>
        fields: Prisma.petmediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.petmediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petmediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.petmediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petmediaPayload>
          }
          findFirst: {
            args: Prisma.petmediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petmediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.petmediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petmediaPayload>
          }
          findMany: {
            args: Prisma.petmediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petmediaPayload>[]
          }
          create: {
            args: Prisma.petmediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petmediaPayload>
          }
          createMany: {
            args: Prisma.petmediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.petmediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petmediaPayload>[]
          }
          delete: {
            args: Prisma.petmediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petmediaPayload>
          }
          update: {
            args: Prisma.petmediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petmediaPayload>
          }
          deleteMany: {
            args: Prisma.petmediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.petmediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.petmediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petmediaPayload>[]
          }
          upsert: {
            args: Prisma.petmediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$petmediaPayload>
          }
          aggregate: {
            args: Prisma.PetmediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePetmedia>
          }
          groupBy: {
            args: Prisma.petmediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetmediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.petmediaCountArgs<ExtArgs>
            result: $Utils.Optional<PetmediaCountAggregateOutputType> | number
          }
        }
      }
      shelter: {
        payload: Prisma.$shelterPayload<ExtArgs>
        fields: Prisma.shelterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.shelterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.shelterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>
          }
          findFirst: {
            args: Prisma.shelterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.shelterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>
          }
          findMany: {
            args: Prisma.shelterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>[]
          }
          create: {
            args: Prisma.shelterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>
          }
          createMany: {
            args: Prisma.shelterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.shelterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>[]
          }
          delete: {
            args: Prisma.shelterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>
          }
          update: {
            args: Prisma.shelterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>
          }
          deleteMany: {
            args: Prisma.shelterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.shelterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.shelterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>[]
          }
          upsert: {
            args: Prisma.shelterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$shelterPayload>
          }
          aggregate: {
            args: Prisma.ShelterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShelter>
          }
          groupBy: {
            args: Prisma.shelterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShelterGroupByOutputType>[]
          }
          count: {
            args: Prisma.shelterCountArgs<ExtArgs>
            result: $Utils.Optional<ShelterCountAggregateOutputType> | number
          }
        }
      }
      viewplace: {
        payload: Prisma.$viewplacePayload<ExtArgs>
        fields: Prisma.viewplaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.viewplaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewplacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.viewplaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewplacePayload>
          }
          findFirst: {
            args: Prisma.viewplaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewplacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.viewplaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewplacePayload>
          }
          findMany: {
            args: Prisma.viewplaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewplacePayload>[]
          }
          create: {
            args: Prisma.viewplaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewplacePayload>
          }
          createMany: {
            args: Prisma.viewplaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.viewplaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewplacePayload>[]
          }
          delete: {
            args: Prisma.viewplaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewplacePayload>
          }
          update: {
            args: Prisma.viewplaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewplacePayload>
          }
          deleteMany: {
            args: Prisma.viewplaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.viewplaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.viewplaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewplacePayload>[]
          }
          upsert: {
            args: Prisma.viewplaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$viewplacePayload>
          }
          aggregate: {
            args: Prisma.ViewplaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViewplace>
          }
          groupBy: {
            args: Prisma.viewplaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewplaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.viewplaceCountArgs<ExtArgs>
            result: $Utils.Optional<ViewplaceCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    adoption?: adoptionOmit
    adoptionstatus?: adoptionstatusOmit
    person?: personOmit
    pet?: petOmit
    petinshelter?: petinshelterOmit
    petkind?: petkindOmit
    petmedia?: petmediaOmit
    shelter?: shelterOmit
    viewplace?: viewplaceOmit
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
   * Count Type AdoptionstatusCountOutputType
   */

  export type AdoptionstatusCountOutputType = {
    adoption: number
  }

  export type AdoptionstatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoption?: boolean | AdoptionstatusCountOutputTypeCountAdoptionArgs
  }

  // Custom InputTypes
  /**
   * AdoptionstatusCountOutputType without action
   */
  export type AdoptionstatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdoptionstatusCountOutputType
     */
    select?: AdoptionstatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdoptionstatusCountOutputType without action
   */
  export type AdoptionstatusCountOutputTypeCountAdoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adoptionWhereInput
  }


  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    adoption: number
    viewplace: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoption?: boolean | PersonCountOutputTypeCountAdoptionArgs
    viewplace?: boolean | PersonCountOutputTypeCountViewplaceArgs
  }

  // Custom InputTypes
  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountAdoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adoptionWhereInput
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountViewplaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: viewplaceWhereInput
  }


  /**
   * Count Type PetCountOutputType
   */

  export type PetCountOutputType = {
    adoption: number
    petinshelter: number
    petmedia: number
    viewplace: number
  }

  export type PetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoption?: boolean | PetCountOutputTypeCountAdoptionArgs
    petinshelter?: boolean | PetCountOutputTypeCountPetinshelterArgs
    petmedia?: boolean | PetCountOutputTypeCountPetmediaArgs
    viewplace?: boolean | PetCountOutputTypeCountViewplaceArgs
  }

  // Custom InputTypes
  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCountOutputType
     */
    select?: PetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountAdoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adoptionWhereInput
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountPetinshelterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: petinshelterWhereInput
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountPetmediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: petmediaWhereInput
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountViewplaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: viewplaceWhereInput
  }


  /**
   * Count Type PetkindCountOutputType
   */

  export type PetkindCountOutputType = {
    pet: number
  }

  export type PetkindCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | PetkindCountOutputTypeCountPetArgs
  }

  // Custom InputTypes
  /**
   * PetkindCountOutputType without action
   */
  export type PetkindCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetkindCountOutputType
     */
    select?: PetkindCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetkindCountOutputType without action
   */
  export type PetkindCountOutputTypeCountPetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: petWhereInput
  }


  /**
   * Count Type ShelterCountOutputType
   */

  export type ShelterCountOutputType = {
    petinshelter: number
  }

  export type ShelterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petinshelter?: boolean | ShelterCountOutputTypeCountPetinshelterArgs
  }

  // Custom InputTypes
  /**
   * ShelterCountOutputType without action
   */
  export type ShelterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelterCountOutputType
     */
    select?: ShelterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShelterCountOutputType without action
   */
  export type ShelterCountOutputTypeCountPetinshelterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: petinshelterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model adoption
   */

  export type AggregateAdoption = {
    _count: AdoptionCountAggregateOutputType | null
    _avg: AdoptionAvgAggregateOutputType | null
    _sum: AdoptionSumAggregateOutputType | null
    _min: AdoptionMinAggregateOutputType | null
    _max: AdoptionMaxAggregateOutputType | null
  }

  export type AdoptionAvgAggregateOutputType = {
    idadoption: number | null
    idperson: number | null
    idpet: number | null
    idstatus: number | null
  }

  export type AdoptionSumAggregateOutputType = {
    idadoption: bigint | null
    idperson: bigint | null
    idpet: bigint | null
    idstatus: number | null
  }

  export type AdoptionMinAggregateOutputType = {
    idadoption: bigint | null
    idperson: bigint | null
    idpet: bigint | null
    idstatus: number | null
    adoptiodate: Date | null
  }

  export type AdoptionMaxAggregateOutputType = {
    idadoption: bigint | null
    idperson: bigint | null
    idpet: bigint | null
    idstatus: number | null
    adoptiodate: Date | null
  }

  export type AdoptionCountAggregateOutputType = {
    idadoption: number
    idperson: number
    idpet: number
    idstatus: number
    adoptiodate: number
    _all: number
  }


  export type AdoptionAvgAggregateInputType = {
    idadoption?: true
    idperson?: true
    idpet?: true
    idstatus?: true
  }

  export type AdoptionSumAggregateInputType = {
    idadoption?: true
    idperson?: true
    idpet?: true
    idstatus?: true
  }

  export type AdoptionMinAggregateInputType = {
    idadoption?: true
    idperson?: true
    idpet?: true
    idstatus?: true
    adoptiodate?: true
  }

  export type AdoptionMaxAggregateInputType = {
    idadoption?: true
    idperson?: true
    idpet?: true
    idstatus?: true
    adoptiodate?: true
  }

  export type AdoptionCountAggregateInputType = {
    idadoption?: true
    idperson?: true
    idpet?: true
    idstatus?: true
    adoptiodate?: true
    _all?: true
  }

  export type AdoptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adoption to aggregate.
     */
    where?: adoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adoptions to fetch.
     */
    orderBy?: adoptionOrderByWithRelationInput | adoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned adoptions
    **/
    _count?: true | AdoptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdoptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdoptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdoptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdoptionMaxAggregateInputType
  }

  export type GetAdoptionAggregateType<T extends AdoptionAggregateArgs> = {
        [P in keyof T & keyof AggregateAdoption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdoption[P]>
      : GetScalarType<T[P], AggregateAdoption[P]>
  }




  export type adoptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adoptionWhereInput
    orderBy?: adoptionOrderByWithAggregationInput | adoptionOrderByWithAggregationInput[]
    by: AdoptionScalarFieldEnum[] | AdoptionScalarFieldEnum
    having?: adoptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdoptionCountAggregateInputType | true
    _avg?: AdoptionAvgAggregateInputType
    _sum?: AdoptionSumAggregateInputType
    _min?: AdoptionMinAggregateInputType
    _max?: AdoptionMaxAggregateInputType
  }

  export type AdoptionGroupByOutputType = {
    idadoption: bigint
    idperson: bigint | null
    idpet: bigint | null
    idstatus: number | null
    adoptiodate: Date | null
    _count: AdoptionCountAggregateOutputType | null
    _avg: AdoptionAvgAggregateOutputType | null
    _sum: AdoptionSumAggregateOutputType | null
    _min: AdoptionMinAggregateOutputType | null
    _max: AdoptionMaxAggregateOutputType | null
  }

  type GetAdoptionGroupByPayload<T extends adoptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdoptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdoptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdoptionGroupByOutputType[P]>
            : GetScalarType<T[P], AdoptionGroupByOutputType[P]>
        }
      >
    >


  export type adoptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idadoption?: boolean
    idperson?: boolean
    idpet?: boolean
    idstatus?: boolean
    adoptiodate?: boolean
    adoptionstatus?: boolean | adoption$adoptionstatusArgs<ExtArgs>
    person?: boolean | adoption$personArgs<ExtArgs>
    pet?: boolean | adoption$petArgs<ExtArgs>
  }, ExtArgs["result"]["adoption"]>

  export type adoptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idadoption?: boolean
    idperson?: boolean
    idpet?: boolean
    idstatus?: boolean
    adoptiodate?: boolean
    adoptionstatus?: boolean | adoption$adoptionstatusArgs<ExtArgs>
    person?: boolean | adoption$personArgs<ExtArgs>
    pet?: boolean | adoption$petArgs<ExtArgs>
  }, ExtArgs["result"]["adoption"]>

  export type adoptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idadoption?: boolean
    idperson?: boolean
    idpet?: boolean
    idstatus?: boolean
    adoptiodate?: boolean
    adoptionstatus?: boolean | adoption$adoptionstatusArgs<ExtArgs>
    person?: boolean | adoption$personArgs<ExtArgs>
    pet?: boolean | adoption$petArgs<ExtArgs>
  }, ExtArgs["result"]["adoption"]>

  export type adoptionSelectScalar = {
    idadoption?: boolean
    idperson?: boolean
    idpet?: boolean
    idstatus?: boolean
    adoptiodate?: boolean
  }

  export type adoptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idadoption" | "idperson" | "idpet" | "idstatus" | "adoptiodate", ExtArgs["result"]["adoption"]>
  export type adoptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoptionstatus?: boolean | adoption$adoptionstatusArgs<ExtArgs>
    person?: boolean | adoption$personArgs<ExtArgs>
    pet?: boolean | adoption$petArgs<ExtArgs>
  }
  export type adoptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoptionstatus?: boolean | adoption$adoptionstatusArgs<ExtArgs>
    person?: boolean | adoption$personArgs<ExtArgs>
    pet?: boolean | adoption$petArgs<ExtArgs>
  }
  export type adoptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoptionstatus?: boolean | adoption$adoptionstatusArgs<ExtArgs>
    person?: boolean | adoption$personArgs<ExtArgs>
    pet?: boolean | adoption$petArgs<ExtArgs>
  }

  export type $adoptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "adoption"
    objects: {
      adoptionstatus: Prisma.$adoptionstatusPayload<ExtArgs> | null
      person: Prisma.$personPayload<ExtArgs> | null
      pet: Prisma.$petPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      idadoption: bigint
      idperson: bigint | null
      idpet: bigint | null
      idstatus: number | null
      adoptiodate: Date | null
    }, ExtArgs["result"]["adoption"]>
    composites: {}
  }

  type adoptionGetPayload<S extends boolean | null | undefined | adoptionDefaultArgs> = $Result.GetResult<Prisma.$adoptionPayload, S>

  type adoptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adoptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdoptionCountAggregateInputType | true
    }

  export interface adoptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['adoption'], meta: { name: 'adoption' } }
    /**
     * Find zero or one Adoption that matches the filter.
     * @param {adoptionFindUniqueArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adoptionFindUniqueArgs>(args: SelectSubset<T, adoptionFindUniqueArgs<ExtArgs>>): Prisma__adoptionClient<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adoption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adoptionFindUniqueOrThrowArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adoptionFindUniqueOrThrowArgs>(args: SelectSubset<T, adoptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adoptionClient<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adoption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionFindFirstArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adoptionFindFirstArgs>(args?: SelectSubset<T, adoptionFindFirstArgs<ExtArgs>>): Prisma__adoptionClient<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adoption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionFindFirstOrThrowArgs} args - Arguments to find a Adoption
     * @example
     * // Get one Adoption
     * const adoption = await prisma.adoption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adoptionFindFirstOrThrowArgs>(args?: SelectSubset<T, adoptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__adoptionClient<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adoptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adoptions
     * const adoptions = await prisma.adoption.findMany()
     * 
     * // Get first 10 Adoptions
     * const adoptions = await prisma.adoption.findMany({ take: 10 })
     * 
     * // Only select the `idadoption`
     * const adoptionWithIdadoptionOnly = await prisma.adoption.findMany({ select: { idadoption: true } })
     * 
     */
    findMany<T extends adoptionFindManyArgs>(args?: SelectSubset<T, adoptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adoption.
     * @param {adoptionCreateArgs} args - Arguments to create a Adoption.
     * @example
     * // Create one Adoption
     * const Adoption = await prisma.adoption.create({
     *   data: {
     *     // ... data to create a Adoption
     *   }
     * })
     * 
     */
    create<T extends adoptionCreateArgs>(args: SelectSubset<T, adoptionCreateArgs<ExtArgs>>): Prisma__adoptionClient<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adoptions.
     * @param {adoptionCreateManyArgs} args - Arguments to create many Adoptions.
     * @example
     * // Create many Adoptions
     * const adoption = await prisma.adoption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adoptionCreateManyArgs>(args?: SelectSubset<T, adoptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adoptions and returns the data saved in the database.
     * @param {adoptionCreateManyAndReturnArgs} args - Arguments to create many Adoptions.
     * @example
     * // Create many Adoptions
     * const adoption = await prisma.adoption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adoptions and only return the `idadoption`
     * const adoptionWithIdadoptionOnly = await prisma.adoption.createManyAndReturn({
     *   select: { idadoption: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adoptionCreateManyAndReturnArgs>(args?: SelectSubset<T, adoptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adoption.
     * @param {adoptionDeleteArgs} args - Arguments to delete one Adoption.
     * @example
     * // Delete one Adoption
     * const Adoption = await prisma.adoption.delete({
     *   where: {
     *     // ... filter to delete one Adoption
     *   }
     * })
     * 
     */
    delete<T extends adoptionDeleteArgs>(args: SelectSubset<T, adoptionDeleteArgs<ExtArgs>>): Prisma__adoptionClient<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adoption.
     * @param {adoptionUpdateArgs} args - Arguments to update one Adoption.
     * @example
     * // Update one Adoption
     * const adoption = await prisma.adoption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adoptionUpdateArgs>(args: SelectSubset<T, adoptionUpdateArgs<ExtArgs>>): Prisma__adoptionClient<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adoptions.
     * @param {adoptionDeleteManyArgs} args - Arguments to filter Adoptions to delete.
     * @example
     * // Delete a few Adoptions
     * const { count } = await prisma.adoption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adoptionDeleteManyArgs>(args?: SelectSubset<T, adoptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adoptions
     * const adoption = await prisma.adoption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adoptionUpdateManyArgs>(args: SelectSubset<T, adoptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adoptions and returns the data updated in the database.
     * @param {adoptionUpdateManyAndReturnArgs} args - Arguments to update many Adoptions.
     * @example
     * // Update many Adoptions
     * const adoption = await prisma.adoption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adoptions and only return the `idadoption`
     * const adoptionWithIdadoptionOnly = await prisma.adoption.updateManyAndReturn({
     *   select: { idadoption: true },
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
    updateManyAndReturn<T extends adoptionUpdateManyAndReturnArgs>(args: SelectSubset<T, adoptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adoption.
     * @param {adoptionUpsertArgs} args - Arguments to update or create a Adoption.
     * @example
     * // Update or create a Adoption
     * const adoption = await prisma.adoption.upsert({
     *   create: {
     *     // ... data to create a Adoption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adoption we want to update
     *   }
     * })
     */
    upsert<T extends adoptionUpsertArgs>(args: SelectSubset<T, adoptionUpsertArgs<ExtArgs>>): Prisma__adoptionClient<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adoptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionCountArgs} args - Arguments to filter Adoptions to count.
     * @example
     * // Count the number of Adoptions
     * const count = await prisma.adoption.count({
     *   where: {
     *     // ... the filter for the Adoptions we want to count
     *   }
     * })
    **/
    count<T extends adoptionCountArgs>(
      args?: Subset<T, adoptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdoptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adoption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdoptionAggregateArgs>(args: Subset<T, AdoptionAggregateArgs>): Prisma.PrismaPromise<GetAdoptionAggregateType<T>>

    /**
     * Group by Adoption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionGroupByArgs} args - Group by arguments.
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
      T extends adoptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adoptionGroupByArgs['orderBy'] }
        : { orderBy?: adoptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adoptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdoptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the adoption model
   */
  readonly fields: adoptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for adoption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adoptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adoptionstatus<T extends adoption$adoptionstatusArgs<ExtArgs> = {}>(args?: Subset<T, adoption$adoptionstatusArgs<ExtArgs>>): Prisma__adoptionstatusClient<$Result.GetResult<Prisma.$adoptionstatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    person<T extends adoption$personArgs<ExtArgs> = {}>(args?: Subset<T, adoption$personArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pet<T extends adoption$petArgs<ExtArgs> = {}>(args?: Subset<T, adoption$petArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the adoption model
   */
  interface adoptionFieldRefs {
    readonly idadoption: FieldRef<"adoption", 'BigInt'>
    readonly idperson: FieldRef<"adoption", 'BigInt'>
    readonly idpet: FieldRef<"adoption", 'BigInt'>
    readonly idstatus: FieldRef<"adoption", 'Int'>
    readonly adoptiodate: FieldRef<"adoption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * adoption findUnique
   */
  export type adoptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * Filter, which adoption to fetch.
     */
    where: adoptionWhereUniqueInput
  }

  /**
   * adoption findUniqueOrThrow
   */
  export type adoptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * Filter, which adoption to fetch.
     */
    where: adoptionWhereUniqueInput
  }

  /**
   * adoption findFirst
   */
  export type adoptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * Filter, which adoption to fetch.
     */
    where?: adoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adoptions to fetch.
     */
    orderBy?: adoptionOrderByWithRelationInput | adoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adoptions.
     */
    cursor?: adoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adoptions.
     */
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * adoption findFirstOrThrow
   */
  export type adoptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * Filter, which adoption to fetch.
     */
    where?: adoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adoptions to fetch.
     */
    orderBy?: adoptionOrderByWithRelationInput | adoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adoptions.
     */
    cursor?: adoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adoptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adoptions.
     */
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * adoption findMany
   */
  export type adoptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * Filter, which adoptions to fetch.
     */
    where?: adoptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adoptions to fetch.
     */
    orderBy?: adoptionOrderByWithRelationInput | adoptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing adoptions.
     */
    cursor?: adoptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adoptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adoptions.
     */
    skip?: number
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * adoption create
   */
  export type adoptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * The data needed to create a adoption.
     */
    data?: XOR<adoptionCreateInput, adoptionUncheckedCreateInput>
  }

  /**
   * adoption createMany
   */
  export type adoptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many adoptions.
     */
    data: adoptionCreateManyInput | adoptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * adoption createManyAndReturn
   */
  export type adoptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * The data used to create many adoptions.
     */
    data: adoptionCreateManyInput | adoptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * adoption update
   */
  export type adoptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * The data needed to update a adoption.
     */
    data: XOR<adoptionUpdateInput, adoptionUncheckedUpdateInput>
    /**
     * Choose, which adoption to update.
     */
    where: adoptionWhereUniqueInput
  }

  /**
   * adoption updateMany
   */
  export type adoptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update adoptions.
     */
    data: XOR<adoptionUpdateManyMutationInput, adoptionUncheckedUpdateManyInput>
    /**
     * Filter which adoptions to update
     */
    where?: adoptionWhereInput
    /**
     * Limit how many adoptions to update.
     */
    limit?: number
  }

  /**
   * adoption updateManyAndReturn
   */
  export type adoptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * The data used to update adoptions.
     */
    data: XOR<adoptionUpdateManyMutationInput, adoptionUncheckedUpdateManyInput>
    /**
     * Filter which adoptions to update
     */
    where?: adoptionWhereInput
    /**
     * Limit how many adoptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * adoption upsert
   */
  export type adoptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * The filter to search for the adoption to update in case it exists.
     */
    where: adoptionWhereUniqueInput
    /**
     * In case the adoption found by the `where` argument doesn't exist, create a new adoption with this data.
     */
    create: XOR<adoptionCreateInput, adoptionUncheckedCreateInput>
    /**
     * In case the adoption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adoptionUpdateInput, adoptionUncheckedUpdateInput>
  }

  /**
   * adoption delete
   */
  export type adoptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    /**
     * Filter which adoption to delete.
     */
    where: adoptionWhereUniqueInput
  }

  /**
   * adoption deleteMany
   */
  export type adoptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adoptions to delete
     */
    where?: adoptionWhereInput
    /**
     * Limit how many adoptions to delete.
     */
    limit?: number
  }

  /**
   * adoption.adoptionstatus
   */
  export type adoption$adoptionstatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoptionstatus
     */
    select?: adoptionstatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoptionstatus
     */
    omit?: adoptionstatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionstatusInclude<ExtArgs> | null
    where?: adoptionstatusWhereInput
  }

  /**
   * adoption.person
   */
  export type adoption$personArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    where?: personWhereInput
  }

  /**
   * adoption.pet
   */
  export type adoption$petArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    where?: petWhereInput
  }

  /**
   * adoption without action
   */
  export type adoptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
  }


  /**
   * Model adoptionstatus
   */

  export type AggregateAdoptionstatus = {
    _count: AdoptionstatusCountAggregateOutputType | null
    _avg: AdoptionstatusAvgAggregateOutputType | null
    _sum: AdoptionstatusSumAggregateOutputType | null
    _min: AdoptionstatusMinAggregateOutputType | null
    _max: AdoptionstatusMaxAggregateOutputType | null
  }

  export type AdoptionstatusAvgAggregateOutputType = {
    idstatus: number | null
  }

  export type AdoptionstatusSumAggregateOutputType = {
    idstatus: number | null
  }

  export type AdoptionstatusMinAggregateOutputType = {
    idstatus: number | null
    status: string | null
  }

  export type AdoptionstatusMaxAggregateOutputType = {
    idstatus: number | null
    status: string | null
  }

  export type AdoptionstatusCountAggregateOutputType = {
    idstatus: number
    status: number
    _all: number
  }


  export type AdoptionstatusAvgAggregateInputType = {
    idstatus?: true
  }

  export type AdoptionstatusSumAggregateInputType = {
    idstatus?: true
  }

  export type AdoptionstatusMinAggregateInputType = {
    idstatus?: true
    status?: true
  }

  export type AdoptionstatusMaxAggregateInputType = {
    idstatus?: true
    status?: true
  }

  export type AdoptionstatusCountAggregateInputType = {
    idstatus?: true
    status?: true
    _all?: true
  }

  export type AdoptionstatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adoptionstatus to aggregate.
     */
    where?: adoptionstatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adoptionstatuses to fetch.
     */
    orderBy?: adoptionstatusOrderByWithRelationInput | adoptionstatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adoptionstatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adoptionstatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adoptionstatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned adoptionstatuses
    **/
    _count?: true | AdoptionstatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdoptionstatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdoptionstatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdoptionstatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdoptionstatusMaxAggregateInputType
  }

  export type GetAdoptionstatusAggregateType<T extends AdoptionstatusAggregateArgs> = {
        [P in keyof T & keyof AggregateAdoptionstatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdoptionstatus[P]>
      : GetScalarType<T[P], AggregateAdoptionstatus[P]>
  }




  export type adoptionstatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adoptionstatusWhereInput
    orderBy?: adoptionstatusOrderByWithAggregationInput | adoptionstatusOrderByWithAggregationInput[]
    by: AdoptionstatusScalarFieldEnum[] | AdoptionstatusScalarFieldEnum
    having?: adoptionstatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdoptionstatusCountAggregateInputType | true
    _avg?: AdoptionstatusAvgAggregateInputType
    _sum?: AdoptionstatusSumAggregateInputType
    _min?: AdoptionstatusMinAggregateInputType
    _max?: AdoptionstatusMaxAggregateInputType
  }

  export type AdoptionstatusGroupByOutputType = {
    idstatus: number
    status: string | null
    _count: AdoptionstatusCountAggregateOutputType | null
    _avg: AdoptionstatusAvgAggregateOutputType | null
    _sum: AdoptionstatusSumAggregateOutputType | null
    _min: AdoptionstatusMinAggregateOutputType | null
    _max: AdoptionstatusMaxAggregateOutputType | null
  }

  type GetAdoptionstatusGroupByPayload<T extends adoptionstatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdoptionstatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdoptionstatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdoptionstatusGroupByOutputType[P]>
            : GetScalarType<T[P], AdoptionstatusGroupByOutputType[P]>
        }
      >
    >


  export type adoptionstatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idstatus?: boolean
    status?: boolean
    adoption?: boolean | adoptionstatus$adoptionArgs<ExtArgs>
    _count?: boolean | AdoptionstatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adoptionstatus"]>

  export type adoptionstatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idstatus?: boolean
    status?: boolean
  }, ExtArgs["result"]["adoptionstatus"]>

  export type adoptionstatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idstatus?: boolean
    status?: boolean
  }, ExtArgs["result"]["adoptionstatus"]>

  export type adoptionstatusSelectScalar = {
    idstatus?: boolean
    status?: boolean
  }

  export type adoptionstatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idstatus" | "status", ExtArgs["result"]["adoptionstatus"]>
  export type adoptionstatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoption?: boolean | adoptionstatus$adoptionArgs<ExtArgs>
    _count?: boolean | AdoptionstatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type adoptionstatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type adoptionstatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $adoptionstatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "adoptionstatus"
    objects: {
      adoption: Prisma.$adoptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idstatus: number
      status: string | null
    }, ExtArgs["result"]["adoptionstatus"]>
    composites: {}
  }

  type adoptionstatusGetPayload<S extends boolean | null | undefined | adoptionstatusDefaultArgs> = $Result.GetResult<Prisma.$adoptionstatusPayload, S>

  type adoptionstatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adoptionstatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdoptionstatusCountAggregateInputType | true
    }

  export interface adoptionstatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['adoptionstatus'], meta: { name: 'adoptionstatus' } }
    /**
     * Find zero or one Adoptionstatus that matches the filter.
     * @param {adoptionstatusFindUniqueArgs} args - Arguments to find a Adoptionstatus
     * @example
     * // Get one Adoptionstatus
     * const adoptionstatus = await prisma.adoptionstatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adoptionstatusFindUniqueArgs>(args: SelectSubset<T, adoptionstatusFindUniqueArgs<ExtArgs>>): Prisma__adoptionstatusClient<$Result.GetResult<Prisma.$adoptionstatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adoptionstatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adoptionstatusFindUniqueOrThrowArgs} args - Arguments to find a Adoptionstatus
     * @example
     * // Get one Adoptionstatus
     * const adoptionstatus = await prisma.adoptionstatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adoptionstatusFindUniqueOrThrowArgs>(args: SelectSubset<T, adoptionstatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adoptionstatusClient<$Result.GetResult<Prisma.$adoptionstatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adoptionstatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionstatusFindFirstArgs} args - Arguments to find a Adoptionstatus
     * @example
     * // Get one Adoptionstatus
     * const adoptionstatus = await prisma.adoptionstatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adoptionstatusFindFirstArgs>(args?: SelectSubset<T, adoptionstatusFindFirstArgs<ExtArgs>>): Prisma__adoptionstatusClient<$Result.GetResult<Prisma.$adoptionstatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adoptionstatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionstatusFindFirstOrThrowArgs} args - Arguments to find a Adoptionstatus
     * @example
     * // Get one Adoptionstatus
     * const adoptionstatus = await prisma.adoptionstatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adoptionstatusFindFirstOrThrowArgs>(args?: SelectSubset<T, adoptionstatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__adoptionstatusClient<$Result.GetResult<Prisma.$adoptionstatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adoptionstatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionstatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adoptionstatuses
     * const adoptionstatuses = await prisma.adoptionstatus.findMany()
     * 
     * // Get first 10 Adoptionstatuses
     * const adoptionstatuses = await prisma.adoptionstatus.findMany({ take: 10 })
     * 
     * // Only select the `idstatus`
     * const adoptionstatusWithIdstatusOnly = await prisma.adoptionstatus.findMany({ select: { idstatus: true } })
     * 
     */
    findMany<T extends adoptionstatusFindManyArgs>(args?: SelectSubset<T, adoptionstatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adoptionstatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adoptionstatus.
     * @param {adoptionstatusCreateArgs} args - Arguments to create a Adoptionstatus.
     * @example
     * // Create one Adoptionstatus
     * const Adoptionstatus = await prisma.adoptionstatus.create({
     *   data: {
     *     // ... data to create a Adoptionstatus
     *   }
     * })
     * 
     */
    create<T extends adoptionstatusCreateArgs>(args: SelectSubset<T, adoptionstatusCreateArgs<ExtArgs>>): Prisma__adoptionstatusClient<$Result.GetResult<Prisma.$adoptionstatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adoptionstatuses.
     * @param {adoptionstatusCreateManyArgs} args - Arguments to create many Adoptionstatuses.
     * @example
     * // Create many Adoptionstatuses
     * const adoptionstatus = await prisma.adoptionstatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adoptionstatusCreateManyArgs>(args?: SelectSubset<T, adoptionstatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adoptionstatuses and returns the data saved in the database.
     * @param {adoptionstatusCreateManyAndReturnArgs} args - Arguments to create many Adoptionstatuses.
     * @example
     * // Create many Adoptionstatuses
     * const adoptionstatus = await prisma.adoptionstatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adoptionstatuses and only return the `idstatus`
     * const adoptionstatusWithIdstatusOnly = await prisma.adoptionstatus.createManyAndReturn({
     *   select: { idstatus: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adoptionstatusCreateManyAndReturnArgs>(args?: SelectSubset<T, adoptionstatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adoptionstatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adoptionstatus.
     * @param {adoptionstatusDeleteArgs} args - Arguments to delete one Adoptionstatus.
     * @example
     * // Delete one Adoptionstatus
     * const Adoptionstatus = await prisma.adoptionstatus.delete({
     *   where: {
     *     // ... filter to delete one Adoptionstatus
     *   }
     * })
     * 
     */
    delete<T extends adoptionstatusDeleteArgs>(args: SelectSubset<T, adoptionstatusDeleteArgs<ExtArgs>>): Prisma__adoptionstatusClient<$Result.GetResult<Prisma.$adoptionstatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adoptionstatus.
     * @param {adoptionstatusUpdateArgs} args - Arguments to update one Adoptionstatus.
     * @example
     * // Update one Adoptionstatus
     * const adoptionstatus = await prisma.adoptionstatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adoptionstatusUpdateArgs>(args: SelectSubset<T, adoptionstatusUpdateArgs<ExtArgs>>): Prisma__adoptionstatusClient<$Result.GetResult<Prisma.$adoptionstatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adoptionstatuses.
     * @param {adoptionstatusDeleteManyArgs} args - Arguments to filter Adoptionstatuses to delete.
     * @example
     * // Delete a few Adoptionstatuses
     * const { count } = await prisma.adoptionstatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adoptionstatusDeleteManyArgs>(args?: SelectSubset<T, adoptionstatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adoptionstatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionstatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adoptionstatuses
     * const adoptionstatus = await prisma.adoptionstatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adoptionstatusUpdateManyArgs>(args: SelectSubset<T, adoptionstatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adoptionstatuses and returns the data updated in the database.
     * @param {adoptionstatusUpdateManyAndReturnArgs} args - Arguments to update many Adoptionstatuses.
     * @example
     * // Update many Adoptionstatuses
     * const adoptionstatus = await prisma.adoptionstatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adoptionstatuses and only return the `idstatus`
     * const adoptionstatusWithIdstatusOnly = await prisma.adoptionstatus.updateManyAndReturn({
     *   select: { idstatus: true },
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
    updateManyAndReturn<T extends adoptionstatusUpdateManyAndReturnArgs>(args: SelectSubset<T, adoptionstatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adoptionstatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adoptionstatus.
     * @param {adoptionstatusUpsertArgs} args - Arguments to update or create a Adoptionstatus.
     * @example
     * // Update or create a Adoptionstatus
     * const adoptionstatus = await prisma.adoptionstatus.upsert({
     *   create: {
     *     // ... data to create a Adoptionstatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adoptionstatus we want to update
     *   }
     * })
     */
    upsert<T extends adoptionstatusUpsertArgs>(args: SelectSubset<T, adoptionstatusUpsertArgs<ExtArgs>>): Prisma__adoptionstatusClient<$Result.GetResult<Prisma.$adoptionstatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adoptionstatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionstatusCountArgs} args - Arguments to filter Adoptionstatuses to count.
     * @example
     * // Count the number of Adoptionstatuses
     * const count = await prisma.adoptionstatus.count({
     *   where: {
     *     // ... the filter for the Adoptionstatuses we want to count
     *   }
     * })
    **/
    count<T extends adoptionstatusCountArgs>(
      args?: Subset<T, adoptionstatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdoptionstatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adoptionstatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdoptionstatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdoptionstatusAggregateArgs>(args: Subset<T, AdoptionstatusAggregateArgs>): Prisma.PrismaPromise<GetAdoptionstatusAggregateType<T>>

    /**
     * Group by Adoptionstatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adoptionstatusGroupByArgs} args - Group by arguments.
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
      T extends adoptionstatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adoptionstatusGroupByArgs['orderBy'] }
        : { orderBy?: adoptionstatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adoptionstatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdoptionstatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the adoptionstatus model
   */
  readonly fields: adoptionstatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for adoptionstatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adoptionstatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adoption<T extends adoptionstatus$adoptionArgs<ExtArgs> = {}>(args?: Subset<T, adoptionstatus$adoptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the adoptionstatus model
   */
  interface adoptionstatusFieldRefs {
    readonly idstatus: FieldRef<"adoptionstatus", 'Int'>
    readonly status: FieldRef<"adoptionstatus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * adoptionstatus findUnique
   */
  export type adoptionstatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoptionstatus
     */
    select?: adoptionstatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoptionstatus
     */
    omit?: adoptionstatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionstatusInclude<ExtArgs> | null
    /**
     * Filter, which adoptionstatus to fetch.
     */
    where: adoptionstatusWhereUniqueInput
  }

  /**
   * adoptionstatus findUniqueOrThrow
   */
  export type adoptionstatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoptionstatus
     */
    select?: adoptionstatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoptionstatus
     */
    omit?: adoptionstatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionstatusInclude<ExtArgs> | null
    /**
     * Filter, which adoptionstatus to fetch.
     */
    where: adoptionstatusWhereUniqueInput
  }

  /**
   * adoptionstatus findFirst
   */
  export type adoptionstatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoptionstatus
     */
    select?: adoptionstatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoptionstatus
     */
    omit?: adoptionstatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionstatusInclude<ExtArgs> | null
    /**
     * Filter, which adoptionstatus to fetch.
     */
    where?: adoptionstatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adoptionstatuses to fetch.
     */
    orderBy?: adoptionstatusOrderByWithRelationInput | adoptionstatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adoptionstatuses.
     */
    cursor?: adoptionstatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adoptionstatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adoptionstatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adoptionstatuses.
     */
    distinct?: AdoptionstatusScalarFieldEnum | AdoptionstatusScalarFieldEnum[]
  }

  /**
   * adoptionstatus findFirstOrThrow
   */
  export type adoptionstatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoptionstatus
     */
    select?: adoptionstatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoptionstatus
     */
    omit?: adoptionstatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionstatusInclude<ExtArgs> | null
    /**
     * Filter, which adoptionstatus to fetch.
     */
    where?: adoptionstatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adoptionstatuses to fetch.
     */
    orderBy?: adoptionstatusOrderByWithRelationInput | adoptionstatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adoptionstatuses.
     */
    cursor?: adoptionstatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adoptionstatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adoptionstatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adoptionstatuses.
     */
    distinct?: AdoptionstatusScalarFieldEnum | AdoptionstatusScalarFieldEnum[]
  }

  /**
   * adoptionstatus findMany
   */
  export type adoptionstatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoptionstatus
     */
    select?: adoptionstatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoptionstatus
     */
    omit?: adoptionstatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionstatusInclude<ExtArgs> | null
    /**
     * Filter, which adoptionstatuses to fetch.
     */
    where?: adoptionstatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adoptionstatuses to fetch.
     */
    orderBy?: adoptionstatusOrderByWithRelationInput | adoptionstatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing adoptionstatuses.
     */
    cursor?: adoptionstatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adoptionstatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adoptionstatuses.
     */
    skip?: number
    distinct?: AdoptionstatusScalarFieldEnum | AdoptionstatusScalarFieldEnum[]
  }

  /**
   * adoptionstatus create
   */
  export type adoptionstatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoptionstatus
     */
    select?: adoptionstatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoptionstatus
     */
    omit?: adoptionstatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionstatusInclude<ExtArgs> | null
    /**
     * The data needed to create a adoptionstatus.
     */
    data: XOR<adoptionstatusCreateInput, adoptionstatusUncheckedCreateInput>
  }

  /**
   * adoptionstatus createMany
   */
  export type adoptionstatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many adoptionstatuses.
     */
    data: adoptionstatusCreateManyInput | adoptionstatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * adoptionstatus createManyAndReturn
   */
  export type adoptionstatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoptionstatus
     */
    select?: adoptionstatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the adoptionstatus
     */
    omit?: adoptionstatusOmit<ExtArgs> | null
    /**
     * The data used to create many adoptionstatuses.
     */
    data: adoptionstatusCreateManyInput | adoptionstatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * adoptionstatus update
   */
  export type adoptionstatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoptionstatus
     */
    select?: adoptionstatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoptionstatus
     */
    omit?: adoptionstatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionstatusInclude<ExtArgs> | null
    /**
     * The data needed to update a adoptionstatus.
     */
    data: XOR<adoptionstatusUpdateInput, adoptionstatusUncheckedUpdateInput>
    /**
     * Choose, which adoptionstatus to update.
     */
    where: adoptionstatusWhereUniqueInput
  }

  /**
   * adoptionstatus updateMany
   */
  export type adoptionstatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update adoptionstatuses.
     */
    data: XOR<adoptionstatusUpdateManyMutationInput, adoptionstatusUncheckedUpdateManyInput>
    /**
     * Filter which adoptionstatuses to update
     */
    where?: adoptionstatusWhereInput
    /**
     * Limit how many adoptionstatuses to update.
     */
    limit?: number
  }

  /**
   * adoptionstatus updateManyAndReturn
   */
  export type adoptionstatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoptionstatus
     */
    select?: adoptionstatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the adoptionstatus
     */
    omit?: adoptionstatusOmit<ExtArgs> | null
    /**
     * The data used to update adoptionstatuses.
     */
    data: XOR<adoptionstatusUpdateManyMutationInput, adoptionstatusUncheckedUpdateManyInput>
    /**
     * Filter which adoptionstatuses to update
     */
    where?: adoptionstatusWhereInput
    /**
     * Limit how many adoptionstatuses to update.
     */
    limit?: number
  }

  /**
   * adoptionstatus upsert
   */
  export type adoptionstatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoptionstatus
     */
    select?: adoptionstatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoptionstatus
     */
    omit?: adoptionstatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionstatusInclude<ExtArgs> | null
    /**
     * The filter to search for the adoptionstatus to update in case it exists.
     */
    where: adoptionstatusWhereUniqueInput
    /**
     * In case the adoptionstatus found by the `where` argument doesn't exist, create a new adoptionstatus with this data.
     */
    create: XOR<adoptionstatusCreateInput, adoptionstatusUncheckedCreateInput>
    /**
     * In case the adoptionstatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adoptionstatusUpdateInput, adoptionstatusUncheckedUpdateInput>
  }

  /**
   * adoptionstatus delete
   */
  export type adoptionstatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoptionstatus
     */
    select?: adoptionstatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoptionstatus
     */
    omit?: adoptionstatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionstatusInclude<ExtArgs> | null
    /**
     * Filter which adoptionstatus to delete.
     */
    where: adoptionstatusWhereUniqueInput
  }

  /**
   * adoptionstatus deleteMany
   */
  export type adoptionstatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adoptionstatuses to delete
     */
    where?: adoptionstatusWhereInput
    /**
     * Limit how many adoptionstatuses to delete.
     */
    limit?: number
  }

  /**
   * adoptionstatus.adoption
   */
  export type adoptionstatus$adoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    where?: adoptionWhereInput
    orderBy?: adoptionOrderByWithRelationInput | adoptionOrderByWithRelationInput[]
    cursor?: adoptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * adoptionstatus without action
   */
  export type adoptionstatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoptionstatus
     */
    select?: adoptionstatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoptionstatus
     */
    omit?: adoptionstatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionstatusInclude<ExtArgs> | null
  }


  /**
   * Model person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    idperson: number | null
  }

  export type PersonSumAggregateOutputType = {
    idperson: bigint | null
  }

  export type PersonMinAggregateOutputType = {
    idperson: bigint | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    email: string | null
    phone: string | null
    register: Date | null
    active: boolean | null
  }

  export type PersonMaxAggregateOutputType = {
    idperson: bigint | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    email: string | null
    phone: string | null
    register: Date | null
    active: boolean | null
  }

  export type PersonCountAggregateOutputType = {
    idperson: number
    firstname: number
    middlename: number
    lastname: number
    email: number
    phone: number
    register: number
    active: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    idperson?: true
  }

  export type PersonSumAggregateInputType = {
    idperson?: true
  }

  export type PersonMinAggregateInputType = {
    idperson?: true
    firstname?: true
    middlename?: true
    lastname?: true
    email?: true
    phone?: true
    register?: true
    active?: true
  }

  export type PersonMaxAggregateInputType = {
    idperson?: true
    firstname?: true
    middlename?: true
    lastname?: true
    email?: true
    phone?: true
    register?: true
    active?: true
  }

  export type PersonCountAggregateInputType = {
    idperson?: true
    firstname?: true
    middlename?: true
    lastname?: true
    email?: true
    phone?: true
    register?: true
    active?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which person to aggregate.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned people
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type personGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personWhereInput
    orderBy?: personOrderByWithAggregationInput | personOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: personScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    idperson: bigint
    firstname: string
    middlename: string | null
    lastname: string
    email: string
    phone: string | null
    register: Date
    active: boolean
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends personGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type personSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idperson?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    register?: boolean
    active?: boolean
    adoption?: boolean | person$adoptionArgs<ExtArgs>
    viewplace?: boolean | person$viewplaceArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type personSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idperson?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    register?: boolean
    active?: boolean
  }, ExtArgs["result"]["person"]>

  export type personSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idperson?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    register?: boolean
    active?: boolean
  }, ExtArgs["result"]["person"]>

  export type personSelectScalar = {
    idperson?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    email?: boolean
    phone?: boolean
    register?: boolean
    active?: boolean
  }

  export type personOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idperson" | "firstname" | "middlename" | "lastname" | "email" | "phone" | "register" | "active", ExtArgs["result"]["person"]>
  export type personInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoption?: boolean | person$adoptionArgs<ExtArgs>
    viewplace?: boolean | person$viewplaceArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type personIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type personIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $personPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "person"
    objects: {
      adoption: Prisma.$adoptionPayload<ExtArgs>[]
      viewplace: Prisma.$viewplacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idperson: bigint
      firstname: string
      middlename: string | null
      lastname: string
      email: string
      phone: string | null
      register: Date
      active: boolean
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type personGetPayload<S extends boolean | null | undefined | personDefaultArgs> = $Result.GetResult<Prisma.$personPayload, S>

  type personCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<personFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface personDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['person'], meta: { name: 'person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {personFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personFindUniqueArgs>(args: SelectSubset<T, personFindUniqueArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personFindUniqueOrThrowArgs>(args: SelectSubset<T, personFindUniqueOrThrowArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personFindFirstArgs>(args?: SelectSubset<T, personFindFirstArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personFindFirstOrThrowArgs>(args?: SelectSubset<T, personFindFirstOrThrowArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `idperson`
     * const personWithIdpersonOnly = await prisma.person.findMany({ select: { idperson: true } })
     * 
     */
    findMany<T extends personFindManyArgs>(args?: SelectSubset<T, personFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {personCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends personCreateArgs>(args: SelectSubset<T, personCreateArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {personCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends personCreateManyArgs>(args?: SelectSubset<T, personCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {personCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `idperson`
     * const personWithIdpersonOnly = await prisma.person.createManyAndReturn({
     *   select: { idperson: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends personCreateManyAndReturnArgs>(args?: SelectSubset<T, personCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Person.
     * @param {personDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends personDeleteArgs>(args: SelectSubset<T, personDeleteArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {personUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends personUpdateArgs>(args: SelectSubset<T, personUpdateArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {personDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends personDeleteManyArgs>(args?: SelectSubset<T, personDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends personUpdateManyArgs>(args: SelectSubset<T, personUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {personUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `idperson`
     * const personWithIdpersonOnly = await prisma.person.updateManyAndReturn({
     *   select: { idperson: true },
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
    updateManyAndReturn<T extends personUpdateManyAndReturnArgs>(args: SelectSubset<T, personUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Person.
     * @param {personUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends personUpsertArgs>(args: SelectSubset<T, personUpsertArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends personCountArgs>(
      args?: Subset<T, personCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personGroupByArgs} args - Group by arguments.
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
      T extends personGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: personGroupByArgs['orderBy'] }
        : { orderBy?: personGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, personGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the person model
   */
  readonly fields: personFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__personClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adoption<T extends person$adoptionArgs<ExtArgs> = {}>(args?: Subset<T, person$adoptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewplace<T extends person$viewplaceArgs<ExtArgs> = {}>(args?: Subset<T, person$viewplaceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viewplacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the person model
   */
  interface personFieldRefs {
    readonly idperson: FieldRef<"person", 'BigInt'>
    readonly firstname: FieldRef<"person", 'String'>
    readonly middlename: FieldRef<"person", 'String'>
    readonly lastname: FieldRef<"person", 'String'>
    readonly email: FieldRef<"person", 'String'>
    readonly phone: FieldRef<"person", 'String'>
    readonly register: FieldRef<"person", 'DateTime'>
    readonly active: FieldRef<"person", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * person findUnique
   */
  export type personFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where: personWhereUniqueInput
  }

  /**
   * person findUniqueOrThrow
   */
  export type personFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where: personWhereUniqueInput
  }

  /**
   * person findFirst
   */
  export type personFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * person findFirstOrThrow
   */
  export type personFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which person to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of people.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * person findMany
   */
  export type personFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter, which people to fetch.
     */
    where?: personWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of people to fetch.
     */
    orderBy?: personOrderByWithRelationInput | personOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing people.
     */
    cursor?: personWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` people from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` people.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * person create
   */
  export type personCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * The data needed to create a person.
     */
    data: XOR<personCreateInput, personUncheckedCreateInput>
  }

  /**
   * person createMany
   */
  export type personCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many people.
     */
    data: personCreateManyInput | personCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * person createManyAndReturn
   */
  export type personCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * The data used to create many people.
     */
    data: personCreateManyInput | personCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * person update
   */
  export type personUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * The data needed to update a person.
     */
    data: XOR<personUpdateInput, personUncheckedUpdateInput>
    /**
     * Choose, which person to update.
     */
    where: personWhereUniqueInput
  }

  /**
   * person updateMany
   */
  export type personUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update people.
     */
    data: XOR<personUpdateManyMutationInput, personUncheckedUpdateManyInput>
    /**
     * Filter which people to update
     */
    where?: personWhereInput
    /**
     * Limit how many people to update.
     */
    limit?: number
  }

  /**
   * person updateManyAndReturn
   */
  export type personUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * The data used to update people.
     */
    data: XOR<personUpdateManyMutationInput, personUncheckedUpdateManyInput>
    /**
     * Filter which people to update
     */
    where?: personWhereInput
    /**
     * Limit how many people to update.
     */
    limit?: number
  }

  /**
   * person upsert
   */
  export type personUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * The filter to search for the person to update in case it exists.
     */
    where: personWhereUniqueInput
    /**
     * In case the person found by the `where` argument doesn't exist, create a new person with this data.
     */
    create: XOR<personCreateInput, personUncheckedCreateInput>
    /**
     * In case the person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personUpdateInput, personUncheckedUpdateInput>
  }

  /**
   * person delete
   */
  export type personDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    /**
     * Filter which person to delete.
     */
    where: personWhereUniqueInput
  }

  /**
   * person deleteMany
   */
  export type personDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which people to delete
     */
    where?: personWhereInput
    /**
     * Limit how many people to delete.
     */
    limit?: number
  }

  /**
   * person.adoption
   */
  export type person$adoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    where?: adoptionWhereInput
    orderBy?: adoptionOrderByWithRelationInput | adoptionOrderByWithRelationInput[]
    cursor?: adoptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * person.viewplace
   */
  export type person$viewplaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viewplace
     */
    select?: viewplaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viewplace
     */
    omit?: viewplaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewplaceInclude<ExtArgs> | null
    where?: viewplaceWhereInput
    orderBy?: viewplaceOrderByWithRelationInput | viewplaceOrderByWithRelationInput[]
    cursor?: viewplaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewplaceScalarFieldEnum | ViewplaceScalarFieldEnum[]
  }

  /**
   * person without action
   */
  export type personDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
  }


  /**
   * Model pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    idpet: number | null
    idkind: number | null
  }

  export type PetSumAggregateOutputType = {
    idpet: bigint | null
    idkind: number | null
  }

  export type PetMinAggregateOutputType = {
    idpet: bigint | null
    idkind: number | null
    name: string | null
    register: Date | null
  }

  export type PetMaxAggregateOutputType = {
    idpet: bigint | null
    idkind: number | null
    name: string | null
    register: Date | null
  }

  export type PetCountAggregateOutputType = {
    idpet: number
    idkind: number
    name: number
    register: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    idpet?: true
    idkind?: true
  }

  export type PetSumAggregateInputType = {
    idpet?: true
    idkind?: true
  }

  export type PetMinAggregateInputType = {
    idpet?: true
    idkind?: true
    name?: true
    register?: true
  }

  export type PetMaxAggregateInputType = {
    idpet?: true
    idkind?: true
    name?: true
    register?: true
  }

  export type PetCountAggregateInputType = {
    idpet?: true
    idkind?: true
    name?: true
    register?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pet to aggregate.
     */
    where?: petWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pets to fetch.
     */
    orderBy?: petOrderByWithRelationInput | petOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: petWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type petGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: petWhereInput
    orderBy?: petOrderByWithAggregationInput | petOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: petScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    idpet: bigint
    idkind: number | null
    name: string | null
    register: Date | null
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends petGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type petSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idpet?: boolean
    idkind?: boolean
    name?: boolean
    register?: boolean
    adoption?: boolean | pet$adoptionArgs<ExtArgs>
    petkind?: boolean | pet$petkindArgs<ExtArgs>
    petinshelter?: boolean | pet$petinshelterArgs<ExtArgs>
    petmedia?: boolean | pet$petmediaArgs<ExtArgs>
    viewplace?: boolean | pet$viewplaceArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type petSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idpet?: boolean
    idkind?: boolean
    name?: boolean
    register?: boolean
    petkind?: boolean | pet$petkindArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type petSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idpet?: boolean
    idkind?: boolean
    name?: boolean
    register?: boolean
    petkind?: boolean | pet$petkindArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type petSelectScalar = {
    idpet?: boolean
    idkind?: boolean
    name?: boolean
    register?: boolean
  }

  export type petOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idpet" | "idkind" | "name" | "register", ExtArgs["result"]["pet"]>
  export type petInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoption?: boolean | pet$adoptionArgs<ExtArgs>
    petkind?: boolean | pet$petkindArgs<ExtArgs>
    petinshelter?: boolean | pet$petinshelterArgs<ExtArgs>
    petmedia?: boolean | pet$petmediaArgs<ExtArgs>
    viewplace?: boolean | pet$viewplaceArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type petIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petkind?: boolean | pet$petkindArgs<ExtArgs>
  }
  export type petIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petkind?: boolean | pet$petkindArgs<ExtArgs>
  }

  export type $petPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pet"
    objects: {
      adoption: Prisma.$adoptionPayload<ExtArgs>[]
      petkind: Prisma.$petkindPayload<ExtArgs> | null
      petinshelter: Prisma.$petinshelterPayload<ExtArgs>[]
      petmedia: Prisma.$petmediaPayload<ExtArgs>[]
      viewplace: Prisma.$viewplacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idpet: bigint
      idkind: number | null
      name: string | null
      register: Date | null
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type petGetPayload<S extends boolean | null | undefined | petDefaultArgs> = $Result.GetResult<Prisma.$petPayload, S>

  type petCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<petFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface petDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pet'], meta: { name: 'pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {petFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends petFindUniqueArgs>(args: SelectSubset<T, petFindUniqueArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {petFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends petFindUniqueOrThrowArgs>(args: SelectSubset<T, petFindUniqueOrThrowArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends petFindFirstArgs>(args?: SelectSubset<T, petFindFirstArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends petFindFirstOrThrowArgs>(args?: SelectSubset<T, petFindFirstOrThrowArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `idpet`
     * const petWithIdpetOnly = await prisma.pet.findMany({ select: { idpet: true } })
     * 
     */
    findMany<T extends petFindManyArgs>(args?: SelectSubset<T, petFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {petCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends petCreateArgs>(args: SelectSubset<T, petCreateArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {petCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends petCreateManyArgs>(args?: SelectSubset<T, petCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {petCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `idpet`
     * const petWithIdpetOnly = await prisma.pet.createManyAndReturn({
     *   select: { idpet: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends petCreateManyAndReturnArgs>(args?: SelectSubset<T, petCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pet.
     * @param {petDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends petDeleteArgs>(args: SelectSubset<T, petDeleteArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {petUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends petUpdateArgs>(args: SelectSubset<T, petUpdateArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {petDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends petDeleteManyArgs>(args?: SelectSubset<T, petDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends petUpdateManyArgs>(args: SelectSubset<T, petUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets and returns the data updated in the database.
     * @param {petUpdateManyAndReturnArgs} args - Arguments to update many Pets.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pets and only return the `idpet`
     * const petWithIdpetOnly = await prisma.pet.updateManyAndReturn({
     *   select: { idpet: true },
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
    updateManyAndReturn<T extends petUpdateManyAndReturnArgs>(args: SelectSubset<T, petUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pet.
     * @param {petUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends petUpsertArgs>(args: SelectSubset<T, petUpsertArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends petCountArgs>(
      args?: Subset<T, petCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petGroupByArgs} args - Group by arguments.
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
      T extends petGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: petGroupByArgs['orderBy'] }
        : { orderBy?: petGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, petGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pet model
   */
  readonly fields: petFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__petClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adoption<T extends pet$adoptionArgs<ExtArgs> = {}>(args?: Subset<T, pet$adoptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adoptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    petkind<T extends pet$petkindArgs<ExtArgs> = {}>(args?: Subset<T, pet$petkindArgs<ExtArgs>>): Prisma__petkindClient<$Result.GetResult<Prisma.$petkindPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    petinshelter<T extends pet$petinshelterArgs<ExtArgs> = {}>(args?: Subset<T, pet$petinshelterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petinshelterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    petmedia<T extends pet$petmediaArgs<ExtArgs> = {}>(args?: Subset<T, pet$petmediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petmediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewplace<T extends pet$viewplaceArgs<ExtArgs> = {}>(args?: Subset<T, pet$viewplaceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viewplacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the pet model
   */
  interface petFieldRefs {
    readonly idpet: FieldRef<"pet", 'BigInt'>
    readonly idkind: FieldRef<"pet", 'Int'>
    readonly name: FieldRef<"pet", 'String'>
    readonly register: FieldRef<"pet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pet findUnique
   */
  export type petFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter, which pet to fetch.
     */
    where: petWhereUniqueInput
  }

  /**
   * pet findUniqueOrThrow
   */
  export type petFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter, which pet to fetch.
     */
    where: petWhereUniqueInput
  }

  /**
   * pet findFirst
   */
  export type petFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter, which pet to fetch.
     */
    where?: petWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pets to fetch.
     */
    orderBy?: petOrderByWithRelationInput | petOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pets.
     */
    cursor?: petWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * pet findFirstOrThrow
   */
  export type petFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter, which pet to fetch.
     */
    where?: petWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pets to fetch.
     */
    orderBy?: petOrderByWithRelationInput | petOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pets.
     */
    cursor?: petWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * pet findMany
   */
  export type petFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter, which pets to fetch.
     */
    where?: petWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pets to fetch.
     */
    orderBy?: petOrderByWithRelationInput | petOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pets.
     */
    cursor?: petWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * pet create
   */
  export type petCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * The data needed to create a pet.
     */
    data?: XOR<petCreateInput, petUncheckedCreateInput>
  }

  /**
   * pet createMany
   */
  export type petCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pets.
     */
    data: petCreateManyInput | petCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pet createManyAndReturn
   */
  export type petCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * The data used to create many pets.
     */
    data: petCreateManyInput | petCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pet update
   */
  export type petUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * The data needed to update a pet.
     */
    data: XOR<petUpdateInput, petUncheckedUpdateInput>
    /**
     * Choose, which pet to update.
     */
    where: petWhereUniqueInput
  }

  /**
   * pet updateMany
   */
  export type petUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pets.
     */
    data: XOR<petUpdateManyMutationInput, petUncheckedUpdateManyInput>
    /**
     * Filter which pets to update
     */
    where?: petWhereInput
    /**
     * Limit how many pets to update.
     */
    limit?: number
  }

  /**
   * pet updateManyAndReturn
   */
  export type petUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * The data used to update pets.
     */
    data: XOR<petUpdateManyMutationInput, petUncheckedUpdateManyInput>
    /**
     * Filter which pets to update
     */
    where?: petWhereInput
    /**
     * Limit how many pets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pet upsert
   */
  export type petUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * The filter to search for the pet to update in case it exists.
     */
    where: petWhereUniqueInput
    /**
     * In case the pet found by the `where` argument doesn't exist, create a new pet with this data.
     */
    create: XOR<petCreateInput, petUncheckedCreateInput>
    /**
     * In case the pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<petUpdateInput, petUncheckedUpdateInput>
  }

  /**
   * pet delete
   */
  export type petDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    /**
     * Filter which pet to delete.
     */
    where: petWhereUniqueInput
  }

  /**
   * pet deleteMany
   */
  export type petDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pets to delete
     */
    where?: petWhereInput
    /**
     * Limit how many pets to delete.
     */
    limit?: number
  }

  /**
   * pet.adoption
   */
  export type pet$adoptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adoption
     */
    select?: adoptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adoption
     */
    omit?: adoptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adoptionInclude<ExtArgs> | null
    where?: adoptionWhereInput
    orderBy?: adoptionOrderByWithRelationInput | adoptionOrderByWithRelationInput[]
    cursor?: adoptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdoptionScalarFieldEnum | AdoptionScalarFieldEnum[]
  }

  /**
   * pet.petkind
   */
  export type pet$petkindArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petkind
     */
    select?: petkindSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petkind
     */
    omit?: petkindOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petkindInclude<ExtArgs> | null
    where?: petkindWhereInput
  }

  /**
   * pet.petinshelter
   */
  export type pet$petinshelterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petinshelter
     */
    select?: petinshelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petinshelter
     */
    omit?: petinshelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petinshelterInclude<ExtArgs> | null
    where?: petinshelterWhereInput
    orderBy?: petinshelterOrderByWithRelationInput | petinshelterOrderByWithRelationInput[]
    cursor?: petinshelterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetinshelterScalarFieldEnum | PetinshelterScalarFieldEnum[]
  }

  /**
   * pet.petmedia
   */
  export type pet$petmediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petmedia
     */
    select?: petmediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petmedia
     */
    omit?: petmediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petmediaInclude<ExtArgs> | null
    where?: petmediaWhereInput
    orderBy?: petmediaOrderByWithRelationInput | petmediaOrderByWithRelationInput[]
    cursor?: petmediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetmediaScalarFieldEnum | PetmediaScalarFieldEnum[]
  }

  /**
   * pet.viewplace
   */
  export type pet$viewplaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viewplace
     */
    select?: viewplaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viewplace
     */
    omit?: viewplaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewplaceInclude<ExtArgs> | null
    where?: viewplaceWhereInput
    orderBy?: viewplaceOrderByWithRelationInput | viewplaceOrderByWithRelationInput[]
    cursor?: viewplaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewplaceScalarFieldEnum | ViewplaceScalarFieldEnum[]
  }

  /**
   * pet without action
   */
  export type petDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
  }


  /**
   * Model petinshelter
   */

  export type AggregatePetinshelter = {
    _count: PetinshelterCountAggregateOutputType | null
    _avg: PetinshelterAvgAggregateOutputType | null
    _sum: PetinshelterSumAggregateOutputType | null
    _min: PetinshelterMinAggregateOutputType | null
    _max: PetinshelterMaxAggregateOutputType | null
  }

  export type PetinshelterAvgAggregateOutputType = {
    idshelter: number | null
    idpet: number | null
  }

  export type PetinshelterSumAggregateOutputType = {
    idshelter: bigint | null
    idpet: bigint | null
  }

  export type PetinshelterMinAggregateOutputType = {
    idshelter: bigint | null
    idpet: bigint | null
    observation: string | null
    checkin: Date | null
    checkout: Date | null
  }

  export type PetinshelterMaxAggregateOutputType = {
    idshelter: bigint | null
    idpet: bigint | null
    observation: string | null
    checkin: Date | null
    checkout: Date | null
  }

  export type PetinshelterCountAggregateOutputType = {
    idshelter: number
    idpet: number
    observation: number
    checkin: number
    checkout: number
    _all: number
  }


  export type PetinshelterAvgAggregateInputType = {
    idshelter?: true
    idpet?: true
  }

  export type PetinshelterSumAggregateInputType = {
    idshelter?: true
    idpet?: true
  }

  export type PetinshelterMinAggregateInputType = {
    idshelter?: true
    idpet?: true
    observation?: true
    checkin?: true
    checkout?: true
  }

  export type PetinshelterMaxAggregateInputType = {
    idshelter?: true
    idpet?: true
    observation?: true
    checkin?: true
    checkout?: true
  }

  export type PetinshelterCountAggregateInputType = {
    idshelter?: true
    idpet?: true
    observation?: true
    checkin?: true
    checkout?: true
    _all?: true
  }

  export type PetinshelterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which petinshelter to aggregate.
     */
    where?: petinshelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of petinshelters to fetch.
     */
    orderBy?: petinshelterOrderByWithRelationInput | petinshelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: petinshelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` petinshelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` petinshelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned petinshelters
    **/
    _count?: true | PetinshelterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetinshelterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetinshelterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetinshelterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetinshelterMaxAggregateInputType
  }

  export type GetPetinshelterAggregateType<T extends PetinshelterAggregateArgs> = {
        [P in keyof T & keyof AggregatePetinshelter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePetinshelter[P]>
      : GetScalarType<T[P], AggregatePetinshelter[P]>
  }




  export type petinshelterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: petinshelterWhereInput
    orderBy?: petinshelterOrderByWithAggregationInput | petinshelterOrderByWithAggregationInput[]
    by: PetinshelterScalarFieldEnum[] | PetinshelterScalarFieldEnum
    having?: petinshelterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetinshelterCountAggregateInputType | true
    _avg?: PetinshelterAvgAggregateInputType
    _sum?: PetinshelterSumAggregateInputType
    _min?: PetinshelterMinAggregateInputType
    _max?: PetinshelterMaxAggregateInputType
  }

  export type PetinshelterGroupByOutputType = {
    idshelter: bigint
    idpet: bigint
    observation: string | null
    checkin: Date | null
    checkout: Date | null
    _count: PetinshelterCountAggregateOutputType | null
    _avg: PetinshelterAvgAggregateOutputType | null
    _sum: PetinshelterSumAggregateOutputType | null
    _min: PetinshelterMinAggregateOutputType | null
    _max: PetinshelterMaxAggregateOutputType | null
  }

  type GetPetinshelterGroupByPayload<T extends petinshelterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetinshelterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetinshelterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetinshelterGroupByOutputType[P]>
            : GetScalarType<T[P], PetinshelterGroupByOutputType[P]>
        }
      >
    >


  export type petinshelterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idshelter?: boolean
    idpet?: boolean
    observation?: boolean
    checkin?: boolean
    checkout?: boolean
    pet?: boolean | petDefaultArgs<ExtArgs>
    shelter?: boolean | shelterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petinshelter"]>

  export type petinshelterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idshelter?: boolean
    idpet?: boolean
    observation?: boolean
    checkin?: boolean
    checkout?: boolean
    pet?: boolean | petDefaultArgs<ExtArgs>
    shelter?: boolean | shelterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petinshelter"]>

  export type petinshelterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idshelter?: boolean
    idpet?: boolean
    observation?: boolean
    checkin?: boolean
    checkout?: boolean
    pet?: boolean | petDefaultArgs<ExtArgs>
    shelter?: boolean | shelterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petinshelter"]>

  export type petinshelterSelectScalar = {
    idshelter?: boolean
    idpet?: boolean
    observation?: boolean
    checkin?: boolean
    checkout?: boolean
  }

  export type petinshelterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idshelter" | "idpet" | "observation" | "checkin" | "checkout", ExtArgs["result"]["petinshelter"]>
  export type petinshelterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | petDefaultArgs<ExtArgs>
    shelter?: boolean | shelterDefaultArgs<ExtArgs>
  }
  export type petinshelterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | petDefaultArgs<ExtArgs>
    shelter?: boolean | shelterDefaultArgs<ExtArgs>
  }
  export type petinshelterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | petDefaultArgs<ExtArgs>
    shelter?: boolean | shelterDefaultArgs<ExtArgs>
  }

  export type $petinshelterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "petinshelter"
    objects: {
      pet: Prisma.$petPayload<ExtArgs>
      shelter: Prisma.$shelterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idshelter: bigint
      idpet: bigint
      observation: string | null
      checkin: Date | null
      checkout: Date | null
    }, ExtArgs["result"]["petinshelter"]>
    composites: {}
  }

  type petinshelterGetPayload<S extends boolean | null | undefined | petinshelterDefaultArgs> = $Result.GetResult<Prisma.$petinshelterPayload, S>

  type petinshelterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<petinshelterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetinshelterCountAggregateInputType | true
    }

  export interface petinshelterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['petinshelter'], meta: { name: 'petinshelter' } }
    /**
     * Find zero or one Petinshelter that matches the filter.
     * @param {petinshelterFindUniqueArgs} args - Arguments to find a Petinshelter
     * @example
     * // Get one Petinshelter
     * const petinshelter = await prisma.petinshelter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends petinshelterFindUniqueArgs>(args: SelectSubset<T, petinshelterFindUniqueArgs<ExtArgs>>): Prisma__petinshelterClient<$Result.GetResult<Prisma.$petinshelterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Petinshelter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {petinshelterFindUniqueOrThrowArgs} args - Arguments to find a Petinshelter
     * @example
     * // Get one Petinshelter
     * const petinshelter = await prisma.petinshelter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends petinshelterFindUniqueOrThrowArgs>(args: SelectSubset<T, petinshelterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__petinshelterClient<$Result.GetResult<Prisma.$petinshelterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Petinshelter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petinshelterFindFirstArgs} args - Arguments to find a Petinshelter
     * @example
     * // Get one Petinshelter
     * const petinshelter = await prisma.petinshelter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends petinshelterFindFirstArgs>(args?: SelectSubset<T, petinshelterFindFirstArgs<ExtArgs>>): Prisma__petinshelterClient<$Result.GetResult<Prisma.$petinshelterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Petinshelter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petinshelterFindFirstOrThrowArgs} args - Arguments to find a Petinshelter
     * @example
     * // Get one Petinshelter
     * const petinshelter = await prisma.petinshelter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends petinshelterFindFirstOrThrowArgs>(args?: SelectSubset<T, petinshelterFindFirstOrThrowArgs<ExtArgs>>): Prisma__petinshelterClient<$Result.GetResult<Prisma.$petinshelterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Petinshelters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petinshelterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Petinshelters
     * const petinshelters = await prisma.petinshelter.findMany()
     * 
     * // Get first 10 Petinshelters
     * const petinshelters = await prisma.petinshelter.findMany({ take: 10 })
     * 
     * // Only select the `idshelter`
     * const petinshelterWithIdshelterOnly = await prisma.petinshelter.findMany({ select: { idshelter: true } })
     * 
     */
    findMany<T extends petinshelterFindManyArgs>(args?: SelectSubset<T, petinshelterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petinshelterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Petinshelter.
     * @param {petinshelterCreateArgs} args - Arguments to create a Petinshelter.
     * @example
     * // Create one Petinshelter
     * const Petinshelter = await prisma.petinshelter.create({
     *   data: {
     *     // ... data to create a Petinshelter
     *   }
     * })
     * 
     */
    create<T extends petinshelterCreateArgs>(args: SelectSubset<T, petinshelterCreateArgs<ExtArgs>>): Prisma__petinshelterClient<$Result.GetResult<Prisma.$petinshelterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Petinshelters.
     * @param {petinshelterCreateManyArgs} args - Arguments to create many Petinshelters.
     * @example
     * // Create many Petinshelters
     * const petinshelter = await prisma.petinshelter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends petinshelterCreateManyArgs>(args?: SelectSubset<T, petinshelterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Petinshelters and returns the data saved in the database.
     * @param {petinshelterCreateManyAndReturnArgs} args - Arguments to create many Petinshelters.
     * @example
     * // Create many Petinshelters
     * const petinshelter = await prisma.petinshelter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Petinshelters and only return the `idshelter`
     * const petinshelterWithIdshelterOnly = await prisma.petinshelter.createManyAndReturn({
     *   select: { idshelter: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends petinshelterCreateManyAndReturnArgs>(args?: SelectSubset<T, petinshelterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petinshelterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Petinshelter.
     * @param {petinshelterDeleteArgs} args - Arguments to delete one Petinshelter.
     * @example
     * // Delete one Petinshelter
     * const Petinshelter = await prisma.petinshelter.delete({
     *   where: {
     *     // ... filter to delete one Petinshelter
     *   }
     * })
     * 
     */
    delete<T extends petinshelterDeleteArgs>(args: SelectSubset<T, petinshelterDeleteArgs<ExtArgs>>): Prisma__petinshelterClient<$Result.GetResult<Prisma.$petinshelterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Petinshelter.
     * @param {petinshelterUpdateArgs} args - Arguments to update one Petinshelter.
     * @example
     * // Update one Petinshelter
     * const petinshelter = await prisma.petinshelter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends petinshelterUpdateArgs>(args: SelectSubset<T, petinshelterUpdateArgs<ExtArgs>>): Prisma__petinshelterClient<$Result.GetResult<Prisma.$petinshelterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Petinshelters.
     * @param {petinshelterDeleteManyArgs} args - Arguments to filter Petinshelters to delete.
     * @example
     * // Delete a few Petinshelters
     * const { count } = await prisma.petinshelter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends petinshelterDeleteManyArgs>(args?: SelectSubset<T, petinshelterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Petinshelters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petinshelterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Petinshelters
     * const petinshelter = await prisma.petinshelter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends petinshelterUpdateManyArgs>(args: SelectSubset<T, petinshelterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Petinshelters and returns the data updated in the database.
     * @param {petinshelterUpdateManyAndReturnArgs} args - Arguments to update many Petinshelters.
     * @example
     * // Update many Petinshelters
     * const petinshelter = await prisma.petinshelter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Petinshelters and only return the `idshelter`
     * const petinshelterWithIdshelterOnly = await prisma.petinshelter.updateManyAndReturn({
     *   select: { idshelter: true },
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
    updateManyAndReturn<T extends petinshelterUpdateManyAndReturnArgs>(args: SelectSubset<T, petinshelterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petinshelterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Petinshelter.
     * @param {petinshelterUpsertArgs} args - Arguments to update or create a Petinshelter.
     * @example
     * // Update or create a Petinshelter
     * const petinshelter = await prisma.petinshelter.upsert({
     *   create: {
     *     // ... data to create a Petinshelter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Petinshelter we want to update
     *   }
     * })
     */
    upsert<T extends petinshelterUpsertArgs>(args: SelectSubset<T, petinshelterUpsertArgs<ExtArgs>>): Prisma__petinshelterClient<$Result.GetResult<Prisma.$petinshelterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Petinshelters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petinshelterCountArgs} args - Arguments to filter Petinshelters to count.
     * @example
     * // Count the number of Petinshelters
     * const count = await prisma.petinshelter.count({
     *   where: {
     *     // ... the filter for the Petinshelters we want to count
     *   }
     * })
    **/
    count<T extends petinshelterCountArgs>(
      args?: Subset<T, petinshelterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetinshelterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Petinshelter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetinshelterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetinshelterAggregateArgs>(args: Subset<T, PetinshelterAggregateArgs>): Prisma.PrismaPromise<GetPetinshelterAggregateType<T>>

    /**
     * Group by Petinshelter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petinshelterGroupByArgs} args - Group by arguments.
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
      T extends petinshelterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: petinshelterGroupByArgs['orderBy'] }
        : { orderBy?: petinshelterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, petinshelterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetinshelterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the petinshelter model
   */
  readonly fields: petinshelterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for petinshelter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__petinshelterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends petDefaultArgs<ExtArgs> = {}>(args?: Subset<T, petDefaultArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shelter<T extends shelterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, shelterDefaultArgs<ExtArgs>>): Prisma__shelterClient<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the petinshelter model
   */
  interface petinshelterFieldRefs {
    readonly idshelter: FieldRef<"petinshelter", 'BigInt'>
    readonly idpet: FieldRef<"petinshelter", 'BigInt'>
    readonly observation: FieldRef<"petinshelter", 'String'>
    readonly checkin: FieldRef<"petinshelter", 'DateTime'>
    readonly checkout: FieldRef<"petinshelter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * petinshelter findUnique
   */
  export type petinshelterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petinshelter
     */
    select?: petinshelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petinshelter
     */
    omit?: petinshelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petinshelterInclude<ExtArgs> | null
    /**
     * Filter, which petinshelter to fetch.
     */
    where: petinshelterWhereUniqueInput
  }

  /**
   * petinshelter findUniqueOrThrow
   */
  export type petinshelterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petinshelter
     */
    select?: petinshelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petinshelter
     */
    omit?: petinshelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petinshelterInclude<ExtArgs> | null
    /**
     * Filter, which petinshelter to fetch.
     */
    where: petinshelterWhereUniqueInput
  }

  /**
   * petinshelter findFirst
   */
  export type petinshelterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petinshelter
     */
    select?: petinshelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petinshelter
     */
    omit?: petinshelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petinshelterInclude<ExtArgs> | null
    /**
     * Filter, which petinshelter to fetch.
     */
    where?: petinshelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of petinshelters to fetch.
     */
    orderBy?: petinshelterOrderByWithRelationInput | petinshelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for petinshelters.
     */
    cursor?: petinshelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` petinshelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` petinshelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of petinshelters.
     */
    distinct?: PetinshelterScalarFieldEnum | PetinshelterScalarFieldEnum[]
  }

  /**
   * petinshelter findFirstOrThrow
   */
  export type petinshelterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petinshelter
     */
    select?: petinshelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petinshelter
     */
    omit?: petinshelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petinshelterInclude<ExtArgs> | null
    /**
     * Filter, which petinshelter to fetch.
     */
    where?: petinshelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of petinshelters to fetch.
     */
    orderBy?: petinshelterOrderByWithRelationInput | petinshelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for petinshelters.
     */
    cursor?: petinshelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` petinshelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` petinshelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of petinshelters.
     */
    distinct?: PetinshelterScalarFieldEnum | PetinshelterScalarFieldEnum[]
  }

  /**
   * petinshelter findMany
   */
  export type petinshelterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petinshelter
     */
    select?: petinshelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petinshelter
     */
    omit?: petinshelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petinshelterInclude<ExtArgs> | null
    /**
     * Filter, which petinshelters to fetch.
     */
    where?: petinshelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of petinshelters to fetch.
     */
    orderBy?: petinshelterOrderByWithRelationInput | petinshelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing petinshelters.
     */
    cursor?: petinshelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` petinshelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` petinshelters.
     */
    skip?: number
    distinct?: PetinshelterScalarFieldEnum | PetinshelterScalarFieldEnum[]
  }

  /**
   * petinshelter create
   */
  export type petinshelterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petinshelter
     */
    select?: petinshelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petinshelter
     */
    omit?: petinshelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petinshelterInclude<ExtArgs> | null
    /**
     * The data needed to create a petinshelter.
     */
    data: XOR<petinshelterCreateInput, petinshelterUncheckedCreateInput>
  }

  /**
   * petinshelter createMany
   */
  export type petinshelterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many petinshelters.
     */
    data: petinshelterCreateManyInput | petinshelterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * petinshelter createManyAndReturn
   */
  export type petinshelterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petinshelter
     */
    select?: petinshelterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the petinshelter
     */
    omit?: petinshelterOmit<ExtArgs> | null
    /**
     * The data used to create many petinshelters.
     */
    data: petinshelterCreateManyInput | petinshelterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petinshelterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * petinshelter update
   */
  export type petinshelterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petinshelter
     */
    select?: petinshelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petinshelter
     */
    omit?: petinshelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petinshelterInclude<ExtArgs> | null
    /**
     * The data needed to update a petinshelter.
     */
    data: XOR<petinshelterUpdateInput, petinshelterUncheckedUpdateInput>
    /**
     * Choose, which petinshelter to update.
     */
    where: petinshelterWhereUniqueInput
  }

  /**
   * petinshelter updateMany
   */
  export type petinshelterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update petinshelters.
     */
    data: XOR<petinshelterUpdateManyMutationInput, petinshelterUncheckedUpdateManyInput>
    /**
     * Filter which petinshelters to update
     */
    where?: petinshelterWhereInput
    /**
     * Limit how many petinshelters to update.
     */
    limit?: number
  }

  /**
   * petinshelter updateManyAndReturn
   */
  export type petinshelterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petinshelter
     */
    select?: petinshelterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the petinshelter
     */
    omit?: petinshelterOmit<ExtArgs> | null
    /**
     * The data used to update petinshelters.
     */
    data: XOR<petinshelterUpdateManyMutationInput, petinshelterUncheckedUpdateManyInput>
    /**
     * Filter which petinshelters to update
     */
    where?: petinshelterWhereInput
    /**
     * Limit how many petinshelters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petinshelterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * petinshelter upsert
   */
  export type petinshelterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petinshelter
     */
    select?: petinshelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petinshelter
     */
    omit?: petinshelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petinshelterInclude<ExtArgs> | null
    /**
     * The filter to search for the petinshelter to update in case it exists.
     */
    where: petinshelterWhereUniqueInput
    /**
     * In case the petinshelter found by the `where` argument doesn't exist, create a new petinshelter with this data.
     */
    create: XOR<petinshelterCreateInput, petinshelterUncheckedCreateInput>
    /**
     * In case the petinshelter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<petinshelterUpdateInput, petinshelterUncheckedUpdateInput>
  }

  /**
   * petinshelter delete
   */
  export type petinshelterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petinshelter
     */
    select?: petinshelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petinshelter
     */
    omit?: petinshelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petinshelterInclude<ExtArgs> | null
    /**
     * Filter which petinshelter to delete.
     */
    where: petinshelterWhereUniqueInput
  }

  /**
   * petinshelter deleteMany
   */
  export type petinshelterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which petinshelters to delete
     */
    where?: petinshelterWhereInput
    /**
     * Limit how many petinshelters to delete.
     */
    limit?: number
  }

  /**
   * petinshelter without action
   */
  export type petinshelterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petinshelter
     */
    select?: petinshelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petinshelter
     */
    omit?: petinshelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petinshelterInclude<ExtArgs> | null
  }


  /**
   * Model petkind
   */

  export type AggregatePetkind = {
    _count: PetkindCountAggregateOutputType | null
    _avg: PetkindAvgAggregateOutputType | null
    _sum: PetkindSumAggregateOutputType | null
    _min: PetkindMinAggregateOutputType | null
    _max: PetkindMaxAggregateOutputType | null
  }

  export type PetkindAvgAggregateOutputType = {
    idkind: number | null
  }

  export type PetkindSumAggregateOutputType = {
    idkind: number | null
  }

  export type PetkindMinAggregateOutputType = {
    idkind: number | null
    kind: string | null
  }

  export type PetkindMaxAggregateOutputType = {
    idkind: number | null
    kind: string | null
  }

  export type PetkindCountAggregateOutputType = {
    idkind: number
    kind: number
    _all: number
  }


  export type PetkindAvgAggregateInputType = {
    idkind?: true
  }

  export type PetkindSumAggregateInputType = {
    idkind?: true
  }

  export type PetkindMinAggregateInputType = {
    idkind?: true
    kind?: true
  }

  export type PetkindMaxAggregateInputType = {
    idkind?: true
    kind?: true
  }

  export type PetkindCountAggregateInputType = {
    idkind?: true
    kind?: true
    _all?: true
  }

  export type PetkindAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which petkind to aggregate.
     */
    where?: petkindWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of petkinds to fetch.
     */
    orderBy?: petkindOrderByWithRelationInput | petkindOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: petkindWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` petkinds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` petkinds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned petkinds
    **/
    _count?: true | PetkindCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetkindAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetkindSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetkindMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetkindMaxAggregateInputType
  }

  export type GetPetkindAggregateType<T extends PetkindAggregateArgs> = {
        [P in keyof T & keyof AggregatePetkind]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePetkind[P]>
      : GetScalarType<T[P], AggregatePetkind[P]>
  }




  export type petkindGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: petkindWhereInput
    orderBy?: petkindOrderByWithAggregationInput | petkindOrderByWithAggregationInput[]
    by: PetkindScalarFieldEnum[] | PetkindScalarFieldEnum
    having?: petkindScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetkindCountAggregateInputType | true
    _avg?: PetkindAvgAggregateInputType
    _sum?: PetkindSumAggregateInputType
    _min?: PetkindMinAggregateInputType
    _max?: PetkindMaxAggregateInputType
  }

  export type PetkindGroupByOutputType = {
    idkind: number
    kind: string | null
    _count: PetkindCountAggregateOutputType | null
    _avg: PetkindAvgAggregateOutputType | null
    _sum: PetkindSumAggregateOutputType | null
    _min: PetkindMinAggregateOutputType | null
    _max: PetkindMaxAggregateOutputType | null
  }

  type GetPetkindGroupByPayload<T extends petkindGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetkindGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetkindGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetkindGroupByOutputType[P]>
            : GetScalarType<T[P], PetkindGroupByOutputType[P]>
        }
      >
    >


  export type petkindSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idkind?: boolean
    kind?: boolean
    pet?: boolean | petkind$petArgs<ExtArgs>
    _count?: boolean | PetkindCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["petkind"]>

  export type petkindSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idkind?: boolean
    kind?: boolean
  }, ExtArgs["result"]["petkind"]>

  export type petkindSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idkind?: boolean
    kind?: boolean
  }, ExtArgs["result"]["petkind"]>

  export type petkindSelectScalar = {
    idkind?: boolean
    kind?: boolean
  }

  export type petkindOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idkind" | "kind", ExtArgs["result"]["petkind"]>
  export type petkindInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | petkind$petArgs<ExtArgs>
    _count?: boolean | PetkindCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type petkindIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type petkindIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $petkindPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "petkind"
    objects: {
      pet: Prisma.$petPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idkind: number
      kind: string | null
    }, ExtArgs["result"]["petkind"]>
    composites: {}
  }

  type petkindGetPayload<S extends boolean | null | undefined | petkindDefaultArgs> = $Result.GetResult<Prisma.$petkindPayload, S>

  type petkindCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<petkindFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetkindCountAggregateInputType | true
    }

  export interface petkindDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['petkind'], meta: { name: 'petkind' } }
    /**
     * Find zero or one Petkind that matches the filter.
     * @param {petkindFindUniqueArgs} args - Arguments to find a Petkind
     * @example
     * // Get one Petkind
     * const petkind = await prisma.petkind.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends petkindFindUniqueArgs>(args: SelectSubset<T, petkindFindUniqueArgs<ExtArgs>>): Prisma__petkindClient<$Result.GetResult<Prisma.$petkindPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Petkind that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {petkindFindUniqueOrThrowArgs} args - Arguments to find a Petkind
     * @example
     * // Get one Petkind
     * const petkind = await prisma.petkind.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends petkindFindUniqueOrThrowArgs>(args: SelectSubset<T, petkindFindUniqueOrThrowArgs<ExtArgs>>): Prisma__petkindClient<$Result.GetResult<Prisma.$petkindPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Petkind that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petkindFindFirstArgs} args - Arguments to find a Petkind
     * @example
     * // Get one Petkind
     * const petkind = await prisma.petkind.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends petkindFindFirstArgs>(args?: SelectSubset<T, petkindFindFirstArgs<ExtArgs>>): Prisma__petkindClient<$Result.GetResult<Prisma.$petkindPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Petkind that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petkindFindFirstOrThrowArgs} args - Arguments to find a Petkind
     * @example
     * // Get one Petkind
     * const petkind = await prisma.petkind.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends petkindFindFirstOrThrowArgs>(args?: SelectSubset<T, petkindFindFirstOrThrowArgs<ExtArgs>>): Prisma__petkindClient<$Result.GetResult<Prisma.$petkindPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Petkinds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petkindFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Petkinds
     * const petkinds = await prisma.petkind.findMany()
     * 
     * // Get first 10 Petkinds
     * const petkinds = await prisma.petkind.findMany({ take: 10 })
     * 
     * // Only select the `idkind`
     * const petkindWithIdkindOnly = await prisma.petkind.findMany({ select: { idkind: true } })
     * 
     */
    findMany<T extends petkindFindManyArgs>(args?: SelectSubset<T, petkindFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petkindPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Petkind.
     * @param {petkindCreateArgs} args - Arguments to create a Petkind.
     * @example
     * // Create one Petkind
     * const Petkind = await prisma.petkind.create({
     *   data: {
     *     // ... data to create a Petkind
     *   }
     * })
     * 
     */
    create<T extends petkindCreateArgs>(args: SelectSubset<T, petkindCreateArgs<ExtArgs>>): Prisma__petkindClient<$Result.GetResult<Prisma.$petkindPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Petkinds.
     * @param {petkindCreateManyArgs} args - Arguments to create many Petkinds.
     * @example
     * // Create many Petkinds
     * const petkind = await prisma.petkind.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends petkindCreateManyArgs>(args?: SelectSubset<T, petkindCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Petkinds and returns the data saved in the database.
     * @param {petkindCreateManyAndReturnArgs} args - Arguments to create many Petkinds.
     * @example
     * // Create many Petkinds
     * const petkind = await prisma.petkind.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Petkinds and only return the `idkind`
     * const petkindWithIdkindOnly = await prisma.petkind.createManyAndReturn({
     *   select: { idkind: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends petkindCreateManyAndReturnArgs>(args?: SelectSubset<T, petkindCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petkindPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Petkind.
     * @param {petkindDeleteArgs} args - Arguments to delete one Petkind.
     * @example
     * // Delete one Petkind
     * const Petkind = await prisma.petkind.delete({
     *   where: {
     *     // ... filter to delete one Petkind
     *   }
     * })
     * 
     */
    delete<T extends petkindDeleteArgs>(args: SelectSubset<T, petkindDeleteArgs<ExtArgs>>): Prisma__petkindClient<$Result.GetResult<Prisma.$petkindPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Petkind.
     * @param {petkindUpdateArgs} args - Arguments to update one Petkind.
     * @example
     * // Update one Petkind
     * const petkind = await prisma.petkind.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends petkindUpdateArgs>(args: SelectSubset<T, petkindUpdateArgs<ExtArgs>>): Prisma__petkindClient<$Result.GetResult<Prisma.$petkindPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Petkinds.
     * @param {petkindDeleteManyArgs} args - Arguments to filter Petkinds to delete.
     * @example
     * // Delete a few Petkinds
     * const { count } = await prisma.petkind.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends petkindDeleteManyArgs>(args?: SelectSubset<T, petkindDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Petkinds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petkindUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Petkinds
     * const petkind = await prisma.petkind.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends petkindUpdateManyArgs>(args: SelectSubset<T, petkindUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Petkinds and returns the data updated in the database.
     * @param {petkindUpdateManyAndReturnArgs} args - Arguments to update many Petkinds.
     * @example
     * // Update many Petkinds
     * const petkind = await prisma.petkind.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Petkinds and only return the `idkind`
     * const petkindWithIdkindOnly = await prisma.petkind.updateManyAndReturn({
     *   select: { idkind: true },
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
    updateManyAndReturn<T extends petkindUpdateManyAndReturnArgs>(args: SelectSubset<T, petkindUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petkindPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Petkind.
     * @param {petkindUpsertArgs} args - Arguments to update or create a Petkind.
     * @example
     * // Update or create a Petkind
     * const petkind = await prisma.petkind.upsert({
     *   create: {
     *     // ... data to create a Petkind
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Petkind we want to update
     *   }
     * })
     */
    upsert<T extends petkindUpsertArgs>(args: SelectSubset<T, petkindUpsertArgs<ExtArgs>>): Prisma__petkindClient<$Result.GetResult<Prisma.$petkindPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Petkinds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petkindCountArgs} args - Arguments to filter Petkinds to count.
     * @example
     * // Count the number of Petkinds
     * const count = await prisma.petkind.count({
     *   where: {
     *     // ... the filter for the Petkinds we want to count
     *   }
     * })
    **/
    count<T extends petkindCountArgs>(
      args?: Subset<T, petkindCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetkindCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Petkind.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetkindAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetkindAggregateArgs>(args: Subset<T, PetkindAggregateArgs>): Prisma.PrismaPromise<GetPetkindAggregateType<T>>

    /**
     * Group by Petkind.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petkindGroupByArgs} args - Group by arguments.
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
      T extends petkindGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: petkindGroupByArgs['orderBy'] }
        : { orderBy?: petkindGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, petkindGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetkindGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the petkind model
   */
  readonly fields: petkindFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for petkind.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__petkindClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends petkind$petArgs<ExtArgs> = {}>(args?: Subset<T, petkind$petArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the petkind model
   */
  interface petkindFieldRefs {
    readonly idkind: FieldRef<"petkind", 'Int'>
    readonly kind: FieldRef<"petkind", 'String'>
  }
    

  // Custom InputTypes
  /**
   * petkind findUnique
   */
  export type petkindFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petkind
     */
    select?: petkindSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petkind
     */
    omit?: petkindOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petkindInclude<ExtArgs> | null
    /**
     * Filter, which petkind to fetch.
     */
    where: petkindWhereUniqueInput
  }

  /**
   * petkind findUniqueOrThrow
   */
  export type petkindFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petkind
     */
    select?: petkindSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petkind
     */
    omit?: petkindOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petkindInclude<ExtArgs> | null
    /**
     * Filter, which petkind to fetch.
     */
    where: petkindWhereUniqueInput
  }

  /**
   * petkind findFirst
   */
  export type petkindFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petkind
     */
    select?: petkindSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petkind
     */
    omit?: petkindOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petkindInclude<ExtArgs> | null
    /**
     * Filter, which petkind to fetch.
     */
    where?: petkindWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of petkinds to fetch.
     */
    orderBy?: petkindOrderByWithRelationInput | petkindOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for petkinds.
     */
    cursor?: petkindWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` petkinds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` petkinds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of petkinds.
     */
    distinct?: PetkindScalarFieldEnum | PetkindScalarFieldEnum[]
  }

  /**
   * petkind findFirstOrThrow
   */
  export type petkindFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petkind
     */
    select?: petkindSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petkind
     */
    omit?: petkindOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petkindInclude<ExtArgs> | null
    /**
     * Filter, which petkind to fetch.
     */
    where?: petkindWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of petkinds to fetch.
     */
    orderBy?: petkindOrderByWithRelationInput | petkindOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for petkinds.
     */
    cursor?: petkindWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` petkinds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` petkinds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of petkinds.
     */
    distinct?: PetkindScalarFieldEnum | PetkindScalarFieldEnum[]
  }

  /**
   * petkind findMany
   */
  export type petkindFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petkind
     */
    select?: petkindSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petkind
     */
    omit?: petkindOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petkindInclude<ExtArgs> | null
    /**
     * Filter, which petkinds to fetch.
     */
    where?: petkindWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of petkinds to fetch.
     */
    orderBy?: petkindOrderByWithRelationInput | petkindOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing petkinds.
     */
    cursor?: petkindWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` petkinds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` petkinds.
     */
    skip?: number
    distinct?: PetkindScalarFieldEnum | PetkindScalarFieldEnum[]
  }

  /**
   * petkind create
   */
  export type petkindCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petkind
     */
    select?: petkindSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petkind
     */
    omit?: petkindOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petkindInclude<ExtArgs> | null
    /**
     * The data needed to create a petkind.
     */
    data: XOR<petkindCreateInput, petkindUncheckedCreateInput>
  }

  /**
   * petkind createMany
   */
  export type petkindCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many petkinds.
     */
    data: petkindCreateManyInput | petkindCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * petkind createManyAndReturn
   */
  export type petkindCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petkind
     */
    select?: petkindSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the petkind
     */
    omit?: petkindOmit<ExtArgs> | null
    /**
     * The data used to create many petkinds.
     */
    data: petkindCreateManyInput | petkindCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * petkind update
   */
  export type petkindUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petkind
     */
    select?: petkindSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petkind
     */
    omit?: petkindOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petkindInclude<ExtArgs> | null
    /**
     * The data needed to update a petkind.
     */
    data: XOR<petkindUpdateInput, petkindUncheckedUpdateInput>
    /**
     * Choose, which petkind to update.
     */
    where: petkindWhereUniqueInput
  }

  /**
   * petkind updateMany
   */
  export type petkindUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update petkinds.
     */
    data: XOR<petkindUpdateManyMutationInput, petkindUncheckedUpdateManyInput>
    /**
     * Filter which petkinds to update
     */
    where?: petkindWhereInput
    /**
     * Limit how many petkinds to update.
     */
    limit?: number
  }

  /**
   * petkind updateManyAndReturn
   */
  export type petkindUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petkind
     */
    select?: petkindSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the petkind
     */
    omit?: petkindOmit<ExtArgs> | null
    /**
     * The data used to update petkinds.
     */
    data: XOR<petkindUpdateManyMutationInput, petkindUncheckedUpdateManyInput>
    /**
     * Filter which petkinds to update
     */
    where?: petkindWhereInput
    /**
     * Limit how many petkinds to update.
     */
    limit?: number
  }

  /**
   * petkind upsert
   */
  export type petkindUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petkind
     */
    select?: petkindSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petkind
     */
    omit?: petkindOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petkindInclude<ExtArgs> | null
    /**
     * The filter to search for the petkind to update in case it exists.
     */
    where: petkindWhereUniqueInput
    /**
     * In case the petkind found by the `where` argument doesn't exist, create a new petkind with this data.
     */
    create: XOR<petkindCreateInput, petkindUncheckedCreateInput>
    /**
     * In case the petkind was found with the provided `where` argument, update it with this data.
     */
    update: XOR<petkindUpdateInput, petkindUncheckedUpdateInput>
  }

  /**
   * petkind delete
   */
  export type petkindDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petkind
     */
    select?: petkindSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petkind
     */
    omit?: petkindOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petkindInclude<ExtArgs> | null
    /**
     * Filter which petkind to delete.
     */
    where: petkindWhereUniqueInput
  }

  /**
   * petkind deleteMany
   */
  export type petkindDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which petkinds to delete
     */
    where?: petkindWhereInput
    /**
     * Limit how many petkinds to delete.
     */
    limit?: number
  }

  /**
   * petkind.pet
   */
  export type petkind$petArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    where?: petWhereInput
    orderBy?: petOrderByWithRelationInput | petOrderByWithRelationInput[]
    cursor?: petWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * petkind without action
   */
  export type petkindDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petkind
     */
    select?: petkindSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petkind
     */
    omit?: petkindOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petkindInclude<ExtArgs> | null
  }


  /**
   * Model petmedia
   */

  export type AggregatePetmedia = {
    _count: PetmediaCountAggregateOutputType | null
    _avg: PetmediaAvgAggregateOutputType | null
    _sum: PetmediaSumAggregateOutputType | null
    _min: PetmediaMinAggregateOutputType | null
    _max: PetmediaMaxAggregateOutputType | null
  }

  export type PetmediaAvgAggregateOutputType = {
    idmedia: number | null
    idpet: number | null
  }

  export type PetmediaSumAggregateOutputType = {
    idmedia: bigint | null
    idpet: bigint | null
  }

  export type PetmediaMinAggregateOutputType = {
    idmedia: bigint | null
    idpet: bigint | null
    register: Date | null
    urlmedia: string | null
  }

  export type PetmediaMaxAggregateOutputType = {
    idmedia: bigint | null
    idpet: bigint | null
    register: Date | null
    urlmedia: string | null
  }

  export type PetmediaCountAggregateOutputType = {
    idmedia: number
    idpet: number
    register: number
    urlmedia: number
    _all: number
  }


  export type PetmediaAvgAggregateInputType = {
    idmedia?: true
    idpet?: true
  }

  export type PetmediaSumAggregateInputType = {
    idmedia?: true
    idpet?: true
  }

  export type PetmediaMinAggregateInputType = {
    idmedia?: true
    idpet?: true
    register?: true
    urlmedia?: true
  }

  export type PetmediaMaxAggregateInputType = {
    idmedia?: true
    idpet?: true
    register?: true
    urlmedia?: true
  }

  export type PetmediaCountAggregateInputType = {
    idmedia?: true
    idpet?: true
    register?: true
    urlmedia?: true
    _all?: true
  }

  export type PetmediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which petmedia to aggregate.
     */
    where?: petmediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of petmedias to fetch.
     */
    orderBy?: petmediaOrderByWithRelationInput | petmediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: petmediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` petmedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` petmedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned petmedias
    **/
    _count?: true | PetmediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetmediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetmediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetmediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetmediaMaxAggregateInputType
  }

  export type GetPetmediaAggregateType<T extends PetmediaAggregateArgs> = {
        [P in keyof T & keyof AggregatePetmedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePetmedia[P]>
      : GetScalarType<T[P], AggregatePetmedia[P]>
  }




  export type petmediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: petmediaWhereInput
    orderBy?: petmediaOrderByWithAggregationInput | petmediaOrderByWithAggregationInput[]
    by: PetmediaScalarFieldEnum[] | PetmediaScalarFieldEnum
    having?: petmediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetmediaCountAggregateInputType | true
    _avg?: PetmediaAvgAggregateInputType
    _sum?: PetmediaSumAggregateInputType
    _min?: PetmediaMinAggregateInputType
    _max?: PetmediaMaxAggregateInputType
  }

  export type PetmediaGroupByOutputType = {
    idmedia: bigint
    idpet: bigint | null
    register: Date | null
    urlmedia: string | null
    _count: PetmediaCountAggregateOutputType | null
    _avg: PetmediaAvgAggregateOutputType | null
    _sum: PetmediaSumAggregateOutputType | null
    _min: PetmediaMinAggregateOutputType | null
    _max: PetmediaMaxAggregateOutputType | null
  }

  type GetPetmediaGroupByPayload<T extends petmediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetmediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetmediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetmediaGroupByOutputType[P]>
            : GetScalarType<T[P], PetmediaGroupByOutputType[P]>
        }
      >
    >


  export type petmediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idmedia?: boolean
    idpet?: boolean
    register?: boolean
    urlmedia?: boolean
    pet?: boolean | petmedia$petArgs<ExtArgs>
  }, ExtArgs["result"]["petmedia"]>

  export type petmediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idmedia?: boolean
    idpet?: boolean
    register?: boolean
    urlmedia?: boolean
    pet?: boolean | petmedia$petArgs<ExtArgs>
  }, ExtArgs["result"]["petmedia"]>

  export type petmediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idmedia?: boolean
    idpet?: boolean
    register?: boolean
    urlmedia?: boolean
    pet?: boolean | petmedia$petArgs<ExtArgs>
  }, ExtArgs["result"]["petmedia"]>

  export type petmediaSelectScalar = {
    idmedia?: boolean
    idpet?: boolean
    register?: boolean
    urlmedia?: boolean
  }

  export type petmediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idmedia" | "idpet" | "register" | "urlmedia", ExtArgs["result"]["petmedia"]>
  export type petmediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | petmedia$petArgs<ExtArgs>
  }
  export type petmediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | petmedia$petArgs<ExtArgs>
  }
  export type petmediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pet?: boolean | petmedia$petArgs<ExtArgs>
  }

  export type $petmediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "petmedia"
    objects: {
      pet: Prisma.$petPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      idmedia: bigint
      idpet: bigint | null
      register: Date | null
      urlmedia: string | null
    }, ExtArgs["result"]["petmedia"]>
    composites: {}
  }

  type petmediaGetPayload<S extends boolean | null | undefined | petmediaDefaultArgs> = $Result.GetResult<Prisma.$petmediaPayload, S>

  type petmediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<petmediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetmediaCountAggregateInputType | true
    }

  export interface petmediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['petmedia'], meta: { name: 'petmedia' } }
    /**
     * Find zero or one Petmedia that matches the filter.
     * @param {petmediaFindUniqueArgs} args - Arguments to find a Petmedia
     * @example
     * // Get one Petmedia
     * const petmedia = await prisma.petmedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends petmediaFindUniqueArgs>(args: SelectSubset<T, petmediaFindUniqueArgs<ExtArgs>>): Prisma__petmediaClient<$Result.GetResult<Prisma.$petmediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Petmedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {petmediaFindUniqueOrThrowArgs} args - Arguments to find a Petmedia
     * @example
     * // Get one Petmedia
     * const petmedia = await prisma.petmedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends petmediaFindUniqueOrThrowArgs>(args: SelectSubset<T, petmediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__petmediaClient<$Result.GetResult<Prisma.$petmediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Petmedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petmediaFindFirstArgs} args - Arguments to find a Petmedia
     * @example
     * // Get one Petmedia
     * const petmedia = await prisma.petmedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends petmediaFindFirstArgs>(args?: SelectSubset<T, petmediaFindFirstArgs<ExtArgs>>): Prisma__petmediaClient<$Result.GetResult<Prisma.$petmediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Petmedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petmediaFindFirstOrThrowArgs} args - Arguments to find a Petmedia
     * @example
     * // Get one Petmedia
     * const petmedia = await prisma.petmedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends petmediaFindFirstOrThrowArgs>(args?: SelectSubset<T, petmediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__petmediaClient<$Result.GetResult<Prisma.$petmediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Petmedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petmediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Petmedias
     * const petmedias = await prisma.petmedia.findMany()
     * 
     * // Get first 10 Petmedias
     * const petmedias = await prisma.petmedia.findMany({ take: 10 })
     * 
     * // Only select the `idmedia`
     * const petmediaWithIdmediaOnly = await prisma.petmedia.findMany({ select: { idmedia: true } })
     * 
     */
    findMany<T extends petmediaFindManyArgs>(args?: SelectSubset<T, petmediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petmediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Petmedia.
     * @param {petmediaCreateArgs} args - Arguments to create a Petmedia.
     * @example
     * // Create one Petmedia
     * const Petmedia = await prisma.petmedia.create({
     *   data: {
     *     // ... data to create a Petmedia
     *   }
     * })
     * 
     */
    create<T extends petmediaCreateArgs>(args: SelectSubset<T, petmediaCreateArgs<ExtArgs>>): Prisma__petmediaClient<$Result.GetResult<Prisma.$petmediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Petmedias.
     * @param {petmediaCreateManyArgs} args - Arguments to create many Petmedias.
     * @example
     * // Create many Petmedias
     * const petmedia = await prisma.petmedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends petmediaCreateManyArgs>(args?: SelectSubset<T, petmediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Petmedias and returns the data saved in the database.
     * @param {petmediaCreateManyAndReturnArgs} args - Arguments to create many Petmedias.
     * @example
     * // Create many Petmedias
     * const petmedia = await prisma.petmedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Petmedias and only return the `idmedia`
     * const petmediaWithIdmediaOnly = await prisma.petmedia.createManyAndReturn({
     *   select: { idmedia: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends petmediaCreateManyAndReturnArgs>(args?: SelectSubset<T, petmediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petmediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Petmedia.
     * @param {petmediaDeleteArgs} args - Arguments to delete one Petmedia.
     * @example
     * // Delete one Petmedia
     * const Petmedia = await prisma.petmedia.delete({
     *   where: {
     *     // ... filter to delete one Petmedia
     *   }
     * })
     * 
     */
    delete<T extends petmediaDeleteArgs>(args: SelectSubset<T, petmediaDeleteArgs<ExtArgs>>): Prisma__petmediaClient<$Result.GetResult<Prisma.$petmediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Petmedia.
     * @param {petmediaUpdateArgs} args - Arguments to update one Petmedia.
     * @example
     * // Update one Petmedia
     * const petmedia = await prisma.petmedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends petmediaUpdateArgs>(args: SelectSubset<T, petmediaUpdateArgs<ExtArgs>>): Prisma__petmediaClient<$Result.GetResult<Prisma.$petmediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Petmedias.
     * @param {petmediaDeleteManyArgs} args - Arguments to filter Petmedias to delete.
     * @example
     * // Delete a few Petmedias
     * const { count } = await prisma.petmedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends petmediaDeleteManyArgs>(args?: SelectSubset<T, petmediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Petmedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petmediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Petmedias
     * const petmedia = await prisma.petmedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends petmediaUpdateManyArgs>(args: SelectSubset<T, petmediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Petmedias and returns the data updated in the database.
     * @param {petmediaUpdateManyAndReturnArgs} args - Arguments to update many Petmedias.
     * @example
     * // Update many Petmedias
     * const petmedia = await prisma.petmedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Petmedias and only return the `idmedia`
     * const petmediaWithIdmediaOnly = await prisma.petmedia.updateManyAndReturn({
     *   select: { idmedia: true },
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
    updateManyAndReturn<T extends petmediaUpdateManyAndReturnArgs>(args: SelectSubset<T, petmediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petmediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Petmedia.
     * @param {petmediaUpsertArgs} args - Arguments to update or create a Petmedia.
     * @example
     * // Update or create a Petmedia
     * const petmedia = await prisma.petmedia.upsert({
     *   create: {
     *     // ... data to create a Petmedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Petmedia we want to update
     *   }
     * })
     */
    upsert<T extends petmediaUpsertArgs>(args: SelectSubset<T, petmediaUpsertArgs<ExtArgs>>): Prisma__petmediaClient<$Result.GetResult<Prisma.$petmediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Petmedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petmediaCountArgs} args - Arguments to filter Petmedias to count.
     * @example
     * // Count the number of Petmedias
     * const count = await prisma.petmedia.count({
     *   where: {
     *     // ... the filter for the Petmedias we want to count
     *   }
     * })
    **/
    count<T extends petmediaCountArgs>(
      args?: Subset<T, petmediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetmediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Petmedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetmediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetmediaAggregateArgs>(args: Subset<T, PetmediaAggregateArgs>): Prisma.PrismaPromise<GetPetmediaAggregateType<T>>

    /**
     * Group by Petmedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {petmediaGroupByArgs} args - Group by arguments.
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
      T extends petmediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: petmediaGroupByArgs['orderBy'] }
        : { orderBy?: petmediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, petmediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetmediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the petmedia model
   */
  readonly fields: petmediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for petmedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__petmediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pet<T extends petmedia$petArgs<ExtArgs> = {}>(args?: Subset<T, petmedia$petArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the petmedia model
   */
  interface petmediaFieldRefs {
    readonly idmedia: FieldRef<"petmedia", 'BigInt'>
    readonly idpet: FieldRef<"petmedia", 'BigInt'>
    readonly register: FieldRef<"petmedia", 'DateTime'>
    readonly urlmedia: FieldRef<"petmedia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * petmedia findUnique
   */
  export type petmediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petmedia
     */
    select?: petmediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petmedia
     */
    omit?: petmediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petmediaInclude<ExtArgs> | null
    /**
     * Filter, which petmedia to fetch.
     */
    where: petmediaWhereUniqueInput
  }

  /**
   * petmedia findUniqueOrThrow
   */
  export type petmediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petmedia
     */
    select?: petmediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petmedia
     */
    omit?: petmediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petmediaInclude<ExtArgs> | null
    /**
     * Filter, which petmedia to fetch.
     */
    where: petmediaWhereUniqueInput
  }

  /**
   * petmedia findFirst
   */
  export type petmediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petmedia
     */
    select?: petmediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petmedia
     */
    omit?: petmediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petmediaInclude<ExtArgs> | null
    /**
     * Filter, which petmedia to fetch.
     */
    where?: petmediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of petmedias to fetch.
     */
    orderBy?: petmediaOrderByWithRelationInput | petmediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for petmedias.
     */
    cursor?: petmediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` petmedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` petmedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of petmedias.
     */
    distinct?: PetmediaScalarFieldEnum | PetmediaScalarFieldEnum[]
  }

  /**
   * petmedia findFirstOrThrow
   */
  export type petmediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petmedia
     */
    select?: petmediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petmedia
     */
    omit?: petmediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petmediaInclude<ExtArgs> | null
    /**
     * Filter, which petmedia to fetch.
     */
    where?: petmediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of petmedias to fetch.
     */
    orderBy?: petmediaOrderByWithRelationInput | petmediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for petmedias.
     */
    cursor?: petmediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` petmedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` petmedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of petmedias.
     */
    distinct?: PetmediaScalarFieldEnum | PetmediaScalarFieldEnum[]
  }

  /**
   * petmedia findMany
   */
  export type petmediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petmedia
     */
    select?: petmediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petmedia
     */
    omit?: petmediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petmediaInclude<ExtArgs> | null
    /**
     * Filter, which petmedias to fetch.
     */
    where?: petmediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of petmedias to fetch.
     */
    orderBy?: petmediaOrderByWithRelationInput | petmediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing petmedias.
     */
    cursor?: petmediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` petmedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` petmedias.
     */
    skip?: number
    distinct?: PetmediaScalarFieldEnum | PetmediaScalarFieldEnum[]
  }

  /**
   * petmedia create
   */
  export type petmediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petmedia
     */
    select?: petmediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petmedia
     */
    omit?: petmediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petmediaInclude<ExtArgs> | null
    /**
     * The data needed to create a petmedia.
     */
    data?: XOR<petmediaCreateInput, petmediaUncheckedCreateInput>
  }

  /**
   * petmedia createMany
   */
  export type petmediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many petmedias.
     */
    data: petmediaCreateManyInput | petmediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * petmedia createManyAndReturn
   */
  export type petmediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petmedia
     */
    select?: petmediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the petmedia
     */
    omit?: petmediaOmit<ExtArgs> | null
    /**
     * The data used to create many petmedias.
     */
    data: petmediaCreateManyInput | petmediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petmediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * petmedia update
   */
  export type petmediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petmedia
     */
    select?: petmediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petmedia
     */
    omit?: petmediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petmediaInclude<ExtArgs> | null
    /**
     * The data needed to update a petmedia.
     */
    data: XOR<petmediaUpdateInput, petmediaUncheckedUpdateInput>
    /**
     * Choose, which petmedia to update.
     */
    where: petmediaWhereUniqueInput
  }

  /**
   * petmedia updateMany
   */
  export type petmediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update petmedias.
     */
    data: XOR<petmediaUpdateManyMutationInput, petmediaUncheckedUpdateManyInput>
    /**
     * Filter which petmedias to update
     */
    where?: petmediaWhereInput
    /**
     * Limit how many petmedias to update.
     */
    limit?: number
  }

  /**
   * petmedia updateManyAndReturn
   */
  export type petmediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petmedia
     */
    select?: petmediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the petmedia
     */
    omit?: petmediaOmit<ExtArgs> | null
    /**
     * The data used to update petmedias.
     */
    data: XOR<petmediaUpdateManyMutationInput, petmediaUncheckedUpdateManyInput>
    /**
     * Filter which petmedias to update
     */
    where?: petmediaWhereInput
    /**
     * Limit how many petmedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petmediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * petmedia upsert
   */
  export type petmediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petmedia
     */
    select?: petmediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petmedia
     */
    omit?: petmediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petmediaInclude<ExtArgs> | null
    /**
     * The filter to search for the petmedia to update in case it exists.
     */
    where: petmediaWhereUniqueInput
    /**
     * In case the petmedia found by the `where` argument doesn't exist, create a new petmedia with this data.
     */
    create: XOR<petmediaCreateInput, petmediaUncheckedCreateInput>
    /**
     * In case the petmedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<petmediaUpdateInput, petmediaUncheckedUpdateInput>
  }

  /**
   * petmedia delete
   */
  export type petmediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petmedia
     */
    select?: petmediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petmedia
     */
    omit?: petmediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petmediaInclude<ExtArgs> | null
    /**
     * Filter which petmedia to delete.
     */
    where: petmediaWhereUniqueInput
  }

  /**
   * petmedia deleteMany
   */
  export type petmediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which petmedias to delete
     */
    where?: petmediaWhereInput
    /**
     * Limit how many petmedias to delete.
     */
    limit?: number
  }

  /**
   * petmedia.pet
   */
  export type petmedia$petArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    where?: petWhereInput
  }

  /**
   * petmedia without action
   */
  export type petmediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petmedia
     */
    select?: petmediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petmedia
     */
    omit?: petmediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petmediaInclude<ExtArgs> | null
  }


  /**
   * Model shelter
   */

  export type AggregateShelter = {
    _count: ShelterCountAggregateOutputType | null
    _avg: ShelterAvgAggregateOutputType | null
    _sum: ShelterSumAggregateOutputType | null
    _min: ShelterMinAggregateOutputType | null
    _max: ShelterMaxAggregateOutputType | null
  }

  export type ShelterAvgAggregateOutputType = {
    idshelter: number | null
  }

  export type ShelterSumAggregateOutputType = {
    idshelter: bigint | null
  }

  export type ShelterMinAggregateOutputType = {
    idshelter: bigint | null
    sheltername: string | null
    address: string | null
    phone: string | null
    zip: string | null
    regster: Date | null
  }

  export type ShelterMaxAggregateOutputType = {
    idshelter: bigint | null
    sheltername: string | null
    address: string | null
    phone: string | null
    zip: string | null
    regster: Date | null
  }

  export type ShelterCountAggregateOutputType = {
    idshelter: number
    sheltername: number
    address: number
    phone: number
    zip: number
    regster: number
    _all: number
  }


  export type ShelterAvgAggregateInputType = {
    idshelter?: true
  }

  export type ShelterSumAggregateInputType = {
    idshelter?: true
  }

  export type ShelterMinAggregateInputType = {
    idshelter?: true
    sheltername?: true
    address?: true
    phone?: true
    zip?: true
    regster?: true
  }

  export type ShelterMaxAggregateInputType = {
    idshelter?: true
    sheltername?: true
    address?: true
    phone?: true
    zip?: true
    regster?: true
  }

  export type ShelterCountAggregateInputType = {
    idshelter?: true
    sheltername?: true
    address?: true
    phone?: true
    zip?: true
    regster?: true
    _all?: true
  }

  export type ShelterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shelter to aggregate.
     */
    where?: shelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shelters to fetch.
     */
    orderBy?: shelterOrderByWithRelationInput | shelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: shelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shelters
    **/
    _count?: true | ShelterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShelterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShelterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShelterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShelterMaxAggregateInputType
  }

  export type GetShelterAggregateType<T extends ShelterAggregateArgs> = {
        [P in keyof T & keyof AggregateShelter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShelter[P]>
      : GetScalarType<T[P], AggregateShelter[P]>
  }




  export type shelterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: shelterWhereInput
    orderBy?: shelterOrderByWithAggregationInput | shelterOrderByWithAggregationInput[]
    by: ShelterScalarFieldEnum[] | ShelterScalarFieldEnum
    having?: shelterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShelterCountAggregateInputType | true
    _avg?: ShelterAvgAggregateInputType
    _sum?: ShelterSumAggregateInputType
    _min?: ShelterMinAggregateInputType
    _max?: ShelterMaxAggregateInputType
  }

  export type ShelterGroupByOutputType = {
    idshelter: bigint
    sheltername: string | null
    address: string | null
    phone: string | null
    zip: string | null
    regster: Date | null
    _count: ShelterCountAggregateOutputType | null
    _avg: ShelterAvgAggregateOutputType | null
    _sum: ShelterSumAggregateOutputType | null
    _min: ShelterMinAggregateOutputType | null
    _max: ShelterMaxAggregateOutputType | null
  }

  type GetShelterGroupByPayload<T extends shelterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShelterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShelterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShelterGroupByOutputType[P]>
            : GetScalarType<T[P], ShelterGroupByOutputType[P]>
        }
      >
    >


  export type shelterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idshelter?: boolean
    sheltername?: boolean
    address?: boolean
    phone?: boolean
    zip?: boolean
    regster?: boolean
    petinshelter?: boolean | shelter$petinshelterArgs<ExtArgs>
    _count?: boolean | ShelterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelter"]>

  export type shelterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idshelter?: boolean
    sheltername?: boolean
    address?: boolean
    phone?: boolean
    zip?: boolean
    regster?: boolean
  }, ExtArgs["result"]["shelter"]>

  export type shelterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idshelter?: boolean
    sheltername?: boolean
    address?: boolean
    phone?: boolean
    zip?: boolean
    regster?: boolean
  }, ExtArgs["result"]["shelter"]>

  export type shelterSelectScalar = {
    idshelter?: boolean
    sheltername?: boolean
    address?: boolean
    phone?: boolean
    zip?: boolean
    regster?: boolean
  }

  export type shelterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idshelter" | "sheltername" | "address" | "phone" | "zip" | "regster", ExtArgs["result"]["shelter"]>
  export type shelterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    petinshelter?: boolean | shelter$petinshelterArgs<ExtArgs>
    _count?: boolean | ShelterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type shelterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type shelterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $shelterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "shelter"
    objects: {
      petinshelter: Prisma.$petinshelterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idshelter: bigint
      sheltername: string | null
      address: string | null
      phone: string | null
      zip: string | null
      regster: Date | null
    }, ExtArgs["result"]["shelter"]>
    composites: {}
  }

  type shelterGetPayload<S extends boolean | null | undefined | shelterDefaultArgs> = $Result.GetResult<Prisma.$shelterPayload, S>

  type shelterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<shelterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShelterCountAggregateInputType | true
    }

  export interface shelterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['shelter'], meta: { name: 'shelter' } }
    /**
     * Find zero or one Shelter that matches the filter.
     * @param {shelterFindUniqueArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shelterFindUniqueArgs>(args: SelectSubset<T, shelterFindUniqueArgs<ExtArgs>>): Prisma__shelterClient<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shelter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shelterFindUniqueOrThrowArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shelterFindUniqueOrThrowArgs>(args: SelectSubset<T, shelterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__shelterClient<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shelter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shelterFindFirstArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shelterFindFirstArgs>(args?: SelectSubset<T, shelterFindFirstArgs<ExtArgs>>): Prisma__shelterClient<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shelter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shelterFindFirstOrThrowArgs} args - Arguments to find a Shelter
     * @example
     * // Get one Shelter
     * const shelter = await prisma.shelter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shelterFindFirstOrThrowArgs>(args?: SelectSubset<T, shelterFindFirstOrThrowArgs<ExtArgs>>): Prisma__shelterClient<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shelters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shelterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shelters
     * const shelters = await prisma.shelter.findMany()
     * 
     * // Get first 10 Shelters
     * const shelters = await prisma.shelter.findMany({ take: 10 })
     * 
     * // Only select the `idshelter`
     * const shelterWithIdshelterOnly = await prisma.shelter.findMany({ select: { idshelter: true } })
     * 
     */
    findMany<T extends shelterFindManyArgs>(args?: SelectSubset<T, shelterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shelter.
     * @param {shelterCreateArgs} args - Arguments to create a Shelter.
     * @example
     * // Create one Shelter
     * const Shelter = await prisma.shelter.create({
     *   data: {
     *     // ... data to create a Shelter
     *   }
     * })
     * 
     */
    create<T extends shelterCreateArgs>(args: SelectSubset<T, shelterCreateArgs<ExtArgs>>): Prisma__shelterClient<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shelters.
     * @param {shelterCreateManyArgs} args - Arguments to create many Shelters.
     * @example
     * // Create many Shelters
     * const shelter = await prisma.shelter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends shelterCreateManyArgs>(args?: SelectSubset<T, shelterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shelters and returns the data saved in the database.
     * @param {shelterCreateManyAndReturnArgs} args - Arguments to create many Shelters.
     * @example
     * // Create many Shelters
     * const shelter = await prisma.shelter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shelters and only return the `idshelter`
     * const shelterWithIdshelterOnly = await prisma.shelter.createManyAndReturn({
     *   select: { idshelter: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends shelterCreateManyAndReturnArgs>(args?: SelectSubset<T, shelterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shelter.
     * @param {shelterDeleteArgs} args - Arguments to delete one Shelter.
     * @example
     * // Delete one Shelter
     * const Shelter = await prisma.shelter.delete({
     *   where: {
     *     // ... filter to delete one Shelter
     *   }
     * })
     * 
     */
    delete<T extends shelterDeleteArgs>(args: SelectSubset<T, shelterDeleteArgs<ExtArgs>>): Prisma__shelterClient<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shelter.
     * @param {shelterUpdateArgs} args - Arguments to update one Shelter.
     * @example
     * // Update one Shelter
     * const shelter = await prisma.shelter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends shelterUpdateArgs>(args: SelectSubset<T, shelterUpdateArgs<ExtArgs>>): Prisma__shelterClient<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shelters.
     * @param {shelterDeleteManyArgs} args - Arguments to filter Shelters to delete.
     * @example
     * // Delete a few Shelters
     * const { count } = await prisma.shelter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends shelterDeleteManyArgs>(args?: SelectSubset<T, shelterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shelters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shelterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shelters
     * const shelter = await prisma.shelter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends shelterUpdateManyArgs>(args: SelectSubset<T, shelterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shelters and returns the data updated in the database.
     * @param {shelterUpdateManyAndReturnArgs} args - Arguments to update many Shelters.
     * @example
     * // Update many Shelters
     * const shelter = await prisma.shelter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shelters and only return the `idshelter`
     * const shelterWithIdshelterOnly = await prisma.shelter.updateManyAndReturn({
     *   select: { idshelter: true },
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
    updateManyAndReturn<T extends shelterUpdateManyAndReturnArgs>(args: SelectSubset<T, shelterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shelter.
     * @param {shelterUpsertArgs} args - Arguments to update or create a Shelter.
     * @example
     * // Update or create a Shelter
     * const shelter = await prisma.shelter.upsert({
     *   create: {
     *     // ... data to create a Shelter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shelter we want to update
     *   }
     * })
     */
    upsert<T extends shelterUpsertArgs>(args: SelectSubset<T, shelterUpsertArgs<ExtArgs>>): Prisma__shelterClient<$Result.GetResult<Prisma.$shelterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shelters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shelterCountArgs} args - Arguments to filter Shelters to count.
     * @example
     * // Count the number of Shelters
     * const count = await prisma.shelter.count({
     *   where: {
     *     // ... the filter for the Shelters we want to count
     *   }
     * })
    **/
    count<T extends shelterCountArgs>(
      args?: Subset<T, shelterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShelterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shelter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShelterAggregateArgs>(args: Subset<T, ShelterAggregateArgs>): Prisma.PrismaPromise<GetShelterAggregateType<T>>

    /**
     * Group by Shelter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shelterGroupByArgs} args - Group by arguments.
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
      T extends shelterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shelterGroupByArgs['orderBy'] }
        : { orderBy?: shelterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, shelterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShelterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the shelter model
   */
  readonly fields: shelterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for shelter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shelterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    petinshelter<T extends shelter$petinshelterArgs<ExtArgs> = {}>(args?: Subset<T, shelter$petinshelterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$petinshelterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the shelter model
   */
  interface shelterFieldRefs {
    readonly idshelter: FieldRef<"shelter", 'BigInt'>
    readonly sheltername: FieldRef<"shelter", 'String'>
    readonly address: FieldRef<"shelter", 'String'>
    readonly phone: FieldRef<"shelter", 'String'>
    readonly zip: FieldRef<"shelter", 'String'>
    readonly regster: FieldRef<"shelter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * shelter findUnique
   */
  export type shelterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * Filter, which shelter to fetch.
     */
    where: shelterWhereUniqueInput
  }

  /**
   * shelter findUniqueOrThrow
   */
  export type shelterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * Filter, which shelter to fetch.
     */
    where: shelterWhereUniqueInput
  }

  /**
   * shelter findFirst
   */
  export type shelterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * Filter, which shelter to fetch.
     */
    where?: shelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shelters to fetch.
     */
    orderBy?: shelterOrderByWithRelationInput | shelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shelters.
     */
    cursor?: shelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shelters.
     */
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * shelter findFirstOrThrow
   */
  export type shelterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * Filter, which shelter to fetch.
     */
    where?: shelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shelters to fetch.
     */
    orderBy?: shelterOrderByWithRelationInput | shelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shelters.
     */
    cursor?: shelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shelters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shelters.
     */
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * shelter findMany
   */
  export type shelterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * Filter, which shelters to fetch.
     */
    where?: shelterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shelters to fetch.
     */
    orderBy?: shelterOrderByWithRelationInput | shelterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shelters.
     */
    cursor?: shelterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shelters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shelters.
     */
    skip?: number
    distinct?: ShelterScalarFieldEnum | ShelterScalarFieldEnum[]
  }

  /**
   * shelter create
   */
  export type shelterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * The data needed to create a shelter.
     */
    data?: XOR<shelterCreateInput, shelterUncheckedCreateInput>
  }

  /**
   * shelter createMany
   */
  export type shelterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many shelters.
     */
    data: shelterCreateManyInput | shelterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shelter createManyAndReturn
   */
  export type shelterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * The data used to create many shelters.
     */
    data: shelterCreateManyInput | shelterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * shelter update
   */
  export type shelterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * The data needed to update a shelter.
     */
    data: XOR<shelterUpdateInput, shelterUncheckedUpdateInput>
    /**
     * Choose, which shelter to update.
     */
    where: shelterWhereUniqueInput
  }

  /**
   * shelter updateMany
   */
  export type shelterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update shelters.
     */
    data: XOR<shelterUpdateManyMutationInput, shelterUncheckedUpdateManyInput>
    /**
     * Filter which shelters to update
     */
    where?: shelterWhereInput
    /**
     * Limit how many shelters to update.
     */
    limit?: number
  }

  /**
   * shelter updateManyAndReturn
   */
  export type shelterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * The data used to update shelters.
     */
    data: XOR<shelterUpdateManyMutationInput, shelterUncheckedUpdateManyInput>
    /**
     * Filter which shelters to update
     */
    where?: shelterWhereInput
    /**
     * Limit how many shelters to update.
     */
    limit?: number
  }

  /**
   * shelter upsert
   */
  export type shelterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * The filter to search for the shelter to update in case it exists.
     */
    where: shelterWhereUniqueInput
    /**
     * In case the shelter found by the `where` argument doesn't exist, create a new shelter with this data.
     */
    create: XOR<shelterCreateInput, shelterUncheckedCreateInput>
    /**
     * In case the shelter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<shelterUpdateInput, shelterUncheckedUpdateInput>
  }

  /**
   * shelter delete
   */
  export type shelterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
    /**
     * Filter which shelter to delete.
     */
    where: shelterWhereUniqueInput
  }

  /**
   * shelter deleteMany
   */
  export type shelterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which shelters to delete
     */
    where?: shelterWhereInput
    /**
     * Limit how many shelters to delete.
     */
    limit?: number
  }

  /**
   * shelter.petinshelter
   */
  export type shelter$petinshelterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the petinshelter
     */
    select?: petinshelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the petinshelter
     */
    omit?: petinshelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petinshelterInclude<ExtArgs> | null
    where?: petinshelterWhereInput
    orderBy?: petinshelterOrderByWithRelationInput | petinshelterOrderByWithRelationInput[]
    cursor?: petinshelterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetinshelterScalarFieldEnum | PetinshelterScalarFieldEnum[]
  }

  /**
   * shelter without action
   */
  export type shelterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the shelter
     */
    select?: shelterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the shelter
     */
    omit?: shelterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shelterInclude<ExtArgs> | null
  }


  /**
   * Model viewplace
   */

  export type AggregateViewplace = {
    _count: ViewplaceCountAggregateOutputType | null
    _avg: ViewplaceAvgAggregateOutputType | null
    _sum: ViewplaceSumAggregateOutputType | null
    _min: ViewplaceMinAggregateOutputType | null
    _max: ViewplaceMaxAggregateOutputType | null
  }

  export type ViewplaceAvgAggregateOutputType = {
    idviewed: number | null
    idpet: number | null
    idperson: number | null
  }

  export type ViewplaceSumAggregateOutputType = {
    idviewed: bigint | null
    idpet: bigint | null
    idperson: bigint | null
  }

  export type ViewplaceMinAggregateOutputType = {
    idviewed: bigint | null
    idpet: bigint | null
    idperson: bigint | null
    coordenate: string | null
    register: Date | null
    urlmedia: string | null
  }

  export type ViewplaceMaxAggregateOutputType = {
    idviewed: bigint | null
    idpet: bigint | null
    idperson: bigint | null
    coordenate: string | null
    register: Date | null
    urlmedia: string | null
  }

  export type ViewplaceCountAggregateOutputType = {
    idviewed: number
    idpet: number
    idperson: number
    coordenate: number
    register: number
    urlmedia: number
    _all: number
  }


  export type ViewplaceAvgAggregateInputType = {
    idviewed?: true
    idpet?: true
    idperson?: true
  }

  export type ViewplaceSumAggregateInputType = {
    idviewed?: true
    idpet?: true
    idperson?: true
  }

  export type ViewplaceMinAggregateInputType = {
    idviewed?: true
    idpet?: true
    idperson?: true
    coordenate?: true
    register?: true
    urlmedia?: true
  }

  export type ViewplaceMaxAggregateInputType = {
    idviewed?: true
    idpet?: true
    idperson?: true
    coordenate?: true
    register?: true
    urlmedia?: true
  }

  export type ViewplaceCountAggregateInputType = {
    idviewed?: true
    idpet?: true
    idperson?: true
    coordenate?: true
    register?: true
    urlmedia?: true
    _all?: true
  }

  export type ViewplaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which viewplace to aggregate.
     */
    where?: viewplaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of viewplaces to fetch.
     */
    orderBy?: viewplaceOrderByWithRelationInput | viewplaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: viewplaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` viewplaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` viewplaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned viewplaces
    **/
    _count?: true | ViewplaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewplaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewplaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewplaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewplaceMaxAggregateInputType
  }

  export type GetViewplaceAggregateType<T extends ViewplaceAggregateArgs> = {
        [P in keyof T & keyof AggregateViewplace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewplace[P]>
      : GetScalarType<T[P], AggregateViewplace[P]>
  }




  export type viewplaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: viewplaceWhereInput
    orderBy?: viewplaceOrderByWithAggregationInput | viewplaceOrderByWithAggregationInput[]
    by: ViewplaceScalarFieldEnum[] | ViewplaceScalarFieldEnum
    having?: viewplaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewplaceCountAggregateInputType | true
    _avg?: ViewplaceAvgAggregateInputType
    _sum?: ViewplaceSumAggregateInputType
    _min?: ViewplaceMinAggregateInputType
    _max?: ViewplaceMaxAggregateInputType
  }

  export type ViewplaceGroupByOutputType = {
    idviewed: bigint
    idpet: bigint | null
    idperson: bigint | null
    coordenate: string | null
    register: Date | null
    urlmedia: string | null
    _count: ViewplaceCountAggregateOutputType | null
    _avg: ViewplaceAvgAggregateOutputType | null
    _sum: ViewplaceSumAggregateOutputType | null
    _min: ViewplaceMinAggregateOutputType | null
    _max: ViewplaceMaxAggregateOutputType | null
  }

  type GetViewplaceGroupByPayload<T extends viewplaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewplaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewplaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewplaceGroupByOutputType[P]>
            : GetScalarType<T[P], ViewplaceGroupByOutputType[P]>
        }
      >
    >


  export type viewplaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idviewed?: boolean
    idpet?: boolean
    idperson?: boolean
    coordenate?: boolean
    register?: boolean
    urlmedia?: boolean
    person?: boolean | viewplace$personArgs<ExtArgs>
    pet?: boolean | viewplace$petArgs<ExtArgs>
  }, ExtArgs["result"]["viewplace"]>

  export type viewplaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idviewed?: boolean
    idpet?: boolean
    idperson?: boolean
    coordenate?: boolean
    register?: boolean
    urlmedia?: boolean
    person?: boolean | viewplace$personArgs<ExtArgs>
    pet?: boolean | viewplace$petArgs<ExtArgs>
  }, ExtArgs["result"]["viewplace"]>

  export type viewplaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idviewed?: boolean
    idpet?: boolean
    idperson?: boolean
    coordenate?: boolean
    register?: boolean
    urlmedia?: boolean
    person?: boolean | viewplace$personArgs<ExtArgs>
    pet?: boolean | viewplace$petArgs<ExtArgs>
  }, ExtArgs["result"]["viewplace"]>

  export type viewplaceSelectScalar = {
    idviewed?: boolean
    idpet?: boolean
    idperson?: boolean
    coordenate?: boolean
    register?: boolean
    urlmedia?: boolean
  }

  export type viewplaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idviewed" | "idpet" | "idperson" | "coordenate" | "register" | "urlmedia", ExtArgs["result"]["viewplace"]>
  export type viewplaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | viewplace$personArgs<ExtArgs>
    pet?: boolean | viewplace$petArgs<ExtArgs>
  }
  export type viewplaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | viewplace$personArgs<ExtArgs>
    pet?: boolean | viewplace$petArgs<ExtArgs>
  }
  export type viewplaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | viewplace$personArgs<ExtArgs>
    pet?: boolean | viewplace$petArgs<ExtArgs>
  }

  export type $viewplacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "viewplace"
    objects: {
      person: Prisma.$personPayload<ExtArgs> | null
      pet: Prisma.$petPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      idviewed: bigint
      idpet: bigint | null
      idperson: bigint | null
      coordenate: string | null
      register: Date | null
      urlmedia: string | null
    }, ExtArgs["result"]["viewplace"]>
    composites: {}
  }

  type viewplaceGetPayload<S extends boolean | null | undefined | viewplaceDefaultArgs> = $Result.GetResult<Prisma.$viewplacePayload, S>

  type viewplaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<viewplaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewplaceCountAggregateInputType | true
    }

  export interface viewplaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['viewplace'], meta: { name: 'viewplace' } }
    /**
     * Find zero or one Viewplace that matches the filter.
     * @param {viewplaceFindUniqueArgs} args - Arguments to find a Viewplace
     * @example
     * // Get one Viewplace
     * const viewplace = await prisma.viewplace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends viewplaceFindUniqueArgs>(args: SelectSubset<T, viewplaceFindUniqueArgs<ExtArgs>>): Prisma__viewplaceClient<$Result.GetResult<Prisma.$viewplacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Viewplace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {viewplaceFindUniqueOrThrowArgs} args - Arguments to find a Viewplace
     * @example
     * // Get one Viewplace
     * const viewplace = await prisma.viewplace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends viewplaceFindUniqueOrThrowArgs>(args: SelectSubset<T, viewplaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__viewplaceClient<$Result.GetResult<Prisma.$viewplacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viewplace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewplaceFindFirstArgs} args - Arguments to find a Viewplace
     * @example
     * // Get one Viewplace
     * const viewplace = await prisma.viewplace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends viewplaceFindFirstArgs>(args?: SelectSubset<T, viewplaceFindFirstArgs<ExtArgs>>): Prisma__viewplaceClient<$Result.GetResult<Prisma.$viewplacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viewplace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewplaceFindFirstOrThrowArgs} args - Arguments to find a Viewplace
     * @example
     * // Get one Viewplace
     * const viewplace = await prisma.viewplace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends viewplaceFindFirstOrThrowArgs>(args?: SelectSubset<T, viewplaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__viewplaceClient<$Result.GetResult<Prisma.$viewplacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Viewplaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewplaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Viewplaces
     * const viewplaces = await prisma.viewplace.findMany()
     * 
     * // Get first 10 Viewplaces
     * const viewplaces = await prisma.viewplace.findMany({ take: 10 })
     * 
     * // Only select the `idviewed`
     * const viewplaceWithIdviewedOnly = await prisma.viewplace.findMany({ select: { idviewed: true } })
     * 
     */
    findMany<T extends viewplaceFindManyArgs>(args?: SelectSubset<T, viewplaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viewplacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Viewplace.
     * @param {viewplaceCreateArgs} args - Arguments to create a Viewplace.
     * @example
     * // Create one Viewplace
     * const Viewplace = await prisma.viewplace.create({
     *   data: {
     *     // ... data to create a Viewplace
     *   }
     * })
     * 
     */
    create<T extends viewplaceCreateArgs>(args: SelectSubset<T, viewplaceCreateArgs<ExtArgs>>): Prisma__viewplaceClient<$Result.GetResult<Prisma.$viewplacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Viewplaces.
     * @param {viewplaceCreateManyArgs} args - Arguments to create many Viewplaces.
     * @example
     * // Create many Viewplaces
     * const viewplace = await prisma.viewplace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends viewplaceCreateManyArgs>(args?: SelectSubset<T, viewplaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Viewplaces and returns the data saved in the database.
     * @param {viewplaceCreateManyAndReturnArgs} args - Arguments to create many Viewplaces.
     * @example
     * // Create many Viewplaces
     * const viewplace = await prisma.viewplace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Viewplaces and only return the `idviewed`
     * const viewplaceWithIdviewedOnly = await prisma.viewplace.createManyAndReturn({
     *   select: { idviewed: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends viewplaceCreateManyAndReturnArgs>(args?: SelectSubset<T, viewplaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viewplacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Viewplace.
     * @param {viewplaceDeleteArgs} args - Arguments to delete one Viewplace.
     * @example
     * // Delete one Viewplace
     * const Viewplace = await prisma.viewplace.delete({
     *   where: {
     *     // ... filter to delete one Viewplace
     *   }
     * })
     * 
     */
    delete<T extends viewplaceDeleteArgs>(args: SelectSubset<T, viewplaceDeleteArgs<ExtArgs>>): Prisma__viewplaceClient<$Result.GetResult<Prisma.$viewplacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Viewplace.
     * @param {viewplaceUpdateArgs} args - Arguments to update one Viewplace.
     * @example
     * // Update one Viewplace
     * const viewplace = await prisma.viewplace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends viewplaceUpdateArgs>(args: SelectSubset<T, viewplaceUpdateArgs<ExtArgs>>): Prisma__viewplaceClient<$Result.GetResult<Prisma.$viewplacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Viewplaces.
     * @param {viewplaceDeleteManyArgs} args - Arguments to filter Viewplaces to delete.
     * @example
     * // Delete a few Viewplaces
     * const { count } = await prisma.viewplace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends viewplaceDeleteManyArgs>(args?: SelectSubset<T, viewplaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viewplaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewplaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Viewplaces
     * const viewplace = await prisma.viewplace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends viewplaceUpdateManyArgs>(args: SelectSubset<T, viewplaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viewplaces and returns the data updated in the database.
     * @param {viewplaceUpdateManyAndReturnArgs} args - Arguments to update many Viewplaces.
     * @example
     * // Update many Viewplaces
     * const viewplace = await prisma.viewplace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Viewplaces and only return the `idviewed`
     * const viewplaceWithIdviewedOnly = await prisma.viewplace.updateManyAndReturn({
     *   select: { idviewed: true },
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
    updateManyAndReturn<T extends viewplaceUpdateManyAndReturnArgs>(args: SelectSubset<T, viewplaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viewplacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Viewplace.
     * @param {viewplaceUpsertArgs} args - Arguments to update or create a Viewplace.
     * @example
     * // Update or create a Viewplace
     * const viewplace = await prisma.viewplace.upsert({
     *   create: {
     *     // ... data to create a Viewplace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Viewplace we want to update
     *   }
     * })
     */
    upsert<T extends viewplaceUpsertArgs>(args: SelectSubset<T, viewplaceUpsertArgs<ExtArgs>>): Prisma__viewplaceClient<$Result.GetResult<Prisma.$viewplacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Viewplaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewplaceCountArgs} args - Arguments to filter Viewplaces to count.
     * @example
     * // Count the number of Viewplaces
     * const count = await prisma.viewplace.count({
     *   where: {
     *     // ... the filter for the Viewplaces we want to count
     *   }
     * })
    **/
    count<T extends viewplaceCountArgs>(
      args?: Subset<T, viewplaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewplaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Viewplace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewplaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViewplaceAggregateArgs>(args: Subset<T, ViewplaceAggregateArgs>): Prisma.PrismaPromise<GetViewplaceAggregateType<T>>

    /**
     * Group by Viewplace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewplaceGroupByArgs} args - Group by arguments.
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
      T extends viewplaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: viewplaceGroupByArgs['orderBy'] }
        : { orderBy?: viewplaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, viewplaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewplaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the viewplace model
   */
  readonly fields: viewplaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for viewplace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__viewplaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends viewplace$personArgs<ExtArgs> = {}>(args?: Subset<T, viewplace$personArgs<ExtArgs>>): Prisma__personClient<$Result.GetResult<Prisma.$personPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pet<T extends viewplace$petArgs<ExtArgs> = {}>(args?: Subset<T, viewplace$petArgs<ExtArgs>>): Prisma__petClient<$Result.GetResult<Prisma.$petPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the viewplace model
   */
  interface viewplaceFieldRefs {
    readonly idviewed: FieldRef<"viewplace", 'BigInt'>
    readonly idpet: FieldRef<"viewplace", 'BigInt'>
    readonly idperson: FieldRef<"viewplace", 'BigInt'>
    readonly coordenate: FieldRef<"viewplace", 'String'>
    readonly register: FieldRef<"viewplace", 'DateTime'>
    readonly urlmedia: FieldRef<"viewplace", 'String'>
  }
    

  // Custom InputTypes
  /**
   * viewplace findUnique
   */
  export type viewplaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viewplace
     */
    select?: viewplaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viewplace
     */
    omit?: viewplaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewplaceInclude<ExtArgs> | null
    /**
     * Filter, which viewplace to fetch.
     */
    where: viewplaceWhereUniqueInput
  }

  /**
   * viewplace findUniqueOrThrow
   */
  export type viewplaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viewplace
     */
    select?: viewplaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viewplace
     */
    omit?: viewplaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewplaceInclude<ExtArgs> | null
    /**
     * Filter, which viewplace to fetch.
     */
    where: viewplaceWhereUniqueInput
  }

  /**
   * viewplace findFirst
   */
  export type viewplaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viewplace
     */
    select?: viewplaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viewplace
     */
    omit?: viewplaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewplaceInclude<ExtArgs> | null
    /**
     * Filter, which viewplace to fetch.
     */
    where?: viewplaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of viewplaces to fetch.
     */
    orderBy?: viewplaceOrderByWithRelationInput | viewplaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for viewplaces.
     */
    cursor?: viewplaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` viewplaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` viewplaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of viewplaces.
     */
    distinct?: ViewplaceScalarFieldEnum | ViewplaceScalarFieldEnum[]
  }

  /**
   * viewplace findFirstOrThrow
   */
  export type viewplaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viewplace
     */
    select?: viewplaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viewplace
     */
    omit?: viewplaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewplaceInclude<ExtArgs> | null
    /**
     * Filter, which viewplace to fetch.
     */
    where?: viewplaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of viewplaces to fetch.
     */
    orderBy?: viewplaceOrderByWithRelationInput | viewplaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for viewplaces.
     */
    cursor?: viewplaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` viewplaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` viewplaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of viewplaces.
     */
    distinct?: ViewplaceScalarFieldEnum | ViewplaceScalarFieldEnum[]
  }

  /**
   * viewplace findMany
   */
  export type viewplaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viewplace
     */
    select?: viewplaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viewplace
     */
    omit?: viewplaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewplaceInclude<ExtArgs> | null
    /**
     * Filter, which viewplaces to fetch.
     */
    where?: viewplaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of viewplaces to fetch.
     */
    orderBy?: viewplaceOrderByWithRelationInput | viewplaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing viewplaces.
     */
    cursor?: viewplaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` viewplaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` viewplaces.
     */
    skip?: number
    distinct?: ViewplaceScalarFieldEnum | ViewplaceScalarFieldEnum[]
  }

  /**
   * viewplace create
   */
  export type viewplaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viewplace
     */
    select?: viewplaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viewplace
     */
    omit?: viewplaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewplaceInclude<ExtArgs> | null
    /**
     * The data needed to create a viewplace.
     */
    data?: XOR<viewplaceCreateInput, viewplaceUncheckedCreateInput>
  }

  /**
   * viewplace createMany
   */
  export type viewplaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many viewplaces.
     */
    data: viewplaceCreateManyInput | viewplaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * viewplace createManyAndReturn
   */
  export type viewplaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viewplace
     */
    select?: viewplaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the viewplace
     */
    omit?: viewplaceOmit<ExtArgs> | null
    /**
     * The data used to create many viewplaces.
     */
    data: viewplaceCreateManyInput | viewplaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewplaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * viewplace update
   */
  export type viewplaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viewplace
     */
    select?: viewplaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viewplace
     */
    omit?: viewplaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewplaceInclude<ExtArgs> | null
    /**
     * The data needed to update a viewplace.
     */
    data: XOR<viewplaceUpdateInput, viewplaceUncheckedUpdateInput>
    /**
     * Choose, which viewplace to update.
     */
    where: viewplaceWhereUniqueInput
  }

  /**
   * viewplace updateMany
   */
  export type viewplaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update viewplaces.
     */
    data: XOR<viewplaceUpdateManyMutationInput, viewplaceUncheckedUpdateManyInput>
    /**
     * Filter which viewplaces to update
     */
    where?: viewplaceWhereInput
    /**
     * Limit how many viewplaces to update.
     */
    limit?: number
  }

  /**
   * viewplace updateManyAndReturn
   */
  export type viewplaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viewplace
     */
    select?: viewplaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the viewplace
     */
    omit?: viewplaceOmit<ExtArgs> | null
    /**
     * The data used to update viewplaces.
     */
    data: XOR<viewplaceUpdateManyMutationInput, viewplaceUncheckedUpdateManyInput>
    /**
     * Filter which viewplaces to update
     */
    where?: viewplaceWhereInput
    /**
     * Limit how many viewplaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewplaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * viewplace upsert
   */
  export type viewplaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viewplace
     */
    select?: viewplaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viewplace
     */
    omit?: viewplaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewplaceInclude<ExtArgs> | null
    /**
     * The filter to search for the viewplace to update in case it exists.
     */
    where: viewplaceWhereUniqueInput
    /**
     * In case the viewplace found by the `where` argument doesn't exist, create a new viewplace with this data.
     */
    create: XOR<viewplaceCreateInput, viewplaceUncheckedCreateInput>
    /**
     * In case the viewplace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<viewplaceUpdateInput, viewplaceUncheckedUpdateInput>
  }

  /**
   * viewplace delete
   */
  export type viewplaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viewplace
     */
    select?: viewplaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viewplace
     */
    omit?: viewplaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewplaceInclude<ExtArgs> | null
    /**
     * Filter which viewplace to delete.
     */
    where: viewplaceWhereUniqueInput
  }

  /**
   * viewplace deleteMany
   */
  export type viewplaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which viewplaces to delete
     */
    where?: viewplaceWhereInput
    /**
     * Limit how many viewplaces to delete.
     */
    limit?: number
  }

  /**
   * viewplace.person
   */
  export type viewplace$personArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the person
     */
    select?: personSelect<ExtArgs> | null
    /**
     * Omit specific fields from the person
     */
    omit?: personOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: personInclude<ExtArgs> | null
    where?: personWhereInput
  }

  /**
   * viewplace.pet
   */
  export type viewplace$petArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pet
     */
    select?: petSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pet
     */
    omit?: petOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: petInclude<ExtArgs> | null
    where?: petWhereInput
  }

  /**
   * viewplace without action
   */
  export type viewplaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the viewplace
     */
    select?: viewplaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the viewplace
     */
    omit?: viewplaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: viewplaceInclude<ExtArgs> | null
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


  export const AdoptionScalarFieldEnum: {
    idadoption: 'idadoption',
    idperson: 'idperson',
    idpet: 'idpet',
    idstatus: 'idstatus',
    adoptiodate: 'adoptiodate'
  };

  export type AdoptionScalarFieldEnum = (typeof AdoptionScalarFieldEnum)[keyof typeof AdoptionScalarFieldEnum]


  export const AdoptionstatusScalarFieldEnum: {
    idstatus: 'idstatus',
    status: 'status'
  };

  export type AdoptionstatusScalarFieldEnum = (typeof AdoptionstatusScalarFieldEnum)[keyof typeof AdoptionstatusScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    idperson: 'idperson',
    firstname: 'firstname',
    middlename: 'middlename',
    lastname: 'lastname',
    email: 'email',
    phone: 'phone',
    register: 'register',
    active: 'active'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const PetScalarFieldEnum: {
    idpet: 'idpet',
    idkind: 'idkind',
    name: 'name',
    register: 'register'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const PetinshelterScalarFieldEnum: {
    idshelter: 'idshelter',
    idpet: 'idpet',
    observation: 'observation',
    checkin: 'checkin',
    checkout: 'checkout'
  };

  export type PetinshelterScalarFieldEnum = (typeof PetinshelterScalarFieldEnum)[keyof typeof PetinshelterScalarFieldEnum]


  export const PetkindScalarFieldEnum: {
    idkind: 'idkind',
    kind: 'kind'
  };

  export type PetkindScalarFieldEnum = (typeof PetkindScalarFieldEnum)[keyof typeof PetkindScalarFieldEnum]


  export const PetmediaScalarFieldEnum: {
    idmedia: 'idmedia',
    idpet: 'idpet',
    register: 'register',
    urlmedia: 'urlmedia'
  };

  export type PetmediaScalarFieldEnum = (typeof PetmediaScalarFieldEnum)[keyof typeof PetmediaScalarFieldEnum]


  export const ShelterScalarFieldEnum: {
    idshelter: 'idshelter',
    sheltername: 'sheltername',
    address: 'address',
    phone: 'phone',
    zip: 'zip',
    regster: 'regster'
  };

  export type ShelterScalarFieldEnum = (typeof ShelterScalarFieldEnum)[keyof typeof ShelterScalarFieldEnum]


  export const ViewplaceScalarFieldEnum: {
    idviewed: 'idviewed',
    idpet: 'idpet',
    idperson: 'idperson',
    coordenate: 'coordenate',
    register: 'register',
    urlmedia: 'urlmedia'
  };

  export type ViewplaceScalarFieldEnum = (typeof ViewplaceScalarFieldEnum)[keyof typeof ViewplaceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type adoptionWhereInput = {
    AND?: adoptionWhereInput | adoptionWhereInput[]
    OR?: adoptionWhereInput[]
    NOT?: adoptionWhereInput | adoptionWhereInput[]
    idadoption?: BigIntFilter<"adoption"> | bigint | number
    idperson?: BigIntNullableFilter<"adoption"> | bigint | number | null
    idpet?: BigIntNullableFilter<"adoption"> | bigint | number | null
    idstatus?: IntNullableFilter<"adoption"> | number | null
    adoptiodate?: DateTimeNullableFilter<"adoption"> | Date | string | null
    adoptionstatus?: XOR<AdoptionstatusNullableScalarRelationFilter, adoptionstatusWhereInput> | null
    person?: XOR<PersonNullableScalarRelationFilter, personWhereInput> | null
    pet?: XOR<PetNullableScalarRelationFilter, petWhereInput> | null
  }

  export type adoptionOrderByWithRelationInput = {
    idadoption?: SortOrder
    idperson?: SortOrderInput | SortOrder
    idpet?: SortOrderInput | SortOrder
    idstatus?: SortOrderInput | SortOrder
    adoptiodate?: SortOrderInput | SortOrder
    adoptionstatus?: adoptionstatusOrderByWithRelationInput
    person?: personOrderByWithRelationInput
    pet?: petOrderByWithRelationInput
  }

  export type adoptionWhereUniqueInput = Prisma.AtLeast<{
    idadoption?: bigint | number
    AND?: adoptionWhereInput | adoptionWhereInput[]
    OR?: adoptionWhereInput[]
    NOT?: adoptionWhereInput | adoptionWhereInput[]
    idperson?: BigIntNullableFilter<"adoption"> | bigint | number | null
    idpet?: BigIntNullableFilter<"adoption"> | bigint | number | null
    idstatus?: IntNullableFilter<"adoption"> | number | null
    adoptiodate?: DateTimeNullableFilter<"adoption"> | Date | string | null
    adoptionstatus?: XOR<AdoptionstatusNullableScalarRelationFilter, adoptionstatusWhereInput> | null
    person?: XOR<PersonNullableScalarRelationFilter, personWhereInput> | null
    pet?: XOR<PetNullableScalarRelationFilter, petWhereInput> | null
  }, "idadoption" | "idadoption">

  export type adoptionOrderByWithAggregationInput = {
    idadoption?: SortOrder
    idperson?: SortOrderInput | SortOrder
    idpet?: SortOrderInput | SortOrder
    idstatus?: SortOrderInput | SortOrder
    adoptiodate?: SortOrderInput | SortOrder
    _count?: adoptionCountOrderByAggregateInput
    _avg?: adoptionAvgOrderByAggregateInput
    _max?: adoptionMaxOrderByAggregateInput
    _min?: adoptionMinOrderByAggregateInput
    _sum?: adoptionSumOrderByAggregateInput
  }

  export type adoptionScalarWhereWithAggregatesInput = {
    AND?: adoptionScalarWhereWithAggregatesInput | adoptionScalarWhereWithAggregatesInput[]
    OR?: adoptionScalarWhereWithAggregatesInput[]
    NOT?: adoptionScalarWhereWithAggregatesInput | adoptionScalarWhereWithAggregatesInput[]
    idadoption?: BigIntWithAggregatesFilter<"adoption"> | bigint | number
    idperson?: BigIntNullableWithAggregatesFilter<"adoption"> | bigint | number | null
    idpet?: BigIntNullableWithAggregatesFilter<"adoption"> | bigint | number | null
    idstatus?: IntNullableWithAggregatesFilter<"adoption"> | number | null
    adoptiodate?: DateTimeNullableWithAggregatesFilter<"adoption"> | Date | string | null
  }

  export type adoptionstatusWhereInput = {
    AND?: adoptionstatusWhereInput | adoptionstatusWhereInput[]
    OR?: adoptionstatusWhereInput[]
    NOT?: adoptionstatusWhereInput | adoptionstatusWhereInput[]
    idstatus?: IntFilter<"adoptionstatus"> | number
    status?: StringNullableFilter<"adoptionstatus"> | string | null
    adoption?: AdoptionListRelationFilter
  }

  export type adoptionstatusOrderByWithRelationInput = {
    idstatus?: SortOrder
    status?: SortOrderInput | SortOrder
    adoption?: adoptionOrderByRelationAggregateInput
  }

  export type adoptionstatusWhereUniqueInput = Prisma.AtLeast<{
    idstatus?: number
    AND?: adoptionstatusWhereInput | adoptionstatusWhereInput[]
    OR?: adoptionstatusWhereInput[]
    NOT?: adoptionstatusWhereInput | adoptionstatusWhereInput[]
    status?: StringNullableFilter<"adoptionstatus"> | string | null
    adoption?: AdoptionListRelationFilter
  }, "idstatus" | "idstatus">

  export type adoptionstatusOrderByWithAggregationInput = {
    idstatus?: SortOrder
    status?: SortOrderInput | SortOrder
    _count?: adoptionstatusCountOrderByAggregateInput
    _avg?: adoptionstatusAvgOrderByAggregateInput
    _max?: adoptionstatusMaxOrderByAggregateInput
    _min?: adoptionstatusMinOrderByAggregateInput
    _sum?: adoptionstatusSumOrderByAggregateInput
  }

  export type adoptionstatusScalarWhereWithAggregatesInput = {
    AND?: adoptionstatusScalarWhereWithAggregatesInput | adoptionstatusScalarWhereWithAggregatesInput[]
    OR?: adoptionstatusScalarWhereWithAggregatesInput[]
    NOT?: adoptionstatusScalarWhereWithAggregatesInput | adoptionstatusScalarWhereWithAggregatesInput[]
    idstatus?: IntWithAggregatesFilter<"adoptionstatus"> | number
    status?: StringNullableWithAggregatesFilter<"adoptionstatus"> | string | null
  }

  export type personWhereInput = {
    AND?: personWhereInput | personWhereInput[]
    OR?: personWhereInput[]
    NOT?: personWhereInput | personWhereInput[]
    idperson?: BigIntFilter<"person"> | bigint | number
    firstname?: StringFilter<"person"> | string
    middlename?: StringNullableFilter<"person"> | string | null
    lastname?: StringFilter<"person"> | string
    email?: StringFilter<"person"> | string
    phone?: StringNullableFilter<"person"> | string | null
    register?: DateTimeFilter<"person"> | Date | string
    active?: BoolFilter<"person"> | boolean
    adoption?: AdoptionListRelationFilter
    viewplace?: ViewplaceListRelationFilter
  }

  export type personOrderByWithRelationInput = {
    idperson?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrderInput | SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    register?: SortOrder
    active?: SortOrder
    adoption?: adoptionOrderByRelationAggregateInput
    viewplace?: viewplaceOrderByRelationAggregateInput
  }

  export type personWhereUniqueInput = Prisma.AtLeast<{
    idperson?: bigint | number
    email?: string
    AND?: personWhereInput | personWhereInput[]
    OR?: personWhereInput[]
    NOT?: personWhereInput | personWhereInput[]
    firstname?: StringFilter<"person"> | string
    middlename?: StringNullableFilter<"person"> | string | null
    lastname?: StringFilter<"person"> | string
    phone?: StringNullableFilter<"person"> | string | null
    register?: DateTimeFilter<"person"> | Date | string
    active?: BoolFilter<"person"> | boolean
    adoption?: AdoptionListRelationFilter
    viewplace?: ViewplaceListRelationFilter
  }, "idperson" | "idperson" | "email">

  export type personOrderByWithAggregationInput = {
    idperson?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrderInput | SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    register?: SortOrder
    active?: SortOrder
    _count?: personCountOrderByAggregateInput
    _avg?: personAvgOrderByAggregateInput
    _max?: personMaxOrderByAggregateInput
    _min?: personMinOrderByAggregateInput
    _sum?: personSumOrderByAggregateInput
  }

  export type personScalarWhereWithAggregatesInput = {
    AND?: personScalarWhereWithAggregatesInput | personScalarWhereWithAggregatesInput[]
    OR?: personScalarWhereWithAggregatesInput[]
    NOT?: personScalarWhereWithAggregatesInput | personScalarWhereWithAggregatesInput[]
    idperson?: BigIntWithAggregatesFilter<"person"> | bigint | number
    firstname?: StringWithAggregatesFilter<"person"> | string
    middlename?: StringNullableWithAggregatesFilter<"person"> | string | null
    lastname?: StringWithAggregatesFilter<"person"> | string
    email?: StringWithAggregatesFilter<"person"> | string
    phone?: StringNullableWithAggregatesFilter<"person"> | string | null
    register?: DateTimeWithAggregatesFilter<"person"> | Date | string
    active?: BoolWithAggregatesFilter<"person"> | boolean
  }

  export type petWhereInput = {
    AND?: petWhereInput | petWhereInput[]
    OR?: petWhereInput[]
    NOT?: petWhereInput | petWhereInput[]
    idpet?: BigIntFilter<"pet"> | bigint | number
    idkind?: IntNullableFilter<"pet"> | number | null
    name?: StringNullableFilter<"pet"> | string | null
    register?: DateTimeNullableFilter<"pet"> | Date | string | null
    adoption?: AdoptionListRelationFilter
    petkind?: XOR<PetkindNullableScalarRelationFilter, petkindWhereInput> | null
    petinshelter?: PetinshelterListRelationFilter
    petmedia?: PetmediaListRelationFilter
    viewplace?: ViewplaceListRelationFilter
  }

  export type petOrderByWithRelationInput = {
    idpet?: SortOrder
    idkind?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    register?: SortOrderInput | SortOrder
    adoption?: adoptionOrderByRelationAggregateInput
    petkind?: petkindOrderByWithRelationInput
    petinshelter?: petinshelterOrderByRelationAggregateInput
    petmedia?: petmediaOrderByRelationAggregateInput
    viewplace?: viewplaceOrderByRelationAggregateInput
  }

  export type petWhereUniqueInput = Prisma.AtLeast<{
    idpet?: bigint | number
    AND?: petWhereInput | petWhereInput[]
    OR?: petWhereInput[]
    NOT?: petWhereInput | petWhereInput[]
    idkind?: IntNullableFilter<"pet"> | number | null
    name?: StringNullableFilter<"pet"> | string | null
    register?: DateTimeNullableFilter<"pet"> | Date | string | null
    adoption?: AdoptionListRelationFilter
    petkind?: XOR<PetkindNullableScalarRelationFilter, petkindWhereInput> | null
    petinshelter?: PetinshelterListRelationFilter
    petmedia?: PetmediaListRelationFilter
    viewplace?: ViewplaceListRelationFilter
  }, "idpet" | "idpet">

  export type petOrderByWithAggregationInput = {
    idpet?: SortOrder
    idkind?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    register?: SortOrderInput | SortOrder
    _count?: petCountOrderByAggregateInput
    _avg?: petAvgOrderByAggregateInput
    _max?: petMaxOrderByAggregateInput
    _min?: petMinOrderByAggregateInput
    _sum?: petSumOrderByAggregateInput
  }

  export type petScalarWhereWithAggregatesInput = {
    AND?: petScalarWhereWithAggregatesInput | petScalarWhereWithAggregatesInput[]
    OR?: petScalarWhereWithAggregatesInput[]
    NOT?: petScalarWhereWithAggregatesInput | petScalarWhereWithAggregatesInput[]
    idpet?: BigIntWithAggregatesFilter<"pet"> | bigint | number
    idkind?: IntNullableWithAggregatesFilter<"pet"> | number | null
    name?: StringNullableWithAggregatesFilter<"pet"> | string | null
    register?: DateTimeNullableWithAggregatesFilter<"pet"> | Date | string | null
  }

  export type petinshelterWhereInput = {
    AND?: petinshelterWhereInput | petinshelterWhereInput[]
    OR?: petinshelterWhereInput[]
    NOT?: petinshelterWhereInput | petinshelterWhereInput[]
    idshelter?: BigIntFilter<"petinshelter"> | bigint | number
    idpet?: BigIntFilter<"petinshelter"> | bigint | number
    observation?: StringNullableFilter<"petinshelter"> | string | null
    checkin?: DateTimeNullableFilter<"petinshelter"> | Date | string | null
    checkout?: DateTimeNullableFilter<"petinshelter"> | Date | string | null
    pet?: XOR<PetScalarRelationFilter, petWhereInput>
    shelter?: XOR<ShelterScalarRelationFilter, shelterWhereInput>
  }

  export type petinshelterOrderByWithRelationInput = {
    idshelter?: SortOrder
    idpet?: SortOrder
    observation?: SortOrderInput | SortOrder
    checkin?: SortOrderInput | SortOrder
    checkout?: SortOrderInput | SortOrder
    pet?: petOrderByWithRelationInput
    shelter?: shelterOrderByWithRelationInput
  }

  export type petinshelterWhereUniqueInput = Prisma.AtLeast<{
    idshelter_idpet?: petinshelterIdshelterIdpetCompoundUniqueInput
    AND?: petinshelterWhereInput | petinshelterWhereInput[]
    OR?: petinshelterWhereInput[]
    NOT?: petinshelterWhereInput | petinshelterWhereInput[]
    idshelter?: BigIntFilter<"petinshelter"> | bigint | number
    idpet?: BigIntFilter<"petinshelter"> | bigint | number
    observation?: StringNullableFilter<"petinshelter"> | string | null
    checkin?: DateTimeNullableFilter<"petinshelter"> | Date | string | null
    checkout?: DateTimeNullableFilter<"petinshelter"> | Date | string | null
    pet?: XOR<PetScalarRelationFilter, petWhereInput>
    shelter?: XOR<ShelterScalarRelationFilter, shelterWhereInput>
  }, "idshelter_idpet" | "idshelter_idpet">

  export type petinshelterOrderByWithAggregationInput = {
    idshelter?: SortOrder
    idpet?: SortOrder
    observation?: SortOrderInput | SortOrder
    checkin?: SortOrderInput | SortOrder
    checkout?: SortOrderInput | SortOrder
    _count?: petinshelterCountOrderByAggregateInput
    _avg?: petinshelterAvgOrderByAggregateInput
    _max?: petinshelterMaxOrderByAggregateInput
    _min?: petinshelterMinOrderByAggregateInput
    _sum?: petinshelterSumOrderByAggregateInput
  }

  export type petinshelterScalarWhereWithAggregatesInput = {
    AND?: petinshelterScalarWhereWithAggregatesInput | petinshelterScalarWhereWithAggregatesInput[]
    OR?: petinshelterScalarWhereWithAggregatesInput[]
    NOT?: petinshelterScalarWhereWithAggregatesInput | petinshelterScalarWhereWithAggregatesInput[]
    idshelter?: BigIntWithAggregatesFilter<"petinshelter"> | bigint | number
    idpet?: BigIntWithAggregatesFilter<"petinshelter"> | bigint | number
    observation?: StringNullableWithAggregatesFilter<"petinshelter"> | string | null
    checkin?: DateTimeNullableWithAggregatesFilter<"petinshelter"> | Date | string | null
    checkout?: DateTimeNullableWithAggregatesFilter<"petinshelter"> | Date | string | null
  }

  export type petkindWhereInput = {
    AND?: petkindWhereInput | petkindWhereInput[]
    OR?: petkindWhereInput[]
    NOT?: petkindWhereInput | petkindWhereInput[]
    idkind?: IntFilter<"petkind"> | number
    kind?: StringNullableFilter<"petkind"> | string | null
    pet?: PetListRelationFilter
  }

  export type petkindOrderByWithRelationInput = {
    idkind?: SortOrder
    kind?: SortOrderInput | SortOrder
    pet?: petOrderByRelationAggregateInput
  }

  export type petkindWhereUniqueInput = Prisma.AtLeast<{
    idkind?: number
    AND?: petkindWhereInput | petkindWhereInput[]
    OR?: petkindWhereInput[]
    NOT?: petkindWhereInput | petkindWhereInput[]
    kind?: StringNullableFilter<"petkind"> | string | null
    pet?: PetListRelationFilter
  }, "idkind" | "idkind">

  export type petkindOrderByWithAggregationInput = {
    idkind?: SortOrder
    kind?: SortOrderInput | SortOrder
    _count?: petkindCountOrderByAggregateInput
    _avg?: petkindAvgOrderByAggregateInput
    _max?: petkindMaxOrderByAggregateInput
    _min?: petkindMinOrderByAggregateInput
    _sum?: petkindSumOrderByAggregateInput
  }

  export type petkindScalarWhereWithAggregatesInput = {
    AND?: petkindScalarWhereWithAggregatesInput | petkindScalarWhereWithAggregatesInput[]
    OR?: petkindScalarWhereWithAggregatesInput[]
    NOT?: petkindScalarWhereWithAggregatesInput | petkindScalarWhereWithAggregatesInput[]
    idkind?: IntWithAggregatesFilter<"petkind"> | number
    kind?: StringNullableWithAggregatesFilter<"petkind"> | string | null
  }

  export type petmediaWhereInput = {
    AND?: petmediaWhereInput | petmediaWhereInput[]
    OR?: petmediaWhereInput[]
    NOT?: petmediaWhereInput | petmediaWhereInput[]
    idmedia?: BigIntFilter<"petmedia"> | bigint | number
    idpet?: BigIntNullableFilter<"petmedia"> | bigint | number | null
    register?: DateTimeNullableFilter<"petmedia"> | Date | string | null
    urlmedia?: StringNullableFilter<"petmedia"> | string | null
    pet?: XOR<PetNullableScalarRelationFilter, petWhereInput> | null
  }

  export type petmediaOrderByWithRelationInput = {
    idmedia?: SortOrder
    idpet?: SortOrderInput | SortOrder
    register?: SortOrderInput | SortOrder
    urlmedia?: SortOrderInput | SortOrder
    pet?: petOrderByWithRelationInput
  }

  export type petmediaWhereUniqueInput = Prisma.AtLeast<{
    idmedia?: bigint | number
    AND?: petmediaWhereInput | petmediaWhereInput[]
    OR?: petmediaWhereInput[]
    NOT?: petmediaWhereInput | petmediaWhereInput[]
    idpet?: BigIntNullableFilter<"petmedia"> | bigint | number | null
    register?: DateTimeNullableFilter<"petmedia"> | Date | string | null
    urlmedia?: StringNullableFilter<"petmedia"> | string | null
    pet?: XOR<PetNullableScalarRelationFilter, petWhereInput> | null
  }, "idmedia" | "idmedia">

  export type petmediaOrderByWithAggregationInput = {
    idmedia?: SortOrder
    idpet?: SortOrderInput | SortOrder
    register?: SortOrderInput | SortOrder
    urlmedia?: SortOrderInput | SortOrder
    _count?: petmediaCountOrderByAggregateInput
    _avg?: petmediaAvgOrderByAggregateInput
    _max?: petmediaMaxOrderByAggregateInput
    _min?: petmediaMinOrderByAggregateInput
    _sum?: petmediaSumOrderByAggregateInput
  }

  export type petmediaScalarWhereWithAggregatesInput = {
    AND?: petmediaScalarWhereWithAggregatesInput | petmediaScalarWhereWithAggregatesInput[]
    OR?: petmediaScalarWhereWithAggregatesInput[]
    NOT?: petmediaScalarWhereWithAggregatesInput | petmediaScalarWhereWithAggregatesInput[]
    idmedia?: BigIntWithAggregatesFilter<"petmedia"> | bigint | number
    idpet?: BigIntNullableWithAggregatesFilter<"petmedia"> | bigint | number | null
    register?: DateTimeNullableWithAggregatesFilter<"petmedia"> | Date | string | null
    urlmedia?: StringNullableWithAggregatesFilter<"petmedia"> | string | null
  }

  export type shelterWhereInput = {
    AND?: shelterWhereInput | shelterWhereInput[]
    OR?: shelterWhereInput[]
    NOT?: shelterWhereInput | shelterWhereInput[]
    idshelter?: BigIntFilter<"shelter"> | bigint | number
    sheltername?: StringNullableFilter<"shelter"> | string | null
    address?: StringNullableFilter<"shelter"> | string | null
    phone?: StringNullableFilter<"shelter"> | string | null
    zip?: StringNullableFilter<"shelter"> | string | null
    regster?: DateTimeNullableFilter<"shelter"> | Date | string | null
    petinshelter?: PetinshelterListRelationFilter
  }

  export type shelterOrderByWithRelationInput = {
    idshelter?: SortOrder
    sheltername?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    regster?: SortOrderInput | SortOrder
    petinshelter?: petinshelterOrderByRelationAggregateInput
  }

  export type shelterWhereUniqueInput = Prisma.AtLeast<{
    idshelter?: bigint | number
    AND?: shelterWhereInput | shelterWhereInput[]
    OR?: shelterWhereInput[]
    NOT?: shelterWhereInput | shelterWhereInput[]
    sheltername?: StringNullableFilter<"shelter"> | string | null
    address?: StringNullableFilter<"shelter"> | string | null
    phone?: StringNullableFilter<"shelter"> | string | null
    zip?: StringNullableFilter<"shelter"> | string | null
    regster?: DateTimeNullableFilter<"shelter"> | Date | string | null
    petinshelter?: PetinshelterListRelationFilter
  }, "idshelter" | "idshelter">

  export type shelterOrderByWithAggregationInput = {
    idshelter?: SortOrder
    sheltername?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    regster?: SortOrderInput | SortOrder
    _count?: shelterCountOrderByAggregateInput
    _avg?: shelterAvgOrderByAggregateInput
    _max?: shelterMaxOrderByAggregateInput
    _min?: shelterMinOrderByAggregateInput
    _sum?: shelterSumOrderByAggregateInput
  }

  export type shelterScalarWhereWithAggregatesInput = {
    AND?: shelterScalarWhereWithAggregatesInput | shelterScalarWhereWithAggregatesInput[]
    OR?: shelterScalarWhereWithAggregatesInput[]
    NOT?: shelterScalarWhereWithAggregatesInput | shelterScalarWhereWithAggregatesInput[]
    idshelter?: BigIntWithAggregatesFilter<"shelter"> | bigint | number
    sheltername?: StringNullableWithAggregatesFilter<"shelter"> | string | null
    address?: StringNullableWithAggregatesFilter<"shelter"> | string | null
    phone?: StringNullableWithAggregatesFilter<"shelter"> | string | null
    zip?: StringNullableWithAggregatesFilter<"shelter"> | string | null
    regster?: DateTimeNullableWithAggregatesFilter<"shelter"> | Date | string | null
  }

  export type viewplaceWhereInput = {
    AND?: viewplaceWhereInput | viewplaceWhereInput[]
    OR?: viewplaceWhereInput[]
    NOT?: viewplaceWhereInput | viewplaceWhereInput[]
    idviewed?: BigIntFilter<"viewplace"> | bigint | number
    idpet?: BigIntNullableFilter<"viewplace"> | bigint | number | null
    idperson?: BigIntNullableFilter<"viewplace"> | bigint | number | null
    coordenate?: StringNullableFilter<"viewplace"> | string | null
    register?: DateTimeNullableFilter<"viewplace"> | Date | string | null
    urlmedia?: StringNullableFilter<"viewplace"> | string | null
    person?: XOR<PersonNullableScalarRelationFilter, personWhereInput> | null
    pet?: XOR<PetNullableScalarRelationFilter, petWhereInput> | null
  }

  export type viewplaceOrderByWithRelationInput = {
    idviewed?: SortOrder
    idpet?: SortOrderInput | SortOrder
    idperson?: SortOrderInput | SortOrder
    coordenate?: SortOrderInput | SortOrder
    register?: SortOrderInput | SortOrder
    urlmedia?: SortOrderInput | SortOrder
    person?: personOrderByWithRelationInput
    pet?: petOrderByWithRelationInput
  }

  export type viewplaceWhereUniqueInput = Prisma.AtLeast<{
    idviewed?: bigint | number
    AND?: viewplaceWhereInput | viewplaceWhereInput[]
    OR?: viewplaceWhereInput[]
    NOT?: viewplaceWhereInput | viewplaceWhereInput[]
    idpet?: BigIntNullableFilter<"viewplace"> | bigint | number | null
    idperson?: BigIntNullableFilter<"viewplace"> | bigint | number | null
    coordenate?: StringNullableFilter<"viewplace"> | string | null
    register?: DateTimeNullableFilter<"viewplace"> | Date | string | null
    urlmedia?: StringNullableFilter<"viewplace"> | string | null
    person?: XOR<PersonNullableScalarRelationFilter, personWhereInput> | null
    pet?: XOR<PetNullableScalarRelationFilter, petWhereInput> | null
  }, "idviewed" | "idviewed">

  export type viewplaceOrderByWithAggregationInput = {
    idviewed?: SortOrder
    idpet?: SortOrderInput | SortOrder
    idperson?: SortOrderInput | SortOrder
    coordenate?: SortOrderInput | SortOrder
    register?: SortOrderInput | SortOrder
    urlmedia?: SortOrderInput | SortOrder
    _count?: viewplaceCountOrderByAggregateInput
    _avg?: viewplaceAvgOrderByAggregateInput
    _max?: viewplaceMaxOrderByAggregateInput
    _min?: viewplaceMinOrderByAggregateInput
    _sum?: viewplaceSumOrderByAggregateInput
  }

  export type viewplaceScalarWhereWithAggregatesInput = {
    AND?: viewplaceScalarWhereWithAggregatesInput | viewplaceScalarWhereWithAggregatesInput[]
    OR?: viewplaceScalarWhereWithAggregatesInput[]
    NOT?: viewplaceScalarWhereWithAggregatesInput | viewplaceScalarWhereWithAggregatesInput[]
    idviewed?: BigIntWithAggregatesFilter<"viewplace"> | bigint | number
    idpet?: BigIntNullableWithAggregatesFilter<"viewplace"> | bigint | number | null
    idperson?: BigIntNullableWithAggregatesFilter<"viewplace"> | bigint | number | null
    coordenate?: StringNullableWithAggregatesFilter<"viewplace"> | string | null
    register?: DateTimeNullableWithAggregatesFilter<"viewplace"> | Date | string | null
    urlmedia?: StringNullableWithAggregatesFilter<"viewplace"> | string | null
  }

  export type adoptionCreateInput = {
    idadoption?: bigint | number
    adoptiodate?: Date | string | null
    adoptionstatus?: adoptionstatusCreateNestedOneWithoutAdoptionInput
    person?: personCreateNestedOneWithoutAdoptionInput
    pet?: petCreateNestedOneWithoutAdoptionInput
  }

  export type adoptionUncheckedCreateInput = {
    idadoption?: bigint | number
    idperson?: bigint | number | null
    idpet?: bigint | number | null
    idstatus?: number | null
    adoptiodate?: Date | string | null
  }

  export type adoptionUpdateInput = {
    idadoption?: BigIntFieldUpdateOperationsInput | bigint | number
    adoptiodate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoptionstatus?: adoptionstatusUpdateOneWithoutAdoptionNestedInput
    person?: personUpdateOneWithoutAdoptionNestedInput
    pet?: petUpdateOneWithoutAdoptionNestedInput
  }

  export type adoptionUncheckedUpdateInput = {
    idadoption?: BigIntFieldUpdateOperationsInput | bigint | number
    idperson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    idpet?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    idstatus?: NullableIntFieldUpdateOperationsInput | number | null
    adoptiodate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adoptionCreateManyInput = {
    idadoption?: bigint | number
    idperson?: bigint | number | null
    idpet?: bigint | number | null
    idstatus?: number | null
    adoptiodate?: Date | string | null
  }

  export type adoptionUpdateManyMutationInput = {
    idadoption?: BigIntFieldUpdateOperationsInput | bigint | number
    adoptiodate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adoptionUncheckedUpdateManyInput = {
    idadoption?: BigIntFieldUpdateOperationsInput | bigint | number
    idperson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    idpet?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    idstatus?: NullableIntFieldUpdateOperationsInput | number | null
    adoptiodate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adoptionstatusCreateInput = {
    idstatus: number
    status?: string | null
    adoption?: adoptionCreateNestedManyWithoutAdoptionstatusInput
  }

  export type adoptionstatusUncheckedCreateInput = {
    idstatus: number
    status?: string | null
    adoption?: adoptionUncheckedCreateNestedManyWithoutAdoptionstatusInput
  }

  export type adoptionstatusUpdateInput = {
    idstatus?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    adoption?: adoptionUpdateManyWithoutAdoptionstatusNestedInput
  }

  export type adoptionstatusUncheckedUpdateInput = {
    idstatus?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    adoption?: adoptionUncheckedUpdateManyWithoutAdoptionstatusNestedInput
  }

  export type adoptionstatusCreateManyInput = {
    idstatus: number
    status?: string | null
  }

  export type adoptionstatusUpdateManyMutationInput = {
    idstatus?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type adoptionstatusUncheckedUpdateManyInput = {
    idstatus?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type personCreateInput = {
    idperson?: bigint | number
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    register?: Date | string
    active?: boolean
    adoption?: adoptionCreateNestedManyWithoutPersonInput
    viewplace?: viewplaceCreateNestedManyWithoutPersonInput
  }

  export type personUncheckedCreateInput = {
    idperson?: bigint | number
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    register?: Date | string
    active?: boolean
    adoption?: adoptionUncheckedCreateNestedManyWithoutPersonInput
    viewplace?: viewplaceUncheckedCreateNestedManyWithoutPersonInput
  }

  export type personUpdateInput = {
    idperson?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    register?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    adoption?: adoptionUpdateManyWithoutPersonNestedInput
    viewplace?: viewplaceUpdateManyWithoutPersonNestedInput
  }

  export type personUncheckedUpdateInput = {
    idperson?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    register?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    adoption?: adoptionUncheckedUpdateManyWithoutPersonNestedInput
    viewplace?: viewplaceUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type personCreateManyInput = {
    idperson?: bigint | number
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    register?: Date | string
    active?: boolean
  }

  export type personUpdateManyMutationInput = {
    idperson?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    register?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type personUncheckedUpdateManyInput = {
    idperson?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    register?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type petCreateInput = {
    idpet?: bigint | number
    name?: string | null
    register?: Date | string | null
    adoption?: adoptionCreateNestedManyWithoutPetInput
    petkind?: petkindCreateNestedOneWithoutPetInput
    petinshelter?: petinshelterCreateNestedManyWithoutPetInput
    petmedia?: petmediaCreateNestedManyWithoutPetInput
    viewplace?: viewplaceCreateNestedManyWithoutPetInput
  }

  export type petUncheckedCreateInput = {
    idpet?: bigint | number
    idkind?: number | null
    name?: string | null
    register?: Date | string | null
    adoption?: adoptionUncheckedCreateNestedManyWithoutPetInput
    petinshelter?: petinshelterUncheckedCreateNestedManyWithoutPetInput
    petmedia?: petmediaUncheckedCreateNestedManyWithoutPetInput
    viewplace?: viewplaceUncheckedCreateNestedManyWithoutPetInput
  }

  export type petUpdateInput = {
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoption?: adoptionUpdateManyWithoutPetNestedInput
    petkind?: petkindUpdateOneWithoutPetNestedInput
    petinshelter?: petinshelterUpdateManyWithoutPetNestedInput
    petmedia?: petmediaUpdateManyWithoutPetNestedInput
    viewplace?: viewplaceUpdateManyWithoutPetNestedInput
  }

  export type petUncheckedUpdateInput = {
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    idkind?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoption?: adoptionUncheckedUpdateManyWithoutPetNestedInput
    petinshelter?: petinshelterUncheckedUpdateManyWithoutPetNestedInput
    petmedia?: petmediaUncheckedUpdateManyWithoutPetNestedInput
    viewplace?: viewplaceUncheckedUpdateManyWithoutPetNestedInput
  }

  export type petCreateManyInput = {
    idpet?: bigint | number
    idkind?: number | null
    name?: string | null
    register?: Date | string | null
  }

  export type petUpdateManyMutationInput = {
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type petUncheckedUpdateManyInput = {
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    idkind?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type petinshelterCreateInput = {
    observation?: string | null
    checkin?: Date | string | null
    checkout?: Date | string | null
    pet: petCreateNestedOneWithoutPetinshelterInput
    shelter: shelterCreateNestedOneWithoutPetinshelterInput
  }

  export type petinshelterUncheckedCreateInput = {
    idshelter: bigint | number
    idpet: bigint | number
    observation?: string | null
    checkin?: Date | string | null
    checkout?: Date | string | null
  }

  export type petinshelterUpdateInput = {
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    checkin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pet?: petUpdateOneRequiredWithoutPetinshelterNestedInput
    shelter?: shelterUpdateOneRequiredWithoutPetinshelterNestedInput
  }

  export type petinshelterUncheckedUpdateInput = {
    idshelter?: BigIntFieldUpdateOperationsInput | bigint | number
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    checkin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type petinshelterCreateManyInput = {
    idshelter: bigint | number
    idpet: bigint | number
    observation?: string | null
    checkin?: Date | string | null
    checkout?: Date | string | null
  }

  export type petinshelterUpdateManyMutationInput = {
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    checkin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type petinshelterUncheckedUpdateManyInput = {
    idshelter?: BigIntFieldUpdateOperationsInput | bigint | number
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    checkin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type petkindCreateInput = {
    idkind: number
    kind?: string | null
    pet?: petCreateNestedManyWithoutPetkindInput
  }

  export type petkindUncheckedCreateInput = {
    idkind: number
    kind?: string | null
    pet?: petUncheckedCreateNestedManyWithoutPetkindInput
  }

  export type petkindUpdateInput = {
    idkind?: IntFieldUpdateOperationsInput | number
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    pet?: petUpdateManyWithoutPetkindNestedInput
  }

  export type petkindUncheckedUpdateInput = {
    idkind?: IntFieldUpdateOperationsInput | number
    kind?: NullableStringFieldUpdateOperationsInput | string | null
    pet?: petUncheckedUpdateManyWithoutPetkindNestedInput
  }

  export type petkindCreateManyInput = {
    idkind: number
    kind?: string | null
  }

  export type petkindUpdateManyMutationInput = {
    idkind?: IntFieldUpdateOperationsInput | number
    kind?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type petkindUncheckedUpdateManyInput = {
    idkind?: IntFieldUpdateOperationsInput | number
    kind?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type petmediaCreateInput = {
    idmedia?: bigint | number
    register?: Date | string | null
    urlmedia?: string | null
    pet?: petCreateNestedOneWithoutPetmediaInput
  }

  export type petmediaUncheckedCreateInput = {
    idmedia?: bigint | number
    idpet?: bigint | number | null
    register?: Date | string | null
    urlmedia?: string | null
  }

  export type petmediaUpdateInput = {
    idmedia?: BigIntFieldUpdateOperationsInput | bigint | number
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlmedia?: NullableStringFieldUpdateOperationsInput | string | null
    pet?: petUpdateOneWithoutPetmediaNestedInput
  }

  export type petmediaUncheckedUpdateInput = {
    idmedia?: BigIntFieldUpdateOperationsInput | bigint | number
    idpet?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlmedia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type petmediaCreateManyInput = {
    idmedia?: bigint | number
    idpet?: bigint | number | null
    register?: Date | string | null
    urlmedia?: string | null
  }

  export type petmediaUpdateManyMutationInput = {
    idmedia?: BigIntFieldUpdateOperationsInput | bigint | number
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlmedia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type petmediaUncheckedUpdateManyInput = {
    idmedia?: BigIntFieldUpdateOperationsInput | bigint | number
    idpet?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlmedia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shelterCreateInput = {
    idshelter?: bigint | number
    sheltername?: string | null
    address?: string | null
    phone?: string | null
    zip?: string | null
    regster?: Date | string | null
    petinshelter?: petinshelterCreateNestedManyWithoutShelterInput
  }

  export type shelterUncheckedCreateInput = {
    idshelter?: bigint | number
    sheltername?: string | null
    address?: string | null
    phone?: string | null
    zip?: string | null
    regster?: Date | string | null
    petinshelter?: petinshelterUncheckedCreateNestedManyWithoutShelterInput
  }

  export type shelterUpdateInput = {
    idshelter?: BigIntFieldUpdateOperationsInput | bigint | number
    sheltername?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    regster?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    petinshelter?: petinshelterUpdateManyWithoutShelterNestedInput
  }

  export type shelterUncheckedUpdateInput = {
    idshelter?: BigIntFieldUpdateOperationsInput | bigint | number
    sheltername?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    regster?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    petinshelter?: petinshelterUncheckedUpdateManyWithoutShelterNestedInput
  }

  export type shelterCreateManyInput = {
    idshelter?: bigint | number
    sheltername?: string | null
    address?: string | null
    phone?: string | null
    zip?: string | null
    regster?: Date | string | null
  }

  export type shelterUpdateManyMutationInput = {
    idshelter?: BigIntFieldUpdateOperationsInput | bigint | number
    sheltername?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    regster?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type shelterUncheckedUpdateManyInput = {
    idshelter?: BigIntFieldUpdateOperationsInput | bigint | number
    sheltername?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    regster?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type viewplaceCreateInput = {
    idviewed?: bigint | number
    coordenate?: string | null
    register?: Date | string | null
    urlmedia?: string | null
    person?: personCreateNestedOneWithoutViewplaceInput
    pet?: petCreateNestedOneWithoutViewplaceInput
  }

  export type viewplaceUncheckedCreateInput = {
    idviewed?: bigint | number
    idpet?: bigint | number | null
    idperson?: bigint | number | null
    coordenate?: string | null
    register?: Date | string | null
    urlmedia?: string | null
  }

  export type viewplaceUpdateInput = {
    idviewed?: BigIntFieldUpdateOperationsInput | bigint | number
    coordenate?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlmedia?: NullableStringFieldUpdateOperationsInput | string | null
    person?: personUpdateOneWithoutViewplaceNestedInput
    pet?: petUpdateOneWithoutViewplaceNestedInput
  }

  export type viewplaceUncheckedUpdateInput = {
    idviewed?: BigIntFieldUpdateOperationsInput | bigint | number
    idpet?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    idperson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    coordenate?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlmedia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type viewplaceCreateManyInput = {
    idviewed?: bigint | number
    idpet?: bigint | number | null
    idperson?: bigint | number | null
    coordenate?: string | null
    register?: Date | string | null
    urlmedia?: string | null
  }

  export type viewplaceUpdateManyMutationInput = {
    idviewed?: BigIntFieldUpdateOperationsInput | bigint | number
    coordenate?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlmedia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type viewplaceUncheckedUpdateManyInput = {
    idviewed?: BigIntFieldUpdateOperationsInput | bigint | number
    idpet?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    idperson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    coordenate?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlmedia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type AdoptionstatusNullableScalarRelationFilter = {
    is?: adoptionstatusWhereInput | null
    isNot?: adoptionstatusWhereInput | null
  }

  export type PersonNullableScalarRelationFilter = {
    is?: personWhereInput | null
    isNot?: personWhereInput | null
  }

  export type PetNullableScalarRelationFilter = {
    is?: petWhereInput | null
    isNot?: petWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type adoptionCountOrderByAggregateInput = {
    idadoption?: SortOrder
    idperson?: SortOrder
    idpet?: SortOrder
    idstatus?: SortOrder
    adoptiodate?: SortOrder
  }

  export type adoptionAvgOrderByAggregateInput = {
    idadoption?: SortOrder
    idperson?: SortOrder
    idpet?: SortOrder
    idstatus?: SortOrder
  }

  export type adoptionMaxOrderByAggregateInput = {
    idadoption?: SortOrder
    idperson?: SortOrder
    idpet?: SortOrder
    idstatus?: SortOrder
    adoptiodate?: SortOrder
  }

  export type adoptionMinOrderByAggregateInput = {
    idadoption?: SortOrder
    idperson?: SortOrder
    idpet?: SortOrder
    idstatus?: SortOrder
    adoptiodate?: SortOrder
  }

  export type adoptionSumOrderByAggregateInput = {
    idadoption?: SortOrder
    idperson?: SortOrder
    idpet?: SortOrder
    idstatus?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type AdoptionListRelationFilter = {
    every?: adoptionWhereInput
    some?: adoptionWhereInput
    none?: adoptionWhereInput
  }

  export type adoptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type adoptionstatusCountOrderByAggregateInput = {
    idstatus?: SortOrder
    status?: SortOrder
  }

  export type adoptionstatusAvgOrderByAggregateInput = {
    idstatus?: SortOrder
  }

  export type adoptionstatusMaxOrderByAggregateInput = {
    idstatus?: SortOrder
    status?: SortOrder
  }

  export type adoptionstatusMinOrderByAggregateInput = {
    idstatus?: SortOrder
    status?: SortOrder
  }

  export type adoptionstatusSumOrderByAggregateInput = {
    idstatus?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ViewplaceListRelationFilter = {
    every?: viewplaceWhereInput
    some?: viewplaceWhereInput
    none?: viewplaceWhereInput
  }

  export type viewplaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type personCountOrderByAggregateInput = {
    idperson?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    register?: SortOrder
    active?: SortOrder
  }

  export type personAvgOrderByAggregateInput = {
    idperson?: SortOrder
  }

  export type personMaxOrderByAggregateInput = {
    idperson?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    register?: SortOrder
    active?: SortOrder
  }

  export type personMinOrderByAggregateInput = {
    idperson?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    register?: SortOrder
    active?: SortOrder
  }

  export type personSumOrderByAggregateInput = {
    idperson?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PetkindNullableScalarRelationFilter = {
    is?: petkindWhereInput | null
    isNot?: petkindWhereInput | null
  }

  export type PetinshelterListRelationFilter = {
    every?: petinshelterWhereInput
    some?: petinshelterWhereInput
    none?: petinshelterWhereInput
  }

  export type PetmediaListRelationFilter = {
    every?: petmediaWhereInput
    some?: petmediaWhereInput
    none?: petmediaWhereInput
  }

  export type petinshelterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type petmediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type petCountOrderByAggregateInput = {
    idpet?: SortOrder
    idkind?: SortOrder
    name?: SortOrder
    register?: SortOrder
  }

  export type petAvgOrderByAggregateInput = {
    idpet?: SortOrder
    idkind?: SortOrder
  }

  export type petMaxOrderByAggregateInput = {
    idpet?: SortOrder
    idkind?: SortOrder
    name?: SortOrder
    register?: SortOrder
  }

  export type petMinOrderByAggregateInput = {
    idpet?: SortOrder
    idkind?: SortOrder
    name?: SortOrder
    register?: SortOrder
  }

  export type petSumOrderByAggregateInput = {
    idpet?: SortOrder
    idkind?: SortOrder
  }

  export type PetScalarRelationFilter = {
    is?: petWhereInput
    isNot?: petWhereInput
  }

  export type ShelterScalarRelationFilter = {
    is?: shelterWhereInput
    isNot?: shelterWhereInput
  }

  export type petinshelterIdshelterIdpetCompoundUniqueInput = {
    idshelter: bigint | number
    idpet: bigint | number
  }

  export type petinshelterCountOrderByAggregateInput = {
    idshelter?: SortOrder
    idpet?: SortOrder
    observation?: SortOrder
    checkin?: SortOrder
    checkout?: SortOrder
  }

  export type petinshelterAvgOrderByAggregateInput = {
    idshelter?: SortOrder
    idpet?: SortOrder
  }

  export type petinshelterMaxOrderByAggregateInput = {
    idshelter?: SortOrder
    idpet?: SortOrder
    observation?: SortOrder
    checkin?: SortOrder
    checkout?: SortOrder
  }

  export type petinshelterMinOrderByAggregateInput = {
    idshelter?: SortOrder
    idpet?: SortOrder
    observation?: SortOrder
    checkin?: SortOrder
    checkout?: SortOrder
  }

  export type petinshelterSumOrderByAggregateInput = {
    idshelter?: SortOrder
    idpet?: SortOrder
  }

  export type PetListRelationFilter = {
    every?: petWhereInput
    some?: petWhereInput
    none?: petWhereInput
  }

  export type petOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type petkindCountOrderByAggregateInput = {
    idkind?: SortOrder
    kind?: SortOrder
  }

  export type petkindAvgOrderByAggregateInput = {
    idkind?: SortOrder
  }

  export type petkindMaxOrderByAggregateInput = {
    idkind?: SortOrder
    kind?: SortOrder
  }

  export type petkindMinOrderByAggregateInput = {
    idkind?: SortOrder
    kind?: SortOrder
  }

  export type petkindSumOrderByAggregateInput = {
    idkind?: SortOrder
  }

  export type petmediaCountOrderByAggregateInput = {
    idmedia?: SortOrder
    idpet?: SortOrder
    register?: SortOrder
    urlmedia?: SortOrder
  }

  export type petmediaAvgOrderByAggregateInput = {
    idmedia?: SortOrder
    idpet?: SortOrder
  }

  export type petmediaMaxOrderByAggregateInput = {
    idmedia?: SortOrder
    idpet?: SortOrder
    register?: SortOrder
    urlmedia?: SortOrder
  }

  export type petmediaMinOrderByAggregateInput = {
    idmedia?: SortOrder
    idpet?: SortOrder
    register?: SortOrder
    urlmedia?: SortOrder
  }

  export type petmediaSumOrderByAggregateInput = {
    idmedia?: SortOrder
    idpet?: SortOrder
  }

  export type shelterCountOrderByAggregateInput = {
    idshelter?: SortOrder
    sheltername?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    zip?: SortOrder
    regster?: SortOrder
  }

  export type shelterAvgOrderByAggregateInput = {
    idshelter?: SortOrder
  }

  export type shelterMaxOrderByAggregateInput = {
    idshelter?: SortOrder
    sheltername?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    zip?: SortOrder
    regster?: SortOrder
  }

  export type shelterMinOrderByAggregateInput = {
    idshelter?: SortOrder
    sheltername?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    zip?: SortOrder
    regster?: SortOrder
  }

  export type shelterSumOrderByAggregateInput = {
    idshelter?: SortOrder
  }

  export type viewplaceCountOrderByAggregateInput = {
    idviewed?: SortOrder
    idpet?: SortOrder
    idperson?: SortOrder
    coordenate?: SortOrder
    register?: SortOrder
    urlmedia?: SortOrder
  }

  export type viewplaceAvgOrderByAggregateInput = {
    idviewed?: SortOrder
    idpet?: SortOrder
    idperson?: SortOrder
  }

  export type viewplaceMaxOrderByAggregateInput = {
    idviewed?: SortOrder
    idpet?: SortOrder
    idperson?: SortOrder
    coordenate?: SortOrder
    register?: SortOrder
    urlmedia?: SortOrder
  }

  export type viewplaceMinOrderByAggregateInput = {
    idviewed?: SortOrder
    idpet?: SortOrder
    idperson?: SortOrder
    coordenate?: SortOrder
    register?: SortOrder
    urlmedia?: SortOrder
  }

  export type viewplaceSumOrderByAggregateInput = {
    idviewed?: SortOrder
    idpet?: SortOrder
    idperson?: SortOrder
  }

  export type adoptionstatusCreateNestedOneWithoutAdoptionInput = {
    create?: XOR<adoptionstatusCreateWithoutAdoptionInput, adoptionstatusUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: adoptionstatusCreateOrConnectWithoutAdoptionInput
    connect?: adoptionstatusWhereUniqueInput
  }

  export type personCreateNestedOneWithoutAdoptionInput = {
    create?: XOR<personCreateWithoutAdoptionInput, personUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: personCreateOrConnectWithoutAdoptionInput
    connect?: personWhereUniqueInput
  }

  export type petCreateNestedOneWithoutAdoptionInput = {
    create?: XOR<petCreateWithoutAdoptionInput, petUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: petCreateOrConnectWithoutAdoptionInput
    connect?: petWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type adoptionstatusUpdateOneWithoutAdoptionNestedInput = {
    create?: XOR<adoptionstatusCreateWithoutAdoptionInput, adoptionstatusUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: adoptionstatusCreateOrConnectWithoutAdoptionInput
    upsert?: adoptionstatusUpsertWithoutAdoptionInput
    disconnect?: adoptionstatusWhereInput | boolean
    delete?: adoptionstatusWhereInput | boolean
    connect?: adoptionstatusWhereUniqueInput
    update?: XOR<XOR<adoptionstatusUpdateToOneWithWhereWithoutAdoptionInput, adoptionstatusUpdateWithoutAdoptionInput>, adoptionstatusUncheckedUpdateWithoutAdoptionInput>
  }

  export type personUpdateOneWithoutAdoptionNestedInput = {
    create?: XOR<personCreateWithoutAdoptionInput, personUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: personCreateOrConnectWithoutAdoptionInput
    upsert?: personUpsertWithoutAdoptionInput
    disconnect?: personWhereInput | boolean
    delete?: personWhereInput | boolean
    connect?: personWhereUniqueInput
    update?: XOR<XOR<personUpdateToOneWithWhereWithoutAdoptionInput, personUpdateWithoutAdoptionInput>, personUncheckedUpdateWithoutAdoptionInput>
  }

  export type petUpdateOneWithoutAdoptionNestedInput = {
    create?: XOR<petCreateWithoutAdoptionInput, petUncheckedCreateWithoutAdoptionInput>
    connectOrCreate?: petCreateOrConnectWithoutAdoptionInput
    upsert?: petUpsertWithoutAdoptionInput
    disconnect?: petWhereInput | boolean
    delete?: petWhereInput | boolean
    connect?: petWhereUniqueInput
    update?: XOR<XOR<petUpdateToOneWithWhereWithoutAdoptionInput, petUpdateWithoutAdoptionInput>, petUncheckedUpdateWithoutAdoptionInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type adoptionCreateNestedManyWithoutAdoptionstatusInput = {
    create?: XOR<adoptionCreateWithoutAdoptionstatusInput, adoptionUncheckedCreateWithoutAdoptionstatusInput> | adoptionCreateWithoutAdoptionstatusInput[] | adoptionUncheckedCreateWithoutAdoptionstatusInput[]
    connectOrCreate?: adoptionCreateOrConnectWithoutAdoptionstatusInput | adoptionCreateOrConnectWithoutAdoptionstatusInput[]
    createMany?: adoptionCreateManyAdoptionstatusInputEnvelope
    connect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
  }

  export type adoptionUncheckedCreateNestedManyWithoutAdoptionstatusInput = {
    create?: XOR<adoptionCreateWithoutAdoptionstatusInput, adoptionUncheckedCreateWithoutAdoptionstatusInput> | adoptionCreateWithoutAdoptionstatusInput[] | adoptionUncheckedCreateWithoutAdoptionstatusInput[]
    connectOrCreate?: adoptionCreateOrConnectWithoutAdoptionstatusInput | adoptionCreateOrConnectWithoutAdoptionstatusInput[]
    createMany?: adoptionCreateManyAdoptionstatusInputEnvelope
    connect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type adoptionUpdateManyWithoutAdoptionstatusNestedInput = {
    create?: XOR<adoptionCreateWithoutAdoptionstatusInput, adoptionUncheckedCreateWithoutAdoptionstatusInput> | adoptionCreateWithoutAdoptionstatusInput[] | adoptionUncheckedCreateWithoutAdoptionstatusInput[]
    connectOrCreate?: adoptionCreateOrConnectWithoutAdoptionstatusInput | adoptionCreateOrConnectWithoutAdoptionstatusInput[]
    upsert?: adoptionUpsertWithWhereUniqueWithoutAdoptionstatusInput | adoptionUpsertWithWhereUniqueWithoutAdoptionstatusInput[]
    createMany?: adoptionCreateManyAdoptionstatusInputEnvelope
    set?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    disconnect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    delete?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    connect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    update?: adoptionUpdateWithWhereUniqueWithoutAdoptionstatusInput | adoptionUpdateWithWhereUniqueWithoutAdoptionstatusInput[]
    updateMany?: adoptionUpdateManyWithWhereWithoutAdoptionstatusInput | adoptionUpdateManyWithWhereWithoutAdoptionstatusInput[]
    deleteMany?: adoptionScalarWhereInput | adoptionScalarWhereInput[]
  }

  export type adoptionUncheckedUpdateManyWithoutAdoptionstatusNestedInput = {
    create?: XOR<adoptionCreateWithoutAdoptionstatusInput, adoptionUncheckedCreateWithoutAdoptionstatusInput> | adoptionCreateWithoutAdoptionstatusInput[] | adoptionUncheckedCreateWithoutAdoptionstatusInput[]
    connectOrCreate?: adoptionCreateOrConnectWithoutAdoptionstatusInput | adoptionCreateOrConnectWithoutAdoptionstatusInput[]
    upsert?: adoptionUpsertWithWhereUniqueWithoutAdoptionstatusInput | adoptionUpsertWithWhereUniqueWithoutAdoptionstatusInput[]
    createMany?: adoptionCreateManyAdoptionstatusInputEnvelope
    set?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    disconnect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    delete?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    connect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    update?: adoptionUpdateWithWhereUniqueWithoutAdoptionstatusInput | adoptionUpdateWithWhereUniqueWithoutAdoptionstatusInput[]
    updateMany?: adoptionUpdateManyWithWhereWithoutAdoptionstatusInput | adoptionUpdateManyWithWhereWithoutAdoptionstatusInput[]
    deleteMany?: adoptionScalarWhereInput | adoptionScalarWhereInput[]
  }

  export type adoptionCreateNestedManyWithoutPersonInput = {
    create?: XOR<adoptionCreateWithoutPersonInput, adoptionUncheckedCreateWithoutPersonInput> | adoptionCreateWithoutPersonInput[] | adoptionUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: adoptionCreateOrConnectWithoutPersonInput | adoptionCreateOrConnectWithoutPersonInput[]
    createMany?: adoptionCreateManyPersonInputEnvelope
    connect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
  }

  export type viewplaceCreateNestedManyWithoutPersonInput = {
    create?: XOR<viewplaceCreateWithoutPersonInput, viewplaceUncheckedCreateWithoutPersonInput> | viewplaceCreateWithoutPersonInput[] | viewplaceUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: viewplaceCreateOrConnectWithoutPersonInput | viewplaceCreateOrConnectWithoutPersonInput[]
    createMany?: viewplaceCreateManyPersonInputEnvelope
    connect?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
  }

  export type adoptionUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<adoptionCreateWithoutPersonInput, adoptionUncheckedCreateWithoutPersonInput> | adoptionCreateWithoutPersonInput[] | adoptionUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: adoptionCreateOrConnectWithoutPersonInput | adoptionCreateOrConnectWithoutPersonInput[]
    createMany?: adoptionCreateManyPersonInputEnvelope
    connect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
  }

  export type viewplaceUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<viewplaceCreateWithoutPersonInput, viewplaceUncheckedCreateWithoutPersonInput> | viewplaceCreateWithoutPersonInput[] | viewplaceUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: viewplaceCreateOrConnectWithoutPersonInput | viewplaceCreateOrConnectWithoutPersonInput[]
    createMany?: viewplaceCreateManyPersonInputEnvelope
    connect?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type adoptionUpdateManyWithoutPersonNestedInput = {
    create?: XOR<adoptionCreateWithoutPersonInput, adoptionUncheckedCreateWithoutPersonInput> | adoptionCreateWithoutPersonInput[] | adoptionUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: adoptionCreateOrConnectWithoutPersonInput | adoptionCreateOrConnectWithoutPersonInput[]
    upsert?: adoptionUpsertWithWhereUniqueWithoutPersonInput | adoptionUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: adoptionCreateManyPersonInputEnvelope
    set?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    disconnect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    delete?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    connect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    update?: adoptionUpdateWithWhereUniqueWithoutPersonInput | adoptionUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: adoptionUpdateManyWithWhereWithoutPersonInput | adoptionUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: adoptionScalarWhereInput | adoptionScalarWhereInput[]
  }

  export type viewplaceUpdateManyWithoutPersonNestedInput = {
    create?: XOR<viewplaceCreateWithoutPersonInput, viewplaceUncheckedCreateWithoutPersonInput> | viewplaceCreateWithoutPersonInput[] | viewplaceUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: viewplaceCreateOrConnectWithoutPersonInput | viewplaceCreateOrConnectWithoutPersonInput[]
    upsert?: viewplaceUpsertWithWhereUniqueWithoutPersonInput | viewplaceUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: viewplaceCreateManyPersonInputEnvelope
    set?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
    disconnect?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
    delete?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
    connect?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
    update?: viewplaceUpdateWithWhereUniqueWithoutPersonInput | viewplaceUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: viewplaceUpdateManyWithWhereWithoutPersonInput | viewplaceUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: viewplaceScalarWhereInput | viewplaceScalarWhereInput[]
  }

  export type adoptionUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<adoptionCreateWithoutPersonInput, adoptionUncheckedCreateWithoutPersonInput> | adoptionCreateWithoutPersonInput[] | adoptionUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: adoptionCreateOrConnectWithoutPersonInput | adoptionCreateOrConnectWithoutPersonInput[]
    upsert?: adoptionUpsertWithWhereUniqueWithoutPersonInput | adoptionUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: adoptionCreateManyPersonInputEnvelope
    set?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    disconnect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    delete?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    connect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    update?: adoptionUpdateWithWhereUniqueWithoutPersonInput | adoptionUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: adoptionUpdateManyWithWhereWithoutPersonInput | adoptionUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: adoptionScalarWhereInput | adoptionScalarWhereInput[]
  }

  export type viewplaceUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<viewplaceCreateWithoutPersonInput, viewplaceUncheckedCreateWithoutPersonInput> | viewplaceCreateWithoutPersonInput[] | viewplaceUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: viewplaceCreateOrConnectWithoutPersonInput | viewplaceCreateOrConnectWithoutPersonInput[]
    upsert?: viewplaceUpsertWithWhereUniqueWithoutPersonInput | viewplaceUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: viewplaceCreateManyPersonInputEnvelope
    set?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
    disconnect?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
    delete?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
    connect?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
    update?: viewplaceUpdateWithWhereUniqueWithoutPersonInput | viewplaceUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: viewplaceUpdateManyWithWhereWithoutPersonInput | viewplaceUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: viewplaceScalarWhereInput | viewplaceScalarWhereInput[]
  }

  export type adoptionCreateNestedManyWithoutPetInput = {
    create?: XOR<adoptionCreateWithoutPetInput, adoptionUncheckedCreateWithoutPetInput> | adoptionCreateWithoutPetInput[] | adoptionUncheckedCreateWithoutPetInput[]
    connectOrCreate?: adoptionCreateOrConnectWithoutPetInput | adoptionCreateOrConnectWithoutPetInput[]
    createMany?: adoptionCreateManyPetInputEnvelope
    connect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
  }

  export type petkindCreateNestedOneWithoutPetInput = {
    create?: XOR<petkindCreateWithoutPetInput, petkindUncheckedCreateWithoutPetInput>
    connectOrCreate?: petkindCreateOrConnectWithoutPetInput
    connect?: petkindWhereUniqueInput
  }

  export type petinshelterCreateNestedManyWithoutPetInput = {
    create?: XOR<petinshelterCreateWithoutPetInput, petinshelterUncheckedCreateWithoutPetInput> | petinshelterCreateWithoutPetInput[] | petinshelterUncheckedCreateWithoutPetInput[]
    connectOrCreate?: petinshelterCreateOrConnectWithoutPetInput | petinshelterCreateOrConnectWithoutPetInput[]
    createMany?: petinshelterCreateManyPetInputEnvelope
    connect?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
  }

  export type petmediaCreateNestedManyWithoutPetInput = {
    create?: XOR<petmediaCreateWithoutPetInput, petmediaUncheckedCreateWithoutPetInput> | petmediaCreateWithoutPetInput[] | petmediaUncheckedCreateWithoutPetInput[]
    connectOrCreate?: petmediaCreateOrConnectWithoutPetInput | petmediaCreateOrConnectWithoutPetInput[]
    createMany?: petmediaCreateManyPetInputEnvelope
    connect?: petmediaWhereUniqueInput | petmediaWhereUniqueInput[]
  }

  export type viewplaceCreateNestedManyWithoutPetInput = {
    create?: XOR<viewplaceCreateWithoutPetInput, viewplaceUncheckedCreateWithoutPetInput> | viewplaceCreateWithoutPetInput[] | viewplaceUncheckedCreateWithoutPetInput[]
    connectOrCreate?: viewplaceCreateOrConnectWithoutPetInput | viewplaceCreateOrConnectWithoutPetInput[]
    createMany?: viewplaceCreateManyPetInputEnvelope
    connect?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
  }

  export type adoptionUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<adoptionCreateWithoutPetInput, adoptionUncheckedCreateWithoutPetInput> | adoptionCreateWithoutPetInput[] | adoptionUncheckedCreateWithoutPetInput[]
    connectOrCreate?: adoptionCreateOrConnectWithoutPetInput | adoptionCreateOrConnectWithoutPetInput[]
    createMany?: adoptionCreateManyPetInputEnvelope
    connect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
  }

  export type petinshelterUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<petinshelterCreateWithoutPetInput, petinshelterUncheckedCreateWithoutPetInput> | petinshelterCreateWithoutPetInput[] | petinshelterUncheckedCreateWithoutPetInput[]
    connectOrCreate?: petinshelterCreateOrConnectWithoutPetInput | petinshelterCreateOrConnectWithoutPetInput[]
    createMany?: petinshelterCreateManyPetInputEnvelope
    connect?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
  }

  export type petmediaUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<petmediaCreateWithoutPetInput, petmediaUncheckedCreateWithoutPetInput> | petmediaCreateWithoutPetInput[] | petmediaUncheckedCreateWithoutPetInput[]
    connectOrCreate?: petmediaCreateOrConnectWithoutPetInput | petmediaCreateOrConnectWithoutPetInput[]
    createMany?: petmediaCreateManyPetInputEnvelope
    connect?: petmediaWhereUniqueInput | petmediaWhereUniqueInput[]
  }

  export type viewplaceUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<viewplaceCreateWithoutPetInput, viewplaceUncheckedCreateWithoutPetInput> | viewplaceCreateWithoutPetInput[] | viewplaceUncheckedCreateWithoutPetInput[]
    connectOrCreate?: viewplaceCreateOrConnectWithoutPetInput | viewplaceCreateOrConnectWithoutPetInput[]
    createMany?: viewplaceCreateManyPetInputEnvelope
    connect?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
  }

  export type adoptionUpdateManyWithoutPetNestedInput = {
    create?: XOR<adoptionCreateWithoutPetInput, adoptionUncheckedCreateWithoutPetInput> | adoptionCreateWithoutPetInput[] | adoptionUncheckedCreateWithoutPetInput[]
    connectOrCreate?: adoptionCreateOrConnectWithoutPetInput | adoptionCreateOrConnectWithoutPetInput[]
    upsert?: adoptionUpsertWithWhereUniqueWithoutPetInput | adoptionUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: adoptionCreateManyPetInputEnvelope
    set?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    disconnect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    delete?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    connect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    update?: adoptionUpdateWithWhereUniqueWithoutPetInput | adoptionUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: adoptionUpdateManyWithWhereWithoutPetInput | adoptionUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: adoptionScalarWhereInput | adoptionScalarWhereInput[]
  }

  export type petkindUpdateOneWithoutPetNestedInput = {
    create?: XOR<petkindCreateWithoutPetInput, petkindUncheckedCreateWithoutPetInput>
    connectOrCreate?: petkindCreateOrConnectWithoutPetInput
    upsert?: petkindUpsertWithoutPetInput
    disconnect?: petkindWhereInput | boolean
    delete?: petkindWhereInput | boolean
    connect?: petkindWhereUniqueInput
    update?: XOR<XOR<petkindUpdateToOneWithWhereWithoutPetInput, petkindUpdateWithoutPetInput>, petkindUncheckedUpdateWithoutPetInput>
  }

  export type petinshelterUpdateManyWithoutPetNestedInput = {
    create?: XOR<petinshelterCreateWithoutPetInput, petinshelterUncheckedCreateWithoutPetInput> | petinshelterCreateWithoutPetInput[] | petinshelterUncheckedCreateWithoutPetInput[]
    connectOrCreate?: petinshelterCreateOrConnectWithoutPetInput | petinshelterCreateOrConnectWithoutPetInput[]
    upsert?: petinshelterUpsertWithWhereUniqueWithoutPetInput | petinshelterUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: petinshelterCreateManyPetInputEnvelope
    set?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
    disconnect?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
    delete?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
    connect?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
    update?: petinshelterUpdateWithWhereUniqueWithoutPetInput | petinshelterUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: petinshelterUpdateManyWithWhereWithoutPetInput | petinshelterUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: petinshelterScalarWhereInput | petinshelterScalarWhereInput[]
  }

  export type petmediaUpdateManyWithoutPetNestedInput = {
    create?: XOR<petmediaCreateWithoutPetInput, petmediaUncheckedCreateWithoutPetInput> | petmediaCreateWithoutPetInput[] | petmediaUncheckedCreateWithoutPetInput[]
    connectOrCreate?: petmediaCreateOrConnectWithoutPetInput | petmediaCreateOrConnectWithoutPetInput[]
    upsert?: petmediaUpsertWithWhereUniqueWithoutPetInput | petmediaUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: petmediaCreateManyPetInputEnvelope
    set?: petmediaWhereUniqueInput | petmediaWhereUniqueInput[]
    disconnect?: petmediaWhereUniqueInput | petmediaWhereUniqueInput[]
    delete?: petmediaWhereUniqueInput | petmediaWhereUniqueInput[]
    connect?: petmediaWhereUniqueInput | petmediaWhereUniqueInput[]
    update?: petmediaUpdateWithWhereUniqueWithoutPetInput | petmediaUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: petmediaUpdateManyWithWhereWithoutPetInput | petmediaUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: petmediaScalarWhereInput | petmediaScalarWhereInput[]
  }

  export type viewplaceUpdateManyWithoutPetNestedInput = {
    create?: XOR<viewplaceCreateWithoutPetInput, viewplaceUncheckedCreateWithoutPetInput> | viewplaceCreateWithoutPetInput[] | viewplaceUncheckedCreateWithoutPetInput[]
    connectOrCreate?: viewplaceCreateOrConnectWithoutPetInput | viewplaceCreateOrConnectWithoutPetInput[]
    upsert?: viewplaceUpsertWithWhereUniqueWithoutPetInput | viewplaceUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: viewplaceCreateManyPetInputEnvelope
    set?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
    disconnect?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
    delete?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
    connect?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
    update?: viewplaceUpdateWithWhereUniqueWithoutPetInput | viewplaceUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: viewplaceUpdateManyWithWhereWithoutPetInput | viewplaceUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: viewplaceScalarWhereInput | viewplaceScalarWhereInput[]
  }

  export type adoptionUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<adoptionCreateWithoutPetInput, adoptionUncheckedCreateWithoutPetInput> | adoptionCreateWithoutPetInput[] | adoptionUncheckedCreateWithoutPetInput[]
    connectOrCreate?: adoptionCreateOrConnectWithoutPetInput | adoptionCreateOrConnectWithoutPetInput[]
    upsert?: adoptionUpsertWithWhereUniqueWithoutPetInput | adoptionUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: adoptionCreateManyPetInputEnvelope
    set?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    disconnect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    delete?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    connect?: adoptionWhereUniqueInput | adoptionWhereUniqueInput[]
    update?: adoptionUpdateWithWhereUniqueWithoutPetInput | adoptionUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: adoptionUpdateManyWithWhereWithoutPetInput | adoptionUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: adoptionScalarWhereInput | adoptionScalarWhereInput[]
  }

  export type petinshelterUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<petinshelterCreateWithoutPetInput, petinshelterUncheckedCreateWithoutPetInput> | petinshelterCreateWithoutPetInput[] | petinshelterUncheckedCreateWithoutPetInput[]
    connectOrCreate?: petinshelterCreateOrConnectWithoutPetInput | petinshelterCreateOrConnectWithoutPetInput[]
    upsert?: petinshelterUpsertWithWhereUniqueWithoutPetInput | petinshelterUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: petinshelterCreateManyPetInputEnvelope
    set?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
    disconnect?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
    delete?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
    connect?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
    update?: petinshelterUpdateWithWhereUniqueWithoutPetInput | petinshelterUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: petinshelterUpdateManyWithWhereWithoutPetInput | petinshelterUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: petinshelterScalarWhereInput | petinshelterScalarWhereInput[]
  }

  export type petmediaUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<petmediaCreateWithoutPetInput, petmediaUncheckedCreateWithoutPetInput> | petmediaCreateWithoutPetInput[] | petmediaUncheckedCreateWithoutPetInput[]
    connectOrCreate?: petmediaCreateOrConnectWithoutPetInput | petmediaCreateOrConnectWithoutPetInput[]
    upsert?: petmediaUpsertWithWhereUniqueWithoutPetInput | petmediaUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: petmediaCreateManyPetInputEnvelope
    set?: petmediaWhereUniqueInput | petmediaWhereUniqueInput[]
    disconnect?: petmediaWhereUniqueInput | petmediaWhereUniqueInput[]
    delete?: petmediaWhereUniqueInput | petmediaWhereUniqueInput[]
    connect?: petmediaWhereUniqueInput | petmediaWhereUniqueInput[]
    update?: petmediaUpdateWithWhereUniqueWithoutPetInput | petmediaUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: petmediaUpdateManyWithWhereWithoutPetInput | petmediaUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: petmediaScalarWhereInput | petmediaScalarWhereInput[]
  }

  export type viewplaceUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<viewplaceCreateWithoutPetInput, viewplaceUncheckedCreateWithoutPetInput> | viewplaceCreateWithoutPetInput[] | viewplaceUncheckedCreateWithoutPetInput[]
    connectOrCreate?: viewplaceCreateOrConnectWithoutPetInput | viewplaceCreateOrConnectWithoutPetInput[]
    upsert?: viewplaceUpsertWithWhereUniqueWithoutPetInput | viewplaceUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: viewplaceCreateManyPetInputEnvelope
    set?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
    disconnect?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
    delete?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
    connect?: viewplaceWhereUniqueInput | viewplaceWhereUniqueInput[]
    update?: viewplaceUpdateWithWhereUniqueWithoutPetInput | viewplaceUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: viewplaceUpdateManyWithWhereWithoutPetInput | viewplaceUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: viewplaceScalarWhereInput | viewplaceScalarWhereInput[]
  }

  export type petCreateNestedOneWithoutPetinshelterInput = {
    create?: XOR<petCreateWithoutPetinshelterInput, petUncheckedCreateWithoutPetinshelterInput>
    connectOrCreate?: petCreateOrConnectWithoutPetinshelterInput
    connect?: petWhereUniqueInput
  }

  export type shelterCreateNestedOneWithoutPetinshelterInput = {
    create?: XOR<shelterCreateWithoutPetinshelterInput, shelterUncheckedCreateWithoutPetinshelterInput>
    connectOrCreate?: shelterCreateOrConnectWithoutPetinshelterInput
    connect?: shelterWhereUniqueInput
  }

  export type petUpdateOneRequiredWithoutPetinshelterNestedInput = {
    create?: XOR<petCreateWithoutPetinshelterInput, petUncheckedCreateWithoutPetinshelterInput>
    connectOrCreate?: petCreateOrConnectWithoutPetinshelterInput
    upsert?: petUpsertWithoutPetinshelterInput
    connect?: petWhereUniqueInput
    update?: XOR<XOR<petUpdateToOneWithWhereWithoutPetinshelterInput, petUpdateWithoutPetinshelterInput>, petUncheckedUpdateWithoutPetinshelterInput>
  }

  export type shelterUpdateOneRequiredWithoutPetinshelterNestedInput = {
    create?: XOR<shelterCreateWithoutPetinshelterInput, shelterUncheckedCreateWithoutPetinshelterInput>
    connectOrCreate?: shelterCreateOrConnectWithoutPetinshelterInput
    upsert?: shelterUpsertWithoutPetinshelterInput
    connect?: shelterWhereUniqueInput
    update?: XOR<XOR<shelterUpdateToOneWithWhereWithoutPetinshelterInput, shelterUpdateWithoutPetinshelterInput>, shelterUncheckedUpdateWithoutPetinshelterInput>
  }

  export type petCreateNestedManyWithoutPetkindInput = {
    create?: XOR<petCreateWithoutPetkindInput, petUncheckedCreateWithoutPetkindInput> | petCreateWithoutPetkindInput[] | petUncheckedCreateWithoutPetkindInput[]
    connectOrCreate?: petCreateOrConnectWithoutPetkindInput | petCreateOrConnectWithoutPetkindInput[]
    createMany?: petCreateManyPetkindInputEnvelope
    connect?: petWhereUniqueInput | petWhereUniqueInput[]
  }

  export type petUncheckedCreateNestedManyWithoutPetkindInput = {
    create?: XOR<petCreateWithoutPetkindInput, petUncheckedCreateWithoutPetkindInput> | petCreateWithoutPetkindInput[] | petUncheckedCreateWithoutPetkindInput[]
    connectOrCreate?: petCreateOrConnectWithoutPetkindInput | petCreateOrConnectWithoutPetkindInput[]
    createMany?: petCreateManyPetkindInputEnvelope
    connect?: petWhereUniqueInput | petWhereUniqueInput[]
  }

  export type petUpdateManyWithoutPetkindNestedInput = {
    create?: XOR<petCreateWithoutPetkindInput, petUncheckedCreateWithoutPetkindInput> | petCreateWithoutPetkindInput[] | petUncheckedCreateWithoutPetkindInput[]
    connectOrCreate?: petCreateOrConnectWithoutPetkindInput | petCreateOrConnectWithoutPetkindInput[]
    upsert?: petUpsertWithWhereUniqueWithoutPetkindInput | petUpsertWithWhereUniqueWithoutPetkindInput[]
    createMany?: petCreateManyPetkindInputEnvelope
    set?: petWhereUniqueInput | petWhereUniqueInput[]
    disconnect?: petWhereUniqueInput | petWhereUniqueInput[]
    delete?: petWhereUniqueInput | petWhereUniqueInput[]
    connect?: petWhereUniqueInput | petWhereUniqueInput[]
    update?: petUpdateWithWhereUniqueWithoutPetkindInput | petUpdateWithWhereUniqueWithoutPetkindInput[]
    updateMany?: petUpdateManyWithWhereWithoutPetkindInput | petUpdateManyWithWhereWithoutPetkindInput[]
    deleteMany?: petScalarWhereInput | petScalarWhereInput[]
  }

  export type petUncheckedUpdateManyWithoutPetkindNestedInput = {
    create?: XOR<petCreateWithoutPetkindInput, petUncheckedCreateWithoutPetkindInput> | petCreateWithoutPetkindInput[] | petUncheckedCreateWithoutPetkindInput[]
    connectOrCreate?: petCreateOrConnectWithoutPetkindInput | petCreateOrConnectWithoutPetkindInput[]
    upsert?: petUpsertWithWhereUniqueWithoutPetkindInput | petUpsertWithWhereUniqueWithoutPetkindInput[]
    createMany?: petCreateManyPetkindInputEnvelope
    set?: petWhereUniqueInput | petWhereUniqueInput[]
    disconnect?: petWhereUniqueInput | petWhereUniqueInput[]
    delete?: petWhereUniqueInput | petWhereUniqueInput[]
    connect?: petWhereUniqueInput | petWhereUniqueInput[]
    update?: petUpdateWithWhereUniqueWithoutPetkindInput | petUpdateWithWhereUniqueWithoutPetkindInput[]
    updateMany?: petUpdateManyWithWhereWithoutPetkindInput | petUpdateManyWithWhereWithoutPetkindInput[]
    deleteMany?: petScalarWhereInput | petScalarWhereInput[]
  }

  export type petCreateNestedOneWithoutPetmediaInput = {
    create?: XOR<petCreateWithoutPetmediaInput, petUncheckedCreateWithoutPetmediaInput>
    connectOrCreate?: petCreateOrConnectWithoutPetmediaInput
    connect?: petWhereUniqueInput
  }

  export type petUpdateOneWithoutPetmediaNestedInput = {
    create?: XOR<petCreateWithoutPetmediaInput, petUncheckedCreateWithoutPetmediaInput>
    connectOrCreate?: petCreateOrConnectWithoutPetmediaInput
    upsert?: petUpsertWithoutPetmediaInput
    disconnect?: petWhereInput | boolean
    delete?: petWhereInput | boolean
    connect?: petWhereUniqueInput
    update?: XOR<XOR<petUpdateToOneWithWhereWithoutPetmediaInput, petUpdateWithoutPetmediaInput>, petUncheckedUpdateWithoutPetmediaInput>
  }

  export type petinshelterCreateNestedManyWithoutShelterInput = {
    create?: XOR<petinshelterCreateWithoutShelterInput, petinshelterUncheckedCreateWithoutShelterInput> | petinshelterCreateWithoutShelterInput[] | petinshelterUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: petinshelterCreateOrConnectWithoutShelterInput | petinshelterCreateOrConnectWithoutShelterInput[]
    createMany?: petinshelterCreateManyShelterInputEnvelope
    connect?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
  }

  export type petinshelterUncheckedCreateNestedManyWithoutShelterInput = {
    create?: XOR<petinshelterCreateWithoutShelterInput, petinshelterUncheckedCreateWithoutShelterInput> | petinshelterCreateWithoutShelterInput[] | petinshelterUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: petinshelterCreateOrConnectWithoutShelterInput | petinshelterCreateOrConnectWithoutShelterInput[]
    createMany?: petinshelterCreateManyShelterInputEnvelope
    connect?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
  }

  export type petinshelterUpdateManyWithoutShelterNestedInput = {
    create?: XOR<petinshelterCreateWithoutShelterInput, petinshelterUncheckedCreateWithoutShelterInput> | petinshelterCreateWithoutShelterInput[] | petinshelterUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: petinshelterCreateOrConnectWithoutShelterInput | petinshelterCreateOrConnectWithoutShelterInput[]
    upsert?: petinshelterUpsertWithWhereUniqueWithoutShelterInput | petinshelterUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: petinshelterCreateManyShelterInputEnvelope
    set?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
    disconnect?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
    delete?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
    connect?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
    update?: petinshelterUpdateWithWhereUniqueWithoutShelterInput | petinshelterUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: petinshelterUpdateManyWithWhereWithoutShelterInput | petinshelterUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: petinshelterScalarWhereInput | petinshelterScalarWhereInput[]
  }

  export type petinshelterUncheckedUpdateManyWithoutShelterNestedInput = {
    create?: XOR<petinshelterCreateWithoutShelterInput, petinshelterUncheckedCreateWithoutShelterInput> | petinshelterCreateWithoutShelterInput[] | petinshelterUncheckedCreateWithoutShelterInput[]
    connectOrCreate?: petinshelterCreateOrConnectWithoutShelterInput | petinshelterCreateOrConnectWithoutShelterInput[]
    upsert?: petinshelterUpsertWithWhereUniqueWithoutShelterInput | petinshelterUpsertWithWhereUniqueWithoutShelterInput[]
    createMany?: petinshelterCreateManyShelterInputEnvelope
    set?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
    disconnect?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
    delete?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
    connect?: petinshelterWhereUniqueInput | petinshelterWhereUniqueInput[]
    update?: petinshelterUpdateWithWhereUniqueWithoutShelterInput | petinshelterUpdateWithWhereUniqueWithoutShelterInput[]
    updateMany?: petinshelterUpdateManyWithWhereWithoutShelterInput | petinshelterUpdateManyWithWhereWithoutShelterInput[]
    deleteMany?: petinshelterScalarWhereInput | petinshelterScalarWhereInput[]
  }

  export type personCreateNestedOneWithoutViewplaceInput = {
    create?: XOR<personCreateWithoutViewplaceInput, personUncheckedCreateWithoutViewplaceInput>
    connectOrCreate?: personCreateOrConnectWithoutViewplaceInput
    connect?: personWhereUniqueInput
  }

  export type petCreateNestedOneWithoutViewplaceInput = {
    create?: XOR<petCreateWithoutViewplaceInput, petUncheckedCreateWithoutViewplaceInput>
    connectOrCreate?: petCreateOrConnectWithoutViewplaceInput
    connect?: petWhereUniqueInput
  }

  export type personUpdateOneWithoutViewplaceNestedInput = {
    create?: XOR<personCreateWithoutViewplaceInput, personUncheckedCreateWithoutViewplaceInput>
    connectOrCreate?: personCreateOrConnectWithoutViewplaceInput
    upsert?: personUpsertWithoutViewplaceInput
    disconnect?: personWhereInput | boolean
    delete?: personWhereInput | boolean
    connect?: personWhereUniqueInput
    update?: XOR<XOR<personUpdateToOneWithWhereWithoutViewplaceInput, personUpdateWithoutViewplaceInput>, personUncheckedUpdateWithoutViewplaceInput>
  }

  export type petUpdateOneWithoutViewplaceNestedInput = {
    create?: XOR<petCreateWithoutViewplaceInput, petUncheckedCreateWithoutViewplaceInput>
    connectOrCreate?: petCreateOrConnectWithoutViewplaceInput
    upsert?: petUpsertWithoutViewplaceInput
    disconnect?: petWhereInput | boolean
    delete?: petWhereInput | boolean
    connect?: petWhereUniqueInput
    update?: XOR<XOR<petUpdateToOneWithWhereWithoutViewplaceInput, petUpdateWithoutViewplaceInput>, petUncheckedUpdateWithoutViewplaceInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type adoptionstatusCreateWithoutAdoptionInput = {
    idstatus: number
    status?: string | null
  }

  export type adoptionstatusUncheckedCreateWithoutAdoptionInput = {
    idstatus: number
    status?: string | null
  }

  export type adoptionstatusCreateOrConnectWithoutAdoptionInput = {
    where: adoptionstatusWhereUniqueInput
    create: XOR<adoptionstatusCreateWithoutAdoptionInput, adoptionstatusUncheckedCreateWithoutAdoptionInput>
  }

  export type personCreateWithoutAdoptionInput = {
    idperson?: bigint | number
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    register?: Date | string
    active?: boolean
    viewplace?: viewplaceCreateNestedManyWithoutPersonInput
  }

  export type personUncheckedCreateWithoutAdoptionInput = {
    idperson?: bigint | number
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    register?: Date | string
    active?: boolean
    viewplace?: viewplaceUncheckedCreateNestedManyWithoutPersonInput
  }

  export type personCreateOrConnectWithoutAdoptionInput = {
    where: personWhereUniqueInput
    create: XOR<personCreateWithoutAdoptionInput, personUncheckedCreateWithoutAdoptionInput>
  }

  export type petCreateWithoutAdoptionInput = {
    idpet?: bigint | number
    name?: string | null
    register?: Date | string | null
    petkind?: petkindCreateNestedOneWithoutPetInput
    petinshelter?: petinshelterCreateNestedManyWithoutPetInput
    petmedia?: petmediaCreateNestedManyWithoutPetInput
    viewplace?: viewplaceCreateNestedManyWithoutPetInput
  }

  export type petUncheckedCreateWithoutAdoptionInput = {
    idpet?: bigint | number
    idkind?: number | null
    name?: string | null
    register?: Date | string | null
    petinshelter?: petinshelterUncheckedCreateNestedManyWithoutPetInput
    petmedia?: petmediaUncheckedCreateNestedManyWithoutPetInput
    viewplace?: viewplaceUncheckedCreateNestedManyWithoutPetInput
  }

  export type petCreateOrConnectWithoutAdoptionInput = {
    where: petWhereUniqueInput
    create: XOR<petCreateWithoutAdoptionInput, petUncheckedCreateWithoutAdoptionInput>
  }

  export type adoptionstatusUpsertWithoutAdoptionInput = {
    update: XOR<adoptionstatusUpdateWithoutAdoptionInput, adoptionstatusUncheckedUpdateWithoutAdoptionInput>
    create: XOR<adoptionstatusCreateWithoutAdoptionInput, adoptionstatusUncheckedCreateWithoutAdoptionInput>
    where?: adoptionstatusWhereInput
  }

  export type adoptionstatusUpdateToOneWithWhereWithoutAdoptionInput = {
    where?: adoptionstatusWhereInput
    data: XOR<adoptionstatusUpdateWithoutAdoptionInput, adoptionstatusUncheckedUpdateWithoutAdoptionInput>
  }

  export type adoptionstatusUpdateWithoutAdoptionInput = {
    idstatus?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type adoptionstatusUncheckedUpdateWithoutAdoptionInput = {
    idstatus?: IntFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type personUpsertWithoutAdoptionInput = {
    update: XOR<personUpdateWithoutAdoptionInput, personUncheckedUpdateWithoutAdoptionInput>
    create: XOR<personCreateWithoutAdoptionInput, personUncheckedCreateWithoutAdoptionInput>
    where?: personWhereInput
  }

  export type personUpdateToOneWithWhereWithoutAdoptionInput = {
    where?: personWhereInput
    data: XOR<personUpdateWithoutAdoptionInput, personUncheckedUpdateWithoutAdoptionInput>
  }

  export type personUpdateWithoutAdoptionInput = {
    idperson?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    register?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    viewplace?: viewplaceUpdateManyWithoutPersonNestedInput
  }

  export type personUncheckedUpdateWithoutAdoptionInput = {
    idperson?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    register?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    viewplace?: viewplaceUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type petUpsertWithoutAdoptionInput = {
    update: XOR<petUpdateWithoutAdoptionInput, petUncheckedUpdateWithoutAdoptionInput>
    create: XOR<petCreateWithoutAdoptionInput, petUncheckedCreateWithoutAdoptionInput>
    where?: petWhereInput
  }

  export type petUpdateToOneWithWhereWithoutAdoptionInput = {
    where?: petWhereInput
    data: XOR<petUpdateWithoutAdoptionInput, petUncheckedUpdateWithoutAdoptionInput>
  }

  export type petUpdateWithoutAdoptionInput = {
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    petkind?: petkindUpdateOneWithoutPetNestedInput
    petinshelter?: petinshelterUpdateManyWithoutPetNestedInput
    petmedia?: petmediaUpdateManyWithoutPetNestedInput
    viewplace?: viewplaceUpdateManyWithoutPetNestedInput
  }

  export type petUncheckedUpdateWithoutAdoptionInput = {
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    idkind?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    petinshelter?: petinshelterUncheckedUpdateManyWithoutPetNestedInput
    petmedia?: petmediaUncheckedUpdateManyWithoutPetNestedInput
    viewplace?: viewplaceUncheckedUpdateManyWithoutPetNestedInput
  }

  export type adoptionCreateWithoutAdoptionstatusInput = {
    idadoption?: bigint | number
    adoptiodate?: Date | string | null
    person?: personCreateNestedOneWithoutAdoptionInput
    pet?: petCreateNestedOneWithoutAdoptionInput
  }

  export type adoptionUncheckedCreateWithoutAdoptionstatusInput = {
    idadoption?: bigint | number
    idperson?: bigint | number | null
    idpet?: bigint | number | null
    adoptiodate?: Date | string | null
  }

  export type adoptionCreateOrConnectWithoutAdoptionstatusInput = {
    where: adoptionWhereUniqueInput
    create: XOR<adoptionCreateWithoutAdoptionstatusInput, adoptionUncheckedCreateWithoutAdoptionstatusInput>
  }

  export type adoptionCreateManyAdoptionstatusInputEnvelope = {
    data: adoptionCreateManyAdoptionstatusInput | adoptionCreateManyAdoptionstatusInput[]
    skipDuplicates?: boolean
  }

  export type adoptionUpsertWithWhereUniqueWithoutAdoptionstatusInput = {
    where: adoptionWhereUniqueInput
    update: XOR<adoptionUpdateWithoutAdoptionstatusInput, adoptionUncheckedUpdateWithoutAdoptionstatusInput>
    create: XOR<adoptionCreateWithoutAdoptionstatusInput, adoptionUncheckedCreateWithoutAdoptionstatusInput>
  }

  export type adoptionUpdateWithWhereUniqueWithoutAdoptionstatusInput = {
    where: adoptionWhereUniqueInput
    data: XOR<adoptionUpdateWithoutAdoptionstatusInput, adoptionUncheckedUpdateWithoutAdoptionstatusInput>
  }

  export type adoptionUpdateManyWithWhereWithoutAdoptionstatusInput = {
    where: adoptionScalarWhereInput
    data: XOR<adoptionUpdateManyMutationInput, adoptionUncheckedUpdateManyWithoutAdoptionstatusInput>
  }

  export type adoptionScalarWhereInput = {
    AND?: adoptionScalarWhereInput | adoptionScalarWhereInput[]
    OR?: adoptionScalarWhereInput[]
    NOT?: adoptionScalarWhereInput | adoptionScalarWhereInput[]
    idadoption?: BigIntFilter<"adoption"> | bigint | number
    idperson?: BigIntNullableFilter<"adoption"> | bigint | number | null
    idpet?: BigIntNullableFilter<"adoption"> | bigint | number | null
    idstatus?: IntNullableFilter<"adoption"> | number | null
    adoptiodate?: DateTimeNullableFilter<"adoption"> | Date | string | null
  }

  export type adoptionCreateWithoutPersonInput = {
    idadoption?: bigint | number
    adoptiodate?: Date | string | null
    adoptionstatus?: adoptionstatusCreateNestedOneWithoutAdoptionInput
    pet?: petCreateNestedOneWithoutAdoptionInput
  }

  export type adoptionUncheckedCreateWithoutPersonInput = {
    idadoption?: bigint | number
    idpet?: bigint | number | null
    idstatus?: number | null
    adoptiodate?: Date | string | null
  }

  export type adoptionCreateOrConnectWithoutPersonInput = {
    where: adoptionWhereUniqueInput
    create: XOR<adoptionCreateWithoutPersonInput, adoptionUncheckedCreateWithoutPersonInput>
  }

  export type adoptionCreateManyPersonInputEnvelope = {
    data: adoptionCreateManyPersonInput | adoptionCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type viewplaceCreateWithoutPersonInput = {
    idviewed?: bigint | number
    coordenate?: string | null
    register?: Date | string | null
    urlmedia?: string | null
    pet?: petCreateNestedOneWithoutViewplaceInput
  }

  export type viewplaceUncheckedCreateWithoutPersonInput = {
    idviewed?: bigint | number
    idpet?: bigint | number | null
    coordenate?: string | null
    register?: Date | string | null
    urlmedia?: string | null
  }

  export type viewplaceCreateOrConnectWithoutPersonInput = {
    where: viewplaceWhereUniqueInput
    create: XOR<viewplaceCreateWithoutPersonInput, viewplaceUncheckedCreateWithoutPersonInput>
  }

  export type viewplaceCreateManyPersonInputEnvelope = {
    data: viewplaceCreateManyPersonInput | viewplaceCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type adoptionUpsertWithWhereUniqueWithoutPersonInput = {
    where: adoptionWhereUniqueInput
    update: XOR<adoptionUpdateWithoutPersonInput, adoptionUncheckedUpdateWithoutPersonInput>
    create: XOR<adoptionCreateWithoutPersonInput, adoptionUncheckedCreateWithoutPersonInput>
  }

  export type adoptionUpdateWithWhereUniqueWithoutPersonInput = {
    where: adoptionWhereUniqueInput
    data: XOR<adoptionUpdateWithoutPersonInput, adoptionUncheckedUpdateWithoutPersonInput>
  }

  export type adoptionUpdateManyWithWhereWithoutPersonInput = {
    where: adoptionScalarWhereInput
    data: XOR<adoptionUpdateManyMutationInput, adoptionUncheckedUpdateManyWithoutPersonInput>
  }

  export type viewplaceUpsertWithWhereUniqueWithoutPersonInput = {
    where: viewplaceWhereUniqueInput
    update: XOR<viewplaceUpdateWithoutPersonInput, viewplaceUncheckedUpdateWithoutPersonInput>
    create: XOR<viewplaceCreateWithoutPersonInput, viewplaceUncheckedCreateWithoutPersonInput>
  }

  export type viewplaceUpdateWithWhereUniqueWithoutPersonInput = {
    where: viewplaceWhereUniqueInput
    data: XOR<viewplaceUpdateWithoutPersonInput, viewplaceUncheckedUpdateWithoutPersonInput>
  }

  export type viewplaceUpdateManyWithWhereWithoutPersonInput = {
    where: viewplaceScalarWhereInput
    data: XOR<viewplaceUpdateManyMutationInput, viewplaceUncheckedUpdateManyWithoutPersonInput>
  }

  export type viewplaceScalarWhereInput = {
    AND?: viewplaceScalarWhereInput | viewplaceScalarWhereInput[]
    OR?: viewplaceScalarWhereInput[]
    NOT?: viewplaceScalarWhereInput | viewplaceScalarWhereInput[]
    idviewed?: BigIntFilter<"viewplace"> | bigint | number
    idpet?: BigIntNullableFilter<"viewplace"> | bigint | number | null
    idperson?: BigIntNullableFilter<"viewplace"> | bigint | number | null
    coordenate?: StringNullableFilter<"viewplace"> | string | null
    register?: DateTimeNullableFilter<"viewplace"> | Date | string | null
    urlmedia?: StringNullableFilter<"viewplace"> | string | null
  }

  export type adoptionCreateWithoutPetInput = {
    idadoption?: bigint | number
    adoptiodate?: Date | string | null
    adoptionstatus?: adoptionstatusCreateNestedOneWithoutAdoptionInput
    person?: personCreateNestedOneWithoutAdoptionInput
  }

  export type adoptionUncheckedCreateWithoutPetInput = {
    idadoption?: bigint | number
    idperson?: bigint | number | null
    idstatus?: number | null
    adoptiodate?: Date | string | null
  }

  export type adoptionCreateOrConnectWithoutPetInput = {
    where: adoptionWhereUniqueInput
    create: XOR<adoptionCreateWithoutPetInput, adoptionUncheckedCreateWithoutPetInput>
  }

  export type adoptionCreateManyPetInputEnvelope = {
    data: adoptionCreateManyPetInput | adoptionCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type petkindCreateWithoutPetInput = {
    idkind: number
    kind?: string | null
  }

  export type petkindUncheckedCreateWithoutPetInput = {
    idkind: number
    kind?: string | null
  }

  export type petkindCreateOrConnectWithoutPetInput = {
    where: petkindWhereUniqueInput
    create: XOR<petkindCreateWithoutPetInput, petkindUncheckedCreateWithoutPetInput>
  }

  export type petinshelterCreateWithoutPetInput = {
    observation?: string | null
    checkin?: Date | string | null
    checkout?: Date | string | null
    shelter: shelterCreateNestedOneWithoutPetinshelterInput
  }

  export type petinshelterUncheckedCreateWithoutPetInput = {
    idshelter: bigint | number
    observation?: string | null
    checkin?: Date | string | null
    checkout?: Date | string | null
  }

  export type petinshelterCreateOrConnectWithoutPetInput = {
    where: petinshelterWhereUniqueInput
    create: XOR<petinshelterCreateWithoutPetInput, petinshelterUncheckedCreateWithoutPetInput>
  }

  export type petinshelterCreateManyPetInputEnvelope = {
    data: petinshelterCreateManyPetInput | petinshelterCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type petmediaCreateWithoutPetInput = {
    idmedia?: bigint | number
    register?: Date | string | null
    urlmedia?: string | null
  }

  export type petmediaUncheckedCreateWithoutPetInput = {
    idmedia?: bigint | number
    register?: Date | string | null
    urlmedia?: string | null
  }

  export type petmediaCreateOrConnectWithoutPetInput = {
    where: petmediaWhereUniqueInput
    create: XOR<petmediaCreateWithoutPetInput, petmediaUncheckedCreateWithoutPetInput>
  }

  export type petmediaCreateManyPetInputEnvelope = {
    data: petmediaCreateManyPetInput | petmediaCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type viewplaceCreateWithoutPetInput = {
    idviewed?: bigint | number
    coordenate?: string | null
    register?: Date | string | null
    urlmedia?: string | null
    person?: personCreateNestedOneWithoutViewplaceInput
  }

  export type viewplaceUncheckedCreateWithoutPetInput = {
    idviewed?: bigint | number
    idperson?: bigint | number | null
    coordenate?: string | null
    register?: Date | string | null
    urlmedia?: string | null
  }

  export type viewplaceCreateOrConnectWithoutPetInput = {
    where: viewplaceWhereUniqueInput
    create: XOR<viewplaceCreateWithoutPetInput, viewplaceUncheckedCreateWithoutPetInput>
  }

  export type viewplaceCreateManyPetInputEnvelope = {
    data: viewplaceCreateManyPetInput | viewplaceCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type adoptionUpsertWithWhereUniqueWithoutPetInput = {
    where: adoptionWhereUniqueInput
    update: XOR<adoptionUpdateWithoutPetInput, adoptionUncheckedUpdateWithoutPetInput>
    create: XOR<adoptionCreateWithoutPetInput, adoptionUncheckedCreateWithoutPetInput>
  }

  export type adoptionUpdateWithWhereUniqueWithoutPetInput = {
    where: adoptionWhereUniqueInput
    data: XOR<adoptionUpdateWithoutPetInput, adoptionUncheckedUpdateWithoutPetInput>
  }

  export type adoptionUpdateManyWithWhereWithoutPetInput = {
    where: adoptionScalarWhereInput
    data: XOR<adoptionUpdateManyMutationInput, adoptionUncheckedUpdateManyWithoutPetInput>
  }

  export type petkindUpsertWithoutPetInput = {
    update: XOR<petkindUpdateWithoutPetInput, petkindUncheckedUpdateWithoutPetInput>
    create: XOR<petkindCreateWithoutPetInput, petkindUncheckedCreateWithoutPetInput>
    where?: petkindWhereInput
  }

  export type petkindUpdateToOneWithWhereWithoutPetInput = {
    where?: petkindWhereInput
    data: XOR<petkindUpdateWithoutPetInput, petkindUncheckedUpdateWithoutPetInput>
  }

  export type petkindUpdateWithoutPetInput = {
    idkind?: IntFieldUpdateOperationsInput | number
    kind?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type petkindUncheckedUpdateWithoutPetInput = {
    idkind?: IntFieldUpdateOperationsInput | number
    kind?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type petinshelterUpsertWithWhereUniqueWithoutPetInput = {
    where: petinshelterWhereUniqueInput
    update: XOR<petinshelterUpdateWithoutPetInput, petinshelterUncheckedUpdateWithoutPetInput>
    create: XOR<petinshelterCreateWithoutPetInput, petinshelterUncheckedCreateWithoutPetInput>
  }

  export type petinshelterUpdateWithWhereUniqueWithoutPetInput = {
    where: petinshelterWhereUniqueInput
    data: XOR<petinshelterUpdateWithoutPetInput, petinshelterUncheckedUpdateWithoutPetInput>
  }

  export type petinshelterUpdateManyWithWhereWithoutPetInput = {
    where: petinshelterScalarWhereInput
    data: XOR<petinshelterUpdateManyMutationInput, petinshelterUncheckedUpdateManyWithoutPetInput>
  }

  export type petinshelterScalarWhereInput = {
    AND?: petinshelterScalarWhereInput | petinshelterScalarWhereInput[]
    OR?: petinshelterScalarWhereInput[]
    NOT?: petinshelterScalarWhereInput | petinshelterScalarWhereInput[]
    idshelter?: BigIntFilter<"petinshelter"> | bigint | number
    idpet?: BigIntFilter<"petinshelter"> | bigint | number
    observation?: StringNullableFilter<"petinshelter"> | string | null
    checkin?: DateTimeNullableFilter<"petinshelter"> | Date | string | null
    checkout?: DateTimeNullableFilter<"petinshelter"> | Date | string | null
  }

  export type petmediaUpsertWithWhereUniqueWithoutPetInput = {
    where: petmediaWhereUniqueInput
    update: XOR<petmediaUpdateWithoutPetInput, petmediaUncheckedUpdateWithoutPetInput>
    create: XOR<petmediaCreateWithoutPetInput, petmediaUncheckedCreateWithoutPetInput>
  }

  export type petmediaUpdateWithWhereUniqueWithoutPetInput = {
    where: petmediaWhereUniqueInput
    data: XOR<petmediaUpdateWithoutPetInput, petmediaUncheckedUpdateWithoutPetInput>
  }

  export type petmediaUpdateManyWithWhereWithoutPetInput = {
    where: petmediaScalarWhereInput
    data: XOR<petmediaUpdateManyMutationInput, petmediaUncheckedUpdateManyWithoutPetInput>
  }

  export type petmediaScalarWhereInput = {
    AND?: petmediaScalarWhereInput | petmediaScalarWhereInput[]
    OR?: petmediaScalarWhereInput[]
    NOT?: petmediaScalarWhereInput | petmediaScalarWhereInput[]
    idmedia?: BigIntFilter<"petmedia"> | bigint | number
    idpet?: BigIntNullableFilter<"petmedia"> | bigint | number | null
    register?: DateTimeNullableFilter<"petmedia"> | Date | string | null
    urlmedia?: StringNullableFilter<"petmedia"> | string | null
  }

  export type viewplaceUpsertWithWhereUniqueWithoutPetInput = {
    where: viewplaceWhereUniqueInput
    update: XOR<viewplaceUpdateWithoutPetInput, viewplaceUncheckedUpdateWithoutPetInput>
    create: XOR<viewplaceCreateWithoutPetInput, viewplaceUncheckedCreateWithoutPetInput>
  }

  export type viewplaceUpdateWithWhereUniqueWithoutPetInput = {
    where: viewplaceWhereUniqueInput
    data: XOR<viewplaceUpdateWithoutPetInput, viewplaceUncheckedUpdateWithoutPetInput>
  }

  export type viewplaceUpdateManyWithWhereWithoutPetInput = {
    where: viewplaceScalarWhereInput
    data: XOR<viewplaceUpdateManyMutationInput, viewplaceUncheckedUpdateManyWithoutPetInput>
  }

  export type petCreateWithoutPetinshelterInput = {
    idpet?: bigint | number
    name?: string | null
    register?: Date | string | null
    adoption?: adoptionCreateNestedManyWithoutPetInput
    petkind?: petkindCreateNestedOneWithoutPetInput
    petmedia?: petmediaCreateNestedManyWithoutPetInput
    viewplace?: viewplaceCreateNestedManyWithoutPetInput
  }

  export type petUncheckedCreateWithoutPetinshelterInput = {
    idpet?: bigint | number
    idkind?: number | null
    name?: string | null
    register?: Date | string | null
    adoption?: adoptionUncheckedCreateNestedManyWithoutPetInput
    petmedia?: petmediaUncheckedCreateNestedManyWithoutPetInput
    viewplace?: viewplaceUncheckedCreateNestedManyWithoutPetInput
  }

  export type petCreateOrConnectWithoutPetinshelterInput = {
    where: petWhereUniqueInput
    create: XOR<petCreateWithoutPetinshelterInput, petUncheckedCreateWithoutPetinshelterInput>
  }

  export type shelterCreateWithoutPetinshelterInput = {
    idshelter?: bigint | number
    sheltername?: string | null
    address?: string | null
    phone?: string | null
    zip?: string | null
    regster?: Date | string | null
  }

  export type shelterUncheckedCreateWithoutPetinshelterInput = {
    idshelter?: bigint | number
    sheltername?: string | null
    address?: string | null
    phone?: string | null
    zip?: string | null
    regster?: Date | string | null
  }

  export type shelterCreateOrConnectWithoutPetinshelterInput = {
    where: shelterWhereUniqueInput
    create: XOR<shelterCreateWithoutPetinshelterInput, shelterUncheckedCreateWithoutPetinshelterInput>
  }

  export type petUpsertWithoutPetinshelterInput = {
    update: XOR<petUpdateWithoutPetinshelterInput, petUncheckedUpdateWithoutPetinshelterInput>
    create: XOR<petCreateWithoutPetinshelterInput, petUncheckedCreateWithoutPetinshelterInput>
    where?: petWhereInput
  }

  export type petUpdateToOneWithWhereWithoutPetinshelterInput = {
    where?: petWhereInput
    data: XOR<petUpdateWithoutPetinshelterInput, petUncheckedUpdateWithoutPetinshelterInput>
  }

  export type petUpdateWithoutPetinshelterInput = {
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoption?: adoptionUpdateManyWithoutPetNestedInput
    petkind?: petkindUpdateOneWithoutPetNestedInput
    petmedia?: petmediaUpdateManyWithoutPetNestedInput
    viewplace?: viewplaceUpdateManyWithoutPetNestedInput
  }

  export type petUncheckedUpdateWithoutPetinshelterInput = {
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    idkind?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoption?: adoptionUncheckedUpdateManyWithoutPetNestedInput
    petmedia?: petmediaUncheckedUpdateManyWithoutPetNestedInput
    viewplace?: viewplaceUncheckedUpdateManyWithoutPetNestedInput
  }

  export type shelterUpsertWithoutPetinshelterInput = {
    update: XOR<shelterUpdateWithoutPetinshelterInput, shelterUncheckedUpdateWithoutPetinshelterInput>
    create: XOR<shelterCreateWithoutPetinshelterInput, shelterUncheckedCreateWithoutPetinshelterInput>
    where?: shelterWhereInput
  }

  export type shelterUpdateToOneWithWhereWithoutPetinshelterInput = {
    where?: shelterWhereInput
    data: XOR<shelterUpdateWithoutPetinshelterInput, shelterUncheckedUpdateWithoutPetinshelterInput>
  }

  export type shelterUpdateWithoutPetinshelterInput = {
    idshelter?: BigIntFieldUpdateOperationsInput | bigint | number
    sheltername?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    regster?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type shelterUncheckedUpdateWithoutPetinshelterInput = {
    idshelter?: BigIntFieldUpdateOperationsInput | bigint | number
    sheltername?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    regster?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type petCreateWithoutPetkindInput = {
    idpet?: bigint | number
    name?: string | null
    register?: Date | string | null
    adoption?: adoptionCreateNestedManyWithoutPetInput
    petinshelter?: petinshelterCreateNestedManyWithoutPetInput
    petmedia?: petmediaCreateNestedManyWithoutPetInput
    viewplace?: viewplaceCreateNestedManyWithoutPetInput
  }

  export type petUncheckedCreateWithoutPetkindInput = {
    idpet?: bigint | number
    name?: string | null
    register?: Date | string | null
    adoption?: adoptionUncheckedCreateNestedManyWithoutPetInput
    petinshelter?: petinshelterUncheckedCreateNestedManyWithoutPetInput
    petmedia?: petmediaUncheckedCreateNestedManyWithoutPetInput
    viewplace?: viewplaceUncheckedCreateNestedManyWithoutPetInput
  }

  export type petCreateOrConnectWithoutPetkindInput = {
    where: petWhereUniqueInput
    create: XOR<petCreateWithoutPetkindInput, petUncheckedCreateWithoutPetkindInput>
  }

  export type petCreateManyPetkindInputEnvelope = {
    data: petCreateManyPetkindInput | petCreateManyPetkindInput[]
    skipDuplicates?: boolean
  }

  export type petUpsertWithWhereUniqueWithoutPetkindInput = {
    where: petWhereUniqueInput
    update: XOR<petUpdateWithoutPetkindInput, petUncheckedUpdateWithoutPetkindInput>
    create: XOR<petCreateWithoutPetkindInput, petUncheckedCreateWithoutPetkindInput>
  }

  export type petUpdateWithWhereUniqueWithoutPetkindInput = {
    where: petWhereUniqueInput
    data: XOR<petUpdateWithoutPetkindInput, petUncheckedUpdateWithoutPetkindInput>
  }

  export type petUpdateManyWithWhereWithoutPetkindInput = {
    where: petScalarWhereInput
    data: XOR<petUpdateManyMutationInput, petUncheckedUpdateManyWithoutPetkindInput>
  }

  export type petScalarWhereInput = {
    AND?: petScalarWhereInput | petScalarWhereInput[]
    OR?: petScalarWhereInput[]
    NOT?: petScalarWhereInput | petScalarWhereInput[]
    idpet?: BigIntFilter<"pet"> | bigint | number
    idkind?: IntNullableFilter<"pet"> | number | null
    name?: StringNullableFilter<"pet"> | string | null
    register?: DateTimeNullableFilter<"pet"> | Date | string | null
  }

  export type petCreateWithoutPetmediaInput = {
    idpet?: bigint | number
    name?: string | null
    register?: Date | string | null
    adoption?: adoptionCreateNestedManyWithoutPetInput
    petkind?: petkindCreateNestedOneWithoutPetInput
    petinshelter?: petinshelterCreateNestedManyWithoutPetInput
    viewplace?: viewplaceCreateNestedManyWithoutPetInput
  }

  export type petUncheckedCreateWithoutPetmediaInput = {
    idpet?: bigint | number
    idkind?: number | null
    name?: string | null
    register?: Date | string | null
    adoption?: adoptionUncheckedCreateNestedManyWithoutPetInput
    petinshelter?: petinshelterUncheckedCreateNestedManyWithoutPetInput
    viewplace?: viewplaceUncheckedCreateNestedManyWithoutPetInput
  }

  export type petCreateOrConnectWithoutPetmediaInput = {
    where: petWhereUniqueInput
    create: XOR<petCreateWithoutPetmediaInput, petUncheckedCreateWithoutPetmediaInput>
  }

  export type petUpsertWithoutPetmediaInput = {
    update: XOR<petUpdateWithoutPetmediaInput, petUncheckedUpdateWithoutPetmediaInput>
    create: XOR<petCreateWithoutPetmediaInput, petUncheckedCreateWithoutPetmediaInput>
    where?: petWhereInput
  }

  export type petUpdateToOneWithWhereWithoutPetmediaInput = {
    where?: petWhereInput
    data: XOR<petUpdateWithoutPetmediaInput, petUncheckedUpdateWithoutPetmediaInput>
  }

  export type petUpdateWithoutPetmediaInput = {
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoption?: adoptionUpdateManyWithoutPetNestedInput
    petkind?: petkindUpdateOneWithoutPetNestedInput
    petinshelter?: petinshelterUpdateManyWithoutPetNestedInput
    viewplace?: viewplaceUpdateManyWithoutPetNestedInput
  }

  export type petUncheckedUpdateWithoutPetmediaInput = {
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    idkind?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoption?: adoptionUncheckedUpdateManyWithoutPetNestedInput
    petinshelter?: petinshelterUncheckedUpdateManyWithoutPetNestedInput
    viewplace?: viewplaceUncheckedUpdateManyWithoutPetNestedInput
  }

  export type petinshelterCreateWithoutShelterInput = {
    observation?: string | null
    checkin?: Date | string | null
    checkout?: Date | string | null
    pet: petCreateNestedOneWithoutPetinshelterInput
  }

  export type petinshelterUncheckedCreateWithoutShelterInput = {
    idpet: bigint | number
    observation?: string | null
    checkin?: Date | string | null
    checkout?: Date | string | null
  }

  export type petinshelterCreateOrConnectWithoutShelterInput = {
    where: petinshelterWhereUniqueInput
    create: XOR<petinshelterCreateWithoutShelterInput, petinshelterUncheckedCreateWithoutShelterInput>
  }

  export type petinshelterCreateManyShelterInputEnvelope = {
    data: petinshelterCreateManyShelterInput | petinshelterCreateManyShelterInput[]
    skipDuplicates?: boolean
  }

  export type petinshelterUpsertWithWhereUniqueWithoutShelterInput = {
    where: petinshelterWhereUniqueInput
    update: XOR<petinshelterUpdateWithoutShelterInput, petinshelterUncheckedUpdateWithoutShelterInput>
    create: XOR<petinshelterCreateWithoutShelterInput, petinshelterUncheckedCreateWithoutShelterInput>
  }

  export type petinshelterUpdateWithWhereUniqueWithoutShelterInput = {
    where: petinshelterWhereUniqueInput
    data: XOR<petinshelterUpdateWithoutShelterInput, petinshelterUncheckedUpdateWithoutShelterInput>
  }

  export type petinshelterUpdateManyWithWhereWithoutShelterInput = {
    where: petinshelterScalarWhereInput
    data: XOR<petinshelterUpdateManyMutationInput, petinshelterUncheckedUpdateManyWithoutShelterInput>
  }

  export type personCreateWithoutViewplaceInput = {
    idperson?: bigint | number
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    register?: Date | string
    active?: boolean
    adoption?: adoptionCreateNestedManyWithoutPersonInput
  }

  export type personUncheckedCreateWithoutViewplaceInput = {
    idperson?: bigint | number
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    phone?: string | null
    register?: Date | string
    active?: boolean
    adoption?: adoptionUncheckedCreateNestedManyWithoutPersonInput
  }

  export type personCreateOrConnectWithoutViewplaceInput = {
    where: personWhereUniqueInput
    create: XOR<personCreateWithoutViewplaceInput, personUncheckedCreateWithoutViewplaceInput>
  }

  export type petCreateWithoutViewplaceInput = {
    idpet?: bigint | number
    name?: string | null
    register?: Date | string | null
    adoption?: adoptionCreateNestedManyWithoutPetInput
    petkind?: petkindCreateNestedOneWithoutPetInput
    petinshelter?: petinshelterCreateNestedManyWithoutPetInput
    petmedia?: petmediaCreateNestedManyWithoutPetInput
  }

  export type petUncheckedCreateWithoutViewplaceInput = {
    idpet?: bigint | number
    idkind?: number | null
    name?: string | null
    register?: Date | string | null
    adoption?: adoptionUncheckedCreateNestedManyWithoutPetInput
    petinshelter?: petinshelterUncheckedCreateNestedManyWithoutPetInput
    petmedia?: petmediaUncheckedCreateNestedManyWithoutPetInput
  }

  export type petCreateOrConnectWithoutViewplaceInput = {
    where: petWhereUniqueInput
    create: XOR<petCreateWithoutViewplaceInput, petUncheckedCreateWithoutViewplaceInput>
  }

  export type personUpsertWithoutViewplaceInput = {
    update: XOR<personUpdateWithoutViewplaceInput, personUncheckedUpdateWithoutViewplaceInput>
    create: XOR<personCreateWithoutViewplaceInput, personUncheckedCreateWithoutViewplaceInput>
    where?: personWhereInput
  }

  export type personUpdateToOneWithWhereWithoutViewplaceInput = {
    where?: personWhereInput
    data: XOR<personUpdateWithoutViewplaceInput, personUncheckedUpdateWithoutViewplaceInput>
  }

  export type personUpdateWithoutViewplaceInput = {
    idperson?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    register?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    adoption?: adoptionUpdateManyWithoutPersonNestedInput
  }

  export type personUncheckedUpdateWithoutViewplaceInput = {
    idperson?: BigIntFieldUpdateOperationsInput | bigint | number
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    register?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    adoption?: adoptionUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type petUpsertWithoutViewplaceInput = {
    update: XOR<petUpdateWithoutViewplaceInput, petUncheckedUpdateWithoutViewplaceInput>
    create: XOR<petCreateWithoutViewplaceInput, petUncheckedCreateWithoutViewplaceInput>
    where?: petWhereInput
  }

  export type petUpdateToOneWithWhereWithoutViewplaceInput = {
    where?: petWhereInput
    data: XOR<petUpdateWithoutViewplaceInput, petUncheckedUpdateWithoutViewplaceInput>
  }

  export type petUpdateWithoutViewplaceInput = {
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoption?: adoptionUpdateManyWithoutPetNestedInput
    petkind?: petkindUpdateOneWithoutPetNestedInput
    petinshelter?: petinshelterUpdateManyWithoutPetNestedInput
    petmedia?: petmediaUpdateManyWithoutPetNestedInput
  }

  export type petUncheckedUpdateWithoutViewplaceInput = {
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    idkind?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoption?: adoptionUncheckedUpdateManyWithoutPetNestedInput
    petinshelter?: petinshelterUncheckedUpdateManyWithoutPetNestedInput
    petmedia?: petmediaUncheckedUpdateManyWithoutPetNestedInput
  }

  export type adoptionCreateManyAdoptionstatusInput = {
    idadoption?: bigint | number
    idperson?: bigint | number | null
    idpet?: bigint | number | null
    adoptiodate?: Date | string | null
  }

  export type adoptionUpdateWithoutAdoptionstatusInput = {
    idadoption?: BigIntFieldUpdateOperationsInput | bigint | number
    adoptiodate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    person?: personUpdateOneWithoutAdoptionNestedInput
    pet?: petUpdateOneWithoutAdoptionNestedInput
  }

  export type adoptionUncheckedUpdateWithoutAdoptionstatusInput = {
    idadoption?: BigIntFieldUpdateOperationsInput | bigint | number
    idperson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    idpet?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    adoptiodate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adoptionUncheckedUpdateManyWithoutAdoptionstatusInput = {
    idadoption?: BigIntFieldUpdateOperationsInput | bigint | number
    idperson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    idpet?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    adoptiodate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adoptionCreateManyPersonInput = {
    idadoption?: bigint | number
    idpet?: bigint | number | null
    idstatus?: number | null
    adoptiodate?: Date | string | null
  }

  export type viewplaceCreateManyPersonInput = {
    idviewed?: bigint | number
    idpet?: bigint | number | null
    coordenate?: string | null
    register?: Date | string | null
    urlmedia?: string | null
  }

  export type adoptionUpdateWithoutPersonInput = {
    idadoption?: BigIntFieldUpdateOperationsInput | bigint | number
    adoptiodate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoptionstatus?: adoptionstatusUpdateOneWithoutAdoptionNestedInput
    pet?: petUpdateOneWithoutAdoptionNestedInput
  }

  export type adoptionUncheckedUpdateWithoutPersonInput = {
    idadoption?: BigIntFieldUpdateOperationsInput | bigint | number
    idpet?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    idstatus?: NullableIntFieldUpdateOperationsInput | number | null
    adoptiodate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adoptionUncheckedUpdateManyWithoutPersonInput = {
    idadoption?: BigIntFieldUpdateOperationsInput | bigint | number
    idpet?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    idstatus?: NullableIntFieldUpdateOperationsInput | number | null
    adoptiodate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type viewplaceUpdateWithoutPersonInput = {
    idviewed?: BigIntFieldUpdateOperationsInput | bigint | number
    coordenate?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlmedia?: NullableStringFieldUpdateOperationsInput | string | null
    pet?: petUpdateOneWithoutViewplaceNestedInput
  }

  export type viewplaceUncheckedUpdateWithoutPersonInput = {
    idviewed?: BigIntFieldUpdateOperationsInput | bigint | number
    idpet?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    coordenate?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlmedia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type viewplaceUncheckedUpdateManyWithoutPersonInput = {
    idviewed?: BigIntFieldUpdateOperationsInput | bigint | number
    idpet?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    coordenate?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlmedia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type adoptionCreateManyPetInput = {
    idadoption?: bigint | number
    idperson?: bigint | number | null
    idstatus?: number | null
    adoptiodate?: Date | string | null
  }

  export type petinshelterCreateManyPetInput = {
    idshelter: bigint | number
    observation?: string | null
    checkin?: Date | string | null
    checkout?: Date | string | null
  }

  export type petmediaCreateManyPetInput = {
    idmedia?: bigint | number
    register?: Date | string | null
    urlmedia?: string | null
  }

  export type viewplaceCreateManyPetInput = {
    idviewed?: bigint | number
    idperson?: bigint | number | null
    coordenate?: string | null
    register?: Date | string | null
    urlmedia?: string | null
  }

  export type adoptionUpdateWithoutPetInput = {
    idadoption?: BigIntFieldUpdateOperationsInput | bigint | number
    adoptiodate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoptionstatus?: adoptionstatusUpdateOneWithoutAdoptionNestedInput
    person?: personUpdateOneWithoutAdoptionNestedInput
  }

  export type adoptionUncheckedUpdateWithoutPetInput = {
    idadoption?: BigIntFieldUpdateOperationsInput | bigint | number
    idperson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    idstatus?: NullableIntFieldUpdateOperationsInput | number | null
    adoptiodate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type adoptionUncheckedUpdateManyWithoutPetInput = {
    idadoption?: BigIntFieldUpdateOperationsInput | bigint | number
    idperson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    idstatus?: NullableIntFieldUpdateOperationsInput | number | null
    adoptiodate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type petinshelterUpdateWithoutPetInput = {
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    checkin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shelter?: shelterUpdateOneRequiredWithoutPetinshelterNestedInput
  }

  export type petinshelterUncheckedUpdateWithoutPetInput = {
    idshelter?: BigIntFieldUpdateOperationsInput | bigint | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    checkin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type petinshelterUncheckedUpdateManyWithoutPetInput = {
    idshelter?: BigIntFieldUpdateOperationsInput | bigint | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    checkin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type petmediaUpdateWithoutPetInput = {
    idmedia?: BigIntFieldUpdateOperationsInput | bigint | number
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlmedia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type petmediaUncheckedUpdateWithoutPetInput = {
    idmedia?: BigIntFieldUpdateOperationsInput | bigint | number
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlmedia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type petmediaUncheckedUpdateManyWithoutPetInput = {
    idmedia?: BigIntFieldUpdateOperationsInput | bigint | number
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlmedia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type viewplaceUpdateWithoutPetInput = {
    idviewed?: BigIntFieldUpdateOperationsInput | bigint | number
    coordenate?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlmedia?: NullableStringFieldUpdateOperationsInput | string | null
    person?: personUpdateOneWithoutViewplaceNestedInput
  }

  export type viewplaceUncheckedUpdateWithoutPetInput = {
    idviewed?: BigIntFieldUpdateOperationsInput | bigint | number
    idperson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    coordenate?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlmedia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type viewplaceUncheckedUpdateManyWithoutPetInput = {
    idviewed?: BigIntFieldUpdateOperationsInput | bigint | number
    idperson?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    coordenate?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    urlmedia?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type petCreateManyPetkindInput = {
    idpet?: bigint | number
    name?: string | null
    register?: Date | string | null
  }

  export type petUpdateWithoutPetkindInput = {
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoption?: adoptionUpdateManyWithoutPetNestedInput
    petinshelter?: petinshelterUpdateManyWithoutPetNestedInput
    petmedia?: petmediaUpdateManyWithoutPetNestedInput
    viewplace?: viewplaceUpdateManyWithoutPetNestedInput
  }

  export type petUncheckedUpdateWithoutPetkindInput = {
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoption?: adoptionUncheckedUpdateManyWithoutPetNestedInput
    petinshelter?: petinshelterUncheckedUpdateManyWithoutPetNestedInput
    petmedia?: petmediaUncheckedUpdateManyWithoutPetNestedInput
    viewplace?: viewplaceUncheckedUpdateManyWithoutPetNestedInput
  }

  export type petUncheckedUpdateManyWithoutPetkindInput = {
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    register?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type petinshelterCreateManyShelterInput = {
    idpet: bigint | number
    observation?: string | null
    checkin?: Date | string | null
    checkout?: Date | string | null
  }

  export type petinshelterUpdateWithoutShelterInput = {
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    checkin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pet?: petUpdateOneRequiredWithoutPetinshelterNestedInput
  }

  export type petinshelterUncheckedUpdateWithoutShelterInput = {
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    checkin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type petinshelterUncheckedUpdateManyWithoutShelterInput = {
    idpet?: BigIntFieldUpdateOperationsInput | bigint | number
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    checkin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkout?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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