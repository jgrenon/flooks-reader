
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UniverseMember
 * 
 */
export type UniverseMember = $Result.DefaultSelection<Prisma.$UniverseMemberPayload>
/**
 * Model Universe
 * 
 */
export type Universe = $Result.DefaultSelection<Prisma.$UniversePayload>
/**
 * Model UniverseSource
 * 
 */
export type UniverseSource = $Result.DefaultSelection<Prisma.$UniverseSourcePayload>
/**
 * Model Scene
 * 
 */
export type Scene = $Result.DefaultSelection<Prisma.$ScenePayload>
/**
 * Model SceneAnchor
 * 
 */
export type SceneAnchor = $Result.DefaultSelection<Prisma.$SceneAnchorPayload>
/**
 * Model StoryPath
 * 
 */
export type StoryPath = $Result.DefaultSelection<Prisma.$StoryPathPayload>
/**
 * Model Storyline
 * 
 */
export type Storyline = $Result.DefaultSelection<Prisma.$StorylinePayload>
/**
 * Model StorylinePath
 * 
 */
export type StorylinePath = $Result.DefaultSelection<Prisma.$StorylinePathPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model FavoriteAnchor
 * 
 */
export type FavoriteAnchor = $Result.DefaultSelection<Prisma.$FavoriteAnchorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Visibility: {
  PUBLIC: 'PUBLIC',
  MEMBERSHIP: 'MEMBERSHIP'
};

export type Visibility = (typeof Visibility)[keyof typeof Visibility]


export const FileFormat: {
  PDF: 'PDF'
};

export type FileFormat = (typeof FileFormat)[keyof typeof FileFormat]


export const SceneMood: {
  JOYFUL: 'JOYFUL',
  NERVOUS: 'NERVOUS',
  PEACEFUL: 'PEACEFUL',
  MELANCHOLY: 'MELANCHOLY',
  PANICKED: 'PANICKED',
  PENSIVE: 'PENSIVE',
  RESENTFUL: 'RESENTFUL',
  ANGRY: 'ANGRY',
  HOPEFUL: 'HOPEFUL',
  LONELY: 'LONELY',
  NOSTALGIC: 'NOSTALGIC',
  ANXIOUS: 'ANXIOUS',
  CALM: 'CALM',
  SENTIMENTAL: 'SENTIMENTAL',
  CHEERFUL: 'CHEERFUL',
  UNEASY: 'UNEASY',
  HOPELESS: 'HOPELESS',
  STRESSED: 'STRESSED',
  SORROWFUL: 'SORROWFUL',
  OPTIMISTIC: 'OPTIMISTIC'
};

export type SceneMood = (typeof SceneMood)[keyof typeof SceneMood]


export const SceneGenre: {
  FANTASY: 'FANTASY',
  SCIFI: 'SCIFI',
  DYSTOPIAN: 'DYSTOPIAN',
  ACTION: 'ACTION',
  MYSTERY: 'MYSTERY',
  HORROR: 'HORROR',
  THRILLER: 'THRILLER',
  HISTORICAL_FICTION: 'HISTORICAL_FICTION',
  ROMANCE: 'ROMANCE',
  CONTEMPORARY_FICTION: 'CONTEMPORARY_FICTION',
  YOUNG_ADULT: 'YOUNG_ADULT',
  CHILDREN: 'CHILDREN',
  BIOGRAPHY: 'BIOGRAPHY',
  ART: 'ART',
  FOOD_DRINKS: 'FOOD_DRINKS',
  SELF_HELP: 'SELF_HELP',
  HISTORY: 'HISTORY',
  TRAVEL: 'TRAVEL',
  TRUE_CRIME: 'TRUE_CRIME',
  HUMOR: 'HUMOR',
  ESSAYS: 'ESSAYS',
  HOWTO: 'HOWTO',
  SPIRITUALITY: 'SPIRITUALITY',
  SOCIAL: 'SOCIAL',
  FAMILY: 'FAMILY',
  SCIENCE_TECH: 'SCIENCE_TECH'
};

export type SceneGenre = (typeof SceneGenre)[keyof typeof SceneGenre]


export const AnchorType: {
  PLACE: 'PLACE',
  ACTOR: 'ACTOR',
  OBJECT: 'OBJECT',
  ORGANIZATION: 'ORGANIZATION',
  MOMENT: 'MOMENT'
};

export type AnchorType = (typeof AnchorType)[keyof typeof AnchorType]

}

export type Visibility = $Enums.Visibility

export const Visibility: typeof $Enums.Visibility

export type FileFormat = $Enums.FileFormat

export const FileFormat: typeof $Enums.FileFormat

export type SceneMood = $Enums.SceneMood

export const SceneMood: typeof $Enums.SceneMood

export type SceneGenre = $Enums.SceneGenre

export const SceneGenre: typeof $Enums.SceneGenre

export type AnchorType = $Enums.AnchorType

export const AnchorType: typeof $Enums.AnchorType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.universeMember`: Exposes CRUD operations for the **UniverseMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UniverseMembers
    * const universeMembers = await prisma.universeMember.findMany()
    * ```
    */
  get universeMember(): Prisma.UniverseMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.universe`: Exposes CRUD operations for the **Universe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Universes
    * const universes = await prisma.universe.findMany()
    * ```
    */
  get universe(): Prisma.UniverseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.universeSource`: Exposes CRUD operations for the **UniverseSource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UniverseSources
    * const universeSources = await prisma.universeSource.findMany()
    * ```
    */
  get universeSource(): Prisma.UniverseSourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scene`: Exposes CRUD operations for the **Scene** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scenes
    * const scenes = await prisma.scene.findMany()
    * ```
    */
  get scene(): Prisma.SceneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sceneAnchor`: Exposes CRUD operations for the **SceneAnchor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SceneAnchors
    * const sceneAnchors = await prisma.sceneAnchor.findMany()
    * ```
    */
  get sceneAnchor(): Prisma.SceneAnchorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storyPath`: Exposes CRUD operations for the **StoryPath** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoryPaths
    * const storyPaths = await prisma.storyPath.findMany()
    * ```
    */
  get storyPath(): Prisma.StoryPathDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storyline`: Exposes CRUD operations for the **Storyline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Storylines
    * const storylines = await prisma.storyline.findMany()
    * ```
    */
  get storyline(): Prisma.StorylineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storylinePath`: Exposes CRUD operations for the **StorylinePath** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StorylinePaths
    * const storylinePaths = await prisma.storylinePath.findMany()
    * ```
    */
  get storylinePath(): Prisma.StorylinePathDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.favoriteAnchor`: Exposes CRUD operations for the **FavoriteAnchor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteAnchors
    * const favoriteAnchors = await prisma.favoriteAnchor.findMany()
    * ```
    */
  get favoriteAnchor(): Prisma.FavoriteAnchorDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    UniverseMember: 'UniverseMember',
    Universe: 'Universe',
    UniverseSource: 'UniverseSource',
    Scene: 'Scene',
    SceneAnchor: 'SceneAnchor',
    StoryPath: 'StoryPath',
    Storyline: 'Storyline',
    StorylinePath: 'StorylinePath',
    Session: 'Session',
    FavoriteAnchor: 'FavoriteAnchor'
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
      modelProps: "user" | "universeMember" | "universe" | "universeSource" | "scene" | "sceneAnchor" | "storyPath" | "storyline" | "storylinePath" | "session" | "favoriteAnchor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      UniverseMember: {
        payload: Prisma.$UniverseMemberPayload<ExtArgs>
        fields: Prisma.UniverseMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UniverseMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UniverseMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseMemberPayload>
          }
          findFirst: {
            args: Prisma.UniverseMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UniverseMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseMemberPayload>
          }
          findMany: {
            args: Prisma.UniverseMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseMemberPayload>[]
          }
          create: {
            args: Prisma.UniverseMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseMemberPayload>
          }
          createMany: {
            args: Prisma.UniverseMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UniverseMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseMemberPayload>[]
          }
          delete: {
            args: Prisma.UniverseMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseMemberPayload>
          }
          update: {
            args: Prisma.UniverseMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseMemberPayload>
          }
          deleteMany: {
            args: Prisma.UniverseMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UniverseMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UniverseMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseMemberPayload>[]
          }
          upsert: {
            args: Prisma.UniverseMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseMemberPayload>
          }
          aggregate: {
            args: Prisma.UniverseMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUniverseMember>
          }
          groupBy: {
            args: Prisma.UniverseMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<UniverseMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.UniverseMemberCountArgs<ExtArgs>
            result: $Utils.Optional<UniverseMemberCountAggregateOutputType> | number
          }
        }
      }
      Universe: {
        payload: Prisma.$UniversePayload<ExtArgs>
        fields: Prisma.UniverseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UniverseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UniverseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversePayload>
          }
          findFirst: {
            args: Prisma.UniverseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UniverseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversePayload>
          }
          findMany: {
            args: Prisma.UniverseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversePayload>[]
          }
          create: {
            args: Prisma.UniverseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversePayload>
          }
          createMany: {
            args: Prisma.UniverseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UniverseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversePayload>[]
          }
          delete: {
            args: Prisma.UniverseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversePayload>
          }
          update: {
            args: Prisma.UniverseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversePayload>
          }
          deleteMany: {
            args: Prisma.UniverseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UniverseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UniverseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversePayload>[]
          }
          upsert: {
            args: Prisma.UniverseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversePayload>
          }
          aggregate: {
            args: Prisma.UniverseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUniverse>
          }
          groupBy: {
            args: Prisma.UniverseGroupByArgs<ExtArgs>
            result: $Utils.Optional<UniverseGroupByOutputType>[]
          }
          count: {
            args: Prisma.UniverseCountArgs<ExtArgs>
            result: $Utils.Optional<UniverseCountAggregateOutputType> | number
          }
        }
      }
      UniverseSource: {
        payload: Prisma.$UniverseSourcePayload<ExtArgs>
        fields: Prisma.UniverseSourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UniverseSourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseSourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UniverseSourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseSourcePayload>
          }
          findFirst: {
            args: Prisma.UniverseSourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseSourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UniverseSourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseSourcePayload>
          }
          findMany: {
            args: Prisma.UniverseSourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseSourcePayload>[]
          }
          create: {
            args: Prisma.UniverseSourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseSourcePayload>
          }
          createMany: {
            args: Prisma.UniverseSourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UniverseSourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseSourcePayload>[]
          }
          delete: {
            args: Prisma.UniverseSourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseSourcePayload>
          }
          update: {
            args: Prisma.UniverseSourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseSourcePayload>
          }
          deleteMany: {
            args: Prisma.UniverseSourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UniverseSourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UniverseSourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseSourcePayload>[]
          }
          upsert: {
            args: Prisma.UniverseSourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniverseSourcePayload>
          }
          aggregate: {
            args: Prisma.UniverseSourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUniverseSource>
          }
          groupBy: {
            args: Prisma.UniverseSourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UniverseSourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UniverseSourceCountArgs<ExtArgs>
            result: $Utils.Optional<UniverseSourceCountAggregateOutputType> | number
          }
        }
      }
      Scene: {
        payload: Prisma.$ScenePayload<ExtArgs>
        fields: Prisma.SceneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SceneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SceneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          findFirst: {
            args: Prisma.SceneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SceneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          findMany: {
            args: Prisma.SceneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>[]
          }
          create: {
            args: Prisma.SceneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          createMany: {
            args: Prisma.SceneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SceneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>[]
          }
          delete: {
            args: Prisma.SceneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          update: {
            args: Prisma.SceneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          deleteMany: {
            args: Prisma.SceneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SceneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SceneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>[]
          }
          upsert: {
            args: Prisma.SceneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScenePayload>
          }
          aggregate: {
            args: Prisma.SceneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScene>
          }
          groupBy: {
            args: Prisma.SceneGroupByArgs<ExtArgs>
            result: $Utils.Optional<SceneGroupByOutputType>[]
          }
          count: {
            args: Prisma.SceneCountArgs<ExtArgs>
            result: $Utils.Optional<SceneCountAggregateOutputType> | number
          }
        }
      }
      SceneAnchor: {
        payload: Prisma.$SceneAnchorPayload<ExtArgs>
        fields: Prisma.SceneAnchorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SceneAnchorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SceneAnchorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SceneAnchorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SceneAnchorPayload>
          }
          findFirst: {
            args: Prisma.SceneAnchorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SceneAnchorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SceneAnchorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SceneAnchorPayload>
          }
          findMany: {
            args: Prisma.SceneAnchorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SceneAnchorPayload>[]
          }
          create: {
            args: Prisma.SceneAnchorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SceneAnchorPayload>
          }
          createMany: {
            args: Prisma.SceneAnchorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SceneAnchorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SceneAnchorPayload>[]
          }
          delete: {
            args: Prisma.SceneAnchorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SceneAnchorPayload>
          }
          update: {
            args: Prisma.SceneAnchorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SceneAnchorPayload>
          }
          deleteMany: {
            args: Prisma.SceneAnchorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SceneAnchorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SceneAnchorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SceneAnchorPayload>[]
          }
          upsert: {
            args: Prisma.SceneAnchorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SceneAnchorPayload>
          }
          aggregate: {
            args: Prisma.SceneAnchorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSceneAnchor>
          }
          groupBy: {
            args: Prisma.SceneAnchorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SceneAnchorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SceneAnchorCountArgs<ExtArgs>
            result: $Utils.Optional<SceneAnchorCountAggregateOutputType> | number
          }
        }
      }
      StoryPath: {
        payload: Prisma.$StoryPathPayload<ExtArgs>
        fields: Prisma.StoryPathFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoryPathFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPathPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoryPathFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPathPayload>
          }
          findFirst: {
            args: Prisma.StoryPathFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPathPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoryPathFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPathPayload>
          }
          findMany: {
            args: Prisma.StoryPathFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPathPayload>[]
          }
          create: {
            args: Prisma.StoryPathCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPathPayload>
          }
          createMany: {
            args: Prisma.StoryPathCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoryPathCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPathPayload>[]
          }
          delete: {
            args: Prisma.StoryPathDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPathPayload>
          }
          update: {
            args: Prisma.StoryPathUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPathPayload>
          }
          deleteMany: {
            args: Prisma.StoryPathDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoryPathUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoryPathUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPathPayload>[]
          }
          upsert: {
            args: Prisma.StoryPathUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoryPathPayload>
          }
          aggregate: {
            args: Prisma.StoryPathAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoryPath>
          }
          groupBy: {
            args: Prisma.StoryPathGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoryPathGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoryPathCountArgs<ExtArgs>
            result: $Utils.Optional<StoryPathCountAggregateOutputType> | number
          }
        }
      }
      Storyline: {
        payload: Prisma.$StorylinePayload<ExtArgs>
        fields: Prisma.StorylineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StorylineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StorylineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePayload>
          }
          findFirst: {
            args: Prisma.StorylineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StorylineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePayload>
          }
          findMany: {
            args: Prisma.StorylineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePayload>[]
          }
          create: {
            args: Prisma.StorylineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePayload>
          }
          createMany: {
            args: Prisma.StorylineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StorylineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePayload>[]
          }
          delete: {
            args: Prisma.StorylineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePayload>
          }
          update: {
            args: Prisma.StorylineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePayload>
          }
          deleteMany: {
            args: Prisma.StorylineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StorylineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StorylineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePayload>[]
          }
          upsert: {
            args: Prisma.StorylineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePayload>
          }
          aggregate: {
            args: Prisma.StorylineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoryline>
          }
          groupBy: {
            args: Prisma.StorylineGroupByArgs<ExtArgs>
            result: $Utils.Optional<StorylineGroupByOutputType>[]
          }
          count: {
            args: Prisma.StorylineCountArgs<ExtArgs>
            result: $Utils.Optional<StorylineCountAggregateOutputType> | number
          }
        }
      }
      StorylinePath: {
        payload: Prisma.$StorylinePathPayload<ExtArgs>
        fields: Prisma.StorylinePathFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StorylinePathFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePathPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StorylinePathFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePathPayload>
          }
          findFirst: {
            args: Prisma.StorylinePathFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePathPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StorylinePathFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePathPayload>
          }
          findMany: {
            args: Prisma.StorylinePathFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePathPayload>[]
          }
          create: {
            args: Prisma.StorylinePathCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePathPayload>
          }
          createMany: {
            args: Prisma.StorylinePathCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StorylinePathCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePathPayload>[]
          }
          delete: {
            args: Prisma.StorylinePathDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePathPayload>
          }
          update: {
            args: Prisma.StorylinePathUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePathPayload>
          }
          deleteMany: {
            args: Prisma.StorylinePathDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StorylinePathUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StorylinePathUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePathPayload>[]
          }
          upsert: {
            args: Prisma.StorylinePathUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorylinePathPayload>
          }
          aggregate: {
            args: Prisma.StorylinePathAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStorylinePath>
          }
          groupBy: {
            args: Prisma.StorylinePathGroupByArgs<ExtArgs>
            result: $Utils.Optional<StorylinePathGroupByOutputType>[]
          }
          count: {
            args: Prisma.StorylinePathCountArgs<ExtArgs>
            result: $Utils.Optional<StorylinePathCountAggregateOutputType> | number
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
      FavoriteAnchor: {
        payload: Prisma.$FavoriteAnchorPayload<ExtArgs>
        fields: Prisma.FavoriteAnchorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteAnchorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteAnchorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteAnchorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteAnchorPayload>
          }
          findFirst: {
            args: Prisma.FavoriteAnchorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteAnchorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteAnchorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteAnchorPayload>
          }
          findMany: {
            args: Prisma.FavoriteAnchorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteAnchorPayload>[]
          }
          create: {
            args: Prisma.FavoriteAnchorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteAnchorPayload>
          }
          createMany: {
            args: Prisma.FavoriteAnchorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteAnchorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteAnchorPayload>[]
          }
          delete: {
            args: Prisma.FavoriteAnchorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteAnchorPayload>
          }
          update: {
            args: Prisma.FavoriteAnchorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteAnchorPayload>
          }
          deleteMany: {
            args: Prisma.FavoriteAnchorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteAnchorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteAnchorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteAnchorPayload>[]
          }
          upsert: {
            args: Prisma.FavoriteAnchorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoriteAnchorPayload>
          }
          aggregate: {
            args: Prisma.FavoriteAnchorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoriteAnchor>
          }
          groupBy: {
            args: Prisma.FavoriteAnchorGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteAnchorGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteAnchorCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteAnchorCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    universeMember?: UniverseMemberOmit
    universe?: UniverseOmit
    universeSource?: UniverseSourceOmit
    scene?: SceneOmit
    sceneAnchor?: SceneAnchorOmit
    storyPath?: StoryPathOmit
    storyline?: StorylineOmit
    storylinePath?: StorylinePathOmit
    session?: SessionOmit
    favoriteAnchor?: FavoriteAnchorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    universes: number
    scenes: number
    storylines: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    universes?: boolean | UserCountOutputTypeCountUniversesArgs
    scenes?: boolean | UserCountOutputTypeCountScenesArgs
    storylines?: boolean | UserCountOutputTypeCountStorylinesArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountUniversesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniverseMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SceneWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStorylinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorylineWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type UniverseCountOutputType
   */

  export type UniverseCountOutputType = {
    sources: number
    members: number
    scenes: number
    sessions: number
  }

  export type UniverseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sources?: boolean | UniverseCountOutputTypeCountSourcesArgs
    members?: boolean | UniverseCountOutputTypeCountMembersArgs
    scenes?: boolean | UniverseCountOutputTypeCountScenesArgs
    sessions?: boolean | UniverseCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UniverseCountOutputType without action
   */
  export type UniverseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseCountOutputType
     */
    select?: UniverseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UniverseCountOutputType without action
   */
  export type UniverseCountOutputTypeCountSourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniverseSourceWhereInput
  }

  /**
   * UniverseCountOutputType without action
   */
  export type UniverseCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniverseMemberWhereInput
  }

  /**
   * UniverseCountOutputType without action
   */
  export type UniverseCountOutputTypeCountScenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SceneWhereInput
  }

  /**
   * UniverseCountOutputType without action
   */
  export type UniverseCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type SceneCountOutputType
   */

  export type SceneCountOutputType = {
    anchors: number
    fromPaths: number
    toPaths: number
    variants: number
    sessions: number
  }

  export type SceneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anchors?: boolean | SceneCountOutputTypeCountAnchorsArgs
    fromPaths?: boolean | SceneCountOutputTypeCountFromPathsArgs
    toPaths?: boolean | SceneCountOutputTypeCountToPathsArgs
    variants?: boolean | SceneCountOutputTypeCountVariantsArgs
    sessions?: boolean | SceneCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * SceneCountOutputType without action
   */
  export type SceneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneCountOutputType
     */
    select?: SceneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SceneCountOutputType without action
   */
  export type SceneCountOutputTypeCountAnchorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SceneAnchorWhereInput
  }

  /**
   * SceneCountOutputType without action
   */
  export type SceneCountOutputTypeCountFromPathsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryPathWhereInput
  }

  /**
   * SceneCountOutputType without action
   */
  export type SceneCountOutputTypeCountToPathsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryPathWhereInput
  }

  /**
   * SceneCountOutputType without action
   */
  export type SceneCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SceneWhereInput
  }

  /**
   * SceneCountOutputType without action
   */
  export type SceneCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type SceneAnchorCountOutputType
   */

  export type SceneAnchorCountOutputType = {
    children: number
    sessions: number
  }

  export type SceneAnchorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | SceneAnchorCountOutputTypeCountChildrenArgs
    sessions?: boolean | SceneAnchorCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * SceneAnchorCountOutputType without action
   */
  export type SceneAnchorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchorCountOutputType
     */
    select?: SceneAnchorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SceneAnchorCountOutputType without action
   */
  export type SceneAnchorCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SceneAnchorWhereInput
  }

  /**
   * SceneAnchorCountOutputType without action
   */
  export type SceneAnchorCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteAnchorWhereInput
  }


  /**
   * Count Type StoryPathCountOutputType
   */

  export type StoryPathCountOutputType = {
    storylines: number
  }

  export type StoryPathCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    storylines?: boolean | StoryPathCountOutputTypeCountStorylinesArgs
  }

  // Custom InputTypes
  /**
   * StoryPathCountOutputType without action
   */
  export type StoryPathCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryPathCountOutputType
     */
    select?: StoryPathCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoryPathCountOutputType without action
   */
  export type StoryPathCountOutputTypeCountStorylinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorylinePathWhereInput
  }


  /**
   * Count Type StorylineCountOutputType
   */

  export type StorylineCountOutputType = {
    storyPaths: number
  }

  export type StorylineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    storyPaths?: boolean | StorylineCountOutputTypeCountStoryPathsArgs
  }

  // Custom InputTypes
  /**
   * StorylineCountOutputType without action
   */
  export type StorylineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorylineCountOutputType
     */
    select?: StorylineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StorylineCountOutputType without action
   */
  export type StorylineCountOutputTypeCountStoryPathsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorylinePathWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    favorites: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorites?: boolean | SessionCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteAnchorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    name?: boolean
    universes?: boolean | User$universesArgs<ExtArgs>
    scenes?: boolean | User$scenesArgs<ExtArgs>
    storylines?: boolean | User$storylinesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    universes?: boolean | User$universesArgs<ExtArgs>
    scenes?: boolean | User$scenesArgs<ExtArgs>
    storylines?: boolean | User$storylinesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      universes: Prisma.$UniverseMemberPayload<ExtArgs>[]
      scenes: Prisma.$ScenePayload<ExtArgs>[]
      storylines: Prisma.$StorylinePayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string | null
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
    universes<T extends User$universesArgs<ExtArgs> = {}>(args?: Subset<T, User$universesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniverseMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scenes<T extends User$scenesArgs<ExtArgs> = {}>(args?: Subset<T, User$scenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    storylines<T extends User$storylinesArgs<ExtArgs> = {}>(args?: Subset<T, User$storylinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorylinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
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
   * User.universes
   */
  export type User$universesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseMember
     */
    select?: UniverseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseMember
     */
    omit?: UniverseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseMemberInclude<ExtArgs> | null
    where?: UniverseMemberWhereInput
    orderBy?: UniverseMemberOrderByWithRelationInput | UniverseMemberOrderByWithRelationInput[]
    cursor?: UniverseMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UniverseMemberScalarFieldEnum | UniverseMemberScalarFieldEnum[]
  }

  /**
   * User.scenes
   */
  export type User$scenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    where?: SceneWhereInput
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    cursor?: SceneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SceneScalarFieldEnum | SceneScalarFieldEnum[]
  }

  /**
   * User.storylines
   */
  export type User$storylinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storyline
     */
    select?: StorylineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Storyline
     */
    omit?: StorylineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylineInclude<ExtArgs> | null
    where?: StorylineWhereInput
    orderBy?: StorylineOrderByWithRelationInput | StorylineOrderByWithRelationInput[]
    cursor?: StorylineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StorylineScalarFieldEnum | StorylineScalarFieldEnum[]
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
   * Model UniverseMember
   */

  export type AggregateUniverseMember = {
    _count: UniverseMemberCountAggregateOutputType | null
    _avg: UniverseMemberAvgAggregateOutputType | null
    _sum: UniverseMemberSumAggregateOutputType | null
    _min: UniverseMemberMinAggregateOutputType | null
    _max: UniverseMemberMaxAggregateOutputType | null
  }

  export type UniverseMemberAvgAggregateOutputType = {
    userId: number | null
    universeId: number | null
  }

  export type UniverseMemberSumAggregateOutputType = {
    userId: number | null
    universeId: number | null
  }

  export type UniverseMemberMinAggregateOutputType = {
    userId: number | null
    universeId: number | null
  }

  export type UniverseMemberMaxAggregateOutputType = {
    userId: number | null
    universeId: number | null
  }

  export type UniverseMemberCountAggregateOutputType = {
    userId: number
    universeId: number
    _all: number
  }


  export type UniverseMemberAvgAggregateInputType = {
    userId?: true
    universeId?: true
  }

  export type UniverseMemberSumAggregateInputType = {
    userId?: true
    universeId?: true
  }

  export type UniverseMemberMinAggregateInputType = {
    userId?: true
    universeId?: true
  }

  export type UniverseMemberMaxAggregateInputType = {
    userId?: true
    universeId?: true
  }

  export type UniverseMemberCountAggregateInputType = {
    userId?: true
    universeId?: true
    _all?: true
  }

  export type UniverseMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UniverseMember to aggregate.
     */
    where?: UniverseMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniverseMembers to fetch.
     */
    orderBy?: UniverseMemberOrderByWithRelationInput | UniverseMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UniverseMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniverseMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniverseMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UniverseMembers
    **/
    _count?: true | UniverseMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UniverseMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UniverseMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UniverseMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UniverseMemberMaxAggregateInputType
  }

  export type GetUniverseMemberAggregateType<T extends UniverseMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateUniverseMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUniverseMember[P]>
      : GetScalarType<T[P], AggregateUniverseMember[P]>
  }




  export type UniverseMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniverseMemberWhereInput
    orderBy?: UniverseMemberOrderByWithAggregationInput | UniverseMemberOrderByWithAggregationInput[]
    by: UniverseMemberScalarFieldEnum[] | UniverseMemberScalarFieldEnum
    having?: UniverseMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UniverseMemberCountAggregateInputType | true
    _avg?: UniverseMemberAvgAggregateInputType
    _sum?: UniverseMemberSumAggregateInputType
    _min?: UniverseMemberMinAggregateInputType
    _max?: UniverseMemberMaxAggregateInputType
  }

  export type UniverseMemberGroupByOutputType = {
    userId: number
    universeId: number
    _count: UniverseMemberCountAggregateOutputType | null
    _avg: UniverseMemberAvgAggregateOutputType | null
    _sum: UniverseMemberSumAggregateOutputType | null
    _min: UniverseMemberMinAggregateOutputType | null
    _max: UniverseMemberMaxAggregateOutputType | null
  }

  type GetUniverseMemberGroupByPayload<T extends UniverseMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UniverseMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UniverseMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UniverseMemberGroupByOutputType[P]>
            : GetScalarType<T[P], UniverseMemberGroupByOutputType[P]>
        }
      >
    >


  export type UniverseMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    universeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universeMember"]>

  export type UniverseMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    universeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universeMember"]>

  export type UniverseMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    universeId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universeMember"]>

  export type UniverseMemberSelectScalar = {
    userId?: boolean
    universeId?: boolean
  }

  export type UniverseMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "universeId", ExtArgs["result"]["universeMember"]>
  export type UniverseMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
  }
  export type UniverseMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
  }
  export type UniverseMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
  }

  export type $UniverseMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UniverseMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      universe: Prisma.$UniversePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      universeId: number
    }, ExtArgs["result"]["universeMember"]>
    composites: {}
  }

  type UniverseMemberGetPayload<S extends boolean | null | undefined | UniverseMemberDefaultArgs> = $Result.GetResult<Prisma.$UniverseMemberPayload, S>

  type UniverseMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UniverseMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UniverseMemberCountAggregateInputType | true
    }

  export interface UniverseMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UniverseMember'], meta: { name: 'UniverseMember' } }
    /**
     * Find zero or one UniverseMember that matches the filter.
     * @param {UniverseMemberFindUniqueArgs} args - Arguments to find a UniverseMember
     * @example
     * // Get one UniverseMember
     * const universeMember = await prisma.universeMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UniverseMemberFindUniqueArgs>(args: SelectSubset<T, UniverseMemberFindUniqueArgs<ExtArgs>>): Prisma__UniverseMemberClient<$Result.GetResult<Prisma.$UniverseMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UniverseMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UniverseMemberFindUniqueOrThrowArgs} args - Arguments to find a UniverseMember
     * @example
     * // Get one UniverseMember
     * const universeMember = await prisma.universeMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UniverseMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, UniverseMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UniverseMemberClient<$Result.GetResult<Prisma.$UniverseMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UniverseMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseMemberFindFirstArgs} args - Arguments to find a UniverseMember
     * @example
     * // Get one UniverseMember
     * const universeMember = await prisma.universeMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UniverseMemberFindFirstArgs>(args?: SelectSubset<T, UniverseMemberFindFirstArgs<ExtArgs>>): Prisma__UniverseMemberClient<$Result.GetResult<Prisma.$UniverseMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UniverseMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseMemberFindFirstOrThrowArgs} args - Arguments to find a UniverseMember
     * @example
     * // Get one UniverseMember
     * const universeMember = await prisma.universeMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UniverseMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, UniverseMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__UniverseMemberClient<$Result.GetResult<Prisma.$UniverseMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UniverseMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UniverseMembers
     * const universeMembers = await prisma.universeMember.findMany()
     * 
     * // Get first 10 UniverseMembers
     * const universeMembers = await prisma.universeMember.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const universeMemberWithUserIdOnly = await prisma.universeMember.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UniverseMemberFindManyArgs>(args?: SelectSubset<T, UniverseMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniverseMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UniverseMember.
     * @param {UniverseMemberCreateArgs} args - Arguments to create a UniverseMember.
     * @example
     * // Create one UniverseMember
     * const UniverseMember = await prisma.universeMember.create({
     *   data: {
     *     // ... data to create a UniverseMember
     *   }
     * })
     * 
     */
    create<T extends UniverseMemberCreateArgs>(args: SelectSubset<T, UniverseMemberCreateArgs<ExtArgs>>): Prisma__UniverseMemberClient<$Result.GetResult<Prisma.$UniverseMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UniverseMembers.
     * @param {UniverseMemberCreateManyArgs} args - Arguments to create many UniverseMembers.
     * @example
     * // Create many UniverseMembers
     * const universeMember = await prisma.universeMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UniverseMemberCreateManyArgs>(args?: SelectSubset<T, UniverseMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UniverseMembers and returns the data saved in the database.
     * @param {UniverseMemberCreateManyAndReturnArgs} args - Arguments to create many UniverseMembers.
     * @example
     * // Create many UniverseMembers
     * const universeMember = await prisma.universeMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UniverseMembers and only return the `userId`
     * const universeMemberWithUserIdOnly = await prisma.universeMember.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UniverseMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, UniverseMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniverseMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UniverseMember.
     * @param {UniverseMemberDeleteArgs} args - Arguments to delete one UniverseMember.
     * @example
     * // Delete one UniverseMember
     * const UniverseMember = await prisma.universeMember.delete({
     *   where: {
     *     // ... filter to delete one UniverseMember
     *   }
     * })
     * 
     */
    delete<T extends UniverseMemberDeleteArgs>(args: SelectSubset<T, UniverseMemberDeleteArgs<ExtArgs>>): Prisma__UniverseMemberClient<$Result.GetResult<Prisma.$UniverseMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UniverseMember.
     * @param {UniverseMemberUpdateArgs} args - Arguments to update one UniverseMember.
     * @example
     * // Update one UniverseMember
     * const universeMember = await prisma.universeMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UniverseMemberUpdateArgs>(args: SelectSubset<T, UniverseMemberUpdateArgs<ExtArgs>>): Prisma__UniverseMemberClient<$Result.GetResult<Prisma.$UniverseMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UniverseMembers.
     * @param {UniverseMemberDeleteManyArgs} args - Arguments to filter UniverseMembers to delete.
     * @example
     * // Delete a few UniverseMembers
     * const { count } = await prisma.universeMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UniverseMemberDeleteManyArgs>(args?: SelectSubset<T, UniverseMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UniverseMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UniverseMembers
     * const universeMember = await prisma.universeMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UniverseMemberUpdateManyArgs>(args: SelectSubset<T, UniverseMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UniverseMembers and returns the data updated in the database.
     * @param {UniverseMemberUpdateManyAndReturnArgs} args - Arguments to update many UniverseMembers.
     * @example
     * // Update many UniverseMembers
     * const universeMember = await prisma.universeMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UniverseMembers and only return the `userId`
     * const universeMemberWithUserIdOnly = await prisma.universeMember.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UniverseMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, UniverseMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniverseMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UniverseMember.
     * @param {UniverseMemberUpsertArgs} args - Arguments to update or create a UniverseMember.
     * @example
     * // Update or create a UniverseMember
     * const universeMember = await prisma.universeMember.upsert({
     *   create: {
     *     // ... data to create a UniverseMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UniverseMember we want to update
     *   }
     * })
     */
    upsert<T extends UniverseMemberUpsertArgs>(args: SelectSubset<T, UniverseMemberUpsertArgs<ExtArgs>>): Prisma__UniverseMemberClient<$Result.GetResult<Prisma.$UniverseMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UniverseMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseMemberCountArgs} args - Arguments to filter UniverseMembers to count.
     * @example
     * // Count the number of UniverseMembers
     * const count = await prisma.universeMember.count({
     *   where: {
     *     // ... the filter for the UniverseMembers we want to count
     *   }
     * })
    **/
    count<T extends UniverseMemberCountArgs>(
      args?: Subset<T, UniverseMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UniverseMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UniverseMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UniverseMemberAggregateArgs>(args: Subset<T, UniverseMemberAggregateArgs>): Prisma.PrismaPromise<GetUniverseMemberAggregateType<T>>

    /**
     * Group by UniverseMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseMemberGroupByArgs} args - Group by arguments.
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
      T extends UniverseMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UniverseMemberGroupByArgs['orderBy'] }
        : { orderBy?: UniverseMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UniverseMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUniverseMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UniverseMember model
   */
  readonly fields: UniverseMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UniverseMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UniverseMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    universe<T extends UniverseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UniverseDefaultArgs<ExtArgs>>): Prisma__UniverseClient<$Result.GetResult<Prisma.$UniversePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UniverseMember model
   */
  interface UniverseMemberFieldRefs {
    readonly userId: FieldRef<"UniverseMember", 'Int'>
    readonly universeId: FieldRef<"UniverseMember", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UniverseMember findUnique
   */
  export type UniverseMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseMember
     */
    select?: UniverseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseMember
     */
    omit?: UniverseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseMemberInclude<ExtArgs> | null
    /**
     * Filter, which UniverseMember to fetch.
     */
    where: UniverseMemberWhereUniqueInput
  }

  /**
   * UniverseMember findUniqueOrThrow
   */
  export type UniverseMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseMember
     */
    select?: UniverseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseMember
     */
    omit?: UniverseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseMemberInclude<ExtArgs> | null
    /**
     * Filter, which UniverseMember to fetch.
     */
    where: UniverseMemberWhereUniqueInput
  }

  /**
   * UniverseMember findFirst
   */
  export type UniverseMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseMember
     */
    select?: UniverseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseMember
     */
    omit?: UniverseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseMemberInclude<ExtArgs> | null
    /**
     * Filter, which UniverseMember to fetch.
     */
    where?: UniverseMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniverseMembers to fetch.
     */
    orderBy?: UniverseMemberOrderByWithRelationInput | UniverseMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UniverseMembers.
     */
    cursor?: UniverseMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniverseMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniverseMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UniverseMembers.
     */
    distinct?: UniverseMemberScalarFieldEnum | UniverseMemberScalarFieldEnum[]
  }

  /**
   * UniverseMember findFirstOrThrow
   */
  export type UniverseMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseMember
     */
    select?: UniverseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseMember
     */
    omit?: UniverseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseMemberInclude<ExtArgs> | null
    /**
     * Filter, which UniverseMember to fetch.
     */
    where?: UniverseMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniverseMembers to fetch.
     */
    orderBy?: UniverseMemberOrderByWithRelationInput | UniverseMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UniverseMembers.
     */
    cursor?: UniverseMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniverseMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniverseMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UniverseMembers.
     */
    distinct?: UniverseMemberScalarFieldEnum | UniverseMemberScalarFieldEnum[]
  }

  /**
   * UniverseMember findMany
   */
  export type UniverseMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseMember
     */
    select?: UniverseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseMember
     */
    omit?: UniverseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseMemberInclude<ExtArgs> | null
    /**
     * Filter, which UniverseMembers to fetch.
     */
    where?: UniverseMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniverseMembers to fetch.
     */
    orderBy?: UniverseMemberOrderByWithRelationInput | UniverseMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UniverseMembers.
     */
    cursor?: UniverseMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniverseMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniverseMembers.
     */
    skip?: number
    distinct?: UniverseMemberScalarFieldEnum | UniverseMemberScalarFieldEnum[]
  }

  /**
   * UniverseMember create
   */
  export type UniverseMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseMember
     */
    select?: UniverseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseMember
     */
    omit?: UniverseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a UniverseMember.
     */
    data: XOR<UniverseMemberCreateInput, UniverseMemberUncheckedCreateInput>
  }

  /**
   * UniverseMember createMany
   */
  export type UniverseMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UniverseMembers.
     */
    data: UniverseMemberCreateManyInput | UniverseMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UniverseMember createManyAndReturn
   */
  export type UniverseMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseMember
     */
    select?: UniverseMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseMember
     */
    omit?: UniverseMemberOmit<ExtArgs> | null
    /**
     * The data used to create many UniverseMembers.
     */
    data: UniverseMemberCreateManyInput | UniverseMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UniverseMember update
   */
  export type UniverseMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseMember
     */
    select?: UniverseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseMember
     */
    omit?: UniverseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a UniverseMember.
     */
    data: XOR<UniverseMemberUpdateInput, UniverseMemberUncheckedUpdateInput>
    /**
     * Choose, which UniverseMember to update.
     */
    where: UniverseMemberWhereUniqueInput
  }

  /**
   * UniverseMember updateMany
   */
  export type UniverseMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UniverseMembers.
     */
    data: XOR<UniverseMemberUpdateManyMutationInput, UniverseMemberUncheckedUpdateManyInput>
    /**
     * Filter which UniverseMembers to update
     */
    where?: UniverseMemberWhereInput
    /**
     * Limit how many UniverseMembers to update.
     */
    limit?: number
  }

  /**
   * UniverseMember updateManyAndReturn
   */
  export type UniverseMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseMember
     */
    select?: UniverseMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseMember
     */
    omit?: UniverseMemberOmit<ExtArgs> | null
    /**
     * The data used to update UniverseMembers.
     */
    data: XOR<UniverseMemberUpdateManyMutationInput, UniverseMemberUncheckedUpdateManyInput>
    /**
     * Filter which UniverseMembers to update
     */
    where?: UniverseMemberWhereInput
    /**
     * Limit how many UniverseMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UniverseMember upsert
   */
  export type UniverseMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseMember
     */
    select?: UniverseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseMember
     */
    omit?: UniverseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the UniverseMember to update in case it exists.
     */
    where: UniverseMemberWhereUniqueInput
    /**
     * In case the UniverseMember found by the `where` argument doesn't exist, create a new UniverseMember with this data.
     */
    create: XOR<UniverseMemberCreateInput, UniverseMemberUncheckedCreateInput>
    /**
     * In case the UniverseMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UniverseMemberUpdateInput, UniverseMemberUncheckedUpdateInput>
  }

  /**
   * UniverseMember delete
   */
  export type UniverseMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseMember
     */
    select?: UniverseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseMember
     */
    omit?: UniverseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseMemberInclude<ExtArgs> | null
    /**
     * Filter which UniverseMember to delete.
     */
    where: UniverseMemberWhereUniqueInput
  }

  /**
   * UniverseMember deleteMany
   */
  export type UniverseMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UniverseMembers to delete
     */
    where?: UniverseMemberWhereInput
    /**
     * Limit how many UniverseMembers to delete.
     */
    limit?: number
  }

  /**
   * UniverseMember without action
   */
  export type UniverseMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseMember
     */
    select?: UniverseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseMember
     */
    omit?: UniverseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseMemberInclude<ExtArgs> | null
  }


  /**
   * Model Universe
   */

  export type AggregateUniverse = {
    _count: UniverseCountAggregateOutputType | null
    _avg: UniverseAvgAggregateOutputType | null
    _sum: UniverseSumAggregateOutputType | null
    _min: UniverseMinAggregateOutputType | null
    _max: UniverseMaxAggregateOutputType | null
  }

  export type UniverseAvgAggregateOutputType = {
    id: number | null
  }

  export type UniverseSumAggregateOutputType = {
    id: number | null
  }

  export type UniverseMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    contextDB: string | null
    visibility: $Enums.Visibility | null
  }

  export type UniverseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    contextDB: string | null
    visibility: $Enums.Visibility | null
  }

  export type UniverseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    contextDB: number
    visibility: number
    _all: number
  }


  export type UniverseAvgAggregateInputType = {
    id?: true
  }

  export type UniverseSumAggregateInputType = {
    id?: true
  }

  export type UniverseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    contextDB?: true
    visibility?: true
  }

  export type UniverseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    contextDB?: true
    visibility?: true
  }

  export type UniverseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    contextDB?: true
    visibility?: true
    _all?: true
  }

  export type UniverseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Universe to aggregate.
     */
    where?: UniverseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universes to fetch.
     */
    orderBy?: UniverseOrderByWithRelationInput | UniverseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UniverseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Universes
    **/
    _count?: true | UniverseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UniverseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UniverseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UniverseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UniverseMaxAggregateInputType
  }

  export type GetUniverseAggregateType<T extends UniverseAggregateArgs> = {
        [P in keyof T & keyof AggregateUniverse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUniverse[P]>
      : GetScalarType<T[P], AggregateUniverse[P]>
  }




  export type UniverseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniverseWhereInput
    orderBy?: UniverseOrderByWithAggregationInput | UniverseOrderByWithAggregationInput[]
    by: UniverseScalarFieldEnum[] | UniverseScalarFieldEnum
    having?: UniverseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UniverseCountAggregateInputType | true
    _avg?: UniverseAvgAggregateInputType
    _sum?: UniverseSumAggregateInputType
    _min?: UniverseMinAggregateInputType
    _max?: UniverseMaxAggregateInputType
  }

  export type UniverseGroupByOutputType = {
    id: number
    name: string
    description: string
    contextDB: string
    visibility: $Enums.Visibility
    _count: UniverseCountAggregateOutputType | null
    _avg: UniverseAvgAggregateOutputType | null
    _sum: UniverseSumAggregateOutputType | null
    _min: UniverseMinAggregateOutputType | null
    _max: UniverseMaxAggregateOutputType | null
  }

  type GetUniverseGroupByPayload<T extends UniverseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UniverseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UniverseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UniverseGroupByOutputType[P]>
            : GetScalarType<T[P], UniverseGroupByOutputType[P]>
        }
      >
    >


  export type UniverseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    contextDB?: boolean
    visibility?: boolean
    sources?: boolean | Universe$sourcesArgs<ExtArgs>
    members?: boolean | Universe$membersArgs<ExtArgs>
    scenes?: boolean | Universe$scenesArgs<ExtArgs>
    sessions?: boolean | Universe$sessionsArgs<ExtArgs>
    _count?: boolean | UniverseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universe"]>

  export type UniverseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    contextDB?: boolean
    visibility?: boolean
  }, ExtArgs["result"]["universe"]>

  export type UniverseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    contextDB?: boolean
    visibility?: boolean
  }, ExtArgs["result"]["universe"]>

  export type UniverseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    contextDB?: boolean
    visibility?: boolean
  }

  export type UniverseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "contextDB" | "visibility", ExtArgs["result"]["universe"]>
  export type UniverseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sources?: boolean | Universe$sourcesArgs<ExtArgs>
    members?: boolean | Universe$membersArgs<ExtArgs>
    scenes?: boolean | Universe$scenesArgs<ExtArgs>
    sessions?: boolean | Universe$sessionsArgs<ExtArgs>
    _count?: boolean | UniverseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UniverseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UniverseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UniversePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Universe"
    objects: {
      sources: Prisma.$UniverseSourcePayload<ExtArgs>[]
      members: Prisma.$UniverseMemberPayload<ExtArgs>[]
      scenes: Prisma.$ScenePayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      contextDB: string
      visibility: $Enums.Visibility
    }, ExtArgs["result"]["universe"]>
    composites: {}
  }

  type UniverseGetPayload<S extends boolean | null | undefined | UniverseDefaultArgs> = $Result.GetResult<Prisma.$UniversePayload, S>

  type UniverseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UniverseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UniverseCountAggregateInputType | true
    }

  export interface UniverseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Universe'], meta: { name: 'Universe' } }
    /**
     * Find zero or one Universe that matches the filter.
     * @param {UniverseFindUniqueArgs} args - Arguments to find a Universe
     * @example
     * // Get one Universe
     * const universe = await prisma.universe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UniverseFindUniqueArgs>(args: SelectSubset<T, UniverseFindUniqueArgs<ExtArgs>>): Prisma__UniverseClient<$Result.GetResult<Prisma.$UniversePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Universe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UniverseFindUniqueOrThrowArgs} args - Arguments to find a Universe
     * @example
     * // Get one Universe
     * const universe = await prisma.universe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UniverseFindUniqueOrThrowArgs>(args: SelectSubset<T, UniverseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UniverseClient<$Result.GetResult<Prisma.$UniversePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Universe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseFindFirstArgs} args - Arguments to find a Universe
     * @example
     * // Get one Universe
     * const universe = await prisma.universe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UniverseFindFirstArgs>(args?: SelectSubset<T, UniverseFindFirstArgs<ExtArgs>>): Prisma__UniverseClient<$Result.GetResult<Prisma.$UniversePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Universe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseFindFirstOrThrowArgs} args - Arguments to find a Universe
     * @example
     * // Get one Universe
     * const universe = await prisma.universe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UniverseFindFirstOrThrowArgs>(args?: SelectSubset<T, UniverseFindFirstOrThrowArgs<ExtArgs>>): Prisma__UniverseClient<$Result.GetResult<Prisma.$UniversePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Universes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Universes
     * const universes = await prisma.universe.findMany()
     * 
     * // Get first 10 Universes
     * const universes = await prisma.universe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const universeWithIdOnly = await prisma.universe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UniverseFindManyArgs>(args?: SelectSubset<T, UniverseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Universe.
     * @param {UniverseCreateArgs} args - Arguments to create a Universe.
     * @example
     * // Create one Universe
     * const Universe = await prisma.universe.create({
     *   data: {
     *     // ... data to create a Universe
     *   }
     * })
     * 
     */
    create<T extends UniverseCreateArgs>(args: SelectSubset<T, UniverseCreateArgs<ExtArgs>>): Prisma__UniverseClient<$Result.GetResult<Prisma.$UniversePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Universes.
     * @param {UniverseCreateManyArgs} args - Arguments to create many Universes.
     * @example
     * // Create many Universes
     * const universe = await prisma.universe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UniverseCreateManyArgs>(args?: SelectSubset<T, UniverseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Universes and returns the data saved in the database.
     * @param {UniverseCreateManyAndReturnArgs} args - Arguments to create many Universes.
     * @example
     * // Create many Universes
     * const universe = await prisma.universe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Universes and only return the `id`
     * const universeWithIdOnly = await prisma.universe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UniverseCreateManyAndReturnArgs>(args?: SelectSubset<T, UniverseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Universe.
     * @param {UniverseDeleteArgs} args - Arguments to delete one Universe.
     * @example
     * // Delete one Universe
     * const Universe = await prisma.universe.delete({
     *   where: {
     *     // ... filter to delete one Universe
     *   }
     * })
     * 
     */
    delete<T extends UniverseDeleteArgs>(args: SelectSubset<T, UniverseDeleteArgs<ExtArgs>>): Prisma__UniverseClient<$Result.GetResult<Prisma.$UniversePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Universe.
     * @param {UniverseUpdateArgs} args - Arguments to update one Universe.
     * @example
     * // Update one Universe
     * const universe = await prisma.universe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UniverseUpdateArgs>(args: SelectSubset<T, UniverseUpdateArgs<ExtArgs>>): Prisma__UniverseClient<$Result.GetResult<Prisma.$UniversePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Universes.
     * @param {UniverseDeleteManyArgs} args - Arguments to filter Universes to delete.
     * @example
     * // Delete a few Universes
     * const { count } = await prisma.universe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UniverseDeleteManyArgs>(args?: SelectSubset<T, UniverseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Universes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Universes
     * const universe = await prisma.universe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UniverseUpdateManyArgs>(args: SelectSubset<T, UniverseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Universes and returns the data updated in the database.
     * @param {UniverseUpdateManyAndReturnArgs} args - Arguments to update many Universes.
     * @example
     * // Update many Universes
     * const universe = await prisma.universe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Universes and only return the `id`
     * const universeWithIdOnly = await prisma.universe.updateManyAndReturn({
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
    updateManyAndReturn<T extends UniverseUpdateManyAndReturnArgs>(args: SelectSubset<T, UniverseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Universe.
     * @param {UniverseUpsertArgs} args - Arguments to update or create a Universe.
     * @example
     * // Update or create a Universe
     * const universe = await prisma.universe.upsert({
     *   create: {
     *     // ... data to create a Universe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Universe we want to update
     *   }
     * })
     */
    upsert<T extends UniverseUpsertArgs>(args: SelectSubset<T, UniverseUpsertArgs<ExtArgs>>): Prisma__UniverseClient<$Result.GetResult<Prisma.$UniversePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Universes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseCountArgs} args - Arguments to filter Universes to count.
     * @example
     * // Count the number of Universes
     * const count = await prisma.universe.count({
     *   where: {
     *     // ... the filter for the Universes we want to count
     *   }
     * })
    **/
    count<T extends UniverseCountArgs>(
      args?: Subset<T, UniverseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UniverseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Universe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UniverseAggregateArgs>(args: Subset<T, UniverseAggregateArgs>): Prisma.PrismaPromise<GetUniverseAggregateType<T>>

    /**
     * Group by Universe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseGroupByArgs} args - Group by arguments.
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
      T extends UniverseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UniverseGroupByArgs['orderBy'] }
        : { orderBy?: UniverseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UniverseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUniverseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Universe model
   */
  readonly fields: UniverseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Universe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UniverseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sources<T extends Universe$sourcesArgs<ExtArgs> = {}>(args?: Subset<T, Universe$sourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniverseSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Universe$membersArgs<ExtArgs> = {}>(args?: Subset<T, Universe$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniverseMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scenes<T extends Universe$scenesArgs<ExtArgs> = {}>(args?: Subset<T, Universe$scenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Universe$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Universe$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Universe model
   */
  interface UniverseFieldRefs {
    readonly id: FieldRef<"Universe", 'Int'>
    readonly name: FieldRef<"Universe", 'String'>
    readonly description: FieldRef<"Universe", 'String'>
    readonly contextDB: FieldRef<"Universe", 'String'>
    readonly visibility: FieldRef<"Universe", 'Visibility'>
  }
    

  // Custom InputTypes
  /**
   * Universe findUnique
   */
  export type UniverseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universe
     */
    select?: UniverseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universe
     */
    omit?: UniverseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseInclude<ExtArgs> | null
    /**
     * Filter, which Universe to fetch.
     */
    where: UniverseWhereUniqueInput
  }

  /**
   * Universe findUniqueOrThrow
   */
  export type UniverseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universe
     */
    select?: UniverseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universe
     */
    omit?: UniverseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseInclude<ExtArgs> | null
    /**
     * Filter, which Universe to fetch.
     */
    where: UniverseWhereUniqueInput
  }

  /**
   * Universe findFirst
   */
  export type UniverseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universe
     */
    select?: UniverseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universe
     */
    omit?: UniverseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseInclude<ExtArgs> | null
    /**
     * Filter, which Universe to fetch.
     */
    where?: UniverseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universes to fetch.
     */
    orderBy?: UniverseOrderByWithRelationInput | UniverseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Universes.
     */
    cursor?: UniverseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Universes.
     */
    distinct?: UniverseScalarFieldEnum | UniverseScalarFieldEnum[]
  }

  /**
   * Universe findFirstOrThrow
   */
  export type UniverseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universe
     */
    select?: UniverseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universe
     */
    omit?: UniverseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseInclude<ExtArgs> | null
    /**
     * Filter, which Universe to fetch.
     */
    where?: UniverseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universes to fetch.
     */
    orderBy?: UniverseOrderByWithRelationInput | UniverseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Universes.
     */
    cursor?: UniverseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Universes.
     */
    distinct?: UniverseScalarFieldEnum | UniverseScalarFieldEnum[]
  }

  /**
   * Universe findMany
   */
  export type UniverseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universe
     */
    select?: UniverseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universe
     */
    omit?: UniverseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseInclude<ExtArgs> | null
    /**
     * Filter, which Universes to fetch.
     */
    where?: UniverseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Universes to fetch.
     */
    orderBy?: UniverseOrderByWithRelationInput | UniverseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Universes.
     */
    cursor?: UniverseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Universes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Universes.
     */
    skip?: number
    distinct?: UniverseScalarFieldEnum | UniverseScalarFieldEnum[]
  }

  /**
   * Universe create
   */
  export type UniverseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universe
     */
    select?: UniverseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universe
     */
    omit?: UniverseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseInclude<ExtArgs> | null
    /**
     * The data needed to create a Universe.
     */
    data: XOR<UniverseCreateInput, UniverseUncheckedCreateInput>
  }

  /**
   * Universe createMany
   */
  export type UniverseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Universes.
     */
    data: UniverseCreateManyInput | UniverseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Universe createManyAndReturn
   */
  export type UniverseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universe
     */
    select?: UniverseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Universe
     */
    omit?: UniverseOmit<ExtArgs> | null
    /**
     * The data used to create many Universes.
     */
    data: UniverseCreateManyInput | UniverseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Universe update
   */
  export type UniverseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universe
     */
    select?: UniverseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universe
     */
    omit?: UniverseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseInclude<ExtArgs> | null
    /**
     * The data needed to update a Universe.
     */
    data: XOR<UniverseUpdateInput, UniverseUncheckedUpdateInput>
    /**
     * Choose, which Universe to update.
     */
    where: UniverseWhereUniqueInput
  }

  /**
   * Universe updateMany
   */
  export type UniverseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Universes.
     */
    data: XOR<UniverseUpdateManyMutationInput, UniverseUncheckedUpdateManyInput>
    /**
     * Filter which Universes to update
     */
    where?: UniverseWhereInput
    /**
     * Limit how many Universes to update.
     */
    limit?: number
  }

  /**
   * Universe updateManyAndReturn
   */
  export type UniverseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universe
     */
    select?: UniverseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Universe
     */
    omit?: UniverseOmit<ExtArgs> | null
    /**
     * The data used to update Universes.
     */
    data: XOR<UniverseUpdateManyMutationInput, UniverseUncheckedUpdateManyInput>
    /**
     * Filter which Universes to update
     */
    where?: UniverseWhereInput
    /**
     * Limit how many Universes to update.
     */
    limit?: number
  }

  /**
   * Universe upsert
   */
  export type UniverseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universe
     */
    select?: UniverseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universe
     */
    omit?: UniverseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseInclude<ExtArgs> | null
    /**
     * The filter to search for the Universe to update in case it exists.
     */
    where: UniverseWhereUniqueInput
    /**
     * In case the Universe found by the `where` argument doesn't exist, create a new Universe with this data.
     */
    create: XOR<UniverseCreateInput, UniverseUncheckedCreateInput>
    /**
     * In case the Universe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UniverseUpdateInput, UniverseUncheckedUpdateInput>
  }

  /**
   * Universe delete
   */
  export type UniverseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universe
     */
    select?: UniverseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universe
     */
    omit?: UniverseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseInclude<ExtArgs> | null
    /**
     * Filter which Universe to delete.
     */
    where: UniverseWhereUniqueInput
  }

  /**
   * Universe deleteMany
   */
  export type UniverseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Universes to delete
     */
    where?: UniverseWhereInput
    /**
     * Limit how many Universes to delete.
     */
    limit?: number
  }

  /**
   * Universe.sources
   */
  export type Universe$sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseSource
     */
    select?: UniverseSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseSource
     */
    omit?: UniverseSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseSourceInclude<ExtArgs> | null
    where?: UniverseSourceWhereInput
    orderBy?: UniverseSourceOrderByWithRelationInput | UniverseSourceOrderByWithRelationInput[]
    cursor?: UniverseSourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UniverseSourceScalarFieldEnum | UniverseSourceScalarFieldEnum[]
  }

  /**
   * Universe.members
   */
  export type Universe$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseMember
     */
    select?: UniverseMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseMember
     */
    omit?: UniverseMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseMemberInclude<ExtArgs> | null
    where?: UniverseMemberWhereInput
    orderBy?: UniverseMemberOrderByWithRelationInput | UniverseMemberOrderByWithRelationInput[]
    cursor?: UniverseMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UniverseMemberScalarFieldEnum | UniverseMemberScalarFieldEnum[]
  }

  /**
   * Universe.scenes
   */
  export type Universe$scenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    where?: SceneWhereInput
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    cursor?: SceneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SceneScalarFieldEnum | SceneScalarFieldEnum[]
  }

  /**
   * Universe.sessions
   */
  export type Universe$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Universe without action
   */
  export type UniverseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universe
     */
    select?: UniverseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universe
     */
    omit?: UniverseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseInclude<ExtArgs> | null
  }


  /**
   * Model UniverseSource
   */

  export type AggregateUniverseSource = {
    _count: UniverseSourceCountAggregateOutputType | null
    _avg: UniverseSourceAvgAggregateOutputType | null
    _sum: UniverseSourceSumAggregateOutputType | null
    _min: UniverseSourceMinAggregateOutputType | null
    _max: UniverseSourceMaxAggregateOutputType | null
  }

  export type UniverseSourceAvgAggregateOutputType = {
    id: number | null
    universeId: number | null
  }

  export type UniverseSourceSumAggregateOutputType = {
    id: number | null
    universeId: number | null
  }

  export type UniverseSourceMinAggregateOutputType = {
    id: number | null
    format: $Enums.FileFormat | null
    path: string | null
    universeId: number | null
  }

  export type UniverseSourceMaxAggregateOutputType = {
    id: number | null
    format: $Enums.FileFormat | null
    path: string | null
    universeId: number | null
  }

  export type UniverseSourceCountAggregateOutputType = {
    id: number
    format: number
    path: number
    universeId: number
    _all: number
  }


  export type UniverseSourceAvgAggregateInputType = {
    id?: true
    universeId?: true
  }

  export type UniverseSourceSumAggregateInputType = {
    id?: true
    universeId?: true
  }

  export type UniverseSourceMinAggregateInputType = {
    id?: true
    format?: true
    path?: true
    universeId?: true
  }

  export type UniverseSourceMaxAggregateInputType = {
    id?: true
    format?: true
    path?: true
    universeId?: true
  }

  export type UniverseSourceCountAggregateInputType = {
    id?: true
    format?: true
    path?: true
    universeId?: true
    _all?: true
  }

  export type UniverseSourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UniverseSource to aggregate.
     */
    where?: UniverseSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniverseSources to fetch.
     */
    orderBy?: UniverseSourceOrderByWithRelationInput | UniverseSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UniverseSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniverseSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniverseSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UniverseSources
    **/
    _count?: true | UniverseSourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UniverseSourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UniverseSourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UniverseSourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UniverseSourceMaxAggregateInputType
  }

  export type GetUniverseSourceAggregateType<T extends UniverseSourceAggregateArgs> = {
        [P in keyof T & keyof AggregateUniverseSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUniverseSource[P]>
      : GetScalarType<T[P], AggregateUniverseSource[P]>
  }




  export type UniverseSourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniverseSourceWhereInput
    orderBy?: UniverseSourceOrderByWithAggregationInput | UniverseSourceOrderByWithAggregationInput[]
    by: UniverseSourceScalarFieldEnum[] | UniverseSourceScalarFieldEnum
    having?: UniverseSourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UniverseSourceCountAggregateInputType | true
    _avg?: UniverseSourceAvgAggregateInputType
    _sum?: UniverseSourceSumAggregateInputType
    _min?: UniverseSourceMinAggregateInputType
    _max?: UniverseSourceMaxAggregateInputType
  }

  export type UniverseSourceGroupByOutputType = {
    id: number
    format: $Enums.FileFormat
    path: string
    universeId: number
    _count: UniverseSourceCountAggregateOutputType | null
    _avg: UniverseSourceAvgAggregateOutputType | null
    _sum: UniverseSourceSumAggregateOutputType | null
    _min: UniverseSourceMinAggregateOutputType | null
    _max: UniverseSourceMaxAggregateOutputType | null
  }

  type GetUniverseSourceGroupByPayload<T extends UniverseSourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UniverseSourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UniverseSourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UniverseSourceGroupByOutputType[P]>
            : GetScalarType<T[P], UniverseSourceGroupByOutputType[P]>
        }
      >
    >


  export type UniverseSourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    format?: boolean
    path?: boolean
    universeId?: boolean
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universeSource"]>

  export type UniverseSourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    format?: boolean
    path?: boolean
    universeId?: boolean
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universeSource"]>

  export type UniverseSourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    format?: boolean
    path?: boolean
    universeId?: boolean
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universeSource"]>

  export type UniverseSourceSelectScalar = {
    id?: boolean
    format?: boolean
    path?: boolean
    universeId?: boolean
  }

  export type UniverseSourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "format" | "path" | "universeId", ExtArgs["result"]["universeSource"]>
  export type UniverseSourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
  }
  export type UniverseSourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
  }
  export type UniverseSourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
  }

  export type $UniverseSourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UniverseSource"
    objects: {
      universe: Prisma.$UniversePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      format: $Enums.FileFormat
      path: string
      universeId: number
    }, ExtArgs["result"]["universeSource"]>
    composites: {}
  }

  type UniverseSourceGetPayload<S extends boolean | null | undefined | UniverseSourceDefaultArgs> = $Result.GetResult<Prisma.$UniverseSourcePayload, S>

  type UniverseSourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UniverseSourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UniverseSourceCountAggregateInputType | true
    }

  export interface UniverseSourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UniverseSource'], meta: { name: 'UniverseSource' } }
    /**
     * Find zero or one UniverseSource that matches the filter.
     * @param {UniverseSourceFindUniqueArgs} args - Arguments to find a UniverseSource
     * @example
     * // Get one UniverseSource
     * const universeSource = await prisma.universeSource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UniverseSourceFindUniqueArgs>(args: SelectSubset<T, UniverseSourceFindUniqueArgs<ExtArgs>>): Prisma__UniverseSourceClient<$Result.GetResult<Prisma.$UniverseSourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UniverseSource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UniverseSourceFindUniqueOrThrowArgs} args - Arguments to find a UniverseSource
     * @example
     * // Get one UniverseSource
     * const universeSource = await prisma.universeSource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UniverseSourceFindUniqueOrThrowArgs>(args: SelectSubset<T, UniverseSourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UniverseSourceClient<$Result.GetResult<Prisma.$UniverseSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UniverseSource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseSourceFindFirstArgs} args - Arguments to find a UniverseSource
     * @example
     * // Get one UniverseSource
     * const universeSource = await prisma.universeSource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UniverseSourceFindFirstArgs>(args?: SelectSubset<T, UniverseSourceFindFirstArgs<ExtArgs>>): Prisma__UniverseSourceClient<$Result.GetResult<Prisma.$UniverseSourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UniverseSource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseSourceFindFirstOrThrowArgs} args - Arguments to find a UniverseSource
     * @example
     * // Get one UniverseSource
     * const universeSource = await prisma.universeSource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UniverseSourceFindFirstOrThrowArgs>(args?: SelectSubset<T, UniverseSourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UniverseSourceClient<$Result.GetResult<Prisma.$UniverseSourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UniverseSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseSourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UniverseSources
     * const universeSources = await prisma.universeSource.findMany()
     * 
     * // Get first 10 UniverseSources
     * const universeSources = await prisma.universeSource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const universeSourceWithIdOnly = await prisma.universeSource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UniverseSourceFindManyArgs>(args?: SelectSubset<T, UniverseSourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniverseSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UniverseSource.
     * @param {UniverseSourceCreateArgs} args - Arguments to create a UniverseSource.
     * @example
     * // Create one UniverseSource
     * const UniverseSource = await prisma.universeSource.create({
     *   data: {
     *     // ... data to create a UniverseSource
     *   }
     * })
     * 
     */
    create<T extends UniverseSourceCreateArgs>(args: SelectSubset<T, UniverseSourceCreateArgs<ExtArgs>>): Prisma__UniverseSourceClient<$Result.GetResult<Prisma.$UniverseSourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UniverseSources.
     * @param {UniverseSourceCreateManyArgs} args - Arguments to create many UniverseSources.
     * @example
     * // Create many UniverseSources
     * const universeSource = await prisma.universeSource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UniverseSourceCreateManyArgs>(args?: SelectSubset<T, UniverseSourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UniverseSources and returns the data saved in the database.
     * @param {UniverseSourceCreateManyAndReturnArgs} args - Arguments to create many UniverseSources.
     * @example
     * // Create many UniverseSources
     * const universeSource = await prisma.universeSource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UniverseSources and only return the `id`
     * const universeSourceWithIdOnly = await prisma.universeSource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UniverseSourceCreateManyAndReturnArgs>(args?: SelectSubset<T, UniverseSourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniverseSourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UniverseSource.
     * @param {UniverseSourceDeleteArgs} args - Arguments to delete one UniverseSource.
     * @example
     * // Delete one UniverseSource
     * const UniverseSource = await prisma.universeSource.delete({
     *   where: {
     *     // ... filter to delete one UniverseSource
     *   }
     * })
     * 
     */
    delete<T extends UniverseSourceDeleteArgs>(args: SelectSubset<T, UniverseSourceDeleteArgs<ExtArgs>>): Prisma__UniverseSourceClient<$Result.GetResult<Prisma.$UniverseSourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UniverseSource.
     * @param {UniverseSourceUpdateArgs} args - Arguments to update one UniverseSource.
     * @example
     * // Update one UniverseSource
     * const universeSource = await prisma.universeSource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UniverseSourceUpdateArgs>(args: SelectSubset<T, UniverseSourceUpdateArgs<ExtArgs>>): Prisma__UniverseSourceClient<$Result.GetResult<Prisma.$UniverseSourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UniverseSources.
     * @param {UniverseSourceDeleteManyArgs} args - Arguments to filter UniverseSources to delete.
     * @example
     * // Delete a few UniverseSources
     * const { count } = await prisma.universeSource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UniverseSourceDeleteManyArgs>(args?: SelectSubset<T, UniverseSourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UniverseSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseSourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UniverseSources
     * const universeSource = await prisma.universeSource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UniverseSourceUpdateManyArgs>(args: SelectSubset<T, UniverseSourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UniverseSources and returns the data updated in the database.
     * @param {UniverseSourceUpdateManyAndReturnArgs} args - Arguments to update many UniverseSources.
     * @example
     * // Update many UniverseSources
     * const universeSource = await prisma.universeSource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UniverseSources and only return the `id`
     * const universeSourceWithIdOnly = await prisma.universeSource.updateManyAndReturn({
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
    updateManyAndReturn<T extends UniverseSourceUpdateManyAndReturnArgs>(args: SelectSubset<T, UniverseSourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniverseSourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UniverseSource.
     * @param {UniverseSourceUpsertArgs} args - Arguments to update or create a UniverseSource.
     * @example
     * // Update or create a UniverseSource
     * const universeSource = await prisma.universeSource.upsert({
     *   create: {
     *     // ... data to create a UniverseSource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UniverseSource we want to update
     *   }
     * })
     */
    upsert<T extends UniverseSourceUpsertArgs>(args: SelectSubset<T, UniverseSourceUpsertArgs<ExtArgs>>): Prisma__UniverseSourceClient<$Result.GetResult<Prisma.$UniverseSourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UniverseSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseSourceCountArgs} args - Arguments to filter UniverseSources to count.
     * @example
     * // Count the number of UniverseSources
     * const count = await prisma.universeSource.count({
     *   where: {
     *     // ... the filter for the UniverseSources we want to count
     *   }
     * })
    **/
    count<T extends UniverseSourceCountArgs>(
      args?: Subset<T, UniverseSourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UniverseSourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UniverseSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseSourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UniverseSourceAggregateArgs>(args: Subset<T, UniverseSourceAggregateArgs>): Prisma.PrismaPromise<GetUniverseSourceAggregateType<T>>

    /**
     * Group by UniverseSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniverseSourceGroupByArgs} args - Group by arguments.
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
      T extends UniverseSourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UniverseSourceGroupByArgs['orderBy'] }
        : { orderBy?: UniverseSourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UniverseSourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUniverseSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UniverseSource model
   */
  readonly fields: UniverseSourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UniverseSource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UniverseSourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    universe<T extends UniverseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UniverseDefaultArgs<ExtArgs>>): Prisma__UniverseClient<$Result.GetResult<Prisma.$UniversePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UniverseSource model
   */
  interface UniverseSourceFieldRefs {
    readonly id: FieldRef<"UniverseSource", 'Int'>
    readonly format: FieldRef<"UniverseSource", 'FileFormat'>
    readonly path: FieldRef<"UniverseSource", 'String'>
    readonly universeId: FieldRef<"UniverseSource", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UniverseSource findUnique
   */
  export type UniverseSourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseSource
     */
    select?: UniverseSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseSource
     */
    omit?: UniverseSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseSourceInclude<ExtArgs> | null
    /**
     * Filter, which UniverseSource to fetch.
     */
    where: UniverseSourceWhereUniqueInput
  }

  /**
   * UniverseSource findUniqueOrThrow
   */
  export type UniverseSourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseSource
     */
    select?: UniverseSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseSource
     */
    omit?: UniverseSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseSourceInclude<ExtArgs> | null
    /**
     * Filter, which UniverseSource to fetch.
     */
    where: UniverseSourceWhereUniqueInput
  }

  /**
   * UniverseSource findFirst
   */
  export type UniverseSourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseSource
     */
    select?: UniverseSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseSource
     */
    omit?: UniverseSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseSourceInclude<ExtArgs> | null
    /**
     * Filter, which UniverseSource to fetch.
     */
    where?: UniverseSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniverseSources to fetch.
     */
    orderBy?: UniverseSourceOrderByWithRelationInput | UniverseSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UniverseSources.
     */
    cursor?: UniverseSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniverseSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniverseSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UniverseSources.
     */
    distinct?: UniverseSourceScalarFieldEnum | UniverseSourceScalarFieldEnum[]
  }

  /**
   * UniverseSource findFirstOrThrow
   */
  export type UniverseSourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseSource
     */
    select?: UniverseSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseSource
     */
    omit?: UniverseSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseSourceInclude<ExtArgs> | null
    /**
     * Filter, which UniverseSource to fetch.
     */
    where?: UniverseSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniverseSources to fetch.
     */
    orderBy?: UniverseSourceOrderByWithRelationInput | UniverseSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UniverseSources.
     */
    cursor?: UniverseSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniverseSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniverseSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UniverseSources.
     */
    distinct?: UniverseSourceScalarFieldEnum | UniverseSourceScalarFieldEnum[]
  }

  /**
   * UniverseSource findMany
   */
  export type UniverseSourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseSource
     */
    select?: UniverseSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseSource
     */
    omit?: UniverseSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseSourceInclude<ExtArgs> | null
    /**
     * Filter, which UniverseSources to fetch.
     */
    where?: UniverseSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniverseSources to fetch.
     */
    orderBy?: UniverseSourceOrderByWithRelationInput | UniverseSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UniverseSources.
     */
    cursor?: UniverseSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniverseSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniverseSources.
     */
    skip?: number
    distinct?: UniverseSourceScalarFieldEnum | UniverseSourceScalarFieldEnum[]
  }

  /**
   * UniverseSource create
   */
  export type UniverseSourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseSource
     */
    select?: UniverseSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseSource
     */
    omit?: UniverseSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseSourceInclude<ExtArgs> | null
    /**
     * The data needed to create a UniverseSource.
     */
    data: XOR<UniverseSourceCreateInput, UniverseSourceUncheckedCreateInput>
  }

  /**
   * UniverseSource createMany
   */
  export type UniverseSourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UniverseSources.
     */
    data: UniverseSourceCreateManyInput | UniverseSourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UniverseSource createManyAndReturn
   */
  export type UniverseSourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseSource
     */
    select?: UniverseSourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseSource
     */
    omit?: UniverseSourceOmit<ExtArgs> | null
    /**
     * The data used to create many UniverseSources.
     */
    data: UniverseSourceCreateManyInput | UniverseSourceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseSourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UniverseSource update
   */
  export type UniverseSourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseSource
     */
    select?: UniverseSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseSource
     */
    omit?: UniverseSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseSourceInclude<ExtArgs> | null
    /**
     * The data needed to update a UniverseSource.
     */
    data: XOR<UniverseSourceUpdateInput, UniverseSourceUncheckedUpdateInput>
    /**
     * Choose, which UniverseSource to update.
     */
    where: UniverseSourceWhereUniqueInput
  }

  /**
   * UniverseSource updateMany
   */
  export type UniverseSourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UniverseSources.
     */
    data: XOR<UniverseSourceUpdateManyMutationInput, UniverseSourceUncheckedUpdateManyInput>
    /**
     * Filter which UniverseSources to update
     */
    where?: UniverseSourceWhereInput
    /**
     * Limit how many UniverseSources to update.
     */
    limit?: number
  }

  /**
   * UniverseSource updateManyAndReturn
   */
  export type UniverseSourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseSource
     */
    select?: UniverseSourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseSource
     */
    omit?: UniverseSourceOmit<ExtArgs> | null
    /**
     * The data used to update UniverseSources.
     */
    data: XOR<UniverseSourceUpdateManyMutationInput, UniverseSourceUncheckedUpdateManyInput>
    /**
     * Filter which UniverseSources to update
     */
    where?: UniverseSourceWhereInput
    /**
     * Limit how many UniverseSources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseSourceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UniverseSource upsert
   */
  export type UniverseSourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseSource
     */
    select?: UniverseSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseSource
     */
    omit?: UniverseSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseSourceInclude<ExtArgs> | null
    /**
     * The filter to search for the UniverseSource to update in case it exists.
     */
    where: UniverseSourceWhereUniqueInput
    /**
     * In case the UniverseSource found by the `where` argument doesn't exist, create a new UniverseSource with this data.
     */
    create: XOR<UniverseSourceCreateInput, UniverseSourceUncheckedCreateInput>
    /**
     * In case the UniverseSource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UniverseSourceUpdateInput, UniverseSourceUncheckedUpdateInput>
  }

  /**
   * UniverseSource delete
   */
  export type UniverseSourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseSource
     */
    select?: UniverseSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseSource
     */
    omit?: UniverseSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseSourceInclude<ExtArgs> | null
    /**
     * Filter which UniverseSource to delete.
     */
    where: UniverseSourceWhereUniqueInput
  }

  /**
   * UniverseSource deleteMany
   */
  export type UniverseSourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UniverseSources to delete
     */
    where?: UniverseSourceWhereInput
    /**
     * Limit how many UniverseSources to delete.
     */
    limit?: number
  }

  /**
   * UniverseSource without action
   */
  export type UniverseSourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniverseSource
     */
    select?: UniverseSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniverseSource
     */
    omit?: UniverseSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseSourceInclude<ExtArgs> | null
  }


  /**
   * Model Scene
   */

  export type AggregateScene = {
    _count: SceneCountAggregateOutputType | null
    _avg: SceneAvgAggregateOutputType | null
    _sum: SceneSumAggregateOutputType | null
    _min: SceneMinAggregateOutputType | null
    _max: SceneMaxAggregateOutputType | null
  }

  export type SceneAvgAggregateOutputType = {
    id: number | null
    universeId: number | null
    authorId: number | null
    parentId: number | null
  }

  export type SceneSumAggregateOutputType = {
    id: number | null
    universeId: number | null
    authorId: number | null
    parentId: number | null
  }

  export type SceneMinAggregateOutputType = {
    id: number | null
    universeId: number | null
    title: string | null
    authorId: number | null
    content: string | null
    mood: $Enums.SceneMood | null
    genre: $Enums.SceneGenre | null
    lang: string | null
    prompt: string | null
    parentId: number | null
  }

  export type SceneMaxAggregateOutputType = {
    id: number | null
    universeId: number | null
    title: string | null
    authorId: number | null
    content: string | null
    mood: $Enums.SceneMood | null
    genre: $Enums.SceneGenre | null
    lang: string | null
    prompt: string | null
    parentId: number | null
  }

  export type SceneCountAggregateOutputType = {
    id: number
    universeId: number
    title: number
    authorId: number
    content: number
    mood: number
    genre: number
    lang: number
    prompt: number
    parentId: number
    _all: number
  }


  export type SceneAvgAggregateInputType = {
    id?: true
    universeId?: true
    authorId?: true
    parentId?: true
  }

  export type SceneSumAggregateInputType = {
    id?: true
    universeId?: true
    authorId?: true
    parentId?: true
  }

  export type SceneMinAggregateInputType = {
    id?: true
    universeId?: true
    title?: true
    authorId?: true
    content?: true
    mood?: true
    genre?: true
    lang?: true
    prompt?: true
    parentId?: true
  }

  export type SceneMaxAggregateInputType = {
    id?: true
    universeId?: true
    title?: true
    authorId?: true
    content?: true
    mood?: true
    genre?: true
    lang?: true
    prompt?: true
    parentId?: true
  }

  export type SceneCountAggregateInputType = {
    id?: true
    universeId?: true
    title?: true
    authorId?: true
    content?: true
    mood?: true
    genre?: true
    lang?: true
    prompt?: true
    parentId?: true
    _all?: true
  }

  export type SceneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scene to aggregate.
     */
    where?: SceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenes to fetch.
     */
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scenes
    **/
    _count?: true | SceneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SceneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SceneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SceneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SceneMaxAggregateInputType
  }

  export type GetSceneAggregateType<T extends SceneAggregateArgs> = {
        [P in keyof T & keyof AggregateScene]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScene[P]>
      : GetScalarType<T[P], AggregateScene[P]>
  }




  export type SceneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SceneWhereInput
    orderBy?: SceneOrderByWithAggregationInput | SceneOrderByWithAggregationInput[]
    by: SceneScalarFieldEnum[] | SceneScalarFieldEnum
    having?: SceneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SceneCountAggregateInputType | true
    _avg?: SceneAvgAggregateInputType
    _sum?: SceneSumAggregateInputType
    _min?: SceneMinAggregateInputType
    _max?: SceneMaxAggregateInputType
  }

  export type SceneGroupByOutputType = {
    id: number
    universeId: number
    title: string
    authorId: number
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang: string
    prompt: string | null
    parentId: number | null
    _count: SceneCountAggregateOutputType | null
    _avg: SceneAvgAggregateOutputType | null
    _sum: SceneSumAggregateOutputType | null
    _min: SceneMinAggregateOutputType | null
    _max: SceneMaxAggregateOutputType | null
  }

  type GetSceneGroupByPayload<T extends SceneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SceneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SceneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SceneGroupByOutputType[P]>
            : GetScalarType<T[P], SceneGroupByOutputType[P]>
        }
      >
    >


  export type SceneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    universeId?: boolean
    title?: boolean
    authorId?: boolean
    content?: boolean
    mood?: boolean
    genre?: boolean
    lang?: boolean
    prompt?: boolean
    parentId?: boolean
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    anchors?: boolean | Scene$anchorsArgs<ExtArgs>
    fromPaths?: boolean | Scene$fromPathsArgs<ExtArgs>
    toPaths?: boolean | Scene$toPathsArgs<ExtArgs>
    parent?: boolean | Scene$parentArgs<ExtArgs>
    variants?: boolean | Scene$variantsArgs<ExtArgs>
    sessions?: boolean | Scene$sessionsArgs<ExtArgs>
    _count?: boolean | SceneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scene"]>

  export type SceneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    universeId?: boolean
    title?: boolean
    authorId?: boolean
    content?: boolean
    mood?: boolean
    genre?: boolean
    lang?: boolean
    prompt?: boolean
    parentId?: boolean
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Scene$parentArgs<ExtArgs>
  }, ExtArgs["result"]["scene"]>

  export type SceneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    universeId?: boolean
    title?: boolean
    authorId?: boolean
    content?: boolean
    mood?: boolean
    genre?: boolean
    lang?: boolean
    prompt?: boolean
    parentId?: boolean
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Scene$parentArgs<ExtArgs>
  }, ExtArgs["result"]["scene"]>

  export type SceneSelectScalar = {
    id?: boolean
    universeId?: boolean
    title?: boolean
    authorId?: boolean
    content?: boolean
    mood?: boolean
    genre?: boolean
    lang?: boolean
    prompt?: boolean
    parentId?: boolean
  }

  export type SceneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "universeId" | "title" | "authorId" | "content" | "mood" | "genre" | "lang" | "prompt" | "parentId", ExtArgs["result"]["scene"]>
  export type SceneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    anchors?: boolean | Scene$anchorsArgs<ExtArgs>
    fromPaths?: boolean | Scene$fromPathsArgs<ExtArgs>
    toPaths?: boolean | Scene$toPathsArgs<ExtArgs>
    parent?: boolean | Scene$parentArgs<ExtArgs>
    variants?: boolean | Scene$variantsArgs<ExtArgs>
    sessions?: boolean | Scene$sessionsArgs<ExtArgs>
    _count?: boolean | SceneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SceneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Scene$parentArgs<ExtArgs>
  }
  export type SceneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    universe?: boolean | UniverseDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Scene$parentArgs<ExtArgs>
  }

  export type $ScenePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scene"
    objects: {
      universe: Prisma.$UniversePayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      anchors: Prisma.$SceneAnchorPayload<ExtArgs>[]
      fromPaths: Prisma.$StoryPathPayload<ExtArgs>[]
      toPaths: Prisma.$StoryPathPayload<ExtArgs>[]
      parent: Prisma.$ScenePayload<ExtArgs> | null
      variants: Prisma.$ScenePayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      universeId: number
      title: string
      authorId: number
      content: string
      mood: $Enums.SceneMood
      genre: $Enums.SceneGenre
      lang: string
      prompt: string | null
      parentId: number | null
    }, ExtArgs["result"]["scene"]>
    composites: {}
  }

  type SceneGetPayload<S extends boolean | null | undefined | SceneDefaultArgs> = $Result.GetResult<Prisma.$ScenePayload, S>

  type SceneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SceneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SceneCountAggregateInputType | true
    }

  export interface SceneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scene'], meta: { name: 'Scene' } }
    /**
     * Find zero or one Scene that matches the filter.
     * @param {SceneFindUniqueArgs} args - Arguments to find a Scene
     * @example
     * // Get one Scene
     * const scene = await prisma.scene.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SceneFindUniqueArgs>(args: SelectSubset<T, SceneFindUniqueArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scene that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SceneFindUniqueOrThrowArgs} args - Arguments to find a Scene
     * @example
     * // Get one Scene
     * const scene = await prisma.scene.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SceneFindUniqueOrThrowArgs>(args: SelectSubset<T, SceneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scene that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneFindFirstArgs} args - Arguments to find a Scene
     * @example
     * // Get one Scene
     * const scene = await prisma.scene.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SceneFindFirstArgs>(args?: SelectSubset<T, SceneFindFirstArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scene that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneFindFirstOrThrowArgs} args - Arguments to find a Scene
     * @example
     * // Get one Scene
     * const scene = await prisma.scene.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SceneFindFirstOrThrowArgs>(args?: SelectSubset<T, SceneFindFirstOrThrowArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scenes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scenes
     * const scenes = await prisma.scene.findMany()
     * 
     * // Get first 10 Scenes
     * const scenes = await prisma.scene.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sceneWithIdOnly = await prisma.scene.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SceneFindManyArgs>(args?: SelectSubset<T, SceneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scene.
     * @param {SceneCreateArgs} args - Arguments to create a Scene.
     * @example
     * // Create one Scene
     * const Scene = await prisma.scene.create({
     *   data: {
     *     // ... data to create a Scene
     *   }
     * })
     * 
     */
    create<T extends SceneCreateArgs>(args: SelectSubset<T, SceneCreateArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scenes.
     * @param {SceneCreateManyArgs} args - Arguments to create many Scenes.
     * @example
     * // Create many Scenes
     * const scene = await prisma.scene.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SceneCreateManyArgs>(args?: SelectSubset<T, SceneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scenes and returns the data saved in the database.
     * @param {SceneCreateManyAndReturnArgs} args - Arguments to create many Scenes.
     * @example
     * // Create many Scenes
     * const scene = await prisma.scene.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scenes and only return the `id`
     * const sceneWithIdOnly = await prisma.scene.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SceneCreateManyAndReturnArgs>(args?: SelectSubset<T, SceneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scene.
     * @param {SceneDeleteArgs} args - Arguments to delete one Scene.
     * @example
     * // Delete one Scene
     * const Scene = await prisma.scene.delete({
     *   where: {
     *     // ... filter to delete one Scene
     *   }
     * })
     * 
     */
    delete<T extends SceneDeleteArgs>(args: SelectSubset<T, SceneDeleteArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scene.
     * @param {SceneUpdateArgs} args - Arguments to update one Scene.
     * @example
     * // Update one Scene
     * const scene = await prisma.scene.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SceneUpdateArgs>(args: SelectSubset<T, SceneUpdateArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scenes.
     * @param {SceneDeleteManyArgs} args - Arguments to filter Scenes to delete.
     * @example
     * // Delete a few Scenes
     * const { count } = await prisma.scene.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SceneDeleteManyArgs>(args?: SelectSubset<T, SceneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scenes
     * const scene = await prisma.scene.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SceneUpdateManyArgs>(args: SelectSubset<T, SceneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scenes and returns the data updated in the database.
     * @param {SceneUpdateManyAndReturnArgs} args - Arguments to update many Scenes.
     * @example
     * // Update many Scenes
     * const scene = await prisma.scene.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scenes and only return the `id`
     * const sceneWithIdOnly = await prisma.scene.updateManyAndReturn({
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
    updateManyAndReturn<T extends SceneUpdateManyAndReturnArgs>(args: SelectSubset<T, SceneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scene.
     * @param {SceneUpsertArgs} args - Arguments to update or create a Scene.
     * @example
     * // Update or create a Scene
     * const scene = await prisma.scene.upsert({
     *   create: {
     *     // ... data to create a Scene
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scene we want to update
     *   }
     * })
     */
    upsert<T extends SceneUpsertArgs>(args: SelectSubset<T, SceneUpsertArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneCountArgs} args - Arguments to filter Scenes to count.
     * @example
     * // Count the number of Scenes
     * const count = await prisma.scene.count({
     *   where: {
     *     // ... the filter for the Scenes we want to count
     *   }
     * })
    **/
    count<T extends SceneCountArgs>(
      args?: Subset<T, SceneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SceneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scene.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SceneAggregateArgs>(args: Subset<T, SceneAggregateArgs>): Prisma.PrismaPromise<GetSceneAggregateType<T>>

    /**
     * Group by Scene.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneGroupByArgs} args - Group by arguments.
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
      T extends SceneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SceneGroupByArgs['orderBy'] }
        : { orderBy?: SceneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SceneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSceneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scene model
   */
  readonly fields: SceneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scene.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SceneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    universe<T extends UniverseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UniverseDefaultArgs<ExtArgs>>): Prisma__UniverseClient<$Result.GetResult<Prisma.$UniversePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    anchors<T extends Scene$anchorsArgs<ExtArgs> = {}>(args?: Subset<T, Scene$anchorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SceneAnchorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fromPaths<T extends Scene$fromPathsArgs<ExtArgs> = {}>(args?: Subset<T, Scene$fromPathsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPathPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    toPaths<T extends Scene$toPathsArgs<ExtArgs> = {}>(args?: Subset<T, Scene$toPathsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPathPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parent<T extends Scene$parentArgs<ExtArgs> = {}>(args?: Subset<T, Scene$parentArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    variants<T extends Scene$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Scene$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Scene$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Scene$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Scene model
   */
  interface SceneFieldRefs {
    readonly id: FieldRef<"Scene", 'Int'>
    readonly universeId: FieldRef<"Scene", 'Int'>
    readonly title: FieldRef<"Scene", 'String'>
    readonly authorId: FieldRef<"Scene", 'Int'>
    readonly content: FieldRef<"Scene", 'String'>
    readonly mood: FieldRef<"Scene", 'SceneMood'>
    readonly genre: FieldRef<"Scene", 'SceneGenre'>
    readonly lang: FieldRef<"Scene", 'String'>
    readonly prompt: FieldRef<"Scene", 'String'>
    readonly parentId: FieldRef<"Scene", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Scene findUnique
   */
  export type SceneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter, which Scene to fetch.
     */
    where: SceneWhereUniqueInput
  }

  /**
   * Scene findUniqueOrThrow
   */
  export type SceneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter, which Scene to fetch.
     */
    where: SceneWhereUniqueInput
  }

  /**
   * Scene findFirst
   */
  export type SceneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter, which Scene to fetch.
     */
    where?: SceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenes to fetch.
     */
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenes.
     */
    cursor?: SceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenes.
     */
    distinct?: SceneScalarFieldEnum | SceneScalarFieldEnum[]
  }

  /**
   * Scene findFirstOrThrow
   */
  export type SceneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter, which Scene to fetch.
     */
    where?: SceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenes to fetch.
     */
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scenes.
     */
    cursor?: SceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scenes.
     */
    distinct?: SceneScalarFieldEnum | SceneScalarFieldEnum[]
  }

  /**
   * Scene findMany
   */
  export type SceneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter, which Scenes to fetch.
     */
    where?: SceneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scenes to fetch.
     */
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scenes.
     */
    cursor?: SceneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scenes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scenes.
     */
    skip?: number
    distinct?: SceneScalarFieldEnum | SceneScalarFieldEnum[]
  }

  /**
   * Scene create
   */
  export type SceneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * The data needed to create a Scene.
     */
    data: XOR<SceneCreateInput, SceneUncheckedCreateInput>
  }

  /**
   * Scene createMany
   */
  export type SceneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scenes.
     */
    data: SceneCreateManyInput | SceneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scene createManyAndReturn
   */
  export type SceneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * The data used to create many Scenes.
     */
    data: SceneCreateManyInput | SceneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scene update
   */
  export type SceneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * The data needed to update a Scene.
     */
    data: XOR<SceneUpdateInput, SceneUncheckedUpdateInput>
    /**
     * Choose, which Scene to update.
     */
    where: SceneWhereUniqueInput
  }

  /**
   * Scene updateMany
   */
  export type SceneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scenes.
     */
    data: XOR<SceneUpdateManyMutationInput, SceneUncheckedUpdateManyInput>
    /**
     * Filter which Scenes to update
     */
    where?: SceneWhereInput
    /**
     * Limit how many Scenes to update.
     */
    limit?: number
  }

  /**
   * Scene updateManyAndReturn
   */
  export type SceneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * The data used to update Scenes.
     */
    data: XOR<SceneUpdateManyMutationInput, SceneUncheckedUpdateManyInput>
    /**
     * Filter which Scenes to update
     */
    where?: SceneWhereInput
    /**
     * Limit how many Scenes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scene upsert
   */
  export type SceneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * The filter to search for the Scene to update in case it exists.
     */
    where: SceneWhereUniqueInput
    /**
     * In case the Scene found by the `where` argument doesn't exist, create a new Scene with this data.
     */
    create: XOR<SceneCreateInput, SceneUncheckedCreateInput>
    /**
     * In case the Scene was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SceneUpdateInput, SceneUncheckedUpdateInput>
  }

  /**
   * Scene delete
   */
  export type SceneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    /**
     * Filter which Scene to delete.
     */
    where: SceneWhereUniqueInput
  }

  /**
   * Scene deleteMany
   */
  export type SceneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scenes to delete
     */
    where?: SceneWhereInput
    /**
     * Limit how many Scenes to delete.
     */
    limit?: number
  }

  /**
   * Scene.anchors
   */
  export type Scene$anchorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchor
     */
    select?: SceneAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SceneAnchor
     */
    omit?: SceneAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneAnchorInclude<ExtArgs> | null
    where?: SceneAnchorWhereInput
    orderBy?: SceneAnchorOrderByWithRelationInput | SceneAnchorOrderByWithRelationInput[]
    cursor?: SceneAnchorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SceneAnchorScalarFieldEnum | SceneAnchorScalarFieldEnum[]
  }

  /**
   * Scene.fromPaths
   */
  export type Scene$fromPathsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryPath
     */
    select?: StoryPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryPath
     */
    omit?: StoryPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryPathInclude<ExtArgs> | null
    where?: StoryPathWhereInput
    orderBy?: StoryPathOrderByWithRelationInput | StoryPathOrderByWithRelationInput[]
    cursor?: StoryPathWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoryPathScalarFieldEnum | StoryPathScalarFieldEnum[]
  }

  /**
   * Scene.toPaths
   */
  export type Scene$toPathsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryPath
     */
    select?: StoryPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryPath
     */
    omit?: StoryPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryPathInclude<ExtArgs> | null
    where?: StoryPathWhereInput
    orderBy?: StoryPathOrderByWithRelationInput | StoryPathOrderByWithRelationInput[]
    cursor?: StoryPathWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoryPathScalarFieldEnum | StoryPathScalarFieldEnum[]
  }

  /**
   * Scene.parent
   */
  export type Scene$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    where?: SceneWhereInput
  }

  /**
   * Scene.variants
   */
  export type Scene$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    where?: SceneWhereInput
    orderBy?: SceneOrderByWithRelationInput | SceneOrderByWithRelationInput[]
    cursor?: SceneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SceneScalarFieldEnum | SceneScalarFieldEnum[]
  }

  /**
   * Scene.sessions
   */
  export type Scene$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Scene without action
   */
  export type SceneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
  }


  /**
   * Model SceneAnchor
   */

  export type AggregateSceneAnchor = {
    _count: SceneAnchorCountAggregateOutputType | null
    _avg: SceneAnchorAvgAggregateOutputType | null
    _sum: SceneAnchorSumAggregateOutputType | null
    _min: SceneAnchorMinAggregateOutputType | null
    _max: SceneAnchorMaxAggregateOutputType | null
  }

  export type SceneAnchorAvgAggregateOutputType = {
    descriptionId: number | null
    timelineId: number | null
  }

  export type SceneAnchorSumAggregateOutputType = {
    descriptionId: number | null
    timelineId: number | null
  }

  export type SceneAnchorMinAggregateOutputType = {
    tag: string | null
    type: $Enums.AnchorType | null
    name: string | null
    descriptionId: number | null
    timelineId: number | null
    parentTag: string | null
  }

  export type SceneAnchorMaxAggregateOutputType = {
    tag: string | null
    type: $Enums.AnchorType | null
    name: string | null
    descriptionId: number | null
    timelineId: number | null
    parentTag: string | null
  }

  export type SceneAnchorCountAggregateOutputType = {
    tag: number
    type: number
    name: number
    descriptionId: number
    timelineId: number
    parentTag: number
    _all: number
  }


  export type SceneAnchorAvgAggregateInputType = {
    descriptionId?: true
    timelineId?: true
  }

  export type SceneAnchorSumAggregateInputType = {
    descriptionId?: true
    timelineId?: true
  }

  export type SceneAnchorMinAggregateInputType = {
    tag?: true
    type?: true
    name?: true
    descriptionId?: true
    timelineId?: true
    parentTag?: true
  }

  export type SceneAnchorMaxAggregateInputType = {
    tag?: true
    type?: true
    name?: true
    descriptionId?: true
    timelineId?: true
    parentTag?: true
  }

  export type SceneAnchorCountAggregateInputType = {
    tag?: true
    type?: true
    name?: true
    descriptionId?: true
    timelineId?: true
    parentTag?: true
    _all?: true
  }

  export type SceneAnchorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SceneAnchor to aggregate.
     */
    where?: SceneAnchorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SceneAnchors to fetch.
     */
    orderBy?: SceneAnchorOrderByWithRelationInput | SceneAnchorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SceneAnchorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SceneAnchors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SceneAnchors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SceneAnchors
    **/
    _count?: true | SceneAnchorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SceneAnchorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SceneAnchorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SceneAnchorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SceneAnchorMaxAggregateInputType
  }

  export type GetSceneAnchorAggregateType<T extends SceneAnchorAggregateArgs> = {
        [P in keyof T & keyof AggregateSceneAnchor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSceneAnchor[P]>
      : GetScalarType<T[P], AggregateSceneAnchor[P]>
  }




  export type SceneAnchorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SceneAnchorWhereInput
    orderBy?: SceneAnchorOrderByWithAggregationInput | SceneAnchorOrderByWithAggregationInput[]
    by: SceneAnchorScalarFieldEnum[] | SceneAnchorScalarFieldEnum
    having?: SceneAnchorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SceneAnchorCountAggregateInputType | true
    _avg?: SceneAnchorAvgAggregateInputType
    _sum?: SceneAnchorSumAggregateInputType
    _min?: SceneAnchorMinAggregateInputType
    _max?: SceneAnchorMaxAggregateInputType
  }

  export type SceneAnchorGroupByOutputType = {
    tag: string
    type: $Enums.AnchorType
    name: string
    descriptionId: number | null
    timelineId: number | null
    parentTag: string
    _count: SceneAnchorCountAggregateOutputType | null
    _avg: SceneAnchorAvgAggregateOutputType | null
    _sum: SceneAnchorSumAggregateOutputType | null
    _min: SceneAnchorMinAggregateOutputType | null
    _max: SceneAnchorMaxAggregateOutputType | null
  }

  type GetSceneAnchorGroupByPayload<T extends SceneAnchorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SceneAnchorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SceneAnchorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SceneAnchorGroupByOutputType[P]>
            : GetScalarType<T[P], SceneAnchorGroupByOutputType[P]>
        }
      >
    >


  export type SceneAnchorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag?: boolean
    type?: boolean
    name?: boolean
    descriptionId?: boolean
    timelineId?: boolean
    parentTag?: boolean
    description?: boolean | SceneAnchor$descriptionArgs<ExtArgs>
    timeline?: boolean | SceneAnchor$timelineArgs<ExtArgs>
    parent?: boolean | SceneAnchor$parentArgs<ExtArgs>
    children?: boolean | SceneAnchor$childrenArgs<ExtArgs>
    sessions?: boolean | SceneAnchor$sessionsArgs<ExtArgs>
    _count?: boolean | SceneAnchorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sceneAnchor"]>

  export type SceneAnchorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag?: boolean
    type?: boolean
    name?: boolean
    descriptionId?: boolean
    timelineId?: boolean
    parentTag?: boolean
    description?: boolean | SceneAnchor$descriptionArgs<ExtArgs>
    timeline?: boolean | SceneAnchor$timelineArgs<ExtArgs>
    parent?: boolean | SceneAnchor$parentArgs<ExtArgs>
  }, ExtArgs["result"]["sceneAnchor"]>

  export type SceneAnchorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag?: boolean
    type?: boolean
    name?: boolean
    descriptionId?: boolean
    timelineId?: boolean
    parentTag?: boolean
    description?: boolean | SceneAnchor$descriptionArgs<ExtArgs>
    timeline?: boolean | SceneAnchor$timelineArgs<ExtArgs>
    parent?: boolean | SceneAnchor$parentArgs<ExtArgs>
  }, ExtArgs["result"]["sceneAnchor"]>

  export type SceneAnchorSelectScalar = {
    tag?: boolean
    type?: boolean
    name?: boolean
    descriptionId?: boolean
    timelineId?: boolean
    parentTag?: boolean
  }

  export type SceneAnchorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tag" | "type" | "name" | "descriptionId" | "timelineId" | "parentTag", ExtArgs["result"]["sceneAnchor"]>
  export type SceneAnchorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    description?: boolean | SceneAnchor$descriptionArgs<ExtArgs>
    timeline?: boolean | SceneAnchor$timelineArgs<ExtArgs>
    parent?: boolean | SceneAnchor$parentArgs<ExtArgs>
    children?: boolean | SceneAnchor$childrenArgs<ExtArgs>
    sessions?: boolean | SceneAnchor$sessionsArgs<ExtArgs>
    _count?: boolean | SceneAnchorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SceneAnchorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    description?: boolean | SceneAnchor$descriptionArgs<ExtArgs>
    timeline?: boolean | SceneAnchor$timelineArgs<ExtArgs>
    parent?: boolean | SceneAnchor$parentArgs<ExtArgs>
  }
  export type SceneAnchorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    description?: boolean | SceneAnchor$descriptionArgs<ExtArgs>
    timeline?: boolean | SceneAnchor$timelineArgs<ExtArgs>
    parent?: boolean | SceneAnchor$parentArgs<ExtArgs>
  }

  export type $SceneAnchorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SceneAnchor"
    objects: {
      description: Prisma.$ScenePayload<ExtArgs> | null
      timeline: Prisma.$StorylinePayload<ExtArgs> | null
      parent: Prisma.$SceneAnchorPayload<ExtArgs> | null
      children: Prisma.$SceneAnchorPayload<ExtArgs>[]
      sessions: Prisma.$FavoriteAnchorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tag: string
      type: $Enums.AnchorType
      name: string
      descriptionId: number | null
      timelineId: number | null
      parentTag: string
    }, ExtArgs["result"]["sceneAnchor"]>
    composites: {}
  }

  type SceneAnchorGetPayload<S extends boolean | null | undefined | SceneAnchorDefaultArgs> = $Result.GetResult<Prisma.$SceneAnchorPayload, S>

  type SceneAnchorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SceneAnchorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SceneAnchorCountAggregateInputType | true
    }

  export interface SceneAnchorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SceneAnchor'], meta: { name: 'SceneAnchor' } }
    /**
     * Find zero or one SceneAnchor that matches the filter.
     * @param {SceneAnchorFindUniqueArgs} args - Arguments to find a SceneAnchor
     * @example
     * // Get one SceneAnchor
     * const sceneAnchor = await prisma.sceneAnchor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SceneAnchorFindUniqueArgs>(args: SelectSubset<T, SceneAnchorFindUniqueArgs<ExtArgs>>): Prisma__SceneAnchorClient<$Result.GetResult<Prisma.$SceneAnchorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SceneAnchor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SceneAnchorFindUniqueOrThrowArgs} args - Arguments to find a SceneAnchor
     * @example
     * // Get one SceneAnchor
     * const sceneAnchor = await prisma.sceneAnchor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SceneAnchorFindUniqueOrThrowArgs>(args: SelectSubset<T, SceneAnchorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SceneAnchorClient<$Result.GetResult<Prisma.$SceneAnchorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SceneAnchor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneAnchorFindFirstArgs} args - Arguments to find a SceneAnchor
     * @example
     * // Get one SceneAnchor
     * const sceneAnchor = await prisma.sceneAnchor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SceneAnchorFindFirstArgs>(args?: SelectSubset<T, SceneAnchorFindFirstArgs<ExtArgs>>): Prisma__SceneAnchorClient<$Result.GetResult<Prisma.$SceneAnchorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SceneAnchor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneAnchorFindFirstOrThrowArgs} args - Arguments to find a SceneAnchor
     * @example
     * // Get one SceneAnchor
     * const sceneAnchor = await prisma.sceneAnchor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SceneAnchorFindFirstOrThrowArgs>(args?: SelectSubset<T, SceneAnchorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SceneAnchorClient<$Result.GetResult<Prisma.$SceneAnchorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SceneAnchors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneAnchorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SceneAnchors
     * const sceneAnchors = await prisma.sceneAnchor.findMany()
     * 
     * // Get first 10 SceneAnchors
     * const sceneAnchors = await prisma.sceneAnchor.findMany({ take: 10 })
     * 
     * // Only select the `tag`
     * const sceneAnchorWithTagOnly = await prisma.sceneAnchor.findMany({ select: { tag: true } })
     * 
     */
    findMany<T extends SceneAnchorFindManyArgs>(args?: SelectSubset<T, SceneAnchorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SceneAnchorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SceneAnchor.
     * @param {SceneAnchorCreateArgs} args - Arguments to create a SceneAnchor.
     * @example
     * // Create one SceneAnchor
     * const SceneAnchor = await prisma.sceneAnchor.create({
     *   data: {
     *     // ... data to create a SceneAnchor
     *   }
     * })
     * 
     */
    create<T extends SceneAnchorCreateArgs>(args: SelectSubset<T, SceneAnchorCreateArgs<ExtArgs>>): Prisma__SceneAnchorClient<$Result.GetResult<Prisma.$SceneAnchorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SceneAnchors.
     * @param {SceneAnchorCreateManyArgs} args - Arguments to create many SceneAnchors.
     * @example
     * // Create many SceneAnchors
     * const sceneAnchor = await prisma.sceneAnchor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SceneAnchorCreateManyArgs>(args?: SelectSubset<T, SceneAnchorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SceneAnchors and returns the data saved in the database.
     * @param {SceneAnchorCreateManyAndReturnArgs} args - Arguments to create many SceneAnchors.
     * @example
     * // Create many SceneAnchors
     * const sceneAnchor = await prisma.sceneAnchor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SceneAnchors and only return the `tag`
     * const sceneAnchorWithTagOnly = await prisma.sceneAnchor.createManyAndReturn({
     *   select: { tag: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SceneAnchorCreateManyAndReturnArgs>(args?: SelectSubset<T, SceneAnchorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SceneAnchorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SceneAnchor.
     * @param {SceneAnchorDeleteArgs} args - Arguments to delete one SceneAnchor.
     * @example
     * // Delete one SceneAnchor
     * const SceneAnchor = await prisma.sceneAnchor.delete({
     *   where: {
     *     // ... filter to delete one SceneAnchor
     *   }
     * })
     * 
     */
    delete<T extends SceneAnchorDeleteArgs>(args: SelectSubset<T, SceneAnchorDeleteArgs<ExtArgs>>): Prisma__SceneAnchorClient<$Result.GetResult<Prisma.$SceneAnchorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SceneAnchor.
     * @param {SceneAnchorUpdateArgs} args - Arguments to update one SceneAnchor.
     * @example
     * // Update one SceneAnchor
     * const sceneAnchor = await prisma.sceneAnchor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SceneAnchorUpdateArgs>(args: SelectSubset<T, SceneAnchorUpdateArgs<ExtArgs>>): Prisma__SceneAnchorClient<$Result.GetResult<Prisma.$SceneAnchorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SceneAnchors.
     * @param {SceneAnchorDeleteManyArgs} args - Arguments to filter SceneAnchors to delete.
     * @example
     * // Delete a few SceneAnchors
     * const { count } = await prisma.sceneAnchor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SceneAnchorDeleteManyArgs>(args?: SelectSubset<T, SceneAnchorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SceneAnchors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneAnchorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SceneAnchors
     * const sceneAnchor = await prisma.sceneAnchor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SceneAnchorUpdateManyArgs>(args: SelectSubset<T, SceneAnchorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SceneAnchors and returns the data updated in the database.
     * @param {SceneAnchorUpdateManyAndReturnArgs} args - Arguments to update many SceneAnchors.
     * @example
     * // Update many SceneAnchors
     * const sceneAnchor = await prisma.sceneAnchor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SceneAnchors and only return the `tag`
     * const sceneAnchorWithTagOnly = await prisma.sceneAnchor.updateManyAndReturn({
     *   select: { tag: true },
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
    updateManyAndReturn<T extends SceneAnchorUpdateManyAndReturnArgs>(args: SelectSubset<T, SceneAnchorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SceneAnchorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SceneAnchor.
     * @param {SceneAnchorUpsertArgs} args - Arguments to update or create a SceneAnchor.
     * @example
     * // Update or create a SceneAnchor
     * const sceneAnchor = await prisma.sceneAnchor.upsert({
     *   create: {
     *     // ... data to create a SceneAnchor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SceneAnchor we want to update
     *   }
     * })
     */
    upsert<T extends SceneAnchorUpsertArgs>(args: SelectSubset<T, SceneAnchorUpsertArgs<ExtArgs>>): Prisma__SceneAnchorClient<$Result.GetResult<Prisma.$SceneAnchorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SceneAnchors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneAnchorCountArgs} args - Arguments to filter SceneAnchors to count.
     * @example
     * // Count the number of SceneAnchors
     * const count = await prisma.sceneAnchor.count({
     *   where: {
     *     // ... the filter for the SceneAnchors we want to count
     *   }
     * })
    **/
    count<T extends SceneAnchorCountArgs>(
      args?: Subset<T, SceneAnchorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SceneAnchorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SceneAnchor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneAnchorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SceneAnchorAggregateArgs>(args: Subset<T, SceneAnchorAggregateArgs>): Prisma.PrismaPromise<GetSceneAnchorAggregateType<T>>

    /**
     * Group by SceneAnchor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneAnchorGroupByArgs} args - Group by arguments.
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
      T extends SceneAnchorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SceneAnchorGroupByArgs['orderBy'] }
        : { orderBy?: SceneAnchorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SceneAnchorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSceneAnchorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SceneAnchor model
   */
  readonly fields: SceneAnchorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SceneAnchor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SceneAnchorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    description<T extends SceneAnchor$descriptionArgs<ExtArgs> = {}>(args?: Subset<T, SceneAnchor$descriptionArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    timeline<T extends SceneAnchor$timelineArgs<ExtArgs> = {}>(args?: Subset<T, SceneAnchor$timelineArgs<ExtArgs>>): Prisma__StorylineClient<$Result.GetResult<Prisma.$StorylinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parent<T extends SceneAnchor$parentArgs<ExtArgs> = {}>(args?: Subset<T, SceneAnchor$parentArgs<ExtArgs>>): Prisma__SceneAnchorClient<$Result.GetResult<Prisma.$SceneAnchorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends SceneAnchor$childrenArgs<ExtArgs> = {}>(args?: Subset<T, SceneAnchor$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SceneAnchorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends SceneAnchor$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, SceneAnchor$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteAnchorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SceneAnchor model
   */
  interface SceneAnchorFieldRefs {
    readonly tag: FieldRef<"SceneAnchor", 'String'>
    readonly type: FieldRef<"SceneAnchor", 'AnchorType'>
    readonly name: FieldRef<"SceneAnchor", 'String'>
    readonly descriptionId: FieldRef<"SceneAnchor", 'Int'>
    readonly timelineId: FieldRef<"SceneAnchor", 'Int'>
    readonly parentTag: FieldRef<"SceneAnchor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SceneAnchor findUnique
   */
  export type SceneAnchorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchor
     */
    select?: SceneAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SceneAnchor
     */
    omit?: SceneAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneAnchorInclude<ExtArgs> | null
    /**
     * Filter, which SceneAnchor to fetch.
     */
    where: SceneAnchorWhereUniqueInput
  }

  /**
   * SceneAnchor findUniqueOrThrow
   */
  export type SceneAnchorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchor
     */
    select?: SceneAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SceneAnchor
     */
    omit?: SceneAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneAnchorInclude<ExtArgs> | null
    /**
     * Filter, which SceneAnchor to fetch.
     */
    where: SceneAnchorWhereUniqueInput
  }

  /**
   * SceneAnchor findFirst
   */
  export type SceneAnchorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchor
     */
    select?: SceneAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SceneAnchor
     */
    omit?: SceneAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneAnchorInclude<ExtArgs> | null
    /**
     * Filter, which SceneAnchor to fetch.
     */
    where?: SceneAnchorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SceneAnchors to fetch.
     */
    orderBy?: SceneAnchorOrderByWithRelationInput | SceneAnchorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SceneAnchors.
     */
    cursor?: SceneAnchorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SceneAnchors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SceneAnchors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SceneAnchors.
     */
    distinct?: SceneAnchorScalarFieldEnum | SceneAnchorScalarFieldEnum[]
  }

  /**
   * SceneAnchor findFirstOrThrow
   */
  export type SceneAnchorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchor
     */
    select?: SceneAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SceneAnchor
     */
    omit?: SceneAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneAnchorInclude<ExtArgs> | null
    /**
     * Filter, which SceneAnchor to fetch.
     */
    where?: SceneAnchorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SceneAnchors to fetch.
     */
    orderBy?: SceneAnchorOrderByWithRelationInput | SceneAnchorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SceneAnchors.
     */
    cursor?: SceneAnchorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SceneAnchors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SceneAnchors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SceneAnchors.
     */
    distinct?: SceneAnchorScalarFieldEnum | SceneAnchorScalarFieldEnum[]
  }

  /**
   * SceneAnchor findMany
   */
  export type SceneAnchorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchor
     */
    select?: SceneAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SceneAnchor
     */
    omit?: SceneAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneAnchorInclude<ExtArgs> | null
    /**
     * Filter, which SceneAnchors to fetch.
     */
    where?: SceneAnchorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SceneAnchors to fetch.
     */
    orderBy?: SceneAnchorOrderByWithRelationInput | SceneAnchorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SceneAnchors.
     */
    cursor?: SceneAnchorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SceneAnchors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SceneAnchors.
     */
    skip?: number
    distinct?: SceneAnchorScalarFieldEnum | SceneAnchorScalarFieldEnum[]
  }

  /**
   * SceneAnchor create
   */
  export type SceneAnchorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchor
     */
    select?: SceneAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SceneAnchor
     */
    omit?: SceneAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneAnchorInclude<ExtArgs> | null
    /**
     * The data needed to create a SceneAnchor.
     */
    data: XOR<SceneAnchorCreateInput, SceneAnchorUncheckedCreateInput>
  }

  /**
   * SceneAnchor createMany
   */
  export type SceneAnchorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SceneAnchors.
     */
    data: SceneAnchorCreateManyInput | SceneAnchorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SceneAnchor createManyAndReturn
   */
  export type SceneAnchorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchor
     */
    select?: SceneAnchorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SceneAnchor
     */
    omit?: SceneAnchorOmit<ExtArgs> | null
    /**
     * The data used to create many SceneAnchors.
     */
    data: SceneAnchorCreateManyInput | SceneAnchorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneAnchorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SceneAnchor update
   */
  export type SceneAnchorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchor
     */
    select?: SceneAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SceneAnchor
     */
    omit?: SceneAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneAnchorInclude<ExtArgs> | null
    /**
     * The data needed to update a SceneAnchor.
     */
    data: XOR<SceneAnchorUpdateInput, SceneAnchorUncheckedUpdateInput>
    /**
     * Choose, which SceneAnchor to update.
     */
    where: SceneAnchorWhereUniqueInput
  }

  /**
   * SceneAnchor updateMany
   */
  export type SceneAnchorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SceneAnchors.
     */
    data: XOR<SceneAnchorUpdateManyMutationInput, SceneAnchorUncheckedUpdateManyInput>
    /**
     * Filter which SceneAnchors to update
     */
    where?: SceneAnchorWhereInput
    /**
     * Limit how many SceneAnchors to update.
     */
    limit?: number
  }

  /**
   * SceneAnchor updateManyAndReturn
   */
  export type SceneAnchorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchor
     */
    select?: SceneAnchorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SceneAnchor
     */
    omit?: SceneAnchorOmit<ExtArgs> | null
    /**
     * The data used to update SceneAnchors.
     */
    data: XOR<SceneAnchorUpdateManyMutationInput, SceneAnchorUncheckedUpdateManyInput>
    /**
     * Filter which SceneAnchors to update
     */
    where?: SceneAnchorWhereInput
    /**
     * Limit how many SceneAnchors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneAnchorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SceneAnchor upsert
   */
  export type SceneAnchorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchor
     */
    select?: SceneAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SceneAnchor
     */
    omit?: SceneAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneAnchorInclude<ExtArgs> | null
    /**
     * The filter to search for the SceneAnchor to update in case it exists.
     */
    where: SceneAnchorWhereUniqueInput
    /**
     * In case the SceneAnchor found by the `where` argument doesn't exist, create a new SceneAnchor with this data.
     */
    create: XOR<SceneAnchorCreateInput, SceneAnchorUncheckedCreateInput>
    /**
     * In case the SceneAnchor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SceneAnchorUpdateInput, SceneAnchorUncheckedUpdateInput>
  }

  /**
   * SceneAnchor delete
   */
  export type SceneAnchorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchor
     */
    select?: SceneAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SceneAnchor
     */
    omit?: SceneAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneAnchorInclude<ExtArgs> | null
    /**
     * Filter which SceneAnchor to delete.
     */
    where: SceneAnchorWhereUniqueInput
  }

  /**
   * SceneAnchor deleteMany
   */
  export type SceneAnchorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SceneAnchors to delete
     */
    where?: SceneAnchorWhereInput
    /**
     * Limit how many SceneAnchors to delete.
     */
    limit?: number
  }

  /**
   * SceneAnchor.description
   */
  export type SceneAnchor$descriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    where?: SceneWhereInput
  }

  /**
   * SceneAnchor.timeline
   */
  export type SceneAnchor$timelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storyline
     */
    select?: StorylineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Storyline
     */
    omit?: StorylineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylineInclude<ExtArgs> | null
    where?: StorylineWhereInput
  }

  /**
   * SceneAnchor.parent
   */
  export type SceneAnchor$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchor
     */
    select?: SceneAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SceneAnchor
     */
    omit?: SceneAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneAnchorInclude<ExtArgs> | null
    where?: SceneAnchorWhereInput
  }

  /**
   * SceneAnchor.children
   */
  export type SceneAnchor$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchor
     */
    select?: SceneAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SceneAnchor
     */
    omit?: SceneAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneAnchorInclude<ExtArgs> | null
    where?: SceneAnchorWhereInput
    orderBy?: SceneAnchorOrderByWithRelationInput | SceneAnchorOrderByWithRelationInput[]
    cursor?: SceneAnchorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SceneAnchorScalarFieldEnum | SceneAnchorScalarFieldEnum[]
  }

  /**
   * SceneAnchor.sessions
   */
  export type SceneAnchor$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAnchor
     */
    select?: FavoriteAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteAnchor
     */
    omit?: FavoriteAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteAnchorInclude<ExtArgs> | null
    where?: FavoriteAnchorWhereInput
    orderBy?: FavoriteAnchorOrderByWithRelationInput | FavoriteAnchorOrderByWithRelationInput[]
    cursor?: FavoriteAnchorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteAnchorScalarFieldEnum | FavoriteAnchorScalarFieldEnum[]
  }

  /**
   * SceneAnchor without action
   */
  export type SceneAnchorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchor
     */
    select?: SceneAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SceneAnchor
     */
    omit?: SceneAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneAnchorInclude<ExtArgs> | null
  }


  /**
   * Model StoryPath
   */

  export type AggregateStoryPath = {
    _count: StoryPathCountAggregateOutputType | null
    _avg: StoryPathAvgAggregateOutputType | null
    _sum: StoryPathSumAggregateOutputType | null
    _min: StoryPathMinAggregateOutputType | null
    _max: StoryPathMaxAggregateOutputType | null
  }

  export type StoryPathAvgAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
  }

  export type StoryPathSumAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
  }

  export type StoryPathMinAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
  }

  export type StoryPathMaxAggregateOutputType = {
    id: number | null
    fromId: number | null
    toId: number | null
  }

  export type StoryPathCountAggregateOutputType = {
    id: number
    fromId: number
    toId: number
    _all: number
  }


  export type StoryPathAvgAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
  }

  export type StoryPathSumAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
  }

  export type StoryPathMinAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
  }

  export type StoryPathMaxAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
  }

  export type StoryPathCountAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    _all?: true
  }

  export type StoryPathAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoryPath to aggregate.
     */
    where?: StoryPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryPaths to fetch.
     */
    orderBy?: StoryPathOrderByWithRelationInput | StoryPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoryPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoryPaths
    **/
    _count?: true | StoryPathCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoryPathAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoryPathSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoryPathMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoryPathMaxAggregateInputType
  }

  export type GetStoryPathAggregateType<T extends StoryPathAggregateArgs> = {
        [P in keyof T & keyof AggregateStoryPath]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoryPath[P]>
      : GetScalarType<T[P], AggregateStoryPath[P]>
  }




  export type StoryPathGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoryPathWhereInput
    orderBy?: StoryPathOrderByWithAggregationInput | StoryPathOrderByWithAggregationInput[]
    by: StoryPathScalarFieldEnum[] | StoryPathScalarFieldEnum
    having?: StoryPathScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoryPathCountAggregateInputType | true
    _avg?: StoryPathAvgAggregateInputType
    _sum?: StoryPathSumAggregateInputType
    _min?: StoryPathMinAggregateInputType
    _max?: StoryPathMaxAggregateInputType
  }

  export type StoryPathGroupByOutputType = {
    id: number
    fromId: number
    toId: number
    _count: StoryPathCountAggregateOutputType | null
    _avg: StoryPathAvgAggregateOutputType | null
    _sum: StoryPathSumAggregateOutputType | null
    _min: StoryPathMinAggregateOutputType | null
    _max: StoryPathMaxAggregateOutputType | null
  }

  type GetStoryPathGroupByPayload<T extends StoryPathGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoryPathGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoryPathGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoryPathGroupByOutputType[P]>
            : GetScalarType<T[P], StoryPathGroupByOutputType[P]>
        }
      >
    >


  export type StoryPathSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromId?: boolean
    toId?: boolean
    from?: boolean | SceneDefaultArgs<ExtArgs>
    to?: boolean | SceneDefaultArgs<ExtArgs>
    storylines?: boolean | StoryPath$storylinesArgs<ExtArgs>
    _count?: boolean | StoryPathCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyPath"]>

  export type StoryPathSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromId?: boolean
    toId?: boolean
    from?: boolean | SceneDefaultArgs<ExtArgs>
    to?: boolean | SceneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyPath"]>

  export type StoryPathSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromId?: boolean
    toId?: boolean
    from?: boolean | SceneDefaultArgs<ExtArgs>
    to?: boolean | SceneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyPath"]>

  export type StoryPathSelectScalar = {
    id?: boolean
    fromId?: boolean
    toId?: boolean
  }

  export type StoryPathOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromId" | "toId", ExtArgs["result"]["storyPath"]>
  export type StoryPathInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | SceneDefaultArgs<ExtArgs>
    to?: boolean | SceneDefaultArgs<ExtArgs>
    storylines?: boolean | StoryPath$storylinesArgs<ExtArgs>
    _count?: boolean | StoryPathCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoryPathIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | SceneDefaultArgs<ExtArgs>
    to?: boolean | SceneDefaultArgs<ExtArgs>
  }
  export type StoryPathIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | SceneDefaultArgs<ExtArgs>
    to?: boolean | SceneDefaultArgs<ExtArgs>
  }

  export type $StoryPathPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoryPath"
    objects: {
      from: Prisma.$ScenePayload<ExtArgs>
      to: Prisma.$ScenePayload<ExtArgs>
      storylines: Prisma.$StorylinePathPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fromId: number
      toId: number
    }, ExtArgs["result"]["storyPath"]>
    composites: {}
  }

  type StoryPathGetPayload<S extends boolean | null | undefined | StoryPathDefaultArgs> = $Result.GetResult<Prisma.$StoryPathPayload, S>

  type StoryPathCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoryPathFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoryPathCountAggregateInputType | true
    }

  export interface StoryPathDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoryPath'], meta: { name: 'StoryPath' } }
    /**
     * Find zero or one StoryPath that matches the filter.
     * @param {StoryPathFindUniqueArgs} args - Arguments to find a StoryPath
     * @example
     * // Get one StoryPath
     * const storyPath = await prisma.storyPath.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoryPathFindUniqueArgs>(args: SelectSubset<T, StoryPathFindUniqueArgs<ExtArgs>>): Prisma__StoryPathClient<$Result.GetResult<Prisma.$StoryPathPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoryPath that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoryPathFindUniqueOrThrowArgs} args - Arguments to find a StoryPath
     * @example
     * // Get one StoryPath
     * const storyPath = await prisma.storyPath.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoryPathFindUniqueOrThrowArgs>(args: SelectSubset<T, StoryPathFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoryPathClient<$Result.GetResult<Prisma.$StoryPathPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoryPath that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryPathFindFirstArgs} args - Arguments to find a StoryPath
     * @example
     * // Get one StoryPath
     * const storyPath = await prisma.storyPath.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoryPathFindFirstArgs>(args?: SelectSubset<T, StoryPathFindFirstArgs<ExtArgs>>): Prisma__StoryPathClient<$Result.GetResult<Prisma.$StoryPathPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoryPath that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryPathFindFirstOrThrowArgs} args - Arguments to find a StoryPath
     * @example
     * // Get one StoryPath
     * const storyPath = await prisma.storyPath.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoryPathFindFirstOrThrowArgs>(args?: SelectSubset<T, StoryPathFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoryPathClient<$Result.GetResult<Prisma.$StoryPathPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoryPaths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryPathFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoryPaths
     * const storyPaths = await prisma.storyPath.findMany()
     * 
     * // Get first 10 StoryPaths
     * const storyPaths = await prisma.storyPath.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storyPathWithIdOnly = await prisma.storyPath.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoryPathFindManyArgs>(args?: SelectSubset<T, StoryPathFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPathPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoryPath.
     * @param {StoryPathCreateArgs} args - Arguments to create a StoryPath.
     * @example
     * // Create one StoryPath
     * const StoryPath = await prisma.storyPath.create({
     *   data: {
     *     // ... data to create a StoryPath
     *   }
     * })
     * 
     */
    create<T extends StoryPathCreateArgs>(args: SelectSubset<T, StoryPathCreateArgs<ExtArgs>>): Prisma__StoryPathClient<$Result.GetResult<Prisma.$StoryPathPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoryPaths.
     * @param {StoryPathCreateManyArgs} args - Arguments to create many StoryPaths.
     * @example
     * // Create many StoryPaths
     * const storyPath = await prisma.storyPath.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoryPathCreateManyArgs>(args?: SelectSubset<T, StoryPathCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoryPaths and returns the data saved in the database.
     * @param {StoryPathCreateManyAndReturnArgs} args - Arguments to create many StoryPaths.
     * @example
     * // Create many StoryPaths
     * const storyPath = await prisma.storyPath.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoryPaths and only return the `id`
     * const storyPathWithIdOnly = await prisma.storyPath.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoryPathCreateManyAndReturnArgs>(args?: SelectSubset<T, StoryPathCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPathPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StoryPath.
     * @param {StoryPathDeleteArgs} args - Arguments to delete one StoryPath.
     * @example
     * // Delete one StoryPath
     * const StoryPath = await prisma.storyPath.delete({
     *   where: {
     *     // ... filter to delete one StoryPath
     *   }
     * })
     * 
     */
    delete<T extends StoryPathDeleteArgs>(args: SelectSubset<T, StoryPathDeleteArgs<ExtArgs>>): Prisma__StoryPathClient<$Result.GetResult<Prisma.$StoryPathPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoryPath.
     * @param {StoryPathUpdateArgs} args - Arguments to update one StoryPath.
     * @example
     * // Update one StoryPath
     * const storyPath = await prisma.storyPath.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoryPathUpdateArgs>(args: SelectSubset<T, StoryPathUpdateArgs<ExtArgs>>): Prisma__StoryPathClient<$Result.GetResult<Prisma.$StoryPathPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoryPaths.
     * @param {StoryPathDeleteManyArgs} args - Arguments to filter StoryPaths to delete.
     * @example
     * // Delete a few StoryPaths
     * const { count } = await prisma.storyPath.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoryPathDeleteManyArgs>(args?: SelectSubset<T, StoryPathDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoryPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryPathUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoryPaths
     * const storyPath = await prisma.storyPath.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoryPathUpdateManyArgs>(args: SelectSubset<T, StoryPathUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoryPaths and returns the data updated in the database.
     * @param {StoryPathUpdateManyAndReturnArgs} args - Arguments to update many StoryPaths.
     * @example
     * // Update many StoryPaths
     * const storyPath = await prisma.storyPath.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StoryPaths and only return the `id`
     * const storyPathWithIdOnly = await prisma.storyPath.updateManyAndReturn({
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
    updateManyAndReturn<T extends StoryPathUpdateManyAndReturnArgs>(args: SelectSubset<T, StoryPathUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoryPathPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StoryPath.
     * @param {StoryPathUpsertArgs} args - Arguments to update or create a StoryPath.
     * @example
     * // Update or create a StoryPath
     * const storyPath = await prisma.storyPath.upsert({
     *   create: {
     *     // ... data to create a StoryPath
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoryPath we want to update
     *   }
     * })
     */
    upsert<T extends StoryPathUpsertArgs>(args: SelectSubset<T, StoryPathUpsertArgs<ExtArgs>>): Prisma__StoryPathClient<$Result.GetResult<Prisma.$StoryPathPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoryPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryPathCountArgs} args - Arguments to filter StoryPaths to count.
     * @example
     * // Count the number of StoryPaths
     * const count = await prisma.storyPath.count({
     *   where: {
     *     // ... the filter for the StoryPaths we want to count
     *   }
     * })
    **/
    count<T extends StoryPathCountArgs>(
      args?: Subset<T, StoryPathCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoryPathCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoryPath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryPathAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoryPathAggregateArgs>(args: Subset<T, StoryPathAggregateArgs>): Prisma.PrismaPromise<GetStoryPathAggregateType<T>>

    /**
     * Group by StoryPath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoryPathGroupByArgs} args - Group by arguments.
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
      T extends StoryPathGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoryPathGroupByArgs['orderBy'] }
        : { orderBy?: StoryPathGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoryPathGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoryPathGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoryPath model
   */
  readonly fields: StoryPathFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoryPath.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoryPathClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    from<T extends SceneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SceneDefaultArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    to<T extends SceneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SceneDefaultArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    storylines<T extends StoryPath$storylinesArgs<ExtArgs> = {}>(args?: Subset<T, StoryPath$storylinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorylinePathPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StoryPath model
   */
  interface StoryPathFieldRefs {
    readonly id: FieldRef<"StoryPath", 'Int'>
    readonly fromId: FieldRef<"StoryPath", 'Int'>
    readonly toId: FieldRef<"StoryPath", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StoryPath findUnique
   */
  export type StoryPathFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryPath
     */
    select?: StoryPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryPath
     */
    omit?: StoryPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryPathInclude<ExtArgs> | null
    /**
     * Filter, which StoryPath to fetch.
     */
    where: StoryPathWhereUniqueInput
  }

  /**
   * StoryPath findUniqueOrThrow
   */
  export type StoryPathFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryPath
     */
    select?: StoryPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryPath
     */
    omit?: StoryPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryPathInclude<ExtArgs> | null
    /**
     * Filter, which StoryPath to fetch.
     */
    where: StoryPathWhereUniqueInput
  }

  /**
   * StoryPath findFirst
   */
  export type StoryPathFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryPath
     */
    select?: StoryPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryPath
     */
    omit?: StoryPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryPathInclude<ExtArgs> | null
    /**
     * Filter, which StoryPath to fetch.
     */
    where?: StoryPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryPaths to fetch.
     */
    orderBy?: StoryPathOrderByWithRelationInput | StoryPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoryPaths.
     */
    cursor?: StoryPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryPaths.
     */
    distinct?: StoryPathScalarFieldEnum | StoryPathScalarFieldEnum[]
  }

  /**
   * StoryPath findFirstOrThrow
   */
  export type StoryPathFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryPath
     */
    select?: StoryPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryPath
     */
    omit?: StoryPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryPathInclude<ExtArgs> | null
    /**
     * Filter, which StoryPath to fetch.
     */
    where?: StoryPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryPaths to fetch.
     */
    orderBy?: StoryPathOrderByWithRelationInput | StoryPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoryPaths.
     */
    cursor?: StoryPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoryPaths.
     */
    distinct?: StoryPathScalarFieldEnum | StoryPathScalarFieldEnum[]
  }

  /**
   * StoryPath findMany
   */
  export type StoryPathFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryPath
     */
    select?: StoryPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryPath
     */
    omit?: StoryPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryPathInclude<ExtArgs> | null
    /**
     * Filter, which StoryPaths to fetch.
     */
    where?: StoryPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoryPaths to fetch.
     */
    orderBy?: StoryPathOrderByWithRelationInput | StoryPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoryPaths.
     */
    cursor?: StoryPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoryPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoryPaths.
     */
    skip?: number
    distinct?: StoryPathScalarFieldEnum | StoryPathScalarFieldEnum[]
  }

  /**
   * StoryPath create
   */
  export type StoryPathCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryPath
     */
    select?: StoryPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryPath
     */
    omit?: StoryPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryPathInclude<ExtArgs> | null
    /**
     * The data needed to create a StoryPath.
     */
    data: XOR<StoryPathCreateInput, StoryPathUncheckedCreateInput>
  }

  /**
   * StoryPath createMany
   */
  export type StoryPathCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoryPaths.
     */
    data: StoryPathCreateManyInput | StoryPathCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoryPath createManyAndReturn
   */
  export type StoryPathCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryPath
     */
    select?: StoryPathSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoryPath
     */
    omit?: StoryPathOmit<ExtArgs> | null
    /**
     * The data used to create many StoryPaths.
     */
    data: StoryPathCreateManyInput | StoryPathCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryPathIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoryPath update
   */
  export type StoryPathUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryPath
     */
    select?: StoryPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryPath
     */
    omit?: StoryPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryPathInclude<ExtArgs> | null
    /**
     * The data needed to update a StoryPath.
     */
    data: XOR<StoryPathUpdateInput, StoryPathUncheckedUpdateInput>
    /**
     * Choose, which StoryPath to update.
     */
    where: StoryPathWhereUniqueInput
  }

  /**
   * StoryPath updateMany
   */
  export type StoryPathUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoryPaths.
     */
    data: XOR<StoryPathUpdateManyMutationInput, StoryPathUncheckedUpdateManyInput>
    /**
     * Filter which StoryPaths to update
     */
    where?: StoryPathWhereInput
    /**
     * Limit how many StoryPaths to update.
     */
    limit?: number
  }

  /**
   * StoryPath updateManyAndReturn
   */
  export type StoryPathUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryPath
     */
    select?: StoryPathSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoryPath
     */
    omit?: StoryPathOmit<ExtArgs> | null
    /**
     * The data used to update StoryPaths.
     */
    data: XOR<StoryPathUpdateManyMutationInput, StoryPathUncheckedUpdateManyInput>
    /**
     * Filter which StoryPaths to update
     */
    where?: StoryPathWhereInput
    /**
     * Limit how many StoryPaths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryPathIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoryPath upsert
   */
  export type StoryPathUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryPath
     */
    select?: StoryPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryPath
     */
    omit?: StoryPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryPathInclude<ExtArgs> | null
    /**
     * The filter to search for the StoryPath to update in case it exists.
     */
    where: StoryPathWhereUniqueInput
    /**
     * In case the StoryPath found by the `where` argument doesn't exist, create a new StoryPath with this data.
     */
    create: XOR<StoryPathCreateInput, StoryPathUncheckedCreateInput>
    /**
     * In case the StoryPath was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoryPathUpdateInput, StoryPathUncheckedUpdateInput>
  }

  /**
   * StoryPath delete
   */
  export type StoryPathDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryPath
     */
    select?: StoryPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryPath
     */
    omit?: StoryPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryPathInclude<ExtArgs> | null
    /**
     * Filter which StoryPath to delete.
     */
    where: StoryPathWhereUniqueInput
  }

  /**
   * StoryPath deleteMany
   */
  export type StoryPathDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoryPaths to delete
     */
    where?: StoryPathWhereInput
    /**
     * Limit how many StoryPaths to delete.
     */
    limit?: number
  }

  /**
   * StoryPath.storylines
   */
  export type StoryPath$storylinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorylinePath
     */
    select?: StorylinePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorylinePath
     */
    omit?: StorylinePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylinePathInclude<ExtArgs> | null
    where?: StorylinePathWhereInput
    orderBy?: StorylinePathOrderByWithRelationInput | StorylinePathOrderByWithRelationInput[]
    cursor?: StorylinePathWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StorylinePathScalarFieldEnum | StorylinePathScalarFieldEnum[]
  }

  /**
   * StoryPath without action
   */
  export type StoryPathDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoryPath
     */
    select?: StoryPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoryPath
     */
    omit?: StoryPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoryPathInclude<ExtArgs> | null
  }


  /**
   * Model Storyline
   */

  export type AggregateStoryline = {
    _count: StorylineCountAggregateOutputType | null
    _avg: StorylineAvgAggregateOutputType | null
    _sum: StorylineSumAggregateOutputType | null
    _min: StorylineMinAggregateOutputType | null
    _max: StorylineMaxAggregateOutputType | null
  }

  export type StorylineAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type StorylineSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type StorylineMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    ownerId: number | null
  }

  export type StorylineMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    ownerId: number | null
  }

  export type StorylineCountAggregateOutputType = {
    id: number
    title: number
    description: number
    ownerId: number
    _all: number
  }


  export type StorylineAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type StorylineSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type StorylineMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    ownerId?: true
  }

  export type StorylineMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    ownerId?: true
  }

  export type StorylineCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    ownerId?: true
    _all?: true
  }

  export type StorylineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Storyline to aggregate.
     */
    where?: StorylineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Storylines to fetch.
     */
    orderBy?: StorylineOrderByWithRelationInput | StorylineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StorylineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Storylines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Storylines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Storylines
    **/
    _count?: true | StorylineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StorylineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorylineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StorylineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StorylineMaxAggregateInputType
  }

  export type GetStorylineAggregateType<T extends StorylineAggregateArgs> = {
        [P in keyof T & keyof AggregateStoryline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoryline[P]>
      : GetScalarType<T[P], AggregateStoryline[P]>
  }




  export type StorylineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorylineWhereInput
    orderBy?: StorylineOrderByWithAggregationInput | StorylineOrderByWithAggregationInput[]
    by: StorylineScalarFieldEnum[] | StorylineScalarFieldEnum
    having?: StorylineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StorylineCountAggregateInputType | true
    _avg?: StorylineAvgAggregateInputType
    _sum?: StorylineSumAggregateInputType
    _min?: StorylineMinAggregateInputType
    _max?: StorylineMaxAggregateInputType
  }

  export type StorylineGroupByOutputType = {
    id: number
    title: string
    description: string
    ownerId: number
    _count: StorylineCountAggregateOutputType | null
    _avg: StorylineAvgAggregateOutputType | null
    _sum: StorylineSumAggregateOutputType | null
    _min: StorylineMinAggregateOutputType | null
    _max: StorylineMaxAggregateOutputType | null
  }

  type GetStorylineGroupByPayload<T extends StorylineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StorylineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StorylineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StorylineGroupByOutputType[P]>
            : GetScalarType<T[P], StorylineGroupByOutputType[P]>
        }
      >
    >


  export type StorylineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    storyPaths?: boolean | Storyline$storyPathsArgs<ExtArgs>
    anchor?: boolean | Storyline$anchorArgs<ExtArgs>
    _count?: boolean | StorylineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyline"]>

  export type StorylineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyline"]>

  export type StorylineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storyline"]>

  export type StorylineSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    ownerId?: boolean
  }

  export type StorylineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "ownerId", ExtArgs["result"]["storyline"]>
  export type StorylineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    storyPaths?: boolean | Storyline$storyPathsArgs<ExtArgs>
    anchor?: boolean | Storyline$anchorArgs<ExtArgs>
    _count?: boolean | StorylineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StorylineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StorylineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StorylinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Storyline"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      storyPaths: Prisma.$StorylinePathPayload<ExtArgs>[]
      anchor: Prisma.$SceneAnchorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      ownerId: number
    }, ExtArgs["result"]["storyline"]>
    composites: {}
  }

  type StorylineGetPayload<S extends boolean | null | undefined | StorylineDefaultArgs> = $Result.GetResult<Prisma.$StorylinePayload, S>

  type StorylineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StorylineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StorylineCountAggregateInputType | true
    }

  export interface StorylineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Storyline'], meta: { name: 'Storyline' } }
    /**
     * Find zero or one Storyline that matches the filter.
     * @param {StorylineFindUniqueArgs} args - Arguments to find a Storyline
     * @example
     * // Get one Storyline
     * const storyline = await prisma.storyline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StorylineFindUniqueArgs>(args: SelectSubset<T, StorylineFindUniqueArgs<ExtArgs>>): Prisma__StorylineClient<$Result.GetResult<Prisma.$StorylinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Storyline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StorylineFindUniqueOrThrowArgs} args - Arguments to find a Storyline
     * @example
     * // Get one Storyline
     * const storyline = await prisma.storyline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StorylineFindUniqueOrThrowArgs>(args: SelectSubset<T, StorylineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StorylineClient<$Result.GetResult<Prisma.$StorylinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Storyline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorylineFindFirstArgs} args - Arguments to find a Storyline
     * @example
     * // Get one Storyline
     * const storyline = await prisma.storyline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StorylineFindFirstArgs>(args?: SelectSubset<T, StorylineFindFirstArgs<ExtArgs>>): Prisma__StorylineClient<$Result.GetResult<Prisma.$StorylinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Storyline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorylineFindFirstOrThrowArgs} args - Arguments to find a Storyline
     * @example
     * // Get one Storyline
     * const storyline = await prisma.storyline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StorylineFindFirstOrThrowArgs>(args?: SelectSubset<T, StorylineFindFirstOrThrowArgs<ExtArgs>>): Prisma__StorylineClient<$Result.GetResult<Prisma.$StorylinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Storylines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorylineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Storylines
     * const storylines = await prisma.storyline.findMany()
     * 
     * // Get first 10 Storylines
     * const storylines = await prisma.storyline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storylineWithIdOnly = await prisma.storyline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StorylineFindManyArgs>(args?: SelectSubset<T, StorylineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorylinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Storyline.
     * @param {StorylineCreateArgs} args - Arguments to create a Storyline.
     * @example
     * // Create one Storyline
     * const Storyline = await prisma.storyline.create({
     *   data: {
     *     // ... data to create a Storyline
     *   }
     * })
     * 
     */
    create<T extends StorylineCreateArgs>(args: SelectSubset<T, StorylineCreateArgs<ExtArgs>>): Prisma__StorylineClient<$Result.GetResult<Prisma.$StorylinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Storylines.
     * @param {StorylineCreateManyArgs} args - Arguments to create many Storylines.
     * @example
     * // Create many Storylines
     * const storyline = await prisma.storyline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StorylineCreateManyArgs>(args?: SelectSubset<T, StorylineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Storylines and returns the data saved in the database.
     * @param {StorylineCreateManyAndReturnArgs} args - Arguments to create many Storylines.
     * @example
     * // Create many Storylines
     * const storyline = await prisma.storyline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Storylines and only return the `id`
     * const storylineWithIdOnly = await prisma.storyline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StorylineCreateManyAndReturnArgs>(args?: SelectSubset<T, StorylineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorylinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Storyline.
     * @param {StorylineDeleteArgs} args - Arguments to delete one Storyline.
     * @example
     * // Delete one Storyline
     * const Storyline = await prisma.storyline.delete({
     *   where: {
     *     // ... filter to delete one Storyline
     *   }
     * })
     * 
     */
    delete<T extends StorylineDeleteArgs>(args: SelectSubset<T, StorylineDeleteArgs<ExtArgs>>): Prisma__StorylineClient<$Result.GetResult<Prisma.$StorylinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Storyline.
     * @param {StorylineUpdateArgs} args - Arguments to update one Storyline.
     * @example
     * // Update one Storyline
     * const storyline = await prisma.storyline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StorylineUpdateArgs>(args: SelectSubset<T, StorylineUpdateArgs<ExtArgs>>): Prisma__StorylineClient<$Result.GetResult<Prisma.$StorylinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Storylines.
     * @param {StorylineDeleteManyArgs} args - Arguments to filter Storylines to delete.
     * @example
     * // Delete a few Storylines
     * const { count } = await prisma.storyline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StorylineDeleteManyArgs>(args?: SelectSubset<T, StorylineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Storylines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorylineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Storylines
     * const storyline = await prisma.storyline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StorylineUpdateManyArgs>(args: SelectSubset<T, StorylineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Storylines and returns the data updated in the database.
     * @param {StorylineUpdateManyAndReturnArgs} args - Arguments to update many Storylines.
     * @example
     * // Update many Storylines
     * const storyline = await prisma.storyline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Storylines and only return the `id`
     * const storylineWithIdOnly = await prisma.storyline.updateManyAndReturn({
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
    updateManyAndReturn<T extends StorylineUpdateManyAndReturnArgs>(args: SelectSubset<T, StorylineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorylinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Storyline.
     * @param {StorylineUpsertArgs} args - Arguments to update or create a Storyline.
     * @example
     * // Update or create a Storyline
     * const storyline = await prisma.storyline.upsert({
     *   create: {
     *     // ... data to create a Storyline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Storyline we want to update
     *   }
     * })
     */
    upsert<T extends StorylineUpsertArgs>(args: SelectSubset<T, StorylineUpsertArgs<ExtArgs>>): Prisma__StorylineClient<$Result.GetResult<Prisma.$StorylinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Storylines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorylineCountArgs} args - Arguments to filter Storylines to count.
     * @example
     * // Count the number of Storylines
     * const count = await prisma.storyline.count({
     *   where: {
     *     // ... the filter for the Storylines we want to count
     *   }
     * })
    **/
    count<T extends StorylineCountArgs>(
      args?: Subset<T, StorylineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StorylineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Storyline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorylineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StorylineAggregateArgs>(args: Subset<T, StorylineAggregateArgs>): Prisma.PrismaPromise<GetStorylineAggregateType<T>>

    /**
     * Group by Storyline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorylineGroupByArgs} args - Group by arguments.
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
      T extends StorylineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StorylineGroupByArgs['orderBy'] }
        : { orderBy?: StorylineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StorylineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStorylineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Storyline model
   */
  readonly fields: StorylineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Storyline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StorylineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    storyPaths<T extends Storyline$storyPathsArgs<ExtArgs> = {}>(args?: Subset<T, Storyline$storyPathsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorylinePathPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    anchor<T extends Storyline$anchorArgs<ExtArgs> = {}>(args?: Subset<T, Storyline$anchorArgs<ExtArgs>>): Prisma__SceneAnchorClient<$Result.GetResult<Prisma.$SceneAnchorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Storyline model
   */
  interface StorylineFieldRefs {
    readonly id: FieldRef<"Storyline", 'Int'>
    readonly title: FieldRef<"Storyline", 'String'>
    readonly description: FieldRef<"Storyline", 'String'>
    readonly ownerId: FieldRef<"Storyline", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Storyline findUnique
   */
  export type StorylineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storyline
     */
    select?: StorylineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Storyline
     */
    omit?: StorylineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylineInclude<ExtArgs> | null
    /**
     * Filter, which Storyline to fetch.
     */
    where: StorylineWhereUniqueInput
  }

  /**
   * Storyline findUniqueOrThrow
   */
  export type StorylineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storyline
     */
    select?: StorylineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Storyline
     */
    omit?: StorylineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylineInclude<ExtArgs> | null
    /**
     * Filter, which Storyline to fetch.
     */
    where: StorylineWhereUniqueInput
  }

  /**
   * Storyline findFirst
   */
  export type StorylineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storyline
     */
    select?: StorylineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Storyline
     */
    omit?: StorylineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylineInclude<ExtArgs> | null
    /**
     * Filter, which Storyline to fetch.
     */
    where?: StorylineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Storylines to fetch.
     */
    orderBy?: StorylineOrderByWithRelationInput | StorylineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Storylines.
     */
    cursor?: StorylineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Storylines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Storylines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Storylines.
     */
    distinct?: StorylineScalarFieldEnum | StorylineScalarFieldEnum[]
  }

  /**
   * Storyline findFirstOrThrow
   */
  export type StorylineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storyline
     */
    select?: StorylineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Storyline
     */
    omit?: StorylineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylineInclude<ExtArgs> | null
    /**
     * Filter, which Storyline to fetch.
     */
    where?: StorylineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Storylines to fetch.
     */
    orderBy?: StorylineOrderByWithRelationInput | StorylineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Storylines.
     */
    cursor?: StorylineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Storylines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Storylines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Storylines.
     */
    distinct?: StorylineScalarFieldEnum | StorylineScalarFieldEnum[]
  }

  /**
   * Storyline findMany
   */
  export type StorylineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storyline
     */
    select?: StorylineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Storyline
     */
    omit?: StorylineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylineInclude<ExtArgs> | null
    /**
     * Filter, which Storylines to fetch.
     */
    where?: StorylineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Storylines to fetch.
     */
    orderBy?: StorylineOrderByWithRelationInput | StorylineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Storylines.
     */
    cursor?: StorylineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Storylines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Storylines.
     */
    skip?: number
    distinct?: StorylineScalarFieldEnum | StorylineScalarFieldEnum[]
  }

  /**
   * Storyline create
   */
  export type StorylineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storyline
     */
    select?: StorylineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Storyline
     */
    omit?: StorylineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylineInclude<ExtArgs> | null
    /**
     * The data needed to create a Storyline.
     */
    data: XOR<StorylineCreateInput, StorylineUncheckedCreateInput>
  }

  /**
   * Storyline createMany
   */
  export type StorylineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Storylines.
     */
    data: StorylineCreateManyInput | StorylineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Storyline createManyAndReturn
   */
  export type StorylineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storyline
     */
    select?: StorylineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Storyline
     */
    omit?: StorylineOmit<ExtArgs> | null
    /**
     * The data used to create many Storylines.
     */
    data: StorylineCreateManyInput | StorylineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Storyline update
   */
  export type StorylineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storyline
     */
    select?: StorylineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Storyline
     */
    omit?: StorylineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylineInclude<ExtArgs> | null
    /**
     * The data needed to update a Storyline.
     */
    data: XOR<StorylineUpdateInput, StorylineUncheckedUpdateInput>
    /**
     * Choose, which Storyline to update.
     */
    where: StorylineWhereUniqueInput
  }

  /**
   * Storyline updateMany
   */
  export type StorylineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Storylines.
     */
    data: XOR<StorylineUpdateManyMutationInput, StorylineUncheckedUpdateManyInput>
    /**
     * Filter which Storylines to update
     */
    where?: StorylineWhereInput
    /**
     * Limit how many Storylines to update.
     */
    limit?: number
  }

  /**
   * Storyline updateManyAndReturn
   */
  export type StorylineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storyline
     */
    select?: StorylineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Storyline
     */
    omit?: StorylineOmit<ExtArgs> | null
    /**
     * The data used to update Storylines.
     */
    data: XOR<StorylineUpdateManyMutationInput, StorylineUncheckedUpdateManyInput>
    /**
     * Filter which Storylines to update
     */
    where?: StorylineWhereInput
    /**
     * Limit how many Storylines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Storyline upsert
   */
  export type StorylineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storyline
     */
    select?: StorylineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Storyline
     */
    omit?: StorylineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylineInclude<ExtArgs> | null
    /**
     * The filter to search for the Storyline to update in case it exists.
     */
    where: StorylineWhereUniqueInput
    /**
     * In case the Storyline found by the `where` argument doesn't exist, create a new Storyline with this data.
     */
    create: XOR<StorylineCreateInput, StorylineUncheckedCreateInput>
    /**
     * In case the Storyline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StorylineUpdateInput, StorylineUncheckedUpdateInput>
  }

  /**
   * Storyline delete
   */
  export type StorylineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storyline
     */
    select?: StorylineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Storyline
     */
    omit?: StorylineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylineInclude<ExtArgs> | null
    /**
     * Filter which Storyline to delete.
     */
    where: StorylineWhereUniqueInput
  }

  /**
   * Storyline deleteMany
   */
  export type StorylineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Storylines to delete
     */
    where?: StorylineWhereInput
    /**
     * Limit how many Storylines to delete.
     */
    limit?: number
  }

  /**
   * Storyline.storyPaths
   */
  export type Storyline$storyPathsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorylinePath
     */
    select?: StorylinePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorylinePath
     */
    omit?: StorylinePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylinePathInclude<ExtArgs> | null
    where?: StorylinePathWhereInput
    orderBy?: StorylinePathOrderByWithRelationInput | StorylinePathOrderByWithRelationInput[]
    cursor?: StorylinePathWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StorylinePathScalarFieldEnum | StorylinePathScalarFieldEnum[]
  }

  /**
   * Storyline.anchor
   */
  export type Storyline$anchorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchor
     */
    select?: SceneAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SceneAnchor
     */
    omit?: SceneAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneAnchorInclude<ExtArgs> | null
    where?: SceneAnchorWhereInput
  }

  /**
   * Storyline without action
   */
  export type StorylineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storyline
     */
    select?: StorylineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Storyline
     */
    omit?: StorylineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylineInclude<ExtArgs> | null
  }


  /**
   * Model StorylinePath
   */

  export type AggregateStorylinePath = {
    _count: StorylinePathCountAggregateOutputType | null
    _avg: StorylinePathAvgAggregateOutputType | null
    _sum: StorylinePathSumAggregateOutputType | null
    _min: StorylinePathMinAggregateOutputType | null
    _max: StorylinePathMaxAggregateOutputType | null
  }

  export type StorylinePathAvgAggregateOutputType = {
    storyLineId: number | null
    pathId: number | null
    seq: number | null
  }

  export type StorylinePathSumAggregateOutputType = {
    storyLineId: number | null
    pathId: number | null
    seq: number | null
  }

  export type StorylinePathMinAggregateOutputType = {
    storyLineId: number | null
    pathId: number | null
    seq: number | null
  }

  export type StorylinePathMaxAggregateOutputType = {
    storyLineId: number | null
    pathId: number | null
    seq: number | null
  }

  export type StorylinePathCountAggregateOutputType = {
    storyLineId: number
    pathId: number
    seq: number
    _all: number
  }


  export type StorylinePathAvgAggregateInputType = {
    storyLineId?: true
    pathId?: true
    seq?: true
  }

  export type StorylinePathSumAggregateInputType = {
    storyLineId?: true
    pathId?: true
    seq?: true
  }

  export type StorylinePathMinAggregateInputType = {
    storyLineId?: true
    pathId?: true
    seq?: true
  }

  export type StorylinePathMaxAggregateInputType = {
    storyLineId?: true
    pathId?: true
    seq?: true
  }

  export type StorylinePathCountAggregateInputType = {
    storyLineId?: true
    pathId?: true
    seq?: true
    _all?: true
  }

  export type StorylinePathAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorylinePath to aggregate.
     */
    where?: StorylinePathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorylinePaths to fetch.
     */
    orderBy?: StorylinePathOrderByWithRelationInput | StorylinePathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StorylinePathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorylinePaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorylinePaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StorylinePaths
    **/
    _count?: true | StorylinePathCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StorylinePathAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorylinePathSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StorylinePathMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StorylinePathMaxAggregateInputType
  }

  export type GetStorylinePathAggregateType<T extends StorylinePathAggregateArgs> = {
        [P in keyof T & keyof AggregateStorylinePath]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStorylinePath[P]>
      : GetScalarType<T[P], AggregateStorylinePath[P]>
  }




  export type StorylinePathGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorylinePathWhereInput
    orderBy?: StorylinePathOrderByWithAggregationInput | StorylinePathOrderByWithAggregationInput[]
    by: StorylinePathScalarFieldEnum[] | StorylinePathScalarFieldEnum
    having?: StorylinePathScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StorylinePathCountAggregateInputType | true
    _avg?: StorylinePathAvgAggregateInputType
    _sum?: StorylinePathSumAggregateInputType
    _min?: StorylinePathMinAggregateInputType
    _max?: StorylinePathMaxAggregateInputType
  }

  export type StorylinePathGroupByOutputType = {
    storyLineId: number
    pathId: number
    seq: number
    _count: StorylinePathCountAggregateOutputType | null
    _avg: StorylinePathAvgAggregateOutputType | null
    _sum: StorylinePathSumAggregateOutputType | null
    _min: StorylinePathMinAggregateOutputType | null
    _max: StorylinePathMaxAggregateOutputType | null
  }

  type GetStorylinePathGroupByPayload<T extends StorylinePathGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StorylinePathGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StorylinePathGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StorylinePathGroupByOutputType[P]>
            : GetScalarType<T[P], StorylinePathGroupByOutputType[P]>
        }
      >
    >


  export type StorylinePathSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    storyLineId?: boolean
    pathId?: boolean
    seq?: boolean
    storyline?: boolean | StorylineDefaultArgs<ExtArgs>
    path?: boolean | StoryPathDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storylinePath"]>

  export type StorylinePathSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    storyLineId?: boolean
    pathId?: boolean
    seq?: boolean
    storyline?: boolean | StorylineDefaultArgs<ExtArgs>
    path?: boolean | StoryPathDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storylinePath"]>

  export type StorylinePathSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    storyLineId?: boolean
    pathId?: boolean
    seq?: boolean
    storyline?: boolean | StorylineDefaultArgs<ExtArgs>
    path?: boolean | StoryPathDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storylinePath"]>

  export type StorylinePathSelectScalar = {
    storyLineId?: boolean
    pathId?: boolean
    seq?: boolean
  }

  export type StorylinePathOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"storyLineId" | "pathId" | "seq", ExtArgs["result"]["storylinePath"]>
  export type StorylinePathInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    storyline?: boolean | StorylineDefaultArgs<ExtArgs>
    path?: boolean | StoryPathDefaultArgs<ExtArgs>
  }
  export type StorylinePathIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    storyline?: boolean | StorylineDefaultArgs<ExtArgs>
    path?: boolean | StoryPathDefaultArgs<ExtArgs>
  }
  export type StorylinePathIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    storyline?: boolean | StorylineDefaultArgs<ExtArgs>
    path?: boolean | StoryPathDefaultArgs<ExtArgs>
  }

  export type $StorylinePathPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StorylinePath"
    objects: {
      storyline: Prisma.$StorylinePayload<ExtArgs>
      path: Prisma.$StoryPathPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      storyLineId: number
      pathId: number
      seq: number
    }, ExtArgs["result"]["storylinePath"]>
    composites: {}
  }

  type StorylinePathGetPayload<S extends boolean | null | undefined | StorylinePathDefaultArgs> = $Result.GetResult<Prisma.$StorylinePathPayload, S>

  type StorylinePathCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StorylinePathFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StorylinePathCountAggregateInputType | true
    }

  export interface StorylinePathDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StorylinePath'], meta: { name: 'StorylinePath' } }
    /**
     * Find zero or one StorylinePath that matches the filter.
     * @param {StorylinePathFindUniqueArgs} args - Arguments to find a StorylinePath
     * @example
     * // Get one StorylinePath
     * const storylinePath = await prisma.storylinePath.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StorylinePathFindUniqueArgs>(args: SelectSubset<T, StorylinePathFindUniqueArgs<ExtArgs>>): Prisma__StorylinePathClient<$Result.GetResult<Prisma.$StorylinePathPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StorylinePath that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StorylinePathFindUniqueOrThrowArgs} args - Arguments to find a StorylinePath
     * @example
     * // Get one StorylinePath
     * const storylinePath = await prisma.storylinePath.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StorylinePathFindUniqueOrThrowArgs>(args: SelectSubset<T, StorylinePathFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StorylinePathClient<$Result.GetResult<Prisma.$StorylinePathPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StorylinePath that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorylinePathFindFirstArgs} args - Arguments to find a StorylinePath
     * @example
     * // Get one StorylinePath
     * const storylinePath = await prisma.storylinePath.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StorylinePathFindFirstArgs>(args?: SelectSubset<T, StorylinePathFindFirstArgs<ExtArgs>>): Prisma__StorylinePathClient<$Result.GetResult<Prisma.$StorylinePathPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StorylinePath that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorylinePathFindFirstOrThrowArgs} args - Arguments to find a StorylinePath
     * @example
     * // Get one StorylinePath
     * const storylinePath = await prisma.storylinePath.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StorylinePathFindFirstOrThrowArgs>(args?: SelectSubset<T, StorylinePathFindFirstOrThrowArgs<ExtArgs>>): Prisma__StorylinePathClient<$Result.GetResult<Prisma.$StorylinePathPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StorylinePaths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorylinePathFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StorylinePaths
     * const storylinePaths = await prisma.storylinePath.findMany()
     * 
     * // Get first 10 StorylinePaths
     * const storylinePaths = await prisma.storylinePath.findMany({ take: 10 })
     * 
     * // Only select the `storyLineId`
     * const storylinePathWithStoryLineIdOnly = await prisma.storylinePath.findMany({ select: { storyLineId: true } })
     * 
     */
    findMany<T extends StorylinePathFindManyArgs>(args?: SelectSubset<T, StorylinePathFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorylinePathPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StorylinePath.
     * @param {StorylinePathCreateArgs} args - Arguments to create a StorylinePath.
     * @example
     * // Create one StorylinePath
     * const StorylinePath = await prisma.storylinePath.create({
     *   data: {
     *     // ... data to create a StorylinePath
     *   }
     * })
     * 
     */
    create<T extends StorylinePathCreateArgs>(args: SelectSubset<T, StorylinePathCreateArgs<ExtArgs>>): Prisma__StorylinePathClient<$Result.GetResult<Prisma.$StorylinePathPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StorylinePaths.
     * @param {StorylinePathCreateManyArgs} args - Arguments to create many StorylinePaths.
     * @example
     * // Create many StorylinePaths
     * const storylinePath = await prisma.storylinePath.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StorylinePathCreateManyArgs>(args?: SelectSubset<T, StorylinePathCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StorylinePaths and returns the data saved in the database.
     * @param {StorylinePathCreateManyAndReturnArgs} args - Arguments to create many StorylinePaths.
     * @example
     * // Create many StorylinePaths
     * const storylinePath = await prisma.storylinePath.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StorylinePaths and only return the `storyLineId`
     * const storylinePathWithStoryLineIdOnly = await prisma.storylinePath.createManyAndReturn({
     *   select: { storyLineId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StorylinePathCreateManyAndReturnArgs>(args?: SelectSubset<T, StorylinePathCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorylinePathPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StorylinePath.
     * @param {StorylinePathDeleteArgs} args - Arguments to delete one StorylinePath.
     * @example
     * // Delete one StorylinePath
     * const StorylinePath = await prisma.storylinePath.delete({
     *   where: {
     *     // ... filter to delete one StorylinePath
     *   }
     * })
     * 
     */
    delete<T extends StorylinePathDeleteArgs>(args: SelectSubset<T, StorylinePathDeleteArgs<ExtArgs>>): Prisma__StorylinePathClient<$Result.GetResult<Prisma.$StorylinePathPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StorylinePath.
     * @param {StorylinePathUpdateArgs} args - Arguments to update one StorylinePath.
     * @example
     * // Update one StorylinePath
     * const storylinePath = await prisma.storylinePath.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StorylinePathUpdateArgs>(args: SelectSubset<T, StorylinePathUpdateArgs<ExtArgs>>): Prisma__StorylinePathClient<$Result.GetResult<Prisma.$StorylinePathPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StorylinePaths.
     * @param {StorylinePathDeleteManyArgs} args - Arguments to filter StorylinePaths to delete.
     * @example
     * // Delete a few StorylinePaths
     * const { count } = await prisma.storylinePath.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StorylinePathDeleteManyArgs>(args?: SelectSubset<T, StorylinePathDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorylinePaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorylinePathUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StorylinePaths
     * const storylinePath = await prisma.storylinePath.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StorylinePathUpdateManyArgs>(args: SelectSubset<T, StorylinePathUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorylinePaths and returns the data updated in the database.
     * @param {StorylinePathUpdateManyAndReturnArgs} args - Arguments to update many StorylinePaths.
     * @example
     * // Update many StorylinePaths
     * const storylinePath = await prisma.storylinePath.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StorylinePaths and only return the `storyLineId`
     * const storylinePathWithStoryLineIdOnly = await prisma.storylinePath.updateManyAndReturn({
     *   select: { storyLineId: true },
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
    updateManyAndReturn<T extends StorylinePathUpdateManyAndReturnArgs>(args: SelectSubset<T, StorylinePathUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorylinePathPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StorylinePath.
     * @param {StorylinePathUpsertArgs} args - Arguments to update or create a StorylinePath.
     * @example
     * // Update or create a StorylinePath
     * const storylinePath = await prisma.storylinePath.upsert({
     *   create: {
     *     // ... data to create a StorylinePath
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StorylinePath we want to update
     *   }
     * })
     */
    upsert<T extends StorylinePathUpsertArgs>(args: SelectSubset<T, StorylinePathUpsertArgs<ExtArgs>>): Prisma__StorylinePathClient<$Result.GetResult<Prisma.$StorylinePathPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StorylinePaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorylinePathCountArgs} args - Arguments to filter StorylinePaths to count.
     * @example
     * // Count the number of StorylinePaths
     * const count = await prisma.storylinePath.count({
     *   where: {
     *     // ... the filter for the StorylinePaths we want to count
     *   }
     * })
    **/
    count<T extends StorylinePathCountArgs>(
      args?: Subset<T, StorylinePathCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StorylinePathCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StorylinePath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorylinePathAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StorylinePathAggregateArgs>(args: Subset<T, StorylinePathAggregateArgs>): Prisma.PrismaPromise<GetStorylinePathAggregateType<T>>

    /**
     * Group by StorylinePath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorylinePathGroupByArgs} args - Group by arguments.
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
      T extends StorylinePathGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StorylinePathGroupByArgs['orderBy'] }
        : { orderBy?: StorylinePathGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StorylinePathGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStorylinePathGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StorylinePath model
   */
  readonly fields: StorylinePathFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StorylinePath.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StorylinePathClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    storyline<T extends StorylineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StorylineDefaultArgs<ExtArgs>>): Prisma__StorylineClient<$Result.GetResult<Prisma.$StorylinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    path<T extends StoryPathDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoryPathDefaultArgs<ExtArgs>>): Prisma__StoryPathClient<$Result.GetResult<Prisma.$StoryPathPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StorylinePath model
   */
  interface StorylinePathFieldRefs {
    readonly storyLineId: FieldRef<"StorylinePath", 'Int'>
    readonly pathId: FieldRef<"StorylinePath", 'Int'>
    readonly seq: FieldRef<"StorylinePath", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StorylinePath findUnique
   */
  export type StorylinePathFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorylinePath
     */
    select?: StorylinePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorylinePath
     */
    omit?: StorylinePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylinePathInclude<ExtArgs> | null
    /**
     * Filter, which StorylinePath to fetch.
     */
    where: StorylinePathWhereUniqueInput
  }

  /**
   * StorylinePath findUniqueOrThrow
   */
  export type StorylinePathFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorylinePath
     */
    select?: StorylinePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorylinePath
     */
    omit?: StorylinePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylinePathInclude<ExtArgs> | null
    /**
     * Filter, which StorylinePath to fetch.
     */
    where: StorylinePathWhereUniqueInput
  }

  /**
   * StorylinePath findFirst
   */
  export type StorylinePathFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorylinePath
     */
    select?: StorylinePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorylinePath
     */
    omit?: StorylinePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylinePathInclude<ExtArgs> | null
    /**
     * Filter, which StorylinePath to fetch.
     */
    where?: StorylinePathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorylinePaths to fetch.
     */
    orderBy?: StorylinePathOrderByWithRelationInput | StorylinePathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorylinePaths.
     */
    cursor?: StorylinePathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorylinePaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorylinePaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorylinePaths.
     */
    distinct?: StorylinePathScalarFieldEnum | StorylinePathScalarFieldEnum[]
  }

  /**
   * StorylinePath findFirstOrThrow
   */
  export type StorylinePathFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorylinePath
     */
    select?: StorylinePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorylinePath
     */
    omit?: StorylinePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylinePathInclude<ExtArgs> | null
    /**
     * Filter, which StorylinePath to fetch.
     */
    where?: StorylinePathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorylinePaths to fetch.
     */
    orderBy?: StorylinePathOrderByWithRelationInput | StorylinePathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorylinePaths.
     */
    cursor?: StorylinePathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorylinePaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorylinePaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorylinePaths.
     */
    distinct?: StorylinePathScalarFieldEnum | StorylinePathScalarFieldEnum[]
  }

  /**
   * StorylinePath findMany
   */
  export type StorylinePathFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorylinePath
     */
    select?: StorylinePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorylinePath
     */
    omit?: StorylinePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylinePathInclude<ExtArgs> | null
    /**
     * Filter, which StorylinePaths to fetch.
     */
    where?: StorylinePathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorylinePaths to fetch.
     */
    orderBy?: StorylinePathOrderByWithRelationInput | StorylinePathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StorylinePaths.
     */
    cursor?: StorylinePathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorylinePaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorylinePaths.
     */
    skip?: number
    distinct?: StorylinePathScalarFieldEnum | StorylinePathScalarFieldEnum[]
  }

  /**
   * StorylinePath create
   */
  export type StorylinePathCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorylinePath
     */
    select?: StorylinePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorylinePath
     */
    omit?: StorylinePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylinePathInclude<ExtArgs> | null
    /**
     * The data needed to create a StorylinePath.
     */
    data: XOR<StorylinePathCreateInput, StorylinePathUncheckedCreateInput>
  }

  /**
   * StorylinePath createMany
   */
  export type StorylinePathCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StorylinePaths.
     */
    data: StorylinePathCreateManyInput | StorylinePathCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StorylinePath createManyAndReturn
   */
  export type StorylinePathCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorylinePath
     */
    select?: StorylinePathSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StorylinePath
     */
    omit?: StorylinePathOmit<ExtArgs> | null
    /**
     * The data used to create many StorylinePaths.
     */
    data: StorylinePathCreateManyInput | StorylinePathCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylinePathIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StorylinePath update
   */
  export type StorylinePathUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorylinePath
     */
    select?: StorylinePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorylinePath
     */
    omit?: StorylinePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylinePathInclude<ExtArgs> | null
    /**
     * The data needed to update a StorylinePath.
     */
    data: XOR<StorylinePathUpdateInput, StorylinePathUncheckedUpdateInput>
    /**
     * Choose, which StorylinePath to update.
     */
    where: StorylinePathWhereUniqueInput
  }

  /**
   * StorylinePath updateMany
   */
  export type StorylinePathUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StorylinePaths.
     */
    data: XOR<StorylinePathUpdateManyMutationInput, StorylinePathUncheckedUpdateManyInput>
    /**
     * Filter which StorylinePaths to update
     */
    where?: StorylinePathWhereInput
    /**
     * Limit how many StorylinePaths to update.
     */
    limit?: number
  }

  /**
   * StorylinePath updateManyAndReturn
   */
  export type StorylinePathUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorylinePath
     */
    select?: StorylinePathSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StorylinePath
     */
    omit?: StorylinePathOmit<ExtArgs> | null
    /**
     * The data used to update StorylinePaths.
     */
    data: XOR<StorylinePathUpdateManyMutationInput, StorylinePathUncheckedUpdateManyInput>
    /**
     * Filter which StorylinePaths to update
     */
    where?: StorylinePathWhereInput
    /**
     * Limit how many StorylinePaths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylinePathIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StorylinePath upsert
   */
  export type StorylinePathUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorylinePath
     */
    select?: StorylinePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorylinePath
     */
    omit?: StorylinePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylinePathInclude<ExtArgs> | null
    /**
     * The filter to search for the StorylinePath to update in case it exists.
     */
    where: StorylinePathWhereUniqueInput
    /**
     * In case the StorylinePath found by the `where` argument doesn't exist, create a new StorylinePath with this data.
     */
    create: XOR<StorylinePathCreateInput, StorylinePathUncheckedCreateInput>
    /**
     * In case the StorylinePath was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StorylinePathUpdateInput, StorylinePathUncheckedUpdateInput>
  }

  /**
   * StorylinePath delete
   */
  export type StorylinePathDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorylinePath
     */
    select?: StorylinePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorylinePath
     */
    omit?: StorylinePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylinePathInclude<ExtArgs> | null
    /**
     * Filter which StorylinePath to delete.
     */
    where: StorylinePathWhereUniqueInput
  }

  /**
   * StorylinePath deleteMany
   */
  export type StorylinePathDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorylinePaths to delete
     */
    where?: StorylinePathWhereInput
    /**
     * Limit how many StorylinePaths to delete.
     */
    limit?: number
  }

  /**
   * StorylinePath without action
   */
  export type StorylinePathDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorylinePath
     */
    select?: StorylinePathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StorylinePath
     */
    omit?: StorylinePathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorylinePathInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    readerId: number | null
    lastSceneId: number | null
    universeId: number | null
  }

  export type SessionSumAggregateOutputType = {
    readerId: number | null
    lastSceneId: number | null
    universeId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    readerId: number | null
    createdAt: Date | null
    lastOpened: Date | null
    lastSceneId: number | null
    universeId: number | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    readerId: number | null
    createdAt: Date | null
    lastOpened: Date | null
    lastSceneId: number | null
    universeId: number | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    readerId: number
    createdAt: number
    lastOpened: number
    lastSceneId: number
    universeId: number
    moods: number
    languages: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    readerId?: true
    lastSceneId?: true
    universeId?: true
  }

  export type SessionSumAggregateInputType = {
    readerId?: true
    lastSceneId?: true
    universeId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    readerId?: true
    createdAt?: true
    lastOpened?: true
    lastSceneId?: true
    universeId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    readerId?: true
    createdAt?: true
    lastOpened?: true
    lastSceneId?: true
    universeId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    readerId?: true
    createdAt?: true
    lastOpened?: true
    lastSceneId?: true
    universeId?: true
    moods?: true
    languages?: true
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
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
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
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    readerId: number
    createdAt: Date
    lastOpened: Date
    lastSceneId: number | null
    universeId: number | null
    moods: $Enums.SceneMood[]
    languages: string[]
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
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
    readerId?: boolean
    createdAt?: boolean
    lastOpened?: boolean
    lastSceneId?: boolean
    universeId?: boolean
    moods?: boolean
    languages?: boolean
    reader?: boolean | UserDefaultArgs<ExtArgs>
    lastScene?: boolean | Session$lastSceneArgs<ExtArgs>
    universe?: boolean | Session$universeArgs<ExtArgs>
    favorites?: boolean | Session$favoritesArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    readerId?: boolean
    createdAt?: boolean
    lastOpened?: boolean
    lastSceneId?: boolean
    universeId?: boolean
    moods?: boolean
    languages?: boolean
    reader?: boolean | UserDefaultArgs<ExtArgs>
    lastScene?: boolean | Session$lastSceneArgs<ExtArgs>
    universe?: boolean | Session$universeArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    readerId?: boolean
    createdAt?: boolean
    lastOpened?: boolean
    lastSceneId?: boolean
    universeId?: boolean
    moods?: boolean
    languages?: boolean
    reader?: boolean | UserDefaultArgs<ExtArgs>
    lastScene?: boolean | Session$lastSceneArgs<ExtArgs>
    universe?: boolean | Session$universeArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    readerId?: boolean
    createdAt?: boolean
    lastOpened?: boolean
    lastSceneId?: boolean
    universeId?: boolean
    moods?: boolean
    languages?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "readerId" | "createdAt" | "lastOpened" | "lastSceneId" | "universeId" | "moods" | "languages", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reader?: boolean | UserDefaultArgs<ExtArgs>
    lastScene?: boolean | Session$lastSceneArgs<ExtArgs>
    universe?: boolean | Session$universeArgs<ExtArgs>
    favorites?: boolean | Session$favoritesArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reader?: boolean | UserDefaultArgs<ExtArgs>
    lastScene?: boolean | Session$lastSceneArgs<ExtArgs>
    universe?: boolean | Session$universeArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reader?: boolean | UserDefaultArgs<ExtArgs>
    lastScene?: boolean | Session$lastSceneArgs<ExtArgs>
    universe?: boolean | Session$universeArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      reader: Prisma.$UserPayload<ExtArgs>
      lastScene: Prisma.$ScenePayload<ExtArgs> | null
      universe: Prisma.$UniversePayload<ExtArgs> | null
      favorites: Prisma.$FavoriteAnchorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      readerId: number
      createdAt: Date
      lastOpened: Date
      lastSceneId: number | null
      universeId: number | null
      moods: $Enums.SceneMood[]
      languages: string[]
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
    reader<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lastScene<T extends Session$lastSceneArgs<ExtArgs> = {}>(args?: Subset<T, Session$lastSceneArgs<ExtArgs>>): Prisma__SceneClient<$Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    universe<T extends Session$universeArgs<ExtArgs> = {}>(args?: Subset<T, Session$universeArgs<ExtArgs>>): Prisma__UniverseClient<$Result.GetResult<Prisma.$UniversePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    favorites<T extends Session$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Session$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteAnchorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly readerId: FieldRef<"Session", 'Int'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly lastOpened: FieldRef<"Session", 'DateTime'>
    readonly lastSceneId: FieldRef<"Session", 'Int'>
    readonly universeId: FieldRef<"Session", 'Int'>
    readonly moods: FieldRef<"Session", 'SceneMood[]'>
    readonly languages: FieldRef<"Session", 'String[]'>
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
   * Session.lastScene
   */
  export type Session$lastSceneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: SceneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scene
     */
    omit?: SceneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneInclude<ExtArgs> | null
    where?: SceneWhereInput
  }

  /**
   * Session.universe
   */
  export type Session$universeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Universe
     */
    select?: UniverseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Universe
     */
    omit?: UniverseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniverseInclude<ExtArgs> | null
    where?: UniverseWhereInput
  }

  /**
   * Session.favorites
   */
  export type Session$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAnchor
     */
    select?: FavoriteAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteAnchor
     */
    omit?: FavoriteAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteAnchorInclude<ExtArgs> | null
    where?: FavoriteAnchorWhereInput
    orderBy?: FavoriteAnchorOrderByWithRelationInput | FavoriteAnchorOrderByWithRelationInput[]
    cursor?: FavoriteAnchorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteAnchorScalarFieldEnum | FavoriteAnchorScalarFieldEnum[]
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
   * Model FavoriteAnchor
   */

  export type AggregateFavoriteAnchor = {
    _count: FavoriteAnchorCountAggregateOutputType | null
    _avg: FavoriteAnchorAvgAggregateOutputType | null
    _sum: FavoriteAnchorSumAggregateOutputType | null
    _min: FavoriteAnchorMinAggregateOutputType | null
    _max: FavoriteAnchorMaxAggregateOutputType | null
  }

  export type FavoriteAnchorAvgAggregateOutputType = {
    anchorId: number | null
  }

  export type FavoriteAnchorSumAggregateOutputType = {
    anchorId: number | null
  }

  export type FavoriteAnchorMinAggregateOutputType = {
    anchorId: number | null
    sessionId: string | null
    sceneAnchorTag: string | null
  }

  export type FavoriteAnchorMaxAggregateOutputType = {
    anchorId: number | null
    sessionId: string | null
    sceneAnchorTag: string | null
  }

  export type FavoriteAnchorCountAggregateOutputType = {
    anchorId: number
    sessionId: number
    sceneAnchorTag: number
    _all: number
  }


  export type FavoriteAnchorAvgAggregateInputType = {
    anchorId?: true
  }

  export type FavoriteAnchorSumAggregateInputType = {
    anchorId?: true
  }

  export type FavoriteAnchorMinAggregateInputType = {
    anchorId?: true
    sessionId?: true
    sceneAnchorTag?: true
  }

  export type FavoriteAnchorMaxAggregateInputType = {
    anchorId?: true
    sessionId?: true
    sceneAnchorTag?: true
  }

  export type FavoriteAnchorCountAggregateInputType = {
    anchorId?: true
    sessionId?: true
    sceneAnchorTag?: true
    _all?: true
  }

  export type FavoriteAnchorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteAnchor to aggregate.
     */
    where?: FavoriteAnchorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteAnchors to fetch.
     */
    orderBy?: FavoriteAnchorOrderByWithRelationInput | FavoriteAnchorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteAnchorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteAnchors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteAnchors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteAnchors
    **/
    _count?: true | FavoriteAnchorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteAnchorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteAnchorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteAnchorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteAnchorMaxAggregateInputType
  }

  export type GetFavoriteAnchorAggregateType<T extends FavoriteAnchorAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteAnchor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteAnchor[P]>
      : GetScalarType<T[P], AggregateFavoriteAnchor[P]>
  }




  export type FavoriteAnchorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteAnchorWhereInput
    orderBy?: FavoriteAnchorOrderByWithAggregationInput | FavoriteAnchorOrderByWithAggregationInput[]
    by: FavoriteAnchorScalarFieldEnum[] | FavoriteAnchorScalarFieldEnum
    having?: FavoriteAnchorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteAnchorCountAggregateInputType | true
    _avg?: FavoriteAnchorAvgAggregateInputType
    _sum?: FavoriteAnchorSumAggregateInputType
    _min?: FavoriteAnchorMinAggregateInputType
    _max?: FavoriteAnchorMaxAggregateInputType
  }

  export type FavoriteAnchorGroupByOutputType = {
    anchorId: number
    sessionId: string
    sceneAnchorTag: string | null
    _count: FavoriteAnchorCountAggregateOutputType | null
    _avg: FavoriteAnchorAvgAggregateOutputType | null
    _sum: FavoriteAnchorSumAggregateOutputType | null
    _min: FavoriteAnchorMinAggregateOutputType | null
    _max: FavoriteAnchorMaxAggregateOutputType | null
  }

  type GetFavoriteAnchorGroupByPayload<T extends FavoriteAnchorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteAnchorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteAnchorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteAnchorGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteAnchorGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteAnchorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    anchorId?: boolean
    sessionId?: boolean
    sceneAnchorTag?: boolean
    anchor?: boolean | FavoriteAnchor$anchorArgs<ExtArgs>
    session?: boolean | FavoriteAnchor$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteAnchor"]>

  export type FavoriteAnchorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    anchorId?: boolean
    sessionId?: boolean
    sceneAnchorTag?: boolean
    anchor?: boolean | FavoriteAnchor$anchorArgs<ExtArgs>
    session?: boolean | FavoriteAnchor$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteAnchor"]>

  export type FavoriteAnchorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    anchorId?: boolean
    sessionId?: boolean
    sceneAnchorTag?: boolean
    anchor?: boolean | FavoriteAnchor$anchorArgs<ExtArgs>
    session?: boolean | FavoriteAnchor$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteAnchor"]>

  export type FavoriteAnchorSelectScalar = {
    anchorId?: boolean
    sessionId?: boolean
    sceneAnchorTag?: boolean
  }

  export type FavoriteAnchorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"anchorId" | "sessionId" | "sceneAnchorTag", ExtArgs["result"]["favoriteAnchor"]>
  export type FavoriteAnchorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anchor?: boolean | FavoriteAnchor$anchorArgs<ExtArgs>
    session?: boolean | FavoriteAnchor$sessionArgs<ExtArgs>
  }
  export type FavoriteAnchorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anchor?: boolean | FavoriteAnchor$anchorArgs<ExtArgs>
    session?: boolean | FavoriteAnchor$sessionArgs<ExtArgs>
  }
  export type FavoriteAnchorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anchor?: boolean | FavoriteAnchor$anchorArgs<ExtArgs>
    session?: boolean | FavoriteAnchor$sessionArgs<ExtArgs>
  }

  export type $FavoriteAnchorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavoriteAnchor"
    objects: {
      anchor: Prisma.$SceneAnchorPayload<ExtArgs> | null
      session: Prisma.$SessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      anchorId: number
      sessionId: string
      sceneAnchorTag: string | null
    }, ExtArgs["result"]["favoriteAnchor"]>
    composites: {}
  }

  type FavoriteAnchorGetPayload<S extends boolean | null | undefined | FavoriteAnchorDefaultArgs> = $Result.GetResult<Prisma.$FavoriteAnchorPayload, S>

  type FavoriteAnchorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteAnchorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteAnchorCountAggregateInputType | true
    }

  export interface FavoriteAnchorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteAnchor'], meta: { name: 'FavoriteAnchor' } }
    /**
     * Find zero or one FavoriteAnchor that matches the filter.
     * @param {FavoriteAnchorFindUniqueArgs} args - Arguments to find a FavoriteAnchor
     * @example
     * // Get one FavoriteAnchor
     * const favoriteAnchor = await prisma.favoriteAnchor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteAnchorFindUniqueArgs>(args: SelectSubset<T, FavoriteAnchorFindUniqueArgs<ExtArgs>>): Prisma__FavoriteAnchorClient<$Result.GetResult<Prisma.$FavoriteAnchorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FavoriteAnchor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteAnchorFindUniqueOrThrowArgs} args - Arguments to find a FavoriteAnchor
     * @example
     * // Get one FavoriteAnchor
     * const favoriteAnchor = await prisma.favoriteAnchor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteAnchorFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteAnchorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteAnchorClient<$Result.GetResult<Prisma.$FavoriteAnchorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteAnchor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAnchorFindFirstArgs} args - Arguments to find a FavoriteAnchor
     * @example
     * // Get one FavoriteAnchor
     * const favoriteAnchor = await prisma.favoriteAnchor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteAnchorFindFirstArgs>(args?: SelectSubset<T, FavoriteAnchorFindFirstArgs<ExtArgs>>): Prisma__FavoriteAnchorClient<$Result.GetResult<Prisma.$FavoriteAnchorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FavoriteAnchor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAnchorFindFirstOrThrowArgs} args - Arguments to find a FavoriteAnchor
     * @example
     * // Get one FavoriteAnchor
     * const favoriteAnchor = await prisma.favoriteAnchor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteAnchorFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteAnchorFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteAnchorClient<$Result.GetResult<Prisma.$FavoriteAnchorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FavoriteAnchors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAnchorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteAnchors
     * const favoriteAnchors = await prisma.favoriteAnchor.findMany()
     * 
     * // Get first 10 FavoriteAnchors
     * const favoriteAnchors = await prisma.favoriteAnchor.findMany({ take: 10 })
     * 
     * // Only select the `anchorId`
     * const favoriteAnchorWithAnchorIdOnly = await prisma.favoriteAnchor.findMany({ select: { anchorId: true } })
     * 
     */
    findMany<T extends FavoriteAnchorFindManyArgs>(args?: SelectSubset<T, FavoriteAnchorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteAnchorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FavoriteAnchor.
     * @param {FavoriteAnchorCreateArgs} args - Arguments to create a FavoriteAnchor.
     * @example
     * // Create one FavoriteAnchor
     * const FavoriteAnchor = await prisma.favoriteAnchor.create({
     *   data: {
     *     // ... data to create a FavoriteAnchor
     *   }
     * })
     * 
     */
    create<T extends FavoriteAnchorCreateArgs>(args: SelectSubset<T, FavoriteAnchorCreateArgs<ExtArgs>>): Prisma__FavoriteAnchorClient<$Result.GetResult<Prisma.$FavoriteAnchorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FavoriteAnchors.
     * @param {FavoriteAnchorCreateManyArgs} args - Arguments to create many FavoriteAnchors.
     * @example
     * // Create many FavoriteAnchors
     * const favoriteAnchor = await prisma.favoriteAnchor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteAnchorCreateManyArgs>(args?: SelectSubset<T, FavoriteAnchorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FavoriteAnchors and returns the data saved in the database.
     * @param {FavoriteAnchorCreateManyAndReturnArgs} args - Arguments to create many FavoriteAnchors.
     * @example
     * // Create many FavoriteAnchors
     * const favoriteAnchor = await prisma.favoriteAnchor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FavoriteAnchors and only return the `anchorId`
     * const favoriteAnchorWithAnchorIdOnly = await prisma.favoriteAnchor.createManyAndReturn({
     *   select: { anchorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteAnchorCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteAnchorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteAnchorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FavoriteAnchor.
     * @param {FavoriteAnchorDeleteArgs} args - Arguments to delete one FavoriteAnchor.
     * @example
     * // Delete one FavoriteAnchor
     * const FavoriteAnchor = await prisma.favoriteAnchor.delete({
     *   where: {
     *     // ... filter to delete one FavoriteAnchor
     *   }
     * })
     * 
     */
    delete<T extends FavoriteAnchorDeleteArgs>(args: SelectSubset<T, FavoriteAnchorDeleteArgs<ExtArgs>>): Prisma__FavoriteAnchorClient<$Result.GetResult<Prisma.$FavoriteAnchorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FavoriteAnchor.
     * @param {FavoriteAnchorUpdateArgs} args - Arguments to update one FavoriteAnchor.
     * @example
     * // Update one FavoriteAnchor
     * const favoriteAnchor = await prisma.favoriteAnchor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteAnchorUpdateArgs>(args: SelectSubset<T, FavoriteAnchorUpdateArgs<ExtArgs>>): Prisma__FavoriteAnchorClient<$Result.GetResult<Prisma.$FavoriteAnchorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FavoriteAnchors.
     * @param {FavoriteAnchorDeleteManyArgs} args - Arguments to filter FavoriteAnchors to delete.
     * @example
     * // Delete a few FavoriteAnchors
     * const { count } = await prisma.favoriteAnchor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteAnchorDeleteManyArgs>(args?: SelectSubset<T, FavoriteAnchorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteAnchors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAnchorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteAnchors
     * const favoriteAnchor = await prisma.favoriteAnchor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteAnchorUpdateManyArgs>(args: SelectSubset<T, FavoriteAnchorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteAnchors and returns the data updated in the database.
     * @param {FavoriteAnchorUpdateManyAndReturnArgs} args - Arguments to update many FavoriteAnchors.
     * @example
     * // Update many FavoriteAnchors
     * const favoriteAnchor = await prisma.favoriteAnchor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FavoriteAnchors and only return the `anchorId`
     * const favoriteAnchorWithAnchorIdOnly = await prisma.favoriteAnchor.updateManyAndReturn({
     *   select: { anchorId: true },
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
    updateManyAndReturn<T extends FavoriteAnchorUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteAnchorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoriteAnchorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FavoriteAnchor.
     * @param {FavoriteAnchorUpsertArgs} args - Arguments to update or create a FavoriteAnchor.
     * @example
     * // Update or create a FavoriteAnchor
     * const favoriteAnchor = await prisma.favoriteAnchor.upsert({
     *   create: {
     *     // ... data to create a FavoriteAnchor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteAnchor we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteAnchorUpsertArgs>(args: SelectSubset<T, FavoriteAnchorUpsertArgs<ExtArgs>>): Prisma__FavoriteAnchorClient<$Result.GetResult<Prisma.$FavoriteAnchorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FavoriteAnchors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAnchorCountArgs} args - Arguments to filter FavoriteAnchors to count.
     * @example
     * // Count the number of FavoriteAnchors
     * const count = await prisma.favoriteAnchor.count({
     *   where: {
     *     // ... the filter for the FavoriteAnchors we want to count
     *   }
     * })
    **/
    count<T extends FavoriteAnchorCountArgs>(
      args?: Subset<T, FavoriteAnchorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteAnchorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteAnchor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAnchorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAnchorAggregateArgs>(args: Subset<T, FavoriteAnchorAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAnchorAggregateType<T>>

    /**
     * Group by FavoriteAnchor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAnchorGroupByArgs} args - Group by arguments.
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
      T extends FavoriteAnchorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteAnchorGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteAnchorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavoriteAnchorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteAnchorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavoriteAnchor model
   */
  readonly fields: FavoriteAnchorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteAnchor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteAnchorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    anchor<T extends FavoriteAnchor$anchorArgs<ExtArgs> = {}>(args?: Subset<T, FavoriteAnchor$anchorArgs<ExtArgs>>): Prisma__SceneAnchorClient<$Result.GetResult<Prisma.$SceneAnchorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    session<T extends FavoriteAnchor$sessionArgs<ExtArgs> = {}>(args?: Subset<T, FavoriteAnchor$sessionArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FavoriteAnchor model
   */
  interface FavoriteAnchorFieldRefs {
    readonly anchorId: FieldRef<"FavoriteAnchor", 'Int'>
    readonly sessionId: FieldRef<"FavoriteAnchor", 'String'>
    readonly sceneAnchorTag: FieldRef<"FavoriteAnchor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FavoriteAnchor findUnique
   */
  export type FavoriteAnchorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAnchor
     */
    select?: FavoriteAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteAnchor
     */
    omit?: FavoriteAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteAnchorInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteAnchor to fetch.
     */
    where: FavoriteAnchorWhereUniqueInput
  }

  /**
   * FavoriteAnchor findUniqueOrThrow
   */
  export type FavoriteAnchorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAnchor
     */
    select?: FavoriteAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteAnchor
     */
    omit?: FavoriteAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteAnchorInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteAnchor to fetch.
     */
    where: FavoriteAnchorWhereUniqueInput
  }

  /**
   * FavoriteAnchor findFirst
   */
  export type FavoriteAnchorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAnchor
     */
    select?: FavoriteAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteAnchor
     */
    omit?: FavoriteAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteAnchorInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteAnchor to fetch.
     */
    where?: FavoriteAnchorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteAnchors to fetch.
     */
    orderBy?: FavoriteAnchorOrderByWithRelationInput | FavoriteAnchorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteAnchors.
     */
    cursor?: FavoriteAnchorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteAnchors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteAnchors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteAnchors.
     */
    distinct?: FavoriteAnchorScalarFieldEnum | FavoriteAnchorScalarFieldEnum[]
  }

  /**
   * FavoriteAnchor findFirstOrThrow
   */
  export type FavoriteAnchorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAnchor
     */
    select?: FavoriteAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteAnchor
     */
    omit?: FavoriteAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteAnchorInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteAnchor to fetch.
     */
    where?: FavoriteAnchorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteAnchors to fetch.
     */
    orderBy?: FavoriteAnchorOrderByWithRelationInput | FavoriteAnchorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteAnchors.
     */
    cursor?: FavoriteAnchorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteAnchors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteAnchors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteAnchors.
     */
    distinct?: FavoriteAnchorScalarFieldEnum | FavoriteAnchorScalarFieldEnum[]
  }

  /**
   * FavoriteAnchor findMany
   */
  export type FavoriteAnchorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAnchor
     */
    select?: FavoriteAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteAnchor
     */
    omit?: FavoriteAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteAnchorInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteAnchors to fetch.
     */
    where?: FavoriteAnchorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteAnchors to fetch.
     */
    orderBy?: FavoriteAnchorOrderByWithRelationInput | FavoriteAnchorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteAnchors.
     */
    cursor?: FavoriteAnchorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteAnchors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteAnchors.
     */
    skip?: number
    distinct?: FavoriteAnchorScalarFieldEnum | FavoriteAnchorScalarFieldEnum[]
  }

  /**
   * FavoriteAnchor create
   */
  export type FavoriteAnchorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAnchor
     */
    select?: FavoriteAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteAnchor
     */
    omit?: FavoriteAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteAnchorInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoriteAnchor.
     */
    data: XOR<FavoriteAnchorCreateInput, FavoriteAnchorUncheckedCreateInput>
  }

  /**
   * FavoriteAnchor createMany
   */
  export type FavoriteAnchorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoriteAnchors.
     */
    data: FavoriteAnchorCreateManyInput | FavoriteAnchorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavoriteAnchor createManyAndReturn
   */
  export type FavoriteAnchorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAnchor
     */
    select?: FavoriteAnchorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteAnchor
     */
    omit?: FavoriteAnchorOmit<ExtArgs> | null
    /**
     * The data used to create many FavoriteAnchors.
     */
    data: FavoriteAnchorCreateManyInput | FavoriteAnchorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteAnchorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteAnchor update
   */
  export type FavoriteAnchorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAnchor
     */
    select?: FavoriteAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteAnchor
     */
    omit?: FavoriteAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteAnchorInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoriteAnchor.
     */
    data: XOR<FavoriteAnchorUpdateInput, FavoriteAnchorUncheckedUpdateInput>
    /**
     * Choose, which FavoriteAnchor to update.
     */
    where: FavoriteAnchorWhereUniqueInput
  }

  /**
   * FavoriteAnchor updateMany
   */
  export type FavoriteAnchorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteAnchors.
     */
    data: XOR<FavoriteAnchorUpdateManyMutationInput, FavoriteAnchorUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteAnchors to update
     */
    where?: FavoriteAnchorWhereInput
    /**
     * Limit how many FavoriteAnchors to update.
     */
    limit?: number
  }

  /**
   * FavoriteAnchor updateManyAndReturn
   */
  export type FavoriteAnchorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAnchor
     */
    select?: FavoriteAnchorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteAnchor
     */
    omit?: FavoriteAnchorOmit<ExtArgs> | null
    /**
     * The data used to update FavoriteAnchors.
     */
    data: XOR<FavoriteAnchorUpdateManyMutationInput, FavoriteAnchorUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteAnchors to update
     */
    where?: FavoriteAnchorWhereInput
    /**
     * Limit how many FavoriteAnchors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteAnchorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavoriteAnchor upsert
   */
  export type FavoriteAnchorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAnchor
     */
    select?: FavoriteAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteAnchor
     */
    omit?: FavoriteAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteAnchorInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoriteAnchor to update in case it exists.
     */
    where: FavoriteAnchorWhereUniqueInput
    /**
     * In case the FavoriteAnchor found by the `where` argument doesn't exist, create a new FavoriteAnchor with this data.
     */
    create: XOR<FavoriteAnchorCreateInput, FavoriteAnchorUncheckedCreateInput>
    /**
     * In case the FavoriteAnchor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteAnchorUpdateInput, FavoriteAnchorUncheckedUpdateInput>
  }

  /**
   * FavoriteAnchor delete
   */
  export type FavoriteAnchorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAnchor
     */
    select?: FavoriteAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteAnchor
     */
    omit?: FavoriteAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteAnchorInclude<ExtArgs> | null
    /**
     * Filter which FavoriteAnchor to delete.
     */
    where: FavoriteAnchorWhereUniqueInput
  }

  /**
   * FavoriteAnchor deleteMany
   */
  export type FavoriteAnchorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteAnchors to delete
     */
    where?: FavoriteAnchorWhereInput
    /**
     * Limit how many FavoriteAnchors to delete.
     */
    limit?: number
  }

  /**
   * FavoriteAnchor.anchor
   */
  export type FavoriteAnchor$anchorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SceneAnchor
     */
    select?: SceneAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SceneAnchor
     */
    omit?: SceneAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SceneAnchorInclude<ExtArgs> | null
    where?: SceneAnchorWhereInput
  }

  /**
   * FavoriteAnchor.session
   */
  export type FavoriteAnchor$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * FavoriteAnchor without action
   */
  export type FavoriteAnchorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteAnchor
     */
    select?: FavoriteAnchorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FavoriteAnchor
     */
    omit?: FavoriteAnchorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteAnchorInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UniverseMemberScalarFieldEnum: {
    userId: 'userId',
    universeId: 'universeId'
  };

  export type UniverseMemberScalarFieldEnum = (typeof UniverseMemberScalarFieldEnum)[keyof typeof UniverseMemberScalarFieldEnum]


  export const UniverseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    contextDB: 'contextDB',
    visibility: 'visibility'
  };

  export type UniverseScalarFieldEnum = (typeof UniverseScalarFieldEnum)[keyof typeof UniverseScalarFieldEnum]


  export const UniverseSourceScalarFieldEnum: {
    id: 'id',
    format: 'format',
    path: 'path',
    universeId: 'universeId'
  };

  export type UniverseSourceScalarFieldEnum = (typeof UniverseSourceScalarFieldEnum)[keyof typeof UniverseSourceScalarFieldEnum]


  export const SceneScalarFieldEnum: {
    id: 'id',
    universeId: 'universeId',
    title: 'title',
    authorId: 'authorId',
    content: 'content',
    mood: 'mood',
    genre: 'genre',
    lang: 'lang',
    prompt: 'prompt',
    parentId: 'parentId'
  };

  export type SceneScalarFieldEnum = (typeof SceneScalarFieldEnum)[keyof typeof SceneScalarFieldEnum]


  export const SceneAnchorScalarFieldEnum: {
    tag: 'tag',
    type: 'type',
    name: 'name',
    descriptionId: 'descriptionId',
    timelineId: 'timelineId',
    parentTag: 'parentTag'
  };

  export type SceneAnchorScalarFieldEnum = (typeof SceneAnchorScalarFieldEnum)[keyof typeof SceneAnchorScalarFieldEnum]


  export const StoryPathScalarFieldEnum: {
    id: 'id',
    fromId: 'fromId',
    toId: 'toId'
  };

  export type StoryPathScalarFieldEnum = (typeof StoryPathScalarFieldEnum)[keyof typeof StoryPathScalarFieldEnum]


  export const StorylineScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    ownerId: 'ownerId'
  };

  export type StorylineScalarFieldEnum = (typeof StorylineScalarFieldEnum)[keyof typeof StorylineScalarFieldEnum]


  export const StorylinePathScalarFieldEnum: {
    storyLineId: 'storyLineId',
    pathId: 'pathId',
    seq: 'seq'
  };

  export type StorylinePathScalarFieldEnum = (typeof StorylinePathScalarFieldEnum)[keyof typeof StorylinePathScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    readerId: 'readerId',
    createdAt: 'createdAt',
    lastOpened: 'lastOpened',
    lastSceneId: 'lastSceneId',
    universeId: 'universeId',
    moods: 'moods',
    languages: 'languages'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const FavoriteAnchorScalarFieldEnum: {
    anchorId: 'anchorId',
    sessionId: 'sessionId',
    sceneAnchorTag: 'sceneAnchorTag'
  };

  export type FavoriteAnchorScalarFieldEnum = (typeof FavoriteAnchorScalarFieldEnum)[keyof typeof FavoriteAnchorScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Visibility'
   */
  export type EnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility'>
    


  /**
   * Reference to a field of type 'Visibility[]'
   */
  export type ListEnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility[]'>
    


  /**
   * Reference to a field of type 'FileFormat'
   */
  export type EnumFileFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileFormat'>
    


  /**
   * Reference to a field of type 'FileFormat[]'
   */
  export type ListEnumFileFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileFormat[]'>
    


  /**
   * Reference to a field of type 'SceneMood'
   */
  export type EnumSceneMoodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SceneMood'>
    


  /**
   * Reference to a field of type 'SceneMood[]'
   */
  export type ListEnumSceneMoodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SceneMood[]'>
    


  /**
   * Reference to a field of type 'SceneGenre'
   */
  export type EnumSceneGenreFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SceneGenre'>
    


  /**
   * Reference to a field of type 'SceneGenre[]'
   */
  export type ListEnumSceneGenreFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SceneGenre[]'>
    


  /**
   * Reference to a field of type 'AnchorType'
   */
  export type EnumAnchorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnchorType'>
    


  /**
   * Reference to a field of type 'AnchorType[]'
   */
  export type ListEnumAnchorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnchorType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    universes?: UniverseMemberListRelationFilter
    scenes?: SceneListRelationFilter
    storylines?: StorylineListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    universes?: UniverseMemberOrderByRelationAggregateInput
    scenes?: SceneOrderByRelationAggregateInput
    storylines?: StorylineOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    universes?: UniverseMemberListRelationFilter
    scenes?: SceneListRelationFilter
    storylines?: StorylineListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type UniverseMemberWhereInput = {
    AND?: UniverseMemberWhereInput | UniverseMemberWhereInput[]
    OR?: UniverseMemberWhereInput[]
    NOT?: UniverseMemberWhereInput | UniverseMemberWhereInput[]
    userId?: IntFilter<"UniverseMember"> | number
    universeId?: IntFilter<"UniverseMember"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    universe?: XOR<UniverseScalarRelationFilter, UniverseWhereInput>
  }

  export type UniverseMemberOrderByWithRelationInput = {
    userId?: SortOrder
    universeId?: SortOrder
    user?: UserOrderByWithRelationInput
    universe?: UniverseOrderByWithRelationInput
  }

  export type UniverseMemberWhereUniqueInput = Prisma.AtLeast<{
    userId_universeId?: UniverseMemberUserIdUniverseIdCompoundUniqueInput
    AND?: UniverseMemberWhereInput | UniverseMemberWhereInput[]
    OR?: UniverseMemberWhereInput[]
    NOT?: UniverseMemberWhereInput | UniverseMemberWhereInput[]
    userId?: IntFilter<"UniverseMember"> | number
    universeId?: IntFilter<"UniverseMember"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    universe?: XOR<UniverseScalarRelationFilter, UniverseWhereInput>
  }, "userId_universeId">

  export type UniverseMemberOrderByWithAggregationInput = {
    userId?: SortOrder
    universeId?: SortOrder
    _count?: UniverseMemberCountOrderByAggregateInput
    _avg?: UniverseMemberAvgOrderByAggregateInput
    _max?: UniverseMemberMaxOrderByAggregateInput
    _min?: UniverseMemberMinOrderByAggregateInput
    _sum?: UniverseMemberSumOrderByAggregateInput
  }

  export type UniverseMemberScalarWhereWithAggregatesInput = {
    AND?: UniverseMemberScalarWhereWithAggregatesInput | UniverseMemberScalarWhereWithAggregatesInput[]
    OR?: UniverseMemberScalarWhereWithAggregatesInput[]
    NOT?: UniverseMemberScalarWhereWithAggregatesInput | UniverseMemberScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UniverseMember"> | number
    universeId?: IntWithAggregatesFilter<"UniverseMember"> | number
  }

  export type UniverseWhereInput = {
    AND?: UniverseWhereInput | UniverseWhereInput[]
    OR?: UniverseWhereInput[]
    NOT?: UniverseWhereInput | UniverseWhereInput[]
    id?: IntFilter<"Universe"> | number
    name?: StringFilter<"Universe"> | string
    description?: StringFilter<"Universe"> | string
    contextDB?: StringFilter<"Universe"> | string
    visibility?: EnumVisibilityFilter<"Universe"> | $Enums.Visibility
    sources?: UniverseSourceListRelationFilter
    members?: UniverseMemberListRelationFilter
    scenes?: SceneListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UniverseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    contextDB?: SortOrder
    visibility?: SortOrder
    sources?: UniverseSourceOrderByRelationAggregateInput
    members?: UniverseMemberOrderByRelationAggregateInput
    scenes?: SceneOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UniverseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UniverseWhereInput | UniverseWhereInput[]
    OR?: UniverseWhereInput[]
    NOT?: UniverseWhereInput | UniverseWhereInput[]
    name?: StringFilter<"Universe"> | string
    description?: StringFilter<"Universe"> | string
    contextDB?: StringFilter<"Universe"> | string
    visibility?: EnumVisibilityFilter<"Universe"> | $Enums.Visibility
    sources?: UniverseSourceListRelationFilter
    members?: UniverseMemberListRelationFilter
    scenes?: SceneListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id">

  export type UniverseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    contextDB?: SortOrder
    visibility?: SortOrder
    _count?: UniverseCountOrderByAggregateInput
    _avg?: UniverseAvgOrderByAggregateInput
    _max?: UniverseMaxOrderByAggregateInput
    _min?: UniverseMinOrderByAggregateInput
    _sum?: UniverseSumOrderByAggregateInput
  }

  export type UniverseScalarWhereWithAggregatesInput = {
    AND?: UniverseScalarWhereWithAggregatesInput | UniverseScalarWhereWithAggregatesInput[]
    OR?: UniverseScalarWhereWithAggregatesInput[]
    NOT?: UniverseScalarWhereWithAggregatesInput | UniverseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Universe"> | number
    name?: StringWithAggregatesFilter<"Universe"> | string
    description?: StringWithAggregatesFilter<"Universe"> | string
    contextDB?: StringWithAggregatesFilter<"Universe"> | string
    visibility?: EnumVisibilityWithAggregatesFilter<"Universe"> | $Enums.Visibility
  }

  export type UniverseSourceWhereInput = {
    AND?: UniverseSourceWhereInput | UniverseSourceWhereInput[]
    OR?: UniverseSourceWhereInput[]
    NOT?: UniverseSourceWhereInput | UniverseSourceWhereInput[]
    id?: IntFilter<"UniverseSource"> | number
    format?: EnumFileFormatFilter<"UniverseSource"> | $Enums.FileFormat
    path?: StringFilter<"UniverseSource"> | string
    universeId?: IntFilter<"UniverseSource"> | number
    universe?: XOR<UniverseScalarRelationFilter, UniverseWhereInput>
  }

  export type UniverseSourceOrderByWithRelationInput = {
    id?: SortOrder
    format?: SortOrder
    path?: SortOrder
    universeId?: SortOrder
    universe?: UniverseOrderByWithRelationInput
  }

  export type UniverseSourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UniverseSourceWhereInput | UniverseSourceWhereInput[]
    OR?: UniverseSourceWhereInput[]
    NOT?: UniverseSourceWhereInput | UniverseSourceWhereInput[]
    format?: EnumFileFormatFilter<"UniverseSource"> | $Enums.FileFormat
    path?: StringFilter<"UniverseSource"> | string
    universeId?: IntFilter<"UniverseSource"> | number
    universe?: XOR<UniverseScalarRelationFilter, UniverseWhereInput>
  }, "id">

  export type UniverseSourceOrderByWithAggregationInput = {
    id?: SortOrder
    format?: SortOrder
    path?: SortOrder
    universeId?: SortOrder
    _count?: UniverseSourceCountOrderByAggregateInput
    _avg?: UniverseSourceAvgOrderByAggregateInput
    _max?: UniverseSourceMaxOrderByAggregateInput
    _min?: UniverseSourceMinOrderByAggregateInput
    _sum?: UniverseSourceSumOrderByAggregateInput
  }

  export type UniverseSourceScalarWhereWithAggregatesInput = {
    AND?: UniverseSourceScalarWhereWithAggregatesInput | UniverseSourceScalarWhereWithAggregatesInput[]
    OR?: UniverseSourceScalarWhereWithAggregatesInput[]
    NOT?: UniverseSourceScalarWhereWithAggregatesInput | UniverseSourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UniverseSource"> | number
    format?: EnumFileFormatWithAggregatesFilter<"UniverseSource"> | $Enums.FileFormat
    path?: StringWithAggregatesFilter<"UniverseSource"> | string
    universeId?: IntWithAggregatesFilter<"UniverseSource"> | number
  }

  export type SceneWhereInput = {
    AND?: SceneWhereInput | SceneWhereInput[]
    OR?: SceneWhereInput[]
    NOT?: SceneWhereInput | SceneWhereInput[]
    id?: IntFilter<"Scene"> | number
    universeId?: IntFilter<"Scene"> | number
    title?: StringFilter<"Scene"> | string
    authorId?: IntFilter<"Scene"> | number
    content?: StringFilter<"Scene"> | string
    mood?: EnumSceneMoodFilter<"Scene"> | $Enums.SceneMood
    genre?: EnumSceneGenreFilter<"Scene"> | $Enums.SceneGenre
    lang?: StringFilter<"Scene"> | string
    prompt?: StringNullableFilter<"Scene"> | string | null
    parentId?: IntNullableFilter<"Scene"> | number | null
    universe?: XOR<UniverseScalarRelationFilter, UniverseWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    anchors?: SceneAnchorListRelationFilter
    fromPaths?: StoryPathListRelationFilter
    toPaths?: StoryPathListRelationFilter
    parent?: XOR<SceneNullableScalarRelationFilter, SceneWhereInput> | null
    variants?: SceneListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type SceneOrderByWithRelationInput = {
    id?: SortOrder
    universeId?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    mood?: SortOrder
    genre?: SortOrder
    lang?: SortOrder
    prompt?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    universe?: UniverseOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    anchors?: SceneAnchorOrderByRelationAggregateInput
    fromPaths?: StoryPathOrderByRelationAggregateInput
    toPaths?: StoryPathOrderByRelationAggregateInput
    parent?: SceneOrderByWithRelationInput
    variants?: SceneOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type SceneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    parentId?: number
    AND?: SceneWhereInput | SceneWhereInput[]
    OR?: SceneWhereInput[]
    NOT?: SceneWhereInput | SceneWhereInput[]
    universeId?: IntFilter<"Scene"> | number
    title?: StringFilter<"Scene"> | string
    authorId?: IntFilter<"Scene"> | number
    content?: StringFilter<"Scene"> | string
    mood?: EnumSceneMoodFilter<"Scene"> | $Enums.SceneMood
    genre?: EnumSceneGenreFilter<"Scene"> | $Enums.SceneGenre
    lang?: StringFilter<"Scene"> | string
    prompt?: StringNullableFilter<"Scene"> | string | null
    universe?: XOR<UniverseScalarRelationFilter, UniverseWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    anchors?: SceneAnchorListRelationFilter
    fromPaths?: StoryPathListRelationFilter
    toPaths?: StoryPathListRelationFilter
    parent?: XOR<SceneNullableScalarRelationFilter, SceneWhereInput> | null
    variants?: SceneListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "parentId">

  export type SceneOrderByWithAggregationInput = {
    id?: SortOrder
    universeId?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    mood?: SortOrder
    genre?: SortOrder
    lang?: SortOrder
    prompt?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: SceneCountOrderByAggregateInput
    _avg?: SceneAvgOrderByAggregateInput
    _max?: SceneMaxOrderByAggregateInput
    _min?: SceneMinOrderByAggregateInput
    _sum?: SceneSumOrderByAggregateInput
  }

  export type SceneScalarWhereWithAggregatesInput = {
    AND?: SceneScalarWhereWithAggregatesInput | SceneScalarWhereWithAggregatesInput[]
    OR?: SceneScalarWhereWithAggregatesInput[]
    NOT?: SceneScalarWhereWithAggregatesInput | SceneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Scene"> | number
    universeId?: IntWithAggregatesFilter<"Scene"> | number
    title?: StringWithAggregatesFilter<"Scene"> | string
    authorId?: IntWithAggregatesFilter<"Scene"> | number
    content?: StringWithAggregatesFilter<"Scene"> | string
    mood?: EnumSceneMoodWithAggregatesFilter<"Scene"> | $Enums.SceneMood
    genre?: EnumSceneGenreWithAggregatesFilter<"Scene"> | $Enums.SceneGenre
    lang?: StringWithAggregatesFilter<"Scene"> | string
    prompt?: StringNullableWithAggregatesFilter<"Scene"> | string | null
    parentId?: IntNullableWithAggregatesFilter<"Scene"> | number | null
  }

  export type SceneAnchorWhereInput = {
    AND?: SceneAnchorWhereInput | SceneAnchorWhereInput[]
    OR?: SceneAnchorWhereInput[]
    NOT?: SceneAnchorWhereInput | SceneAnchorWhereInput[]
    tag?: StringFilter<"SceneAnchor"> | string
    type?: EnumAnchorTypeFilter<"SceneAnchor"> | $Enums.AnchorType
    name?: StringFilter<"SceneAnchor"> | string
    descriptionId?: IntNullableFilter<"SceneAnchor"> | number | null
    timelineId?: IntNullableFilter<"SceneAnchor"> | number | null
    parentTag?: StringFilter<"SceneAnchor"> | string
    description?: XOR<SceneNullableScalarRelationFilter, SceneWhereInput> | null
    timeline?: XOR<StorylineNullableScalarRelationFilter, StorylineWhereInput> | null
    parent?: XOR<SceneAnchorNullableScalarRelationFilter, SceneAnchorWhereInput> | null
    children?: SceneAnchorListRelationFilter
    sessions?: FavoriteAnchorListRelationFilter
  }

  export type SceneAnchorOrderByWithRelationInput = {
    tag?: SortOrder
    type?: SortOrder
    name?: SortOrder
    descriptionId?: SortOrderInput | SortOrder
    timelineId?: SortOrderInput | SortOrder
    parentTag?: SortOrder
    description?: SceneOrderByWithRelationInput
    timeline?: StorylineOrderByWithRelationInput
    parent?: SceneAnchorOrderByWithRelationInput
    children?: SceneAnchorOrderByRelationAggregateInput
    sessions?: FavoriteAnchorOrderByRelationAggregateInput
  }

  export type SceneAnchorWhereUniqueInput = Prisma.AtLeast<{
    tag?: string
    timelineId?: number
    parentTag?: string
    AND?: SceneAnchorWhereInput | SceneAnchorWhereInput[]
    OR?: SceneAnchorWhereInput[]
    NOT?: SceneAnchorWhereInput | SceneAnchorWhereInput[]
    type?: EnumAnchorTypeFilter<"SceneAnchor"> | $Enums.AnchorType
    name?: StringFilter<"SceneAnchor"> | string
    descriptionId?: IntNullableFilter<"SceneAnchor"> | number | null
    description?: XOR<SceneNullableScalarRelationFilter, SceneWhereInput> | null
    timeline?: XOR<StorylineNullableScalarRelationFilter, StorylineWhereInput> | null
    parent?: XOR<SceneAnchorNullableScalarRelationFilter, SceneAnchorWhereInput> | null
    children?: SceneAnchorListRelationFilter
    sessions?: FavoriteAnchorListRelationFilter
  }, "tag" | "timelineId" | "parentTag">

  export type SceneAnchorOrderByWithAggregationInput = {
    tag?: SortOrder
    type?: SortOrder
    name?: SortOrder
    descriptionId?: SortOrderInput | SortOrder
    timelineId?: SortOrderInput | SortOrder
    parentTag?: SortOrder
    _count?: SceneAnchorCountOrderByAggregateInput
    _avg?: SceneAnchorAvgOrderByAggregateInput
    _max?: SceneAnchorMaxOrderByAggregateInput
    _min?: SceneAnchorMinOrderByAggregateInput
    _sum?: SceneAnchorSumOrderByAggregateInput
  }

  export type SceneAnchorScalarWhereWithAggregatesInput = {
    AND?: SceneAnchorScalarWhereWithAggregatesInput | SceneAnchorScalarWhereWithAggregatesInput[]
    OR?: SceneAnchorScalarWhereWithAggregatesInput[]
    NOT?: SceneAnchorScalarWhereWithAggregatesInput | SceneAnchorScalarWhereWithAggregatesInput[]
    tag?: StringWithAggregatesFilter<"SceneAnchor"> | string
    type?: EnumAnchorTypeWithAggregatesFilter<"SceneAnchor"> | $Enums.AnchorType
    name?: StringWithAggregatesFilter<"SceneAnchor"> | string
    descriptionId?: IntNullableWithAggregatesFilter<"SceneAnchor"> | number | null
    timelineId?: IntNullableWithAggregatesFilter<"SceneAnchor"> | number | null
    parentTag?: StringWithAggregatesFilter<"SceneAnchor"> | string
  }

  export type StoryPathWhereInput = {
    AND?: StoryPathWhereInput | StoryPathWhereInput[]
    OR?: StoryPathWhereInput[]
    NOT?: StoryPathWhereInput | StoryPathWhereInput[]
    id?: IntFilter<"StoryPath"> | number
    fromId?: IntFilter<"StoryPath"> | number
    toId?: IntFilter<"StoryPath"> | number
    from?: XOR<SceneScalarRelationFilter, SceneWhereInput>
    to?: XOR<SceneScalarRelationFilter, SceneWhereInput>
    storylines?: StorylinePathListRelationFilter
  }

  export type StoryPathOrderByWithRelationInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    from?: SceneOrderByWithRelationInput
    to?: SceneOrderByWithRelationInput
    storylines?: StorylinePathOrderByRelationAggregateInput
  }

  export type StoryPathWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoryPathWhereInput | StoryPathWhereInput[]
    OR?: StoryPathWhereInput[]
    NOT?: StoryPathWhereInput | StoryPathWhereInput[]
    fromId?: IntFilter<"StoryPath"> | number
    toId?: IntFilter<"StoryPath"> | number
    from?: XOR<SceneScalarRelationFilter, SceneWhereInput>
    to?: XOR<SceneScalarRelationFilter, SceneWhereInput>
    storylines?: StorylinePathListRelationFilter
  }, "id">

  export type StoryPathOrderByWithAggregationInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    _count?: StoryPathCountOrderByAggregateInput
    _avg?: StoryPathAvgOrderByAggregateInput
    _max?: StoryPathMaxOrderByAggregateInput
    _min?: StoryPathMinOrderByAggregateInput
    _sum?: StoryPathSumOrderByAggregateInput
  }

  export type StoryPathScalarWhereWithAggregatesInput = {
    AND?: StoryPathScalarWhereWithAggregatesInput | StoryPathScalarWhereWithAggregatesInput[]
    OR?: StoryPathScalarWhereWithAggregatesInput[]
    NOT?: StoryPathScalarWhereWithAggregatesInput | StoryPathScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StoryPath"> | number
    fromId?: IntWithAggregatesFilter<"StoryPath"> | number
    toId?: IntWithAggregatesFilter<"StoryPath"> | number
  }

  export type StorylineWhereInput = {
    AND?: StorylineWhereInput | StorylineWhereInput[]
    OR?: StorylineWhereInput[]
    NOT?: StorylineWhereInput | StorylineWhereInput[]
    id?: IntFilter<"Storyline"> | number
    title?: StringFilter<"Storyline"> | string
    description?: StringFilter<"Storyline"> | string
    ownerId?: IntFilter<"Storyline"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    storyPaths?: StorylinePathListRelationFilter
    anchor?: XOR<SceneAnchorNullableScalarRelationFilter, SceneAnchorWhereInput> | null
  }

  export type StorylineOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    storyPaths?: StorylinePathOrderByRelationAggregateInput
    anchor?: SceneAnchorOrderByWithRelationInput
  }

  export type StorylineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StorylineWhereInput | StorylineWhereInput[]
    OR?: StorylineWhereInput[]
    NOT?: StorylineWhereInput | StorylineWhereInput[]
    title?: StringFilter<"Storyline"> | string
    description?: StringFilter<"Storyline"> | string
    ownerId?: IntFilter<"Storyline"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    storyPaths?: StorylinePathListRelationFilter
    anchor?: XOR<SceneAnchorNullableScalarRelationFilter, SceneAnchorWhereInput> | null
  }, "id">

  export type StorylineOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
    _count?: StorylineCountOrderByAggregateInput
    _avg?: StorylineAvgOrderByAggregateInput
    _max?: StorylineMaxOrderByAggregateInput
    _min?: StorylineMinOrderByAggregateInput
    _sum?: StorylineSumOrderByAggregateInput
  }

  export type StorylineScalarWhereWithAggregatesInput = {
    AND?: StorylineScalarWhereWithAggregatesInput | StorylineScalarWhereWithAggregatesInput[]
    OR?: StorylineScalarWhereWithAggregatesInput[]
    NOT?: StorylineScalarWhereWithAggregatesInput | StorylineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Storyline"> | number
    title?: StringWithAggregatesFilter<"Storyline"> | string
    description?: StringWithAggregatesFilter<"Storyline"> | string
    ownerId?: IntWithAggregatesFilter<"Storyline"> | number
  }

  export type StorylinePathWhereInput = {
    AND?: StorylinePathWhereInput | StorylinePathWhereInput[]
    OR?: StorylinePathWhereInput[]
    NOT?: StorylinePathWhereInput | StorylinePathWhereInput[]
    storyLineId?: IntFilter<"StorylinePath"> | number
    pathId?: IntFilter<"StorylinePath"> | number
    seq?: IntFilter<"StorylinePath"> | number
    storyline?: XOR<StorylineScalarRelationFilter, StorylineWhereInput>
    path?: XOR<StoryPathScalarRelationFilter, StoryPathWhereInput>
  }

  export type StorylinePathOrderByWithRelationInput = {
    storyLineId?: SortOrder
    pathId?: SortOrder
    seq?: SortOrder
    storyline?: StorylineOrderByWithRelationInput
    path?: StoryPathOrderByWithRelationInput
  }

  export type StorylinePathWhereUniqueInput = Prisma.AtLeast<{
    storyLineId_pathId?: StorylinePathStoryLineIdPathIdCompoundUniqueInput
    AND?: StorylinePathWhereInput | StorylinePathWhereInput[]
    OR?: StorylinePathWhereInput[]
    NOT?: StorylinePathWhereInput | StorylinePathWhereInput[]
    storyLineId?: IntFilter<"StorylinePath"> | number
    pathId?: IntFilter<"StorylinePath"> | number
    seq?: IntFilter<"StorylinePath"> | number
    storyline?: XOR<StorylineScalarRelationFilter, StorylineWhereInput>
    path?: XOR<StoryPathScalarRelationFilter, StoryPathWhereInput>
  }, "storyLineId_pathId">

  export type StorylinePathOrderByWithAggregationInput = {
    storyLineId?: SortOrder
    pathId?: SortOrder
    seq?: SortOrder
    _count?: StorylinePathCountOrderByAggregateInput
    _avg?: StorylinePathAvgOrderByAggregateInput
    _max?: StorylinePathMaxOrderByAggregateInput
    _min?: StorylinePathMinOrderByAggregateInput
    _sum?: StorylinePathSumOrderByAggregateInput
  }

  export type StorylinePathScalarWhereWithAggregatesInput = {
    AND?: StorylinePathScalarWhereWithAggregatesInput | StorylinePathScalarWhereWithAggregatesInput[]
    OR?: StorylinePathScalarWhereWithAggregatesInput[]
    NOT?: StorylinePathScalarWhereWithAggregatesInput | StorylinePathScalarWhereWithAggregatesInput[]
    storyLineId?: IntWithAggregatesFilter<"StorylinePath"> | number
    pathId?: IntWithAggregatesFilter<"StorylinePath"> | number
    seq?: IntWithAggregatesFilter<"StorylinePath"> | number
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    readerId?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
    lastOpened?: DateTimeFilter<"Session"> | Date | string
    lastSceneId?: IntNullableFilter<"Session"> | number | null
    universeId?: IntNullableFilter<"Session"> | number | null
    moods?: EnumSceneMoodNullableListFilter<"Session">
    languages?: StringNullableListFilter<"Session">
    reader?: XOR<UserScalarRelationFilter, UserWhereInput>
    lastScene?: XOR<SceneNullableScalarRelationFilter, SceneWhereInput> | null
    universe?: XOR<UniverseNullableScalarRelationFilter, UniverseWhereInput> | null
    favorites?: FavoriteAnchorListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    readerId?: SortOrder
    createdAt?: SortOrder
    lastOpened?: SortOrder
    lastSceneId?: SortOrderInput | SortOrder
    universeId?: SortOrderInput | SortOrder
    moods?: SortOrder
    languages?: SortOrder
    reader?: UserOrderByWithRelationInput
    lastScene?: SceneOrderByWithRelationInput
    universe?: UniverseOrderByWithRelationInput
    favorites?: FavoriteAnchorOrderByRelationAggregateInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    readerId?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
    lastOpened?: DateTimeFilter<"Session"> | Date | string
    lastSceneId?: IntNullableFilter<"Session"> | number | null
    universeId?: IntNullableFilter<"Session"> | number | null
    moods?: EnumSceneMoodNullableListFilter<"Session">
    languages?: StringNullableListFilter<"Session">
    reader?: XOR<UserScalarRelationFilter, UserWhereInput>
    lastScene?: XOR<SceneNullableScalarRelationFilter, SceneWhereInput> | null
    universe?: XOR<UniverseNullableScalarRelationFilter, UniverseWhereInput> | null
    favorites?: FavoriteAnchorListRelationFilter
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    readerId?: SortOrder
    createdAt?: SortOrder
    lastOpened?: SortOrder
    lastSceneId?: SortOrderInput | SortOrder
    universeId?: SortOrderInput | SortOrder
    moods?: SortOrder
    languages?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    readerId?: IntWithAggregatesFilter<"Session"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    lastOpened?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    lastSceneId?: IntNullableWithAggregatesFilter<"Session"> | number | null
    universeId?: IntNullableWithAggregatesFilter<"Session"> | number | null
    moods?: EnumSceneMoodNullableListFilter<"Session">
    languages?: StringNullableListFilter<"Session">
  }

  export type FavoriteAnchorWhereInput = {
    AND?: FavoriteAnchorWhereInput | FavoriteAnchorWhereInput[]
    OR?: FavoriteAnchorWhereInput[]
    NOT?: FavoriteAnchorWhereInput | FavoriteAnchorWhereInput[]
    anchorId?: IntFilter<"FavoriteAnchor"> | number
    sessionId?: StringFilter<"FavoriteAnchor"> | string
    sceneAnchorTag?: StringNullableFilter<"FavoriteAnchor"> | string | null
    anchor?: XOR<SceneAnchorNullableScalarRelationFilter, SceneAnchorWhereInput> | null
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
  }

  export type FavoriteAnchorOrderByWithRelationInput = {
    anchorId?: SortOrder
    sessionId?: SortOrder
    sceneAnchorTag?: SortOrderInput | SortOrder
    anchor?: SceneAnchorOrderByWithRelationInput
    session?: SessionOrderByWithRelationInput
  }

  export type FavoriteAnchorWhereUniqueInput = Prisma.AtLeast<{
    sessionId_anchorId?: FavoriteAnchorSessionIdAnchorIdCompoundUniqueInput
    AND?: FavoriteAnchorWhereInput | FavoriteAnchorWhereInput[]
    OR?: FavoriteAnchorWhereInput[]
    NOT?: FavoriteAnchorWhereInput | FavoriteAnchorWhereInput[]
    anchorId?: IntFilter<"FavoriteAnchor"> | number
    sessionId?: StringFilter<"FavoriteAnchor"> | string
    sceneAnchorTag?: StringNullableFilter<"FavoriteAnchor"> | string | null
    anchor?: XOR<SceneAnchorNullableScalarRelationFilter, SceneAnchorWhereInput> | null
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
  }, "sessionId_anchorId">

  export type FavoriteAnchorOrderByWithAggregationInput = {
    anchorId?: SortOrder
    sessionId?: SortOrder
    sceneAnchorTag?: SortOrderInput | SortOrder
    _count?: FavoriteAnchorCountOrderByAggregateInput
    _avg?: FavoriteAnchorAvgOrderByAggregateInput
    _max?: FavoriteAnchorMaxOrderByAggregateInput
    _min?: FavoriteAnchorMinOrderByAggregateInput
    _sum?: FavoriteAnchorSumOrderByAggregateInput
  }

  export type FavoriteAnchorScalarWhereWithAggregatesInput = {
    AND?: FavoriteAnchorScalarWhereWithAggregatesInput | FavoriteAnchorScalarWhereWithAggregatesInput[]
    OR?: FavoriteAnchorScalarWhereWithAggregatesInput[]
    NOT?: FavoriteAnchorScalarWhereWithAggregatesInput | FavoriteAnchorScalarWhereWithAggregatesInput[]
    anchorId?: IntWithAggregatesFilter<"FavoriteAnchor"> | number
    sessionId?: StringWithAggregatesFilter<"FavoriteAnchor"> | string
    sceneAnchorTag?: StringNullableWithAggregatesFilter<"FavoriteAnchor"> | string | null
  }

  export type UserCreateInput = {
    email: string
    password: string
    name?: string | null
    universes?: UniverseMemberCreateNestedManyWithoutUserInput
    scenes?: SceneCreateNestedManyWithoutAuthorInput
    storylines?: StorylineCreateNestedManyWithoutOwnerInput
    sessions?: SessionCreateNestedManyWithoutReaderInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    universes?: UniverseMemberUncheckedCreateNestedManyWithoutUserInput
    scenes?: SceneUncheckedCreateNestedManyWithoutAuthorInput
    storylines?: StorylineUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: SessionUncheckedCreateNestedManyWithoutReaderInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    universes?: UniverseMemberUpdateManyWithoutUserNestedInput
    scenes?: SceneUpdateManyWithoutAuthorNestedInput
    storylines?: StorylineUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUpdateManyWithoutReaderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    universes?: UniverseMemberUncheckedUpdateManyWithoutUserNestedInput
    scenes?: SceneUncheckedUpdateManyWithoutAuthorNestedInput
    storylines?: StorylineUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutReaderNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UniverseMemberCreateInput = {
    user: UserCreateNestedOneWithoutUniversesInput
    universe: UniverseCreateNestedOneWithoutMembersInput
  }

  export type UniverseMemberUncheckedCreateInput = {
    userId: number
    universeId: number
  }

  export type UniverseMemberUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUniversesNestedInput
    universe?: UniverseUpdateOneRequiredWithoutMembersNestedInput
  }

  export type UniverseMemberUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    universeId?: IntFieldUpdateOperationsInput | number
  }

  export type UniverseMemberCreateManyInput = {
    userId: number
    universeId: number
  }

  export type UniverseMemberUpdateManyMutationInput = {

  }

  export type UniverseMemberUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    universeId?: IntFieldUpdateOperationsInput | number
  }

  export type UniverseCreateInput = {
    name: string
    description: string
    contextDB: string
    visibility?: $Enums.Visibility
    sources?: UniverseSourceCreateNestedManyWithoutUniverseInput
    members?: UniverseMemberCreateNestedManyWithoutUniverseInput
    scenes?: SceneCreateNestedManyWithoutUniverseInput
    sessions?: SessionCreateNestedManyWithoutUniverseInput
  }

  export type UniverseUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    contextDB: string
    visibility?: $Enums.Visibility
    sources?: UniverseSourceUncheckedCreateNestedManyWithoutUniverseInput
    members?: UniverseMemberUncheckedCreateNestedManyWithoutUniverseInput
    scenes?: SceneUncheckedCreateNestedManyWithoutUniverseInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUniverseInput
  }

  export type UniverseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contextDB?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    sources?: UniverseSourceUpdateManyWithoutUniverseNestedInput
    members?: UniverseMemberUpdateManyWithoutUniverseNestedInput
    scenes?: SceneUpdateManyWithoutUniverseNestedInput
    sessions?: SessionUpdateManyWithoutUniverseNestedInput
  }

  export type UniverseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contextDB?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    sources?: UniverseSourceUncheckedUpdateManyWithoutUniverseNestedInput
    members?: UniverseMemberUncheckedUpdateManyWithoutUniverseNestedInput
    scenes?: SceneUncheckedUpdateManyWithoutUniverseNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUniverseNestedInput
  }

  export type UniverseCreateManyInput = {
    id?: number
    name: string
    description: string
    contextDB: string
    visibility?: $Enums.Visibility
  }

  export type UniverseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contextDB?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
  }

  export type UniverseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contextDB?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
  }

  export type UniverseSourceCreateInput = {
    format?: $Enums.FileFormat
    path: string
    universe: UniverseCreateNestedOneWithoutSourcesInput
  }

  export type UniverseSourceUncheckedCreateInput = {
    id?: number
    format?: $Enums.FileFormat
    path: string
    universeId: number
  }

  export type UniverseSourceUpdateInput = {
    format?: EnumFileFormatFieldUpdateOperationsInput | $Enums.FileFormat
    path?: StringFieldUpdateOperationsInput | string
    universe?: UniverseUpdateOneRequiredWithoutSourcesNestedInput
  }

  export type UniverseSourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    format?: EnumFileFormatFieldUpdateOperationsInput | $Enums.FileFormat
    path?: StringFieldUpdateOperationsInput | string
    universeId?: IntFieldUpdateOperationsInput | number
  }

  export type UniverseSourceCreateManyInput = {
    id?: number
    format?: $Enums.FileFormat
    path: string
    universeId: number
  }

  export type UniverseSourceUpdateManyMutationInput = {
    format?: EnumFileFormatFieldUpdateOperationsInput | $Enums.FileFormat
    path?: StringFieldUpdateOperationsInput | string
  }

  export type UniverseSourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    format?: EnumFileFormatFieldUpdateOperationsInput | $Enums.FileFormat
    path?: StringFieldUpdateOperationsInput | string
    universeId?: IntFieldUpdateOperationsInput | number
  }

  export type SceneCreateInput = {
    title: string
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    universe: UniverseCreateNestedOneWithoutScenesInput
    author: UserCreateNestedOneWithoutScenesInput
    anchors?: SceneAnchorCreateNestedManyWithoutDescriptionInput
    fromPaths?: StoryPathCreateNestedManyWithoutFromInput
    toPaths?: StoryPathCreateNestedManyWithoutToInput
    parent?: SceneCreateNestedOneWithoutVariantsInput
    variants?: SceneCreateNestedManyWithoutParentInput
    sessions?: SessionCreateNestedManyWithoutLastSceneInput
  }

  export type SceneUncheckedCreateInput = {
    id?: number
    universeId: number
    title: string
    authorId: number
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    parentId?: number | null
    anchors?: SceneAnchorUncheckedCreateNestedManyWithoutDescriptionInput
    fromPaths?: StoryPathUncheckedCreateNestedManyWithoutFromInput
    toPaths?: StoryPathUncheckedCreateNestedManyWithoutToInput
    variants?: SceneUncheckedCreateNestedManyWithoutParentInput
    sessions?: SessionUncheckedCreateNestedManyWithoutLastSceneInput
  }

  export type SceneUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    universe?: UniverseUpdateOneRequiredWithoutScenesNestedInput
    author?: UserUpdateOneRequiredWithoutScenesNestedInput
    anchors?: SceneAnchorUpdateManyWithoutDescriptionNestedInput
    fromPaths?: StoryPathUpdateManyWithoutFromNestedInput
    toPaths?: StoryPathUpdateManyWithoutToNestedInput
    parent?: SceneUpdateOneWithoutVariantsNestedInput
    variants?: SceneUpdateManyWithoutParentNestedInput
    sessions?: SessionUpdateManyWithoutLastSceneNestedInput
  }

  export type SceneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    universeId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    anchors?: SceneAnchorUncheckedUpdateManyWithoutDescriptionNestedInput
    fromPaths?: StoryPathUncheckedUpdateManyWithoutFromNestedInput
    toPaths?: StoryPathUncheckedUpdateManyWithoutToNestedInput
    variants?: SceneUncheckedUpdateManyWithoutParentNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutLastSceneNestedInput
  }

  export type SceneCreateManyInput = {
    id?: number
    universeId: number
    title: string
    authorId: number
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    parentId?: number | null
  }

  export type SceneUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SceneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    universeId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SceneAnchorCreateInput = {
    tag: string
    type: $Enums.AnchorType
    name: string
    description?: SceneCreateNestedOneWithoutAnchorsInput
    timeline?: StorylineCreateNestedOneWithoutAnchorInput
    parent?: SceneAnchorCreateNestedOneWithoutChildrenInput
    children?: SceneAnchorCreateNestedManyWithoutParentInput
    sessions?: FavoriteAnchorCreateNestedManyWithoutAnchorInput
  }

  export type SceneAnchorUncheckedCreateInput = {
    tag: string
    type: $Enums.AnchorType
    name: string
    descriptionId?: number | null
    timelineId?: number | null
    parentTag: string
    children?: SceneAnchorUncheckedCreateNestedManyWithoutParentInput
    sessions?: FavoriteAnchorUncheckedCreateNestedManyWithoutAnchorInput
  }

  export type SceneAnchorUpdateInput = {
    tag?: StringFieldUpdateOperationsInput | string
    type?: EnumAnchorTypeFieldUpdateOperationsInput | $Enums.AnchorType
    name?: StringFieldUpdateOperationsInput | string
    description?: SceneUpdateOneWithoutAnchorsNestedInput
    timeline?: StorylineUpdateOneWithoutAnchorNestedInput
    parent?: SceneAnchorUpdateOneWithoutChildrenNestedInput
    children?: SceneAnchorUpdateManyWithoutParentNestedInput
    sessions?: FavoriteAnchorUpdateManyWithoutAnchorNestedInput
  }

  export type SceneAnchorUncheckedUpdateInput = {
    tag?: StringFieldUpdateOperationsInput | string
    type?: EnumAnchorTypeFieldUpdateOperationsInput | $Enums.AnchorType
    name?: StringFieldUpdateOperationsInput | string
    descriptionId?: NullableIntFieldUpdateOperationsInput | number | null
    timelineId?: NullableIntFieldUpdateOperationsInput | number | null
    parentTag?: StringFieldUpdateOperationsInput | string
    children?: SceneAnchorUncheckedUpdateManyWithoutParentNestedInput
    sessions?: FavoriteAnchorUncheckedUpdateManyWithoutAnchorNestedInput
  }

  export type SceneAnchorCreateManyInput = {
    tag: string
    type: $Enums.AnchorType
    name: string
    descriptionId?: number | null
    timelineId?: number | null
    parentTag: string
  }

  export type SceneAnchorUpdateManyMutationInput = {
    tag?: StringFieldUpdateOperationsInput | string
    type?: EnumAnchorTypeFieldUpdateOperationsInput | $Enums.AnchorType
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SceneAnchorUncheckedUpdateManyInput = {
    tag?: StringFieldUpdateOperationsInput | string
    type?: EnumAnchorTypeFieldUpdateOperationsInput | $Enums.AnchorType
    name?: StringFieldUpdateOperationsInput | string
    descriptionId?: NullableIntFieldUpdateOperationsInput | number | null
    timelineId?: NullableIntFieldUpdateOperationsInput | number | null
    parentTag?: StringFieldUpdateOperationsInput | string
  }

  export type StoryPathCreateInput = {
    from: SceneCreateNestedOneWithoutFromPathsInput
    to: SceneCreateNestedOneWithoutToPathsInput
    storylines?: StorylinePathCreateNestedManyWithoutPathInput
  }

  export type StoryPathUncheckedCreateInput = {
    id?: number
    fromId: number
    toId: number
    storylines?: StorylinePathUncheckedCreateNestedManyWithoutPathInput
  }

  export type StoryPathUpdateInput = {
    from?: SceneUpdateOneRequiredWithoutFromPathsNestedInput
    to?: SceneUpdateOneRequiredWithoutToPathsNestedInput
    storylines?: StorylinePathUpdateManyWithoutPathNestedInput
  }

  export type StoryPathUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    storylines?: StorylinePathUncheckedUpdateManyWithoutPathNestedInput
  }

  export type StoryPathCreateManyInput = {
    id?: number
    fromId: number
    toId: number
  }

  export type StoryPathUpdateManyMutationInput = {

  }

  export type StoryPathUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
  }

  export type StorylineCreateInput = {
    title: string
    description: string
    owner: UserCreateNestedOneWithoutStorylinesInput
    storyPaths?: StorylinePathCreateNestedManyWithoutStorylineInput
    anchor?: SceneAnchorCreateNestedOneWithoutTimelineInput
  }

  export type StorylineUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    ownerId: number
    storyPaths?: StorylinePathUncheckedCreateNestedManyWithoutStorylineInput
    anchor?: SceneAnchorUncheckedCreateNestedOneWithoutTimelineInput
  }

  export type StorylineUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutStorylinesNestedInput
    storyPaths?: StorylinePathUpdateManyWithoutStorylineNestedInput
    anchor?: SceneAnchorUpdateOneWithoutTimelineNestedInput
  }

  export type StorylineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    storyPaths?: StorylinePathUncheckedUpdateManyWithoutStorylineNestedInput
    anchor?: SceneAnchorUncheckedUpdateOneWithoutTimelineNestedInput
  }

  export type StorylineCreateManyInput = {
    id?: number
    title: string
    description: string
    ownerId: number
  }

  export type StorylineUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type StorylineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type StorylinePathCreateInput = {
    seq?: number
    storyline: StorylineCreateNestedOneWithoutStoryPathsInput
    path: StoryPathCreateNestedOneWithoutStorylinesInput
  }

  export type StorylinePathUncheckedCreateInput = {
    storyLineId: number
    pathId: number
    seq?: number
  }

  export type StorylinePathUpdateInput = {
    seq?: IntFieldUpdateOperationsInput | number
    storyline?: StorylineUpdateOneRequiredWithoutStoryPathsNestedInput
    path?: StoryPathUpdateOneRequiredWithoutStorylinesNestedInput
  }

  export type StorylinePathUncheckedUpdateInput = {
    storyLineId?: IntFieldUpdateOperationsInput | number
    pathId?: IntFieldUpdateOperationsInput | number
    seq?: IntFieldUpdateOperationsInput | number
  }

  export type StorylinePathCreateManyInput = {
    storyLineId: number
    pathId: number
    seq?: number
  }

  export type StorylinePathUpdateManyMutationInput = {
    seq?: IntFieldUpdateOperationsInput | number
  }

  export type StorylinePathUncheckedUpdateManyInput = {
    storyLineId?: IntFieldUpdateOperationsInput | number
    pathId?: IntFieldUpdateOperationsInput | number
    seq?: IntFieldUpdateOperationsInput | number
  }

  export type SessionCreateInput = {
    id: string
    createdAt: Date | string
    lastOpened: Date | string
    moods?: SessionCreatemoodsInput | $Enums.SceneMood[]
    languages?: SessionCreatelanguagesInput | string[]
    reader: UserCreateNestedOneWithoutSessionsInput
    lastScene?: SceneCreateNestedOneWithoutSessionsInput
    universe?: UniverseCreateNestedOneWithoutSessionsInput
    favorites?: FavoriteAnchorCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    readerId: number
    createdAt: Date | string
    lastOpened: Date | string
    lastSceneId?: number | null
    universeId?: number | null
    moods?: SessionCreatemoodsInput | $Enums.SceneMood[]
    languages?: SessionCreatelanguagesInput | string[]
    favorites?: FavoriteAnchorUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOpened?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: SessionUpdatemoodsInput | $Enums.SceneMood[]
    languages?: SessionUpdatelanguagesInput | string[]
    reader?: UserUpdateOneRequiredWithoutSessionsNestedInput
    lastScene?: SceneUpdateOneWithoutSessionsNestedInput
    universe?: UniverseUpdateOneWithoutSessionsNestedInput
    favorites?: FavoriteAnchorUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    readerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOpened?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    universeId?: NullableIntFieldUpdateOperationsInput | number | null
    moods?: SessionUpdatemoodsInput | $Enums.SceneMood[]
    languages?: SessionUpdatelanguagesInput | string[]
    favorites?: FavoriteAnchorUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id: string
    readerId: number
    createdAt: Date | string
    lastOpened: Date | string
    lastSceneId?: number | null
    universeId?: number | null
    moods?: SessionCreatemoodsInput | $Enums.SceneMood[]
    languages?: SessionCreatelanguagesInput | string[]
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOpened?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: SessionUpdatemoodsInput | $Enums.SceneMood[]
    languages?: SessionUpdatelanguagesInput | string[]
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    readerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOpened?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    universeId?: NullableIntFieldUpdateOperationsInput | number | null
    moods?: SessionUpdatemoodsInput | $Enums.SceneMood[]
    languages?: SessionUpdatelanguagesInput | string[]
  }

  export type FavoriteAnchorCreateInput = {
    anchorId: number
    anchor?: SceneAnchorCreateNestedOneWithoutSessionsInput
    session?: SessionCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteAnchorUncheckedCreateInput = {
    anchorId: number
    sessionId: string
    sceneAnchorTag?: string | null
  }

  export type FavoriteAnchorUpdateInput = {
    anchorId?: IntFieldUpdateOperationsInput | number
    anchor?: SceneAnchorUpdateOneWithoutSessionsNestedInput
    session?: SessionUpdateOneWithoutFavoritesNestedInput
  }

  export type FavoriteAnchorUncheckedUpdateInput = {
    anchorId?: IntFieldUpdateOperationsInput | number
    sessionId?: StringFieldUpdateOperationsInput | string
    sceneAnchorTag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoriteAnchorCreateManyInput = {
    anchorId: number
    sessionId: string
    sceneAnchorTag?: string | null
  }

  export type FavoriteAnchorUpdateManyMutationInput = {
    anchorId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteAnchorUncheckedUpdateManyInput = {
    anchorId?: IntFieldUpdateOperationsInput | number
    sessionId?: StringFieldUpdateOperationsInput | string
    sceneAnchorTag?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type UniverseMemberListRelationFilter = {
    every?: UniverseMemberWhereInput
    some?: UniverseMemberWhereInput
    none?: UniverseMemberWhereInput
  }

  export type SceneListRelationFilter = {
    every?: SceneWhereInput
    some?: SceneWhereInput
    none?: SceneWhereInput
  }

  export type StorylineListRelationFilter = {
    every?: StorylineWhereInput
    some?: StorylineWhereInput
    none?: StorylineWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UniverseMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SceneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StorylineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UniverseScalarRelationFilter = {
    is?: UniverseWhereInput
    isNot?: UniverseWhereInput
  }

  export type UniverseMemberUserIdUniverseIdCompoundUniqueInput = {
    userId: number
    universeId: number
  }

  export type UniverseMemberCountOrderByAggregateInput = {
    userId?: SortOrder
    universeId?: SortOrder
  }

  export type UniverseMemberAvgOrderByAggregateInput = {
    userId?: SortOrder
    universeId?: SortOrder
  }

  export type UniverseMemberMaxOrderByAggregateInput = {
    userId?: SortOrder
    universeId?: SortOrder
  }

  export type UniverseMemberMinOrderByAggregateInput = {
    userId?: SortOrder
    universeId?: SortOrder
  }

  export type UniverseMemberSumOrderByAggregateInput = {
    userId?: SortOrder
    universeId?: SortOrder
  }

  export type EnumVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityFilter<$PrismaModel> | $Enums.Visibility
  }

  export type UniverseSourceListRelationFilter = {
    every?: UniverseSourceWhereInput
    some?: UniverseSourceWhereInput
    none?: UniverseSourceWhereInput
  }

  export type UniverseSourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UniverseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    contextDB?: SortOrder
    visibility?: SortOrder
  }

  export type UniverseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UniverseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    contextDB?: SortOrder
    visibility?: SortOrder
  }

  export type UniverseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    contextDB?: SortOrder
    visibility?: SortOrder
  }

  export type UniverseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.Visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityFilter<$PrismaModel>
    _max?: NestedEnumVisibilityFilter<$PrismaModel>
  }

  export type EnumFileFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.FileFormat | EnumFileFormatFieldRefInput<$PrismaModel>
    in?: $Enums.FileFormat[] | ListEnumFileFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileFormat[] | ListEnumFileFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumFileFormatFilter<$PrismaModel> | $Enums.FileFormat
  }

  export type UniverseSourceCountOrderByAggregateInput = {
    id?: SortOrder
    format?: SortOrder
    path?: SortOrder
    universeId?: SortOrder
  }

  export type UniverseSourceAvgOrderByAggregateInput = {
    id?: SortOrder
    universeId?: SortOrder
  }

  export type UniverseSourceMaxOrderByAggregateInput = {
    id?: SortOrder
    format?: SortOrder
    path?: SortOrder
    universeId?: SortOrder
  }

  export type UniverseSourceMinOrderByAggregateInput = {
    id?: SortOrder
    format?: SortOrder
    path?: SortOrder
    universeId?: SortOrder
  }

  export type UniverseSourceSumOrderByAggregateInput = {
    id?: SortOrder
    universeId?: SortOrder
  }

  export type EnumFileFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileFormat | EnumFileFormatFieldRefInput<$PrismaModel>
    in?: $Enums.FileFormat[] | ListEnumFileFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileFormat[] | ListEnumFileFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumFileFormatWithAggregatesFilter<$PrismaModel> | $Enums.FileFormat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileFormatFilter<$PrismaModel>
    _max?: NestedEnumFileFormatFilter<$PrismaModel>
  }

  export type EnumSceneMoodFilter<$PrismaModel = never> = {
    equals?: $Enums.SceneMood | EnumSceneMoodFieldRefInput<$PrismaModel>
    in?: $Enums.SceneMood[] | ListEnumSceneMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SceneMood[] | ListEnumSceneMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumSceneMoodFilter<$PrismaModel> | $Enums.SceneMood
  }

  export type EnumSceneGenreFilter<$PrismaModel = never> = {
    equals?: $Enums.SceneGenre | EnumSceneGenreFieldRefInput<$PrismaModel>
    in?: $Enums.SceneGenre[] | ListEnumSceneGenreFieldRefInput<$PrismaModel>
    notIn?: $Enums.SceneGenre[] | ListEnumSceneGenreFieldRefInput<$PrismaModel>
    not?: NestedEnumSceneGenreFilter<$PrismaModel> | $Enums.SceneGenre
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

  export type SceneAnchorListRelationFilter = {
    every?: SceneAnchorWhereInput
    some?: SceneAnchorWhereInput
    none?: SceneAnchorWhereInput
  }

  export type StoryPathListRelationFilter = {
    every?: StoryPathWhereInput
    some?: StoryPathWhereInput
    none?: StoryPathWhereInput
  }

  export type SceneNullableScalarRelationFilter = {
    is?: SceneWhereInput | null
    isNot?: SceneWhereInput | null
  }

  export type SceneAnchorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoryPathOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SceneCountOrderByAggregateInput = {
    id?: SortOrder
    universeId?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    mood?: SortOrder
    genre?: SortOrder
    lang?: SortOrder
    prompt?: SortOrder
    parentId?: SortOrder
  }

  export type SceneAvgOrderByAggregateInput = {
    id?: SortOrder
    universeId?: SortOrder
    authorId?: SortOrder
    parentId?: SortOrder
  }

  export type SceneMaxOrderByAggregateInput = {
    id?: SortOrder
    universeId?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    mood?: SortOrder
    genre?: SortOrder
    lang?: SortOrder
    prompt?: SortOrder
    parentId?: SortOrder
  }

  export type SceneMinOrderByAggregateInput = {
    id?: SortOrder
    universeId?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    mood?: SortOrder
    genre?: SortOrder
    lang?: SortOrder
    prompt?: SortOrder
    parentId?: SortOrder
  }

  export type SceneSumOrderByAggregateInput = {
    id?: SortOrder
    universeId?: SortOrder
    authorId?: SortOrder
    parentId?: SortOrder
  }

  export type EnumSceneMoodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SceneMood | EnumSceneMoodFieldRefInput<$PrismaModel>
    in?: $Enums.SceneMood[] | ListEnumSceneMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SceneMood[] | ListEnumSceneMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumSceneMoodWithAggregatesFilter<$PrismaModel> | $Enums.SceneMood
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSceneMoodFilter<$PrismaModel>
    _max?: NestedEnumSceneMoodFilter<$PrismaModel>
  }

  export type EnumSceneGenreWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SceneGenre | EnumSceneGenreFieldRefInput<$PrismaModel>
    in?: $Enums.SceneGenre[] | ListEnumSceneGenreFieldRefInput<$PrismaModel>
    notIn?: $Enums.SceneGenre[] | ListEnumSceneGenreFieldRefInput<$PrismaModel>
    not?: NestedEnumSceneGenreWithAggregatesFilter<$PrismaModel> | $Enums.SceneGenre
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSceneGenreFilter<$PrismaModel>
    _max?: NestedEnumSceneGenreFilter<$PrismaModel>
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

  export type EnumAnchorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnchorType | EnumAnchorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnchorType[] | ListEnumAnchorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnchorType[] | ListEnumAnchorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnchorTypeFilter<$PrismaModel> | $Enums.AnchorType
  }

  export type StorylineNullableScalarRelationFilter = {
    is?: StorylineWhereInput | null
    isNot?: StorylineWhereInput | null
  }

  export type SceneAnchorNullableScalarRelationFilter = {
    is?: SceneAnchorWhereInput | null
    isNot?: SceneAnchorWhereInput | null
  }

  export type FavoriteAnchorListRelationFilter = {
    every?: FavoriteAnchorWhereInput
    some?: FavoriteAnchorWhereInput
    none?: FavoriteAnchorWhereInput
  }

  export type FavoriteAnchorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SceneAnchorCountOrderByAggregateInput = {
    tag?: SortOrder
    type?: SortOrder
    name?: SortOrder
    descriptionId?: SortOrder
    timelineId?: SortOrder
    parentTag?: SortOrder
  }

  export type SceneAnchorAvgOrderByAggregateInput = {
    descriptionId?: SortOrder
    timelineId?: SortOrder
  }

  export type SceneAnchorMaxOrderByAggregateInput = {
    tag?: SortOrder
    type?: SortOrder
    name?: SortOrder
    descriptionId?: SortOrder
    timelineId?: SortOrder
    parentTag?: SortOrder
  }

  export type SceneAnchorMinOrderByAggregateInput = {
    tag?: SortOrder
    type?: SortOrder
    name?: SortOrder
    descriptionId?: SortOrder
    timelineId?: SortOrder
    parentTag?: SortOrder
  }

  export type SceneAnchorSumOrderByAggregateInput = {
    descriptionId?: SortOrder
    timelineId?: SortOrder
  }

  export type EnumAnchorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnchorType | EnumAnchorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnchorType[] | ListEnumAnchorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnchorType[] | ListEnumAnchorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnchorTypeWithAggregatesFilter<$PrismaModel> | $Enums.AnchorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnchorTypeFilter<$PrismaModel>
    _max?: NestedEnumAnchorTypeFilter<$PrismaModel>
  }

  export type SceneScalarRelationFilter = {
    is?: SceneWhereInput
    isNot?: SceneWhereInput
  }

  export type StorylinePathListRelationFilter = {
    every?: StorylinePathWhereInput
    some?: StorylinePathWhereInput
    none?: StorylinePathWhereInput
  }

  export type StorylinePathOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoryPathCountOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type StoryPathAvgOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type StoryPathMaxOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type StoryPathMinOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type StoryPathSumOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type StorylineCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
  }

  export type StorylineAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type StorylineMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
  }

  export type StorylineMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ownerId?: SortOrder
  }

  export type StorylineSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type StorylineScalarRelationFilter = {
    is?: StorylineWhereInput
    isNot?: StorylineWhereInput
  }

  export type StoryPathScalarRelationFilter = {
    is?: StoryPathWhereInput
    isNot?: StoryPathWhereInput
  }

  export type StorylinePathStoryLineIdPathIdCompoundUniqueInput = {
    storyLineId: number
    pathId: number
  }

  export type StorylinePathCountOrderByAggregateInput = {
    storyLineId?: SortOrder
    pathId?: SortOrder
    seq?: SortOrder
  }

  export type StorylinePathAvgOrderByAggregateInput = {
    storyLineId?: SortOrder
    pathId?: SortOrder
    seq?: SortOrder
  }

  export type StorylinePathMaxOrderByAggregateInput = {
    storyLineId?: SortOrder
    pathId?: SortOrder
    seq?: SortOrder
  }

  export type StorylinePathMinOrderByAggregateInput = {
    storyLineId?: SortOrder
    pathId?: SortOrder
    seq?: SortOrder
  }

  export type StorylinePathSumOrderByAggregateInput = {
    storyLineId?: SortOrder
    pathId?: SortOrder
    seq?: SortOrder
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

  export type EnumSceneMoodNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.SceneMood[] | ListEnumSceneMoodFieldRefInput<$PrismaModel> | null
    has?: $Enums.SceneMood | EnumSceneMoodFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.SceneMood[] | ListEnumSceneMoodFieldRefInput<$PrismaModel>
    hasSome?: $Enums.SceneMood[] | ListEnumSceneMoodFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UniverseNullableScalarRelationFilter = {
    is?: UniverseWhereInput | null
    isNot?: UniverseWhereInput | null
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    readerId?: SortOrder
    createdAt?: SortOrder
    lastOpened?: SortOrder
    lastSceneId?: SortOrder
    universeId?: SortOrder
    moods?: SortOrder
    languages?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    readerId?: SortOrder
    lastSceneId?: SortOrder
    universeId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    readerId?: SortOrder
    createdAt?: SortOrder
    lastOpened?: SortOrder
    lastSceneId?: SortOrder
    universeId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    readerId?: SortOrder
    createdAt?: SortOrder
    lastOpened?: SortOrder
    lastSceneId?: SortOrder
    universeId?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    readerId?: SortOrder
    lastSceneId?: SortOrder
    universeId?: SortOrder
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

  export type SessionNullableScalarRelationFilter = {
    is?: SessionWhereInput | null
    isNot?: SessionWhereInput | null
  }

  export type FavoriteAnchorSessionIdAnchorIdCompoundUniqueInput = {
    sessionId: string
    anchorId: number
  }

  export type FavoriteAnchorCountOrderByAggregateInput = {
    anchorId?: SortOrder
    sessionId?: SortOrder
    sceneAnchorTag?: SortOrder
  }

  export type FavoriteAnchorAvgOrderByAggregateInput = {
    anchorId?: SortOrder
  }

  export type FavoriteAnchorMaxOrderByAggregateInput = {
    anchorId?: SortOrder
    sessionId?: SortOrder
    sceneAnchorTag?: SortOrder
  }

  export type FavoriteAnchorMinOrderByAggregateInput = {
    anchorId?: SortOrder
    sessionId?: SortOrder
    sceneAnchorTag?: SortOrder
  }

  export type FavoriteAnchorSumOrderByAggregateInput = {
    anchorId?: SortOrder
  }

  export type UniverseMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<UniverseMemberCreateWithoutUserInput, UniverseMemberUncheckedCreateWithoutUserInput> | UniverseMemberCreateWithoutUserInput[] | UniverseMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UniverseMemberCreateOrConnectWithoutUserInput | UniverseMemberCreateOrConnectWithoutUserInput[]
    createMany?: UniverseMemberCreateManyUserInputEnvelope
    connect?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
  }

  export type SceneCreateNestedManyWithoutAuthorInput = {
    create?: XOR<SceneCreateWithoutAuthorInput, SceneUncheckedCreateWithoutAuthorInput> | SceneCreateWithoutAuthorInput[] | SceneUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutAuthorInput | SceneCreateOrConnectWithoutAuthorInput[]
    createMany?: SceneCreateManyAuthorInputEnvelope
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
  }

  export type StorylineCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StorylineCreateWithoutOwnerInput, StorylineUncheckedCreateWithoutOwnerInput> | StorylineCreateWithoutOwnerInput[] | StorylineUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StorylineCreateOrConnectWithoutOwnerInput | StorylineCreateOrConnectWithoutOwnerInput[]
    createMany?: StorylineCreateManyOwnerInputEnvelope
    connect?: StorylineWhereUniqueInput | StorylineWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutReaderInput = {
    create?: XOR<SessionCreateWithoutReaderInput, SessionUncheckedCreateWithoutReaderInput> | SessionCreateWithoutReaderInput[] | SessionUncheckedCreateWithoutReaderInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutReaderInput | SessionCreateOrConnectWithoutReaderInput[]
    createMany?: SessionCreateManyReaderInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UniverseMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UniverseMemberCreateWithoutUserInput, UniverseMemberUncheckedCreateWithoutUserInput> | UniverseMemberCreateWithoutUserInput[] | UniverseMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UniverseMemberCreateOrConnectWithoutUserInput | UniverseMemberCreateOrConnectWithoutUserInput[]
    createMany?: UniverseMemberCreateManyUserInputEnvelope
    connect?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
  }

  export type SceneUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<SceneCreateWithoutAuthorInput, SceneUncheckedCreateWithoutAuthorInput> | SceneCreateWithoutAuthorInput[] | SceneUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutAuthorInput | SceneCreateOrConnectWithoutAuthorInput[]
    createMany?: SceneCreateManyAuthorInputEnvelope
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
  }

  export type StorylineUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StorylineCreateWithoutOwnerInput, StorylineUncheckedCreateWithoutOwnerInput> | StorylineCreateWithoutOwnerInput[] | StorylineUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StorylineCreateOrConnectWithoutOwnerInput | StorylineCreateOrConnectWithoutOwnerInput[]
    createMany?: StorylineCreateManyOwnerInputEnvelope
    connect?: StorylineWhereUniqueInput | StorylineWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutReaderInput = {
    create?: XOR<SessionCreateWithoutReaderInput, SessionUncheckedCreateWithoutReaderInput> | SessionCreateWithoutReaderInput[] | SessionUncheckedCreateWithoutReaderInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutReaderInput | SessionCreateOrConnectWithoutReaderInput[]
    createMany?: SessionCreateManyReaderInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UniverseMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<UniverseMemberCreateWithoutUserInput, UniverseMemberUncheckedCreateWithoutUserInput> | UniverseMemberCreateWithoutUserInput[] | UniverseMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UniverseMemberCreateOrConnectWithoutUserInput | UniverseMemberCreateOrConnectWithoutUserInput[]
    upsert?: UniverseMemberUpsertWithWhereUniqueWithoutUserInput | UniverseMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UniverseMemberCreateManyUserInputEnvelope
    set?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
    disconnect?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
    delete?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
    connect?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
    update?: UniverseMemberUpdateWithWhereUniqueWithoutUserInput | UniverseMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UniverseMemberUpdateManyWithWhereWithoutUserInput | UniverseMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UniverseMemberScalarWhereInput | UniverseMemberScalarWhereInput[]
  }

  export type SceneUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<SceneCreateWithoutAuthorInput, SceneUncheckedCreateWithoutAuthorInput> | SceneCreateWithoutAuthorInput[] | SceneUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutAuthorInput | SceneCreateOrConnectWithoutAuthorInput[]
    upsert?: SceneUpsertWithWhereUniqueWithoutAuthorInput | SceneUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: SceneCreateManyAuthorInputEnvelope
    set?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    disconnect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    delete?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    update?: SceneUpdateWithWhereUniqueWithoutAuthorInput | SceneUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: SceneUpdateManyWithWhereWithoutAuthorInput | SceneUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: SceneScalarWhereInput | SceneScalarWhereInput[]
  }

  export type StorylineUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StorylineCreateWithoutOwnerInput, StorylineUncheckedCreateWithoutOwnerInput> | StorylineCreateWithoutOwnerInput[] | StorylineUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StorylineCreateOrConnectWithoutOwnerInput | StorylineCreateOrConnectWithoutOwnerInput[]
    upsert?: StorylineUpsertWithWhereUniqueWithoutOwnerInput | StorylineUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StorylineCreateManyOwnerInputEnvelope
    set?: StorylineWhereUniqueInput | StorylineWhereUniqueInput[]
    disconnect?: StorylineWhereUniqueInput | StorylineWhereUniqueInput[]
    delete?: StorylineWhereUniqueInput | StorylineWhereUniqueInput[]
    connect?: StorylineWhereUniqueInput | StorylineWhereUniqueInput[]
    update?: StorylineUpdateWithWhereUniqueWithoutOwnerInput | StorylineUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StorylineUpdateManyWithWhereWithoutOwnerInput | StorylineUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StorylineScalarWhereInput | StorylineScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutReaderNestedInput = {
    create?: XOR<SessionCreateWithoutReaderInput, SessionUncheckedCreateWithoutReaderInput> | SessionCreateWithoutReaderInput[] | SessionUncheckedCreateWithoutReaderInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutReaderInput | SessionCreateOrConnectWithoutReaderInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutReaderInput | SessionUpsertWithWhereUniqueWithoutReaderInput[]
    createMany?: SessionCreateManyReaderInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutReaderInput | SessionUpdateWithWhereUniqueWithoutReaderInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutReaderInput | SessionUpdateManyWithWhereWithoutReaderInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UniverseMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UniverseMemberCreateWithoutUserInput, UniverseMemberUncheckedCreateWithoutUserInput> | UniverseMemberCreateWithoutUserInput[] | UniverseMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UniverseMemberCreateOrConnectWithoutUserInput | UniverseMemberCreateOrConnectWithoutUserInput[]
    upsert?: UniverseMemberUpsertWithWhereUniqueWithoutUserInput | UniverseMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UniverseMemberCreateManyUserInputEnvelope
    set?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
    disconnect?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
    delete?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
    connect?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
    update?: UniverseMemberUpdateWithWhereUniqueWithoutUserInput | UniverseMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UniverseMemberUpdateManyWithWhereWithoutUserInput | UniverseMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UniverseMemberScalarWhereInput | UniverseMemberScalarWhereInput[]
  }

  export type SceneUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<SceneCreateWithoutAuthorInput, SceneUncheckedCreateWithoutAuthorInput> | SceneCreateWithoutAuthorInput[] | SceneUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutAuthorInput | SceneCreateOrConnectWithoutAuthorInput[]
    upsert?: SceneUpsertWithWhereUniqueWithoutAuthorInput | SceneUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: SceneCreateManyAuthorInputEnvelope
    set?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    disconnect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    delete?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    update?: SceneUpdateWithWhereUniqueWithoutAuthorInput | SceneUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: SceneUpdateManyWithWhereWithoutAuthorInput | SceneUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: SceneScalarWhereInput | SceneScalarWhereInput[]
  }

  export type StorylineUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StorylineCreateWithoutOwnerInput, StorylineUncheckedCreateWithoutOwnerInput> | StorylineCreateWithoutOwnerInput[] | StorylineUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StorylineCreateOrConnectWithoutOwnerInput | StorylineCreateOrConnectWithoutOwnerInput[]
    upsert?: StorylineUpsertWithWhereUniqueWithoutOwnerInput | StorylineUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StorylineCreateManyOwnerInputEnvelope
    set?: StorylineWhereUniqueInput | StorylineWhereUniqueInput[]
    disconnect?: StorylineWhereUniqueInput | StorylineWhereUniqueInput[]
    delete?: StorylineWhereUniqueInput | StorylineWhereUniqueInput[]
    connect?: StorylineWhereUniqueInput | StorylineWhereUniqueInput[]
    update?: StorylineUpdateWithWhereUniqueWithoutOwnerInput | StorylineUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StorylineUpdateManyWithWhereWithoutOwnerInput | StorylineUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StorylineScalarWhereInput | StorylineScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutReaderNestedInput = {
    create?: XOR<SessionCreateWithoutReaderInput, SessionUncheckedCreateWithoutReaderInput> | SessionCreateWithoutReaderInput[] | SessionUncheckedCreateWithoutReaderInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutReaderInput | SessionCreateOrConnectWithoutReaderInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutReaderInput | SessionUpsertWithWhereUniqueWithoutReaderInput[]
    createMany?: SessionCreateManyReaderInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutReaderInput | SessionUpdateWithWhereUniqueWithoutReaderInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutReaderInput | SessionUpdateManyWithWhereWithoutReaderInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUniversesInput = {
    create?: XOR<UserCreateWithoutUniversesInput, UserUncheckedCreateWithoutUniversesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUniversesInput
    connect?: UserWhereUniqueInput
  }

  export type UniverseCreateNestedOneWithoutMembersInput = {
    create?: XOR<UniverseCreateWithoutMembersInput, UniverseUncheckedCreateWithoutMembersInput>
    connectOrCreate?: UniverseCreateOrConnectWithoutMembersInput
    connect?: UniverseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUniversesNestedInput = {
    create?: XOR<UserCreateWithoutUniversesInput, UserUncheckedCreateWithoutUniversesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUniversesInput
    upsert?: UserUpsertWithoutUniversesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUniversesInput, UserUpdateWithoutUniversesInput>, UserUncheckedUpdateWithoutUniversesInput>
  }

  export type UniverseUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<UniverseCreateWithoutMembersInput, UniverseUncheckedCreateWithoutMembersInput>
    connectOrCreate?: UniverseCreateOrConnectWithoutMembersInput
    upsert?: UniverseUpsertWithoutMembersInput
    connect?: UniverseWhereUniqueInput
    update?: XOR<XOR<UniverseUpdateToOneWithWhereWithoutMembersInput, UniverseUpdateWithoutMembersInput>, UniverseUncheckedUpdateWithoutMembersInput>
  }

  export type UniverseSourceCreateNestedManyWithoutUniverseInput = {
    create?: XOR<UniverseSourceCreateWithoutUniverseInput, UniverseSourceUncheckedCreateWithoutUniverseInput> | UniverseSourceCreateWithoutUniverseInput[] | UniverseSourceUncheckedCreateWithoutUniverseInput[]
    connectOrCreate?: UniverseSourceCreateOrConnectWithoutUniverseInput | UniverseSourceCreateOrConnectWithoutUniverseInput[]
    createMany?: UniverseSourceCreateManyUniverseInputEnvelope
    connect?: UniverseSourceWhereUniqueInput | UniverseSourceWhereUniqueInput[]
  }

  export type UniverseMemberCreateNestedManyWithoutUniverseInput = {
    create?: XOR<UniverseMemberCreateWithoutUniverseInput, UniverseMemberUncheckedCreateWithoutUniverseInput> | UniverseMemberCreateWithoutUniverseInput[] | UniverseMemberUncheckedCreateWithoutUniverseInput[]
    connectOrCreate?: UniverseMemberCreateOrConnectWithoutUniverseInput | UniverseMemberCreateOrConnectWithoutUniverseInput[]
    createMany?: UniverseMemberCreateManyUniverseInputEnvelope
    connect?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
  }

  export type SceneCreateNestedManyWithoutUniverseInput = {
    create?: XOR<SceneCreateWithoutUniverseInput, SceneUncheckedCreateWithoutUniverseInput> | SceneCreateWithoutUniverseInput[] | SceneUncheckedCreateWithoutUniverseInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutUniverseInput | SceneCreateOrConnectWithoutUniverseInput[]
    createMany?: SceneCreateManyUniverseInputEnvelope
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUniverseInput = {
    create?: XOR<SessionCreateWithoutUniverseInput, SessionUncheckedCreateWithoutUniverseInput> | SessionCreateWithoutUniverseInput[] | SessionUncheckedCreateWithoutUniverseInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUniverseInput | SessionCreateOrConnectWithoutUniverseInput[]
    createMany?: SessionCreateManyUniverseInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UniverseSourceUncheckedCreateNestedManyWithoutUniverseInput = {
    create?: XOR<UniverseSourceCreateWithoutUniverseInput, UniverseSourceUncheckedCreateWithoutUniverseInput> | UniverseSourceCreateWithoutUniverseInput[] | UniverseSourceUncheckedCreateWithoutUniverseInput[]
    connectOrCreate?: UniverseSourceCreateOrConnectWithoutUniverseInput | UniverseSourceCreateOrConnectWithoutUniverseInput[]
    createMany?: UniverseSourceCreateManyUniverseInputEnvelope
    connect?: UniverseSourceWhereUniqueInput | UniverseSourceWhereUniqueInput[]
  }

  export type UniverseMemberUncheckedCreateNestedManyWithoutUniverseInput = {
    create?: XOR<UniverseMemberCreateWithoutUniverseInput, UniverseMemberUncheckedCreateWithoutUniverseInput> | UniverseMemberCreateWithoutUniverseInput[] | UniverseMemberUncheckedCreateWithoutUniverseInput[]
    connectOrCreate?: UniverseMemberCreateOrConnectWithoutUniverseInput | UniverseMemberCreateOrConnectWithoutUniverseInput[]
    createMany?: UniverseMemberCreateManyUniverseInputEnvelope
    connect?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
  }

  export type SceneUncheckedCreateNestedManyWithoutUniverseInput = {
    create?: XOR<SceneCreateWithoutUniverseInput, SceneUncheckedCreateWithoutUniverseInput> | SceneCreateWithoutUniverseInput[] | SceneUncheckedCreateWithoutUniverseInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutUniverseInput | SceneCreateOrConnectWithoutUniverseInput[]
    createMany?: SceneCreateManyUniverseInputEnvelope
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUniverseInput = {
    create?: XOR<SessionCreateWithoutUniverseInput, SessionUncheckedCreateWithoutUniverseInput> | SessionCreateWithoutUniverseInput[] | SessionUncheckedCreateWithoutUniverseInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUniverseInput | SessionCreateOrConnectWithoutUniverseInput[]
    createMany?: SessionCreateManyUniverseInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EnumVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.Visibility
  }

  export type UniverseSourceUpdateManyWithoutUniverseNestedInput = {
    create?: XOR<UniverseSourceCreateWithoutUniverseInput, UniverseSourceUncheckedCreateWithoutUniverseInput> | UniverseSourceCreateWithoutUniverseInput[] | UniverseSourceUncheckedCreateWithoutUniverseInput[]
    connectOrCreate?: UniverseSourceCreateOrConnectWithoutUniverseInput | UniverseSourceCreateOrConnectWithoutUniverseInput[]
    upsert?: UniverseSourceUpsertWithWhereUniqueWithoutUniverseInput | UniverseSourceUpsertWithWhereUniqueWithoutUniverseInput[]
    createMany?: UniverseSourceCreateManyUniverseInputEnvelope
    set?: UniverseSourceWhereUniqueInput | UniverseSourceWhereUniqueInput[]
    disconnect?: UniverseSourceWhereUniqueInput | UniverseSourceWhereUniqueInput[]
    delete?: UniverseSourceWhereUniqueInput | UniverseSourceWhereUniqueInput[]
    connect?: UniverseSourceWhereUniqueInput | UniverseSourceWhereUniqueInput[]
    update?: UniverseSourceUpdateWithWhereUniqueWithoutUniverseInput | UniverseSourceUpdateWithWhereUniqueWithoutUniverseInput[]
    updateMany?: UniverseSourceUpdateManyWithWhereWithoutUniverseInput | UniverseSourceUpdateManyWithWhereWithoutUniverseInput[]
    deleteMany?: UniverseSourceScalarWhereInput | UniverseSourceScalarWhereInput[]
  }

  export type UniverseMemberUpdateManyWithoutUniverseNestedInput = {
    create?: XOR<UniverseMemberCreateWithoutUniverseInput, UniverseMemberUncheckedCreateWithoutUniverseInput> | UniverseMemberCreateWithoutUniverseInput[] | UniverseMemberUncheckedCreateWithoutUniverseInput[]
    connectOrCreate?: UniverseMemberCreateOrConnectWithoutUniverseInput | UniverseMemberCreateOrConnectWithoutUniverseInput[]
    upsert?: UniverseMemberUpsertWithWhereUniqueWithoutUniverseInput | UniverseMemberUpsertWithWhereUniqueWithoutUniverseInput[]
    createMany?: UniverseMemberCreateManyUniverseInputEnvelope
    set?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
    disconnect?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
    delete?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
    connect?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
    update?: UniverseMemberUpdateWithWhereUniqueWithoutUniverseInput | UniverseMemberUpdateWithWhereUniqueWithoutUniverseInput[]
    updateMany?: UniverseMemberUpdateManyWithWhereWithoutUniverseInput | UniverseMemberUpdateManyWithWhereWithoutUniverseInput[]
    deleteMany?: UniverseMemberScalarWhereInput | UniverseMemberScalarWhereInput[]
  }

  export type SceneUpdateManyWithoutUniverseNestedInput = {
    create?: XOR<SceneCreateWithoutUniverseInput, SceneUncheckedCreateWithoutUniverseInput> | SceneCreateWithoutUniverseInput[] | SceneUncheckedCreateWithoutUniverseInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutUniverseInput | SceneCreateOrConnectWithoutUniverseInput[]
    upsert?: SceneUpsertWithWhereUniqueWithoutUniverseInput | SceneUpsertWithWhereUniqueWithoutUniverseInput[]
    createMany?: SceneCreateManyUniverseInputEnvelope
    set?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    disconnect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    delete?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    update?: SceneUpdateWithWhereUniqueWithoutUniverseInput | SceneUpdateWithWhereUniqueWithoutUniverseInput[]
    updateMany?: SceneUpdateManyWithWhereWithoutUniverseInput | SceneUpdateManyWithWhereWithoutUniverseInput[]
    deleteMany?: SceneScalarWhereInput | SceneScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUniverseNestedInput = {
    create?: XOR<SessionCreateWithoutUniverseInput, SessionUncheckedCreateWithoutUniverseInput> | SessionCreateWithoutUniverseInput[] | SessionUncheckedCreateWithoutUniverseInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUniverseInput | SessionCreateOrConnectWithoutUniverseInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUniverseInput | SessionUpsertWithWhereUniqueWithoutUniverseInput[]
    createMany?: SessionCreateManyUniverseInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUniverseInput | SessionUpdateWithWhereUniqueWithoutUniverseInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUniverseInput | SessionUpdateManyWithWhereWithoutUniverseInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UniverseSourceUncheckedUpdateManyWithoutUniverseNestedInput = {
    create?: XOR<UniverseSourceCreateWithoutUniverseInput, UniverseSourceUncheckedCreateWithoutUniverseInput> | UniverseSourceCreateWithoutUniverseInput[] | UniverseSourceUncheckedCreateWithoutUniverseInput[]
    connectOrCreate?: UniverseSourceCreateOrConnectWithoutUniverseInput | UniverseSourceCreateOrConnectWithoutUniverseInput[]
    upsert?: UniverseSourceUpsertWithWhereUniqueWithoutUniverseInput | UniverseSourceUpsertWithWhereUniqueWithoutUniverseInput[]
    createMany?: UniverseSourceCreateManyUniverseInputEnvelope
    set?: UniverseSourceWhereUniqueInput | UniverseSourceWhereUniqueInput[]
    disconnect?: UniverseSourceWhereUniqueInput | UniverseSourceWhereUniqueInput[]
    delete?: UniverseSourceWhereUniqueInput | UniverseSourceWhereUniqueInput[]
    connect?: UniverseSourceWhereUniqueInput | UniverseSourceWhereUniqueInput[]
    update?: UniverseSourceUpdateWithWhereUniqueWithoutUniverseInput | UniverseSourceUpdateWithWhereUniqueWithoutUniverseInput[]
    updateMany?: UniverseSourceUpdateManyWithWhereWithoutUniverseInput | UniverseSourceUpdateManyWithWhereWithoutUniverseInput[]
    deleteMany?: UniverseSourceScalarWhereInput | UniverseSourceScalarWhereInput[]
  }

  export type UniverseMemberUncheckedUpdateManyWithoutUniverseNestedInput = {
    create?: XOR<UniverseMemberCreateWithoutUniverseInput, UniverseMemberUncheckedCreateWithoutUniverseInput> | UniverseMemberCreateWithoutUniverseInput[] | UniverseMemberUncheckedCreateWithoutUniverseInput[]
    connectOrCreate?: UniverseMemberCreateOrConnectWithoutUniverseInput | UniverseMemberCreateOrConnectWithoutUniverseInput[]
    upsert?: UniverseMemberUpsertWithWhereUniqueWithoutUniverseInput | UniverseMemberUpsertWithWhereUniqueWithoutUniverseInput[]
    createMany?: UniverseMemberCreateManyUniverseInputEnvelope
    set?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
    disconnect?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
    delete?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
    connect?: UniverseMemberWhereUniqueInput | UniverseMemberWhereUniqueInput[]
    update?: UniverseMemberUpdateWithWhereUniqueWithoutUniverseInput | UniverseMemberUpdateWithWhereUniqueWithoutUniverseInput[]
    updateMany?: UniverseMemberUpdateManyWithWhereWithoutUniverseInput | UniverseMemberUpdateManyWithWhereWithoutUniverseInput[]
    deleteMany?: UniverseMemberScalarWhereInput | UniverseMemberScalarWhereInput[]
  }

  export type SceneUncheckedUpdateManyWithoutUniverseNestedInput = {
    create?: XOR<SceneCreateWithoutUniverseInput, SceneUncheckedCreateWithoutUniverseInput> | SceneCreateWithoutUniverseInput[] | SceneUncheckedCreateWithoutUniverseInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutUniverseInput | SceneCreateOrConnectWithoutUniverseInput[]
    upsert?: SceneUpsertWithWhereUniqueWithoutUniverseInput | SceneUpsertWithWhereUniqueWithoutUniverseInput[]
    createMany?: SceneCreateManyUniverseInputEnvelope
    set?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    disconnect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    delete?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    update?: SceneUpdateWithWhereUniqueWithoutUniverseInput | SceneUpdateWithWhereUniqueWithoutUniverseInput[]
    updateMany?: SceneUpdateManyWithWhereWithoutUniverseInput | SceneUpdateManyWithWhereWithoutUniverseInput[]
    deleteMany?: SceneScalarWhereInput | SceneScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUniverseNestedInput = {
    create?: XOR<SessionCreateWithoutUniverseInput, SessionUncheckedCreateWithoutUniverseInput> | SessionCreateWithoutUniverseInput[] | SessionUncheckedCreateWithoutUniverseInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUniverseInput | SessionCreateOrConnectWithoutUniverseInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUniverseInput | SessionUpsertWithWhereUniqueWithoutUniverseInput[]
    createMany?: SessionCreateManyUniverseInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUniverseInput | SessionUpdateWithWhereUniqueWithoutUniverseInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUniverseInput | SessionUpdateManyWithWhereWithoutUniverseInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UniverseCreateNestedOneWithoutSourcesInput = {
    create?: XOR<UniverseCreateWithoutSourcesInput, UniverseUncheckedCreateWithoutSourcesInput>
    connectOrCreate?: UniverseCreateOrConnectWithoutSourcesInput
    connect?: UniverseWhereUniqueInput
  }

  export type EnumFileFormatFieldUpdateOperationsInput = {
    set?: $Enums.FileFormat
  }

  export type UniverseUpdateOneRequiredWithoutSourcesNestedInput = {
    create?: XOR<UniverseCreateWithoutSourcesInput, UniverseUncheckedCreateWithoutSourcesInput>
    connectOrCreate?: UniverseCreateOrConnectWithoutSourcesInput
    upsert?: UniverseUpsertWithoutSourcesInput
    connect?: UniverseWhereUniqueInput
    update?: XOR<XOR<UniverseUpdateToOneWithWhereWithoutSourcesInput, UniverseUpdateWithoutSourcesInput>, UniverseUncheckedUpdateWithoutSourcesInput>
  }

  export type UniverseCreateNestedOneWithoutScenesInput = {
    create?: XOR<UniverseCreateWithoutScenesInput, UniverseUncheckedCreateWithoutScenesInput>
    connectOrCreate?: UniverseCreateOrConnectWithoutScenesInput
    connect?: UniverseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutScenesInput = {
    create?: XOR<UserCreateWithoutScenesInput, UserUncheckedCreateWithoutScenesInput>
    connectOrCreate?: UserCreateOrConnectWithoutScenesInput
    connect?: UserWhereUniqueInput
  }

  export type SceneAnchorCreateNestedManyWithoutDescriptionInput = {
    create?: XOR<SceneAnchorCreateWithoutDescriptionInput, SceneAnchorUncheckedCreateWithoutDescriptionInput> | SceneAnchorCreateWithoutDescriptionInput[] | SceneAnchorUncheckedCreateWithoutDescriptionInput[]
    connectOrCreate?: SceneAnchorCreateOrConnectWithoutDescriptionInput | SceneAnchorCreateOrConnectWithoutDescriptionInput[]
    createMany?: SceneAnchorCreateManyDescriptionInputEnvelope
    connect?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
  }

  export type StoryPathCreateNestedManyWithoutFromInput = {
    create?: XOR<StoryPathCreateWithoutFromInput, StoryPathUncheckedCreateWithoutFromInput> | StoryPathCreateWithoutFromInput[] | StoryPathUncheckedCreateWithoutFromInput[]
    connectOrCreate?: StoryPathCreateOrConnectWithoutFromInput | StoryPathCreateOrConnectWithoutFromInput[]
    createMany?: StoryPathCreateManyFromInputEnvelope
    connect?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
  }

  export type StoryPathCreateNestedManyWithoutToInput = {
    create?: XOR<StoryPathCreateWithoutToInput, StoryPathUncheckedCreateWithoutToInput> | StoryPathCreateWithoutToInput[] | StoryPathUncheckedCreateWithoutToInput[]
    connectOrCreate?: StoryPathCreateOrConnectWithoutToInput | StoryPathCreateOrConnectWithoutToInput[]
    createMany?: StoryPathCreateManyToInputEnvelope
    connect?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
  }

  export type SceneCreateNestedOneWithoutVariantsInput = {
    create?: XOR<SceneCreateWithoutVariantsInput, SceneUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: SceneCreateOrConnectWithoutVariantsInput
    connect?: SceneWhereUniqueInput
  }

  export type SceneCreateNestedManyWithoutParentInput = {
    create?: XOR<SceneCreateWithoutParentInput, SceneUncheckedCreateWithoutParentInput> | SceneCreateWithoutParentInput[] | SceneUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutParentInput | SceneCreateOrConnectWithoutParentInput[]
    createMany?: SceneCreateManyParentInputEnvelope
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutLastSceneInput = {
    create?: XOR<SessionCreateWithoutLastSceneInput, SessionUncheckedCreateWithoutLastSceneInput> | SessionCreateWithoutLastSceneInput[] | SessionUncheckedCreateWithoutLastSceneInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutLastSceneInput | SessionCreateOrConnectWithoutLastSceneInput[]
    createMany?: SessionCreateManyLastSceneInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SceneAnchorUncheckedCreateNestedManyWithoutDescriptionInput = {
    create?: XOR<SceneAnchorCreateWithoutDescriptionInput, SceneAnchorUncheckedCreateWithoutDescriptionInput> | SceneAnchorCreateWithoutDescriptionInput[] | SceneAnchorUncheckedCreateWithoutDescriptionInput[]
    connectOrCreate?: SceneAnchorCreateOrConnectWithoutDescriptionInput | SceneAnchorCreateOrConnectWithoutDescriptionInput[]
    createMany?: SceneAnchorCreateManyDescriptionInputEnvelope
    connect?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
  }

  export type StoryPathUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<StoryPathCreateWithoutFromInput, StoryPathUncheckedCreateWithoutFromInput> | StoryPathCreateWithoutFromInput[] | StoryPathUncheckedCreateWithoutFromInput[]
    connectOrCreate?: StoryPathCreateOrConnectWithoutFromInput | StoryPathCreateOrConnectWithoutFromInput[]
    createMany?: StoryPathCreateManyFromInputEnvelope
    connect?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
  }

  export type StoryPathUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<StoryPathCreateWithoutToInput, StoryPathUncheckedCreateWithoutToInput> | StoryPathCreateWithoutToInput[] | StoryPathUncheckedCreateWithoutToInput[]
    connectOrCreate?: StoryPathCreateOrConnectWithoutToInput | StoryPathCreateOrConnectWithoutToInput[]
    createMany?: StoryPathCreateManyToInputEnvelope
    connect?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
  }

  export type SceneUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<SceneCreateWithoutParentInput, SceneUncheckedCreateWithoutParentInput> | SceneCreateWithoutParentInput[] | SceneUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutParentInput | SceneCreateOrConnectWithoutParentInput[]
    createMany?: SceneCreateManyParentInputEnvelope
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutLastSceneInput = {
    create?: XOR<SessionCreateWithoutLastSceneInput, SessionUncheckedCreateWithoutLastSceneInput> | SessionCreateWithoutLastSceneInput[] | SessionUncheckedCreateWithoutLastSceneInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutLastSceneInput | SessionCreateOrConnectWithoutLastSceneInput[]
    createMany?: SessionCreateManyLastSceneInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EnumSceneMoodFieldUpdateOperationsInput = {
    set?: $Enums.SceneMood
  }

  export type EnumSceneGenreFieldUpdateOperationsInput = {
    set?: $Enums.SceneGenre
  }

  export type UniverseUpdateOneRequiredWithoutScenesNestedInput = {
    create?: XOR<UniverseCreateWithoutScenesInput, UniverseUncheckedCreateWithoutScenesInput>
    connectOrCreate?: UniverseCreateOrConnectWithoutScenesInput
    upsert?: UniverseUpsertWithoutScenesInput
    connect?: UniverseWhereUniqueInput
    update?: XOR<XOR<UniverseUpdateToOneWithWhereWithoutScenesInput, UniverseUpdateWithoutScenesInput>, UniverseUncheckedUpdateWithoutScenesInput>
  }

  export type UserUpdateOneRequiredWithoutScenesNestedInput = {
    create?: XOR<UserCreateWithoutScenesInput, UserUncheckedCreateWithoutScenesInput>
    connectOrCreate?: UserCreateOrConnectWithoutScenesInput
    upsert?: UserUpsertWithoutScenesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScenesInput, UserUpdateWithoutScenesInput>, UserUncheckedUpdateWithoutScenesInput>
  }

  export type SceneAnchorUpdateManyWithoutDescriptionNestedInput = {
    create?: XOR<SceneAnchorCreateWithoutDescriptionInput, SceneAnchorUncheckedCreateWithoutDescriptionInput> | SceneAnchorCreateWithoutDescriptionInput[] | SceneAnchorUncheckedCreateWithoutDescriptionInput[]
    connectOrCreate?: SceneAnchorCreateOrConnectWithoutDescriptionInput | SceneAnchorCreateOrConnectWithoutDescriptionInput[]
    upsert?: SceneAnchorUpsertWithWhereUniqueWithoutDescriptionInput | SceneAnchorUpsertWithWhereUniqueWithoutDescriptionInput[]
    createMany?: SceneAnchorCreateManyDescriptionInputEnvelope
    set?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
    disconnect?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
    delete?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
    connect?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
    update?: SceneAnchorUpdateWithWhereUniqueWithoutDescriptionInput | SceneAnchorUpdateWithWhereUniqueWithoutDescriptionInput[]
    updateMany?: SceneAnchorUpdateManyWithWhereWithoutDescriptionInput | SceneAnchorUpdateManyWithWhereWithoutDescriptionInput[]
    deleteMany?: SceneAnchorScalarWhereInput | SceneAnchorScalarWhereInput[]
  }

  export type StoryPathUpdateManyWithoutFromNestedInput = {
    create?: XOR<StoryPathCreateWithoutFromInput, StoryPathUncheckedCreateWithoutFromInput> | StoryPathCreateWithoutFromInput[] | StoryPathUncheckedCreateWithoutFromInput[]
    connectOrCreate?: StoryPathCreateOrConnectWithoutFromInput | StoryPathCreateOrConnectWithoutFromInput[]
    upsert?: StoryPathUpsertWithWhereUniqueWithoutFromInput | StoryPathUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: StoryPathCreateManyFromInputEnvelope
    set?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
    disconnect?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
    delete?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
    connect?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
    update?: StoryPathUpdateWithWhereUniqueWithoutFromInput | StoryPathUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: StoryPathUpdateManyWithWhereWithoutFromInput | StoryPathUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: StoryPathScalarWhereInput | StoryPathScalarWhereInput[]
  }

  export type StoryPathUpdateManyWithoutToNestedInput = {
    create?: XOR<StoryPathCreateWithoutToInput, StoryPathUncheckedCreateWithoutToInput> | StoryPathCreateWithoutToInput[] | StoryPathUncheckedCreateWithoutToInput[]
    connectOrCreate?: StoryPathCreateOrConnectWithoutToInput | StoryPathCreateOrConnectWithoutToInput[]
    upsert?: StoryPathUpsertWithWhereUniqueWithoutToInput | StoryPathUpsertWithWhereUniqueWithoutToInput[]
    createMany?: StoryPathCreateManyToInputEnvelope
    set?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
    disconnect?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
    delete?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
    connect?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
    update?: StoryPathUpdateWithWhereUniqueWithoutToInput | StoryPathUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: StoryPathUpdateManyWithWhereWithoutToInput | StoryPathUpdateManyWithWhereWithoutToInput[]
    deleteMany?: StoryPathScalarWhereInput | StoryPathScalarWhereInput[]
  }

  export type SceneUpdateOneWithoutVariantsNestedInput = {
    create?: XOR<SceneCreateWithoutVariantsInput, SceneUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: SceneCreateOrConnectWithoutVariantsInput
    upsert?: SceneUpsertWithoutVariantsInput
    disconnect?: SceneWhereInput | boolean
    delete?: SceneWhereInput | boolean
    connect?: SceneWhereUniqueInput
    update?: XOR<XOR<SceneUpdateToOneWithWhereWithoutVariantsInput, SceneUpdateWithoutVariantsInput>, SceneUncheckedUpdateWithoutVariantsInput>
  }

  export type SceneUpdateManyWithoutParentNestedInput = {
    create?: XOR<SceneCreateWithoutParentInput, SceneUncheckedCreateWithoutParentInput> | SceneCreateWithoutParentInput[] | SceneUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutParentInput | SceneCreateOrConnectWithoutParentInput[]
    upsert?: SceneUpsertWithWhereUniqueWithoutParentInput | SceneUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: SceneCreateManyParentInputEnvelope
    set?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    disconnect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    delete?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    update?: SceneUpdateWithWhereUniqueWithoutParentInput | SceneUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: SceneUpdateManyWithWhereWithoutParentInput | SceneUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: SceneScalarWhereInput | SceneScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutLastSceneNestedInput = {
    create?: XOR<SessionCreateWithoutLastSceneInput, SessionUncheckedCreateWithoutLastSceneInput> | SessionCreateWithoutLastSceneInput[] | SessionUncheckedCreateWithoutLastSceneInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutLastSceneInput | SessionCreateOrConnectWithoutLastSceneInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutLastSceneInput | SessionUpsertWithWhereUniqueWithoutLastSceneInput[]
    createMany?: SessionCreateManyLastSceneInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutLastSceneInput | SessionUpdateWithWhereUniqueWithoutLastSceneInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutLastSceneInput | SessionUpdateManyWithWhereWithoutLastSceneInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SceneAnchorUncheckedUpdateManyWithoutDescriptionNestedInput = {
    create?: XOR<SceneAnchorCreateWithoutDescriptionInput, SceneAnchorUncheckedCreateWithoutDescriptionInput> | SceneAnchorCreateWithoutDescriptionInput[] | SceneAnchorUncheckedCreateWithoutDescriptionInput[]
    connectOrCreate?: SceneAnchorCreateOrConnectWithoutDescriptionInput | SceneAnchorCreateOrConnectWithoutDescriptionInput[]
    upsert?: SceneAnchorUpsertWithWhereUniqueWithoutDescriptionInput | SceneAnchorUpsertWithWhereUniqueWithoutDescriptionInput[]
    createMany?: SceneAnchorCreateManyDescriptionInputEnvelope
    set?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
    disconnect?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
    delete?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
    connect?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
    update?: SceneAnchorUpdateWithWhereUniqueWithoutDescriptionInput | SceneAnchorUpdateWithWhereUniqueWithoutDescriptionInput[]
    updateMany?: SceneAnchorUpdateManyWithWhereWithoutDescriptionInput | SceneAnchorUpdateManyWithWhereWithoutDescriptionInput[]
    deleteMany?: SceneAnchorScalarWhereInput | SceneAnchorScalarWhereInput[]
  }

  export type StoryPathUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<StoryPathCreateWithoutFromInput, StoryPathUncheckedCreateWithoutFromInput> | StoryPathCreateWithoutFromInput[] | StoryPathUncheckedCreateWithoutFromInput[]
    connectOrCreate?: StoryPathCreateOrConnectWithoutFromInput | StoryPathCreateOrConnectWithoutFromInput[]
    upsert?: StoryPathUpsertWithWhereUniqueWithoutFromInput | StoryPathUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: StoryPathCreateManyFromInputEnvelope
    set?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
    disconnect?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
    delete?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
    connect?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
    update?: StoryPathUpdateWithWhereUniqueWithoutFromInput | StoryPathUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: StoryPathUpdateManyWithWhereWithoutFromInput | StoryPathUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: StoryPathScalarWhereInput | StoryPathScalarWhereInput[]
  }

  export type StoryPathUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<StoryPathCreateWithoutToInput, StoryPathUncheckedCreateWithoutToInput> | StoryPathCreateWithoutToInput[] | StoryPathUncheckedCreateWithoutToInput[]
    connectOrCreate?: StoryPathCreateOrConnectWithoutToInput | StoryPathCreateOrConnectWithoutToInput[]
    upsert?: StoryPathUpsertWithWhereUniqueWithoutToInput | StoryPathUpsertWithWhereUniqueWithoutToInput[]
    createMany?: StoryPathCreateManyToInputEnvelope
    set?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
    disconnect?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
    delete?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
    connect?: StoryPathWhereUniqueInput | StoryPathWhereUniqueInput[]
    update?: StoryPathUpdateWithWhereUniqueWithoutToInput | StoryPathUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: StoryPathUpdateManyWithWhereWithoutToInput | StoryPathUpdateManyWithWhereWithoutToInput[]
    deleteMany?: StoryPathScalarWhereInput | StoryPathScalarWhereInput[]
  }

  export type SceneUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<SceneCreateWithoutParentInput, SceneUncheckedCreateWithoutParentInput> | SceneCreateWithoutParentInput[] | SceneUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SceneCreateOrConnectWithoutParentInput | SceneCreateOrConnectWithoutParentInput[]
    upsert?: SceneUpsertWithWhereUniqueWithoutParentInput | SceneUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: SceneCreateManyParentInputEnvelope
    set?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    disconnect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    delete?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    connect?: SceneWhereUniqueInput | SceneWhereUniqueInput[]
    update?: SceneUpdateWithWhereUniqueWithoutParentInput | SceneUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: SceneUpdateManyWithWhereWithoutParentInput | SceneUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: SceneScalarWhereInput | SceneScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutLastSceneNestedInput = {
    create?: XOR<SessionCreateWithoutLastSceneInput, SessionUncheckedCreateWithoutLastSceneInput> | SessionCreateWithoutLastSceneInput[] | SessionUncheckedCreateWithoutLastSceneInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutLastSceneInput | SessionCreateOrConnectWithoutLastSceneInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutLastSceneInput | SessionUpsertWithWhereUniqueWithoutLastSceneInput[]
    createMany?: SessionCreateManyLastSceneInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutLastSceneInput | SessionUpdateWithWhereUniqueWithoutLastSceneInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutLastSceneInput | SessionUpdateManyWithWhereWithoutLastSceneInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SceneCreateNestedOneWithoutAnchorsInput = {
    create?: XOR<SceneCreateWithoutAnchorsInput, SceneUncheckedCreateWithoutAnchorsInput>
    connectOrCreate?: SceneCreateOrConnectWithoutAnchorsInput
    connect?: SceneWhereUniqueInput
  }

  export type StorylineCreateNestedOneWithoutAnchorInput = {
    create?: XOR<StorylineCreateWithoutAnchorInput, StorylineUncheckedCreateWithoutAnchorInput>
    connectOrCreate?: StorylineCreateOrConnectWithoutAnchorInput
    connect?: StorylineWhereUniqueInput
  }

  export type SceneAnchorCreateNestedOneWithoutChildrenInput = {
    create?: XOR<SceneAnchorCreateWithoutChildrenInput, SceneAnchorUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: SceneAnchorCreateOrConnectWithoutChildrenInput
    connect?: SceneAnchorWhereUniqueInput
  }

  export type SceneAnchorCreateNestedManyWithoutParentInput = {
    create?: XOR<SceneAnchorCreateWithoutParentInput, SceneAnchorUncheckedCreateWithoutParentInput> | SceneAnchorCreateWithoutParentInput[] | SceneAnchorUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SceneAnchorCreateOrConnectWithoutParentInput | SceneAnchorCreateOrConnectWithoutParentInput[]
    createMany?: SceneAnchorCreateManyParentInputEnvelope
    connect?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
  }

  export type FavoriteAnchorCreateNestedManyWithoutAnchorInput = {
    create?: XOR<FavoriteAnchorCreateWithoutAnchorInput, FavoriteAnchorUncheckedCreateWithoutAnchorInput> | FavoriteAnchorCreateWithoutAnchorInput[] | FavoriteAnchorUncheckedCreateWithoutAnchorInput[]
    connectOrCreate?: FavoriteAnchorCreateOrConnectWithoutAnchorInput | FavoriteAnchorCreateOrConnectWithoutAnchorInput[]
    createMany?: FavoriteAnchorCreateManyAnchorInputEnvelope
    connect?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
  }

  export type SceneAnchorUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<SceneAnchorCreateWithoutParentInput, SceneAnchorUncheckedCreateWithoutParentInput> | SceneAnchorCreateWithoutParentInput[] | SceneAnchorUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SceneAnchorCreateOrConnectWithoutParentInput | SceneAnchorCreateOrConnectWithoutParentInput[]
    createMany?: SceneAnchorCreateManyParentInputEnvelope
    connect?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
  }

  export type FavoriteAnchorUncheckedCreateNestedManyWithoutAnchorInput = {
    create?: XOR<FavoriteAnchorCreateWithoutAnchorInput, FavoriteAnchorUncheckedCreateWithoutAnchorInput> | FavoriteAnchorCreateWithoutAnchorInput[] | FavoriteAnchorUncheckedCreateWithoutAnchorInput[]
    connectOrCreate?: FavoriteAnchorCreateOrConnectWithoutAnchorInput | FavoriteAnchorCreateOrConnectWithoutAnchorInput[]
    createMany?: FavoriteAnchorCreateManyAnchorInputEnvelope
    connect?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
  }

  export type EnumAnchorTypeFieldUpdateOperationsInput = {
    set?: $Enums.AnchorType
  }

  export type SceneUpdateOneWithoutAnchorsNestedInput = {
    create?: XOR<SceneCreateWithoutAnchorsInput, SceneUncheckedCreateWithoutAnchorsInput>
    connectOrCreate?: SceneCreateOrConnectWithoutAnchorsInput
    upsert?: SceneUpsertWithoutAnchorsInput
    disconnect?: SceneWhereInput | boolean
    delete?: SceneWhereInput | boolean
    connect?: SceneWhereUniqueInput
    update?: XOR<XOR<SceneUpdateToOneWithWhereWithoutAnchorsInput, SceneUpdateWithoutAnchorsInput>, SceneUncheckedUpdateWithoutAnchorsInput>
  }

  export type StorylineUpdateOneWithoutAnchorNestedInput = {
    create?: XOR<StorylineCreateWithoutAnchorInput, StorylineUncheckedCreateWithoutAnchorInput>
    connectOrCreate?: StorylineCreateOrConnectWithoutAnchorInput
    upsert?: StorylineUpsertWithoutAnchorInput
    disconnect?: StorylineWhereInput | boolean
    delete?: StorylineWhereInput | boolean
    connect?: StorylineWhereUniqueInput
    update?: XOR<XOR<StorylineUpdateToOneWithWhereWithoutAnchorInput, StorylineUpdateWithoutAnchorInput>, StorylineUncheckedUpdateWithoutAnchorInput>
  }

  export type SceneAnchorUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<SceneAnchorCreateWithoutChildrenInput, SceneAnchorUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: SceneAnchorCreateOrConnectWithoutChildrenInput
    upsert?: SceneAnchorUpsertWithoutChildrenInput
    disconnect?: SceneAnchorWhereInput | boolean
    delete?: SceneAnchorWhereInput | boolean
    connect?: SceneAnchorWhereUniqueInput
    update?: XOR<XOR<SceneAnchorUpdateToOneWithWhereWithoutChildrenInput, SceneAnchorUpdateWithoutChildrenInput>, SceneAnchorUncheckedUpdateWithoutChildrenInput>
  }

  export type SceneAnchorUpdateManyWithoutParentNestedInput = {
    create?: XOR<SceneAnchorCreateWithoutParentInput, SceneAnchorUncheckedCreateWithoutParentInput> | SceneAnchorCreateWithoutParentInput[] | SceneAnchorUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SceneAnchorCreateOrConnectWithoutParentInput | SceneAnchorCreateOrConnectWithoutParentInput[]
    upsert?: SceneAnchorUpsertWithWhereUniqueWithoutParentInput | SceneAnchorUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: SceneAnchorCreateManyParentInputEnvelope
    set?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
    disconnect?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
    delete?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
    connect?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
    update?: SceneAnchorUpdateWithWhereUniqueWithoutParentInput | SceneAnchorUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: SceneAnchorUpdateManyWithWhereWithoutParentInput | SceneAnchorUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: SceneAnchorScalarWhereInput | SceneAnchorScalarWhereInput[]
  }

  export type FavoriteAnchorUpdateManyWithoutAnchorNestedInput = {
    create?: XOR<FavoriteAnchorCreateWithoutAnchorInput, FavoriteAnchorUncheckedCreateWithoutAnchorInput> | FavoriteAnchorCreateWithoutAnchorInput[] | FavoriteAnchorUncheckedCreateWithoutAnchorInput[]
    connectOrCreate?: FavoriteAnchorCreateOrConnectWithoutAnchorInput | FavoriteAnchorCreateOrConnectWithoutAnchorInput[]
    upsert?: FavoriteAnchorUpsertWithWhereUniqueWithoutAnchorInput | FavoriteAnchorUpsertWithWhereUniqueWithoutAnchorInput[]
    createMany?: FavoriteAnchorCreateManyAnchorInputEnvelope
    set?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
    disconnect?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
    delete?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
    connect?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
    update?: FavoriteAnchorUpdateWithWhereUniqueWithoutAnchorInput | FavoriteAnchorUpdateWithWhereUniqueWithoutAnchorInput[]
    updateMany?: FavoriteAnchorUpdateManyWithWhereWithoutAnchorInput | FavoriteAnchorUpdateManyWithWhereWithoutAnchorInput[]
    deleteMany?: FavoriteAnchorScalarWhereInput | FavoriteAnchorScalarWhereInput[]
  }

  export type SceneAnchorUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<SceneAnchorCreateWithoutParentInput, SceneAnchorUncheckedCreateWithoutParentInput> | SceneAnchorCreateWithoutParentInput[] | SceneAnchorUncheckedCreateWithoutParentInput[]
    connectOrCreate?: SceneAnchorCreateOrConnectWithoutParentInput | SceneAnchorCreateOrConnectWithoutParentInput[]
    upsert?: SceneAnchorUpsertWithWhereUniqueWithoutParentInput | SceneAnchorUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: SceneAnchorCreateManyParentInputEnvelope
    set?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
    disconnect?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
    delete?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
    connect?: SceneAnchorWhereUniqueInput | SceneAnchorWhereUniqueInput[]
    update?: SceneAnchorUpdateWithWhereUniqueWithoutParentInput | SceneAnchorUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: SceneAnchorUpdateManyWithWhereWithoutParentInput | SceneAnchorUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: SceneAnchorScalarWhereInput | SceneAnchorScalarWhereInput[]
  }

  export type FavoriteAnchorUncheckedUpdateManyWithoutAnchorNestedInput = {
    create?: XOR<FavoriteAnchorCreateWithoutAnchorInput, FavoriteAnchorUncheckedCreateWithoutAnchorInput> | FavoriteAnchorCreateWithoutAnchorInput[] | FavoriteAnchorUncheckedCreateWithoutAnchorInput[]
    connectOrCreate?: FavoriteAnchorCreateOrConnectWithoutAnchorInput | FavoriteAnchorCreateOrConnectWithoutAnchorInput[]
    upsert?: FavoriteAnchorUpsertWithWhereUniqueWithoutAnchorInput | FavoriteAnchorUpsertWithWhereUniqueWithoutAnchorInput[]
    createMany?: FavoriteAnchorCreateManyAnchorInputEnvelope
    set?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
    disconnect?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
    delete?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
    connect?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
    update?: FavoriteAnchorUpdateWithWhereUniqueWithoutAnchorInput | FavoriteAnchorUpdateWithWhereUniqueWithoutAnchorInput[]
    updateMany?: FavoriteAnchorUpdateManyWithWhereWithoutAnchorInput | FavoriteAnchorUpdateManyWithWhereWithoutAnchorInput[]
    deleteMany?: FavoriteAnchorScalarWhereInput | FavoriteAnchorScalarWhereInput[]
  }

  export type SceneCreateNestedOneWithoutFromPathsInput = {
    create?: XOR<SceneCreateWithoutFromPathsInput, SceneUncheckedCreateWithoutFromPathsInput>
    connectOrCreate?: SceneCreateOrConnectWithoutFromPathsInput
    connect?: SceneWhereUniqueInput
  }

  export type SceneCreateNestedOneWithoutToPathsInput = {
    create?: XOR<SceneCreateWithoutToPathsInput, SceneUncheckedCreateWithoutToPathsInput>
    connectOrCreate?: SceneCreateOrConnectWithoutToPathsInput
    connect?: SceneWhereUniqueInput
  }

  export type StorylinePathCreateNestedManyWithoutPathInput = {
    create?: XOR<StorylinePathCreateWithoutPathInput, StorylinePathUncheckedCreateWithoutPathInput> | StorylinePathCreateWithoutPathInput[] | StorylinePathUncheckedCreateWithoutPathInput[]
    connectOrCreate?: StorylinePathCreateOrConnectWithoutPathInput | StorylinePathCreateOrConnectWithoutPathInput[]
    createMany?: StorylinePathCreateManyPathInputEnvelope
    connect?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
  }

  export type StorylinePathUncheckedCreateNestedManyWithoutPathInput = {
    create?: XOR<StorylinePathCreateWithoutPathInput, StorylinePathUncheckedCreateWithoutPathInput> | StorylinePathCreateWithoutPathInput[] | StorylinePathUncheckedCreateWithoutPathInput[]
    connectOrCreate?: StorylinePathCreateOrConnectWithoutPathInput | StorylinePathCreateOrConnectWithoutPathInput[]
    createMany?: StorylinePathCreateManyPathInputEnvelope
    connect?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
  }

  export type SceneUpdateOneRequiredWithoutFromPathsNestedInput = {
    create?: XOR<SceneCreateWithoutFromPathsInput, SceneUncheckedCreateWithoutFromPathsInput>
    connectOrCreate?: SceneCreateOrConnectWithoutFromPathsInput
    upsert?: SceneUpsertWithoutFromPathsInput
    connect?: SceneWhereUniqueInput
    update?: XOR<XOR<SceneUpdateToOneWithWhereWithoutFromPathsInput, SceneUpdateWithoutFromPathsInput>, SceneUncheckedUpdateWithoutFromPathsInput>
  }

  export type SceneUpdateOneRequiredWithoutToPathsNestedInput = {
    create?: XOR<SceneCreateWithoutToPathsInput, SceneUncheckedCreateWithoutToPathsInput>
    connectOrCreate?: SceneCreateOrConnectWithoutToPathsInput
    upsert?: SceneUpsertWithoutToPathsInput
    connect?: SceneWhereUniqueInput
    update?: XOR<XOR<SceneUpdateToOneWithWhereWithoutToPathsInput, SceneUpdateWithoutToPathsInput>, SceneUncheckedUpdateWithoutToPathsInput>
  }

  export type StorylinePathUpdateManyWithoutPathNestedInput = {
    create?: XOR<StorylinePathCreateWithoutPathInput, StorylinePathUncheckedCreateWithoutPathInput> | StorylinePathCreateWithoutPathInput[] | StorylinePathUncheckedCreateWithoutPathInput[]
    connectOrCreate?: StorylinePathCreateOrConnectWithoutPathInput | StorylinePathCreateOrConnectWithoutPathInput[]
    upsert?: StorylinePathUpsertWithWhereUniqueWithoutPathInput | StorylinePathUpsertWithWhereUniqueWithoutPathInput[]
    createMany?: StorylinePathCreateManyPathInputEnvelope
    set?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
    disconnect?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
    delete?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
    connect?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
    update?: StorylinePathUpdateWithWhereUniqueWithoutPathInput | StorylinePathUpdateWithWhereUniqueWithoutPathInput[]
    updateMany?: StorylinePathUpdateManyWithWhereWithoutPathInput | StorylinePathUpdateManyWithWhereWithoutPathInput[]
    deleteMany?: StorylinePathScalarWhereInput | StorylinePathScalarWhereInput[]
  }

  export type StorylinePathUncheckedUpdateManyWithoutPathNestedInput = {
    create?: XOR<StorylinePathCreateWithoutPathInput, StorylinePathUncheckedCreateWithoutPathInput> | StorylinePathCreateWithoutPathInput[] | StorylinePathUncheckedCreateWithoutPathInput[]
    connectOrCreate?: StorylinePathCreateOrConnectWithoutPathInput | StorylinePathCreateOrConnectWithoutPathInput[]
    upsert?: StorylinePathUpsertWithWhereUniqueWithoutPathInput | StorylinePathUpsertWithWhereUniqueWithoutPathInput[]
    createMany?: StorylinePathCreateManyPathInputEnvelope
    set?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
    disconnect?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
    delete?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
    connect?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
    update?: StorylinePathUpdateWithWhereUniqueWithoutPathInput | StorylinePathUpdateWithWhereUniqueWithoutPathInput[]
    updateMany?: StorylinePathUpdateManyWithWhereWithoutPathInput | StorylinePathUpdateManyWithWhereWithoutPathInput[]
    deleteMany?: StorylinePathScalarWhereInput | StorylinePathScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStorylinesInput = {
    create?: XOR<UserCreateWithoutStorylinesInput, UserUncheckedCreateWithoutStorylinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStorylinesInput
    connect?: UserWhereUniqueInput
  }

  export type StorylinePathCreateNestedManyWithoutStorylineInput = {
    create?: XOR<StorylinePathCreateWithoutStorylineInput, StorylinePathUncheckedCreateWithoutStorylineInput> | StorylinePathCreateWithoutStorylineInput[] | StorylinePathUncheckedCreateWithoutStorylineInput[]
    connectOrCreate?: StorylinePathCreateOrConnectWithoutStorylineInput | StorylinePathCreateOrConnectWithoutStorylineInput[]
    createMany?: StorylinePathCreateManyStorylineInputEnvelope
    connect?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
  }

  export type SceneAnchorCreateNestedOneWithoutTimelineInput = {
    create?: XOR<SceneAnchorCreateWithoutTimelineInput, SceneAnchorUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: SceneAnchorCreateOrConnectWithoutTimelineInput
    connect?: SceneAnchorWhereUniqueInput
  }

  export type StorylinePathUncheckedCreateNestedManyWithoutStorylineInput = {
    create?: XOR<StorylinePathCreateWithoutStorylineInput, StorylinePathUncheckedCreateWithoutStorylineInput> | StorylinePathCreateWithoutStorylineInput[] | StorylinePathUncheckedCreateWithoutStorylineInput[]
    connectOrCreate?: StorylinePathCreateOrConnectWithoutStorylineInput | StorylinePathCreateOrConnectWithoutStorylineInput[]
    createMany?: StorylinePathCreateManyStorylineInputEnvelope
    connect?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
  }

  export type SceneAnchorUncheckedCreateNestedOneWithoutTimelineInput = {
    create?: XOR<SceneAnchorCreateWithoutTimelineInput, SceneAnchorUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: SceneAnchorCreateOrConnectWithoutTimelineInput
    connect?: SceneAnchorWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStorylinesNestedInput = {
    create?: XOR<UserCreateWithoutStorylinesInput, UserUncheckedCreateWithoutStorylinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStorylinesInput
    upsert?: UserUpsertWithoutStorylinesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStorylinesInput, UserUpdateWithoutStorylinesInput>, UserUncheckedUpdateWithoutStorylinesInput>
  }

  export type StorylinePathUpdateManyWithoutStorylineNestedInput = {
    create?: XOR<StorylinePathCreateWithoutStorylineInput, StorylinePathUncheckedCreateWithoutStorylineInput> | StorylinePathCreateWithoutStorylineInput[] | StorylinePathUncheckedCreateWithoutStorylineInput[]
    connectOrCreate?: StorylinePathCreateOrConnectWithoutStorylineInput | StorylinePathCreateOrConnectWithoutStorylineInput[]
    upsert?: StorylinePathUpsertWithWhereUniqueWithoutStorylineInput | StorylinePathUpsertWithWhereUniqueWithoutStorylineInput[]
    createMany?: StorylinePathCreateManyStorylineInputEnvelope
    set?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
    disconnect?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
    delete?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
    connect?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
    update?: StorylinePathUpdateWithWhereUniqueWithoutStorylineInput | StorylinePathUpdateWithWhereUniqueWithoutStorylineInput[]
    updateMany?: StorylinePathUpdateManyWithWhereWithoutStorylineInput | StorylinePathUpdateManyWithWhereWithoutStorylineInput[]
    deleteMany?: StorylinePathScalarWhereInput | StorylinePathScalarWhereInput[]
  }

  export type SceneAnchorUpdateOneWithoutTimelineNestedInput = {
    create?: XOR<SceneAnchorCreateWithoutTimelineInput, SceneAnchorUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: SceneAnchorCreateOrConnectWithoutTimelineInput
    upsert?: SceneAnchorUpsertWithoutTimelineInput
    disconnect?: SceneAnchorWhereInput | boolean
    delete?: SceneAnchorWhereInput | boolean
    connect?: SceneAnchorWhereUniqueInput
    update?: XOR<XOR<SceneAnchorUpdateToOneWithWhereWithoutTimelineInput, SceneAnchorUpdateWithoutTimelineInput>, SceneAnchorUncheckedUpdateWithoutTimelineInput>
  }

  export type StorylinePathUncheckedUpdateManyWithoutStorylineNestedInput = {
    create?: XOR<StorylinePathCreateWithoutStorylineInput, StorylinePathUncheckedCreateWithoutStorylineInput> | StorylinePathCreateWithoutStorylineInput[] | StorylinePathUncheckedCreateWithoutStorylineInput[]
    connectOrCreate?: StorylinePathCreateOrConnectWithoutStorylineInput | StorylinePathCreateOrConnectWithoutStorylineInput[]
    upsert?: StorylinePathUpsertWithWhereUniqueWithoutStorylineInput | StorylinePathUpsertWithWhereUniqueWithoutStorylineInput[]
    createMany?: StorylinePathCreateManyStorylineInputEnvelope
    set?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
    disconnect?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
    delete?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
    connect?: StorylinePathWhereUniqueInput | StorylinePathWhereUniqueInput[]
    update?: StorylinePathUpdateWithWhereUniqueWithoutStorylineInput | StorylinePathUpdateWithWhereUniqueWithoutStorylineInput[]
    updateMany?: StorylinePathUpdateManyWithWhereWithoutStorylineInput | StorylinePathUpdateManyWithWhereWithoutStorylineInput[]
    deleteMany?: StorylinePathScalarWhereInput | StorylinePathScalarWhereInput[]
  }

  export type SceneAnchorUncheckedUpdateOneWithoutTimelineNestedInput = {
    create?: XOR<SceneAnchorCreateWithoutTimelineInput, SceneAnchorUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: SceneAnchorCreateOrConnectWithoutTimelineInput
    upsert?: SceneAnchorUpsertWithoutTimelineInput
    disconnect?: SceneAnchorWhereInput | boolean
    delete?: SceneAnchorWhereInput | boolean
    connect?: SceneAnchorWhereUniqueInput
    update?: XOR<XOR<SceneAnchorUpdateToOneWithWhereWithoutTimelineInput, SceneAnchorUpdateWithoutTimelineInput>, SceneAnchorUncheckedUpdateWithoutTimelineInput>
  }

  export type StorylineCreateNestedOneWithoutStoryPathsInput = {
    create?: XOR<StorylineCreateWithoutStoryPathsInput, StorylineUncheckedCreateWithoutStoryPathsInput>
    connectOrCreate?: StorylineCreateOrConnectWithoutStoryPathsInput
    connect?: StorylineWhereUniqueInput
  }

  export type StoryPathCreateNestedOneWithoutStorylinesInput = {
    create?: XOR<StoryPathCreateWithoutStorylinesInput, StoryPathUncheckedCreateWithoutStorylinesInput>
    connectOrCreate?: StoryPathCreateOrConnectWithoutStorylinesInput
    connect?: StoryPathWhereUniqueInput
  }

  export type StorylineUpdateOneRequiredWithoutStoryPathsNestedInput = {
    create?: XOR<StorylineCreateWithoutStoryPathsInput, StorylineUncheckedCreateWithoutStoryPathsInput>
    connectOrCreate?: StorylineCreateOrConnectWithoutStoryPathsInput
    upsert?: StorylineUpsertWithoutStoryPathsInput
    connect?: StorylineWhereUniqueInput
    update?: XOR<XOR<StorylineUpdateToOneWithWhereWithoutStoryPathsInput, StorylineUpdateWithoutStoryPathsInput>, StorylineUncheckedUpdateWithoutStoryPathsInput>
  }

  export type StoryPathUpdateOneRequiredWithoutStorylinesNestedInput = {
    create?: XOR<StoryPathCreateWithoutStorylinesInput, StoryPathUncheckedCreateWithoutStorylinesInput>
    connectOrCreate?: StoryPathCreateOrConnectWithoutStorylinesInput
    upsert?: StoryPathUpsertWithoutStorylinesInput
    connect?: StoryPathWhereUniqueInput
    update?: XOR<XOR<StoryPathUpdateToOneWithWhereWithoutStorylinesInput, StoryPathUpdateWithoutStorylinesInput>, StoryPathUncheckedUpdateWithoutStorylinesInput>
  }

  export type SessionCreatemoodsInput = {
    set: $Enums.SceneMood[]
  }

  export type SessionCreatelanguagesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type SceneCreateNestedOneWithoutSessionsInput = {
    create?: XOR<SceneCreateWithoutSessionsInput, SceneUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: SceneCreateOrConnectWithoutSessionsInput
    connect?: SceneWhereUniqueInput
  }

  export type UniverseCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UniverseCreateWithoutSessionsInput, UniverseUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UniverseCreateOrConnectWithoutSessionsInput
    connect?: UniverseWhereUniqueInput
  }

  export type FavoriteAnchorCreateNestedManyWithoutSessionInput = {
    create?: XOR<FavoriteAnchorCreateWithoutSessionInput, FavoriteAnchorUncheckedCreateWithoutSessionInput> | FavoriteAnchorCreateWithoutSessionInput[] | FavoriteAnchorUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FavoriteAnchorCreateOrConnectWithoutSessionInput | FavoriteAnchorCreateOrConnectWithoutSessionInput[]
    createMany?: FavoriteAnchorCreateManySessionInputEnvelope
    connect?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
  }

  export type FavoriteAnchorUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<FavoriteAnchorCreateWithoutSessionInput, FavoriteAnchorUncheckedCreateWithoutSessionInput> | FavoriteAnchorCreateWithoutSessionInput[] | FavoriteAnchorUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FavoriteAnchorCreateOrConnectWithoutSessionInput | FavoriteAnchorCreateOrConnectWithoutSessionInput[]
    createMany?: FavoriteAnchorCreateManySessionInputEnvelope
    connect?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdatemoodsInput = {
    set?: $Enums.SceneMood[]
    push?: $Enums.SceneMood | $Enums.SceneMood[]
  }

  export type SessionUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type SceneUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<SceneCreateWithoutSessionsInput, SceneUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: SceneCreateOrConnectWithoutSessionsInput
    upsert?: SceneUpsertWithoutSessionsInput
    disconnect?: SceneWhereInput | boolean
    delete?: SceneWhereInput | boolean
    connect?: SceneWhereUniqueInput
    update?: XOR<XOR<SceneUpdateToOneWithWhereWithoutSessionsInput, SceneUpdateWithoutSessionsInput>, SceneUncheckedUpdateWithoutSessionsInput>
  }

  export type UniverseUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<UniverseCreateWithoutSessionsInput, UniverseUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UniverseCreateOrConnectWithoutSessionsInput
    upsert?: UniverseUpsertWithoutSessionsInput
    disconnect?: UniverseWhereInput | boolean
    delete?: UniverseWhereInput | boolean
    connect?: UniverseWhereUniqueInput
    update?: XOR<XOR<UniverseUpdateToOneWithWhereWithoutSessionsInput, UniverseUpdateWithoutSessionsInput>, UniverseUncheckedUpdateWithoutSessionsInput>
  }

  export type FavoriteAnchorUpdateManyWithoutSessionNestedInput = {
    create?: XOR<FavoriteAnchorCreateWithoutSessionInput, FavoriteAnchorUncheckedCreateWithoutSessionInput> | FavoriteAnchorCreateWithoutSessionInput[] | FavoriteAnchorUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FavoriteAnchorCreateOrConnectWithoutSessionInput | FavoriteAnchorCreateOrConnectWithoutSessionInput[]
    upsert?: FavoriteAnchorUpsertWithWhereUniqueWithoutSessionInput | FavoriteAnchorUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: FavoriteAnchorCreateManySessionInputEnvelope
    set?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
    disconnect?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
    delete?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
    connect?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
    update?: FavoriteAnchorUpdateWithWhereUniqueWithoutSessionInput | FavoriteAnchorUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: FavoriteAnchorUpdateManyWithWhereWithoutSessionInput | FavoriteAnchorUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: FavoriteAnchorScalarWhereInput | FavoriteAnchorScalarWhereInput[]
  }

  export type FavoriteAnchorUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<FavoriteAnchorCreateWithoutSessionInput, FavoriteAnchorUncheckedCreateWithoutSessionInput> | FavoriteAnchorCreateWithoutSessionInput[] | FavoriteAnchorUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FavoriteAnchorCreateOrConnectWithoutSessionInput | FavoriteAnchorCreateOrConnectWithoutSessionInput[]
    upsert?: FavoriteAnchorUpsertWithWhereUniqueWithoutSessionInput | FavoriteAnchorUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: FavoriteAnchorCreateManySessionInputEnvelope
    set?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
    disconnect?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
    delete?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
    connect?: FavoriteAnchorWhereUniqueInput | FavoriteAnchorWhereUniqueInput[]
    update?: FavoriteAnchorUpdateWithWhereUniqueWithoutSessionInput | FavoriteAnchorUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: FavoriteAnchorUpdateManyWithWhereWithoutSessionInput | FavoriteAnchorUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: FavoriteAnchorScalarWhereInput | FavoriteAnchorScalarWhereInput[]
  }

  export type SceneAnchorCreateNestedOneWithoutSessionsInput = {
    create?: XOR<SceneAnchorCreateWithoutSessionsInput, SceneAnchorUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: SceneAnchorCreateOrConnectWithoutSessionsInput
    connect?: SceneAnchorWhereUniqueInput
  }

  export type SessionCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<SessionCreateWithoutFavoritesInput, SessionUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: SessionCreateOrConnectWithoutFavoritesInput
    connect?: SessionWhereUniqueInput
  }

  export type SceneAnchorUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<SceneAnchorCreateWithoutSessionsInput, SceneAnchorUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: SceneAnchorCreateOrConnectWithoutSessionsInput
    upsert?: SceneAnchorUpsertWithoutSessionsInput
    disconnect?: SceneAnchorWhereInput | boolean
    delete?: SceneAnchorWhereInput | boolean
    connect?: SceneAnchorWhereUniqueInput
    update?: XOR<XOR<SceneAnchorUpdateToOneWithWhereWithoutSessionsInput, SceneAnchorUpdateWithoutSessionsInput>, SceneAnchorUncheckedUpdateWithoutSessionsInput>
  }

  export type SessionUpdateOneWithoutFavoritesNestedInput = {
    create?: XOR<SessionCreateWithoutFavoritesInput, SessionUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: SessionCreateOrConnectWithoutFavoritesInput
    upsert?: SessionUpsertWithoutFavoritesInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutFavoritesInput, SessionUpdateWithoutFavoritesInput>, SessionUncheckedUpdateWithoutFavoritesInput>
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

  export type NestedEnumVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityFilter<$PrismaModel> | $Enums.Visibility
  }

  export type NestedEnumVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.Visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityFilter<$PrismaModel>
    _max?: NestedEnumVisibilityFilter<$PrismaModel>
  }

  export type NestedEnumFileFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.FileFormat | EnumFileFormatFieldRefInput<$PrismaModel>
    in?: $Enums.FileFormat[] | ListEnumFileFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileFormat[] | ListEnumFileFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumFileFormatFilter<$PrismaModel> | $Enums.FileFormat
  }

  export type NestedEnumFileFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileFormat | EnumFileFormatFieldRefInput<$PrismaModel>
    in?: $Enums.FileFormat[] | ListEnumFileFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.FileFormat[] | ListEnumFileFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumFileFormatWithAggregatesFilter<$PrismaModel> | $Enums.FileFormat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileFormatFilter<$PrismaModel>
    _max?: NestedEnumFileFormatFilter<$PrismaModel>
  }

  export type NestedEnumSceneMoodFilter<$PrismaModel = never> = {
    equals?: $Enums.SceneMood | EnumSceneMoodFieldRefInput<$PrismaModel>
    in?: $Enums.SceneMood[] | ListEnumSceneMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SceneMood[] | ListEnumSceneMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumSceneMoodFilter<$PrismaModel> | $Enums.SceneMood
  }

  export type NestedEnumSceneGenreFilter<$PrismaModel = never> = {
    equals?: $Enums.SceneGenre | EnumSceneGenreFieldRefInput<$PrismaModel>
    in?: $Enums.SceneGenre[] | ListEnumSceneGenreFieldRefInput<$PrismaModel>
    notIn?: $Enums.SceneGenre[] | ListEnumSceneGenreFieldRefInput<$PrismaModel>
    not?: NestedEnumSceneGenreFilter<$PrismaModel> | $Enums.SceneGenre
  }

  export type NestedEnumSceneMoodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SceneMood | EnumSceneMoodFieldRefInput<$PrismaModel>
    in?: $Enums.SceneMood[] | ListEnumSceneMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SceneMood[] | ListEnumSceneMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumSceneMoodWithAggregatesFilter<$PrismaModel> | $Enums.SceneMood
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSceneMoodFilter<$PrismaModel>
    _max?: NestedEnumSceneMoodFilter<$PrismaModel>
  }

  export type NestedEnumSceneGenreWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SceneGenre | EnumSceneGenreFieldRefInput<$PrismaModel>
    in?: $Enums.SceneGenre[] | ListEnumSceneGenreFieldRefInput<$PrismaModel>
    notIn?: $Enums.SceneGenre[] | ListEnumSceneGenreFieldRefInput<$PrismaModel>
    not?: NestedEnumSceneGenreWithAggregatesFilter<$PrismaModel> | $Enums.SceneGenre
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSceneGenreFilter<$PrismaModel>
    _max?: NestedEnumSceneGenreFilter<$PrismaModel>
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

  export type NestedEnumAnchorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnchorType | EnumAnchorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnchorType[] | ListEnumAnchorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnchorType[] | ListEnumAnchorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnchorTypeFilter<$PrismaModel> | $Enums.AnchorType
  }

  export type NestedEnumAnchorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnchorType | EnumAnchorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnchorType[] | ListEnumAnchorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnchorType[] | ListEnumAnchorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnchorTypeWithAggregatesFilter<$PrismaModel> | $Enums.AnchorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnchorTypeFilter<$PrismaModel>
    _max?: NestedEnumAnchorTypeFilter<$PrismaModel>
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

  export type UniverseMemberCreateWithoutUserInput = {
    universe: UniverseCreateNestedOneWithoutMembersInput
  }

  export type UniverseMemberUncheckedCreateWithoutUserInput = {
    universeId: number
  }

  export type UniverseMemberCreateOrConnectWithoutUserInput = {
    where: UniverseMemberWhereUniqueInput
    create: XOR<UniverseMemberCreateWithoutUserInput, UniverseMemberUncheckedCreateWithoutUserInput>
  }

  export type UniverseMemberCreateManyUserInputEnvelope = {
    data: UniverseMemberCreateManyUserInput | UniverseMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SceneCreateWithoutAuthorInput = {
    title: string
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    universe: UniverseCreateNestedOneWithoutScenesInput
    anchors?: SceneAnchorCreateNestedManyWithoutDescriptionInput
    fromPaths?: StoryPathCreateNestedManyWithoutFromInput
    toPaths?: StoryPathCreateNestedManyWithoutToInput
    parent?: SceneCreateNestedOneWithoutVariantsInput
    variants?: SceneCreateNestedManyWithoutParentInput
    sessions?: SessionCreateNestedManyWithoutLastSceneInput
  }

  export type SceneUncheckedCreateWithoutAuthorInput = {
    id?: number
    universeId: number
    title: string
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    parentId?: number | null
    anchors?: SceneAnchorUncheckedCreateNestedManyWithoutDescriptionInput
    fromPaths?: StoryPathUncheckedCreateNestedManyWithoutFromInput
    toPaths?: StoryPathUncheckedCreateNestedManyWithoutToInput
    variants?: SceneUncheckedCreateNestedManyWithoutParentInput
    sessions?: SessionUncheckedCreateNestedManyWithoutLastSceneInput
  }

  export type SceneCreateOrConnectWithoutAuthorInput = {
    where: SceneWhereUniqueInput
    create: XOR<SceneCreateWithoutAuthorInput, SceneUncheckedCreateWithoutAuthorInput>
  }

  export type SceneCreateManyAuthorInputEnvelope = {
    data: SceneCreateManyAuthorInput | SceneCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type StorylineCreateWithoutOwnerInput = {
    title: string
    description: string
    storyPaths?: StorylinePathCreateNestedManyWithoutStorylineInput
    anchor?: SceneAnchorCreateNestedOneWithoutTimelineInput
  }

  export type StorylineUncheckedCreateWithoutOwnerInput = {
    id?: number
    title: string
    description: string
    storyPaths?: StorylinePathUncheckedCreateNestedManyWithoutStorylineInput
    anchor?: SceneAnchorUncheckedCreateNestedOneWithoutTimelineInput
  }

  export type StorylineCreateOrConnectWithoutOwnerInput = {
    where: StorylineWhereUniqueInput
    create: XOR<StorylineCreateWithoutOwnerInput, StorylineUncheckedCreateWithoutOwnerInput>
  }

  export type StorylineCreateManyOwnerInputEnvelope = {
    data: StorylineCreateManyOwnerInput | StorylineCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutReaderInput = {
    id: string
    createdAt: Date | string
    lastOpened: Date | string
    moods?: SessionCreatemoodsInput | $Enums.SceneMood[]
    languages?: SessionCreatelanguagesInput | string[]
    lastScene?: SceneCreateNestedOneWithoutSessionsInput
    universe?: UniverseCreateNestedOneWithoutSessionsInput
    favorites?: FavoriteAnchorCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutReaderInput = {
    id: string
    createdAt: Date | string
    lastOpened: Date | string
    lastSceneId?: number | null
    universeId?: number | null
    moods?: SessionCreatemoodsInput | $Enums.SceneMood[]
    languages?: SessionCreatelanguagesInput | string[]
    favorites?: FavoriteAnchorUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutReaderInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutReaderInput, SessionUncheckedCreateWithoutReaderInput>
  }

  export type SessionCreateManyReaderInputEnvelope = {
    data: SessionCreateManyReaderInput | SessionCreateManyReaderInput[]
    skipDuplicates?: boolean
  }

  export type UniverseMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: UniverseMemberWhereUniqueInput
    update: XOR<UniverseMemberUpdateWithoutUserInput, UniverseMemberUncheckedUpdateWithoutUserInput>
    create: XOR<UniverseMemberCreateWithoutUserInput, UniverseMemberUncheckedCreateWithoutUserInput>
  }

  export type UniverseMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: UniverseMemberWhereUniqueInput
    data: XOR<UniverseMemberUpdateWithoutUserInput, UniverseMemberUncheckedUpdateWithoutUserInput>
  }

  export type UniverseMemberUpdateManyWithWhereWithoutUserInput = {
    where: UniverseMemberScalarWhereInput
    data: XOR<UniverseMemberUpdateManyMutationInput, UniverseMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type UniverseMemberScalarWhereInput = {
    AND?: UniverseMemberScalarWhereInput | UniverseMemberScalarWhereInput[]
    OR?: UniverseMemberScalarWhereInput[]
    NOT?: UniverseMemberScalarWhereInput | UniverseMemberScalarWhereInput[]
    userId?: IntFilter<"UniverseMember"> | number
    universeId?: IntFilter<"UniverseMember"> | number
  }

  export type SceneUpsertWithWhereUniqueWithoutAuthorInput = {
    where: SceneWhereUniqueInput
    update: XOR<SceneUpdateWithoutAuthorInput, SceneUncheckedUpdateWithoutAuthorInput>
    create: XOR<SceneCreateWithoutAuthorInput, SceneUncheckedCreateWithoutAuthorInput>
  }

  export type SceneUpdateWithWhereUniqueWithoutAuthorInput = {
    where: SceneWhereUniqueInput
    data: XOR<SceneUpdateWithoutAuthorInput, SceneUncheckedUpdateWithoutAuthorInput>
  }

  export type SceneUpdateManyWithWhereWithoutAuthorInput = {
    where: SceneScalarWhereInput
    data: XOR<SceneUpdateManyMutationInput, SceneUncheckedUpdateManyWithoutAuthorInput>
  }

  export type SceneScalarWhereInput = {
    AND?: SceneScalarWhereInput | SceneScalarWhereInput[]
    OR?: SceneScalarWhereInput[]
    NOT?: SceneScalarWhereInput | SceneScalarWhereInput[]
    id?: IntFilter<"Scene"> | number
    universeId?: IntFilter<"Scene"> | number
    title?: StringFilter<"Scene"> | string
    authorId?: IntFilter<"Scene"> | number
    content?: StringFilter<"Scene"> | string
    mood?: EnumSceneMoodFilter<"Scene"> | $Enums.SceneMood
    genre?: EnumSceneGenreFilter<"Scene"> | $Enums.SceneGenre
    lang?: StringFilter<"Scene"> | string
    prompt?: StringNullableFilter<"Scene"> | string | null
    parentId?: IntNullableFilter<"Scene"> | number | null
  }

  export type StorylineUpsertWithWhereUniqueWithoutOwnerInput = {
    where: StorylineWhereUniqueInput
    update: XOR<StorylineUpdateWithoutOwnerInput, StorylineUncheckedUpdateWithoutOwnerInput>
    create: XOR<StorylineCreateWithoutOwnerInput, StorylineUncheckedCreateWithoutOwnerInput>
  }

  export type StorylineUpdateWithWhereUniqueWithoutOwnerInput = {
    where: StorylineWhereUniqueInput
    data: XOR<StorylineUpdateWithoutOwnerInput, StorylineUncheckedUpdateWithoutOwnerInput>
  }

  export type StorylineUpdateManyWithWhereWithoutOwnerInput = {
    where: StorylineScalarWhereInput
    data: XOR<StorylineUpdateManyMutationInput, StorylineUncheckedUpdateManyWithoutOwnerInput>
  }

  export type StorylineScalarWhereInput = {
    AND?: StorylineScalarWhereInput | StorylineScalarWhereInput[]
    OR?: StorylineScalarWhereInput[]
    NOT?: StorylineScalarWhereInput | StorylineScalarWhereInput[]
    id?: IntFilter<"Storyline"> | number
    title?: StringFilter<"Storyline"> | string
    description?: StringFilter<"Storyline"> | string
    ownerId?: IntFilter<"Storyline"> | number
  }

  export type SessionUpsertWithWhereUniqueWithoutReaderInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutReaderInput, SessionUncheckedUpdateWithoutReaderInput>
    create: XOR<SessionCreateWithoutReaderInput, SessionUncheckedCreateWithoutReaderInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutReaderInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutReaderInput, SessionUncheckedUpdateWithoutReaderInput>
  }

  export type SessionUpdateManyWithWhereWithoutReaderInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutReaderInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    readerId?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
    lastOpened?: DateTimeFilter<"Session"> | Date | string
    lastSceneId?: IntNullableFilter<"Session"> | number | null
    universeId?: IntNullableFilter<"Session"> | number | null
    moods?: EnumSceneMoodNullableListFilter<"Session">
    languages?: StringNullableListFilter<"Session">
  }

  export type UserCreateWithoutUniversesInput = {
    email: string
    password: string
    name?: string | null
    scenes?: SceneCreateNestedManyWithoutAuthorInput
    storylines?: StorylineCreateNestedManyWithoutOwnerInput
    sessions?: SessionCreateNestedManyWithoutReaderInput
  }

  export type UserUncheckedCreateWithoutUniversesInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    scenes?: SceneUncheckedCreateNestedManyWithoutAuthorInput
    storylines?: StorylineUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: SessionUncheckedCreateNestedManyWithoutReaderInput
  }

  export type UserCreateOrConnectWithoutUniversesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUniversesInput, UserUncheckedCreateWithoutUniversesInput>
  }

  export type UniverseCreateWithoutMembersInput = {
    name: string
    description: string
    contextDB: string
    visibility?: $Enums.Visibility
    sources?: UniverseSourceCreateNestedManyWithoutUniverseInput
    scenes?: SceneCreateNestedManyWithoutUniverseInput
    sessions?: SessionCreateNestedManyWithoutUniverseInput
  }

  export type UniverseUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    description: string
    contextDB: string
    visibility?: $Enums.Visibility
    sources?: UniverseSourceUncheckedCreateNestedManyWithoutUniverseInput
    scenes?: SceneUncheckedCreateNestedManyWithoutUniverseInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUniverseInput
  }

  export type UniverseCreateOrConnectWithoutMembersInput = {
    where: UniverseWhereUniqueInput
    create: XOR<UniverseCreateWithoutMembersInput, UniverseUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutUniversesInput = {
    update: XOR<UserUpdateWithoutUniversesInput, UserUncheckedUpdateWithoutUniversesInput>
    create: XOR<UserCreateWithoutUniversesInput, UserUncheckedCreateWithoutUniversesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUniversesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUniversesInput, UserUncheckedUpdateWithoutUniversesInput>
  }

  export type UserUpdateWithoutUniversesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    scenes?: SceneUpdateManyWithoutAuthorNestedInput
    storylines?: StorylineUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUpdateManyWithoutReaderNestedInput
  }

  export type UserUncheckedUpdateWithoutUniversesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    scenes?: SceneUncheckedUpdateManyWithoutAuthorNestedInput
    storylines?: StorylineUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutReaderNestedInput
  }

  export type UniverseUpsertWithoutMembersInput = {
    update: XOR<UniverseUpdateWithoutMembersInput, UniverseUncheckedUpdateWithoutMembersInput>
    create: XOR<UniverseCreateWithoutMembersInput, UniverseUncheckedCreateWithoutMembersInput>
    where?: UniverseWhereInput
  }

  export type UniverseUpdateToOneWithWhereWithoutMembersInput = {
    where?: UniverseWhereInput
    data: XOR<UniverseUpdateWithoutMembersInput, UniverseUncheckedUpdateWithoutMembersInput>
  }

  export type UniverseUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contextDB?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    sources?: UniverseSourceUpdateManyWithoutUniverseNestedInput
    scenes?: SceneUpdateManyWithoutUniverseNestedInput
    sessions?: SessionUpdateManyWithoutUniverseNestedInput
  }

  export type UniverseUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contextDB?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    sources?: UniverseSourceUncheckedUpdateManyWithoutUniverseNestedInput
    scenes?: SceneUncheckedUpdateManyWithoutUniverseNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUniverseNestedInput
  }

  export type UniverseSourceCreateWithoutUniverseInput = {
    format?: $Enums.FileFormat
    path: string
  }

  export type UniverseSourceUncheckedCreateWithoutUniverseInput = {
    id?: number
    format?: $Enums.FileFormat
    path: string
  }

  export type UniverseSourceCreateOrConnectWithoutUniverseInput = {
    where: UniverseSourceWhereUniqueInput
    create: XOR<UniverseSourceCreateWithoutUniverseInput, UniverseSourceUncheckedCreateWithoutUniverseInput>
  }

  export type UniverseSourceCreateManyUniverseInputEnvelope = {
    data: UniverseSourceCreateManyUniverseInput | UniverseSourceCreateManyUniverseInput[]
    skipDuplicates?: boolean
  }

  export type UniverseMemberCreateWithoutUniverseInput = {
    user: UserCreateNestedOneWithoutUniversesInput
  }

  export type UniverseMemberUncheckedCreateWithoutUniverseInput = {
    userId: number
  }

  export type UniverseMemberCreateOrConnectWithoutUniverseInput = {
    where: UniverseMemberWhereUniqueInput
    create: XOR<UniverseMemberCreateWithoutUniverseInput, UniverseMemberUncheckedCreateWithoutUniverseInput>
  }

  export type UniverseMemberCreateManyUniverseInputEnvelope = {
    data: UniverseMemberCreateManyUniverseInput | UniverseMemberCreateManyUniverseInput[]
    skipDuplicates?: boolean
  }

  export type SceneCreateWithoutUniverseInput = {
    title: string
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    author: UserCreateNestedOneWithoutScenesInput
    anchors?: SceneAnchorCreateNestedManyWithoutDescriptionInput
    fromPaths?: StoryPathCreateNestedManyWithoutFromInput
    toPaths?: StoryPathCreateNestedManyWithoutToInput
    parent?: SceneCreateNestedOneWithoutVariantsInput
    variants?: SceneCreateNestedManyWithoutParentInput
    sessions?: SessionCreateNestedManyWithoutLastSceneInput
  }

  export type SceneUncheckedCreateWithoutUniverseInput = {
    id?: number
    title: string
    authorId: number
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    parentId?: number | null
    anchors?: SceneAnchorUncheckedCreateNestedManyWithoutDescriptionInput
    fromPaths?: StoryPathUncheckedCreateNestedManyWithoutFromInput
    toPaths?: StoryPathUncheckedCreateNestedManyWithoutToInput
    variants?: SceneUncheckedCreateNestedManyWithoutParentInput
    sessions?: SessionUncheckedCreateNestedManyWithoutLastSceneInput
  }

  export type SceneCreateOrConnectWithoutUniverseInput = {
    where: SceneWhereUniqueInput
    create: XOR<SceneCreateWithoutUniverseInput, SceneUncheckedCreateWithoutUniverseInput>
  }

  export type SceneCreateManyUniverseInputEnvelope = {
    data: SceneCreateManyUniverseInput | SceneCreateManyUniverseInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUniverseInput = {
    id: string
    createdAt: Date | string
    lastOpened: Date | string
    moods?: SessionCreatemoodsInput | $Enums.SceneMood[]
    languages?: SessionCreatelanguagesInput | string[]
    reader: UserCreateNestedOneWithoutSessionsInput
    lastScene?: SceneCreateNestedOneWithoutSessionsInput
    favorites?: FavoriteAnchorCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutUniverseInput = {
    id: string
    readerId: number
    createdAt: Date | string
    lastOpened: Date | string
    lastSceneId?: number | null
    moods?: SessionCreatemoodsInput | $Enums.SceneMood[]
    languages?: SessionCreatelanguagesInput | string[]
    favorites?: FavoriteAnchorUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutUniverseInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUniverseInput, SessionUncheckedCreateWithoutUniverseInput>
  }

  export type SessionCreateManyUniverseInputEnvelope = {
    data: SessionCreateManyUniverseInput | SessionCreateManyUniverseInput[]
    skipDuplicates?: boolean
  }

  export type UniverseSourceUpsertWithWhereUniqueWithoutUniverseInput = {
    where: UniverseSourceWhereUniqueInput
    update: XOR<UniverseSourceUpdateWithoutUniverseInput, UniverseSourceUncheckedUpdateWithoutUniverseInput>
    create: XOR<UniverseSourceCreateWithoutUniverseInput, UniverseSourceUncheckedCreateWithoutUniverseInput>
  }

  export type UniverseSourceUpdateWithWhereUniqueWithoutUniverseInput = {
    where: UniverseSourceWhereUniqueInput
    data: XOR<UniverseSourceUpdateWithoutUniverseInput, UniverseSourceUncheckedUpdateWithoutUniverseInput>
  }

  export type UniverseSourceUpdateManyWithWhereWithoutUniverseInput = {
    where: UniverseSourceScalarWhereInput
    data: XOR<UniverseSourceUpdateManyMutationInput, UniverseSourceUncheckedUpdateManyWithoutUniverseInput>
  }

  export type UniverseSourceScalarWhereInput = {
    AND?: UniverseSourceScalarWhereInput | UniverseSourceScalarWhereInput[]
    OR?: UniverseSourceScalarWhereInput[]
    NOT?: UniverseSourceScalarWhereInput | UniverseSourceScalarWhereInput[]
    id?: IntFilter<"UniverseSource"> | number
    format?: EnumFileFormatFilter<"UniverseSource"> | $Enums.FileFormat
    path?: StringFilter<"UniverseSource"> | string
    universeId?: IntFilter<"UniverseSource"> | number
  }

  export type UniverseMemberUpsertWithWhereUniqueWithoutUniverseInput = {
    where: UniverseMemberWhereUniqueInput
    update: XOR<UniverseMemberUpdateWithoutUniverseInput, UniverseMemberUncheckedUpdateWithoutUniverseInput>
    create: XOR<UniverseMemberCreateWithoutUniverseInput, UniverseMemberUncheckedCreateWithoutUniverseInput>
  }

  export type UniverseMemberUpdateWithWhereUniqueWithoutUniverseInput = {
    where: UniverseMemberWhereUniqueInput
    data: XOR<UniverseMemberUpdateWithoutUniverseInput, UniverseMemberUncheckedUpdateWithoutUniverseInput>
  }

  export type UniverseMemberUpdateManyWithWhereWithoutUniverseInput = {
    where: UniverseMemberScalarWhereInput
    data: XOR<UniverseMemberUpdateManyMutationInput, UniverseMemberUncheckedUpdateManyWithoutUniverseInput>
  }

  export type SceneUpsertWithWhereUniqueWithoutUniverseInput = {
    where: SceneWhereUniqueInput
    update: XOR<SceneUpdateWithoutUniverseInput, SceneUncheckedUpdateWithoutUniverseInput>
    create: XOR<SceneCreateWithoutUniverseInput, SceneUncheckedCreateWithoutUniverseInput>
  }

  export type SceneUpdateWithWhereUniqueWithoutUniverseInput = {
    where: SceneWhereUniqueInput
    data: XOR<SceneUpdateWithoutUniverseInput, SceneUncheckedUpdateWithoutUniverseInput>
  }

  export type SceneUpdateManyWithWhereWithoutUniverseInput = {
    where: SceneScalarWhereInput
    data: XOR<SceneUpdateManyMutationInput, SceneUncheckedUpdateManyWithoutUniverseInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutUniverseInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUniverseInput, SessionUncheckedUpdateWithoutUniverseInput>
    create: XOR<SessionCreateWithoutUniverseInput, SessionUncheckedCreateWithoutUniverseInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUniverseInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUniverseInput, SessionUncheckedUpdateWithoutUniverseInput>
  }

  export type SessionUpdateManyWithWhereWithoutUniverseInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUniverseInput>
  }

  export type UniverseCreateWithoutSourcesInput = {
    name: string
    description: string
    contextDB: string
    visibility?: $Enums.Visibility
    members?: UniverseMemberCreateNestedManyWithoutUniverseInput
    scenes?: SceneCreateNestedManyWithoutUniverseInput
    sessions?: SessionCreateNestedManyWithoutUniverseInput
  }

  export type UniverseUncheckedCreateWithoutSourcesInput = {
    id?: number
    name: string
    description: string
    contextDB: string
    visibility?: $Enums.Visibility
    members?: UniverseMemberUncheckedCreateNestedManyWithoutUniverseInput
    scenes?: SceneUncheckedCreateNestedManyWithoutUniverseInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUniverseInput
  }

  export type UniverseCreateOrConnectWithoutSourcesInput = {
    where: UniverseWhereUniqueInput
    create: XOR<UniverseCreateWithoutSourcesInput, UniverseUncheckedCreateWithoutSourcesInput>
  }

  export type UniverseUpsertWithoutSourcesInput = {
    update: XOR<UniverseUpdateWithoutSourcesInput, UniverseUncheckedUpdateWithoutSourcesInput>
    create: XOR<UniverseCreateWithoutSourcesInput, UniverseUncheckedCreateWithoutSourcesInput>
    where?: UniverseWhereInput
  }

  export type UniverseUpdateToOneWithWhereWithoutSourcesInput = {
    where?: UniverseWhereInput
    data: XOR<UniverseUpdateWithoutSourcesInput, UniverseUncheckedUpdateWithoutSourcesInput>
  }

  export type UniverseUpdateWithoutSourcesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contextDB?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    members?: UniverseMemberUpdateManyWithoutUniverseNestedInput
    scenes?: SceneUpdateManyWithoutUniverseNestedInput
    sessions?: SessionUpdateManyWithoutUniverseNestedInput
  }

  export type UniverseUncheckedUpdateWithoutSourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contextDB?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    members?: UniverseMemberUncheckedUpdateManyWithoutUniverseNestedInput
    scenes?: SceneUncheckedUpdateManyWithoutUniverseNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUniverseNestedInput
  }

  export type UniverseCreateWithoutScenesInput = {
    name: string
    description: string
    contextDB: string
    visibility?: $Enums.Visibility
    sources?: UniverseSourceCreateNestedManyWithoutUniverseInput
    members?: UniverseMemberCreateNestedManyWithoutUniverseInput
    sessions?: SessionCreateNestedManyWithoutUniverseInput
  }

  export type UniverseUncheckedCreateWithoutScenesInput = {
    id?: number
    name: string
    description: string
    contextDB: string
    visibility?: $Enums.Visibility
    sources?: UniverseSourceUncheckedCreateNestedManyWithoutUniverseInput
    members?: UniverseMemberUncheckedCreateNestedManyWithoutUniverseInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUniverseInput
  }

  export type UniverseCreateOrConnectWithoutScenesInput = {
    where: UniverseWhereUniqueInput
    create: XOR<UniverseCreateWithoutScenesInput, UniverseUncheckedCreateWithoutScenesInput>
  }

  export type UserCreateWithoutScenesInput = {
    email: string
    password: string
    name?: string | null
    universes?: UniverseMemberCreateNestedManyWithoutUserInput
    storylines?: StorylineCreateNestedManyWithoutOwnerInput
    sessions?: SessionCreateNestedManyWithoutReaderInput
  }

  export type UserUncheckedCreateWithoutScenesInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    universes?: UniverseMemberUncheckedCreateNestedManyWithoutUserInput
    storylines?: StorylineUncheckedCreateNestedManyWithoutOwnerInput
    sessions?: SessionUncheckedCreateNestedManyWithoutReaderInput
  }

  export type UserCreateOrConnectWithoutScenesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScenesInput, UserUncheckedCreateWithoutScenesInput>
  }

  export type SceneAnchorCreateWithoutDescriptionInput = {
    tag: string
    type: $Enums.AnchorType
    name: string
    timeline?: StorylineCreateNestedOneWithoutAnchorInput
    parent?: SceneAnchorCreateNestedOneWithoutChildrenInput
    children?: SceneAnchorCreateNestedManyWithoutParentInput
    sessions?: FavoriteAnchorCreateNestedManyWithoutAnchorInput
  }

  export type SceneAnchorUncheckedCreateWithoutDescriptionInput = {
    tag: string
    type: $Enums.AnchorType
    name: string
    timelineId?: number | null
    parentTag: string
    children?: SceneAnchorUncheckedCreateNestedManyWithoutParentInput
    sessions?: FavoriteAnchorUncheckedCreateNestedManyWithoutAnchorInput
  }

  export type SceneAnchorCreateOrConnectWithoutDescriptionInput = {
    where: SceneAnchorWhereUniqueInput
    create: XOR<SceneAnchorCreateWithoutDescriptionInput, SceneAnchorUncheckedCreateWithoutDescriptionInput>
  }

  export type SceneAnchorCreateManyDescriptionInputEnvelope = {
    data: SceneAnchorCreateManyDescriptionInput | SceneAnchorCreateManyDescriptionInput[]
    skipDuplicates?: boolean
  }

  export type StoryPathCreateWithoutFromInput = {
    to: SceneCreateNestedOneWithoutToPathsInput
    storylines?: StorylinePathCreateNestedManyWithoutPathInput
  }

  export type StoryPathUncheckedCreateWithoutFromInput = {
    id?: number
    toId: number
    storylines?: StorylinePathUncheckedCreateNestedManyWithoutPathInput
  }

  export type StoryPathCreateOrConnectWithoutFromInput = {
    where: StoryPathWhereUniqueInput
    create: XOR<StoryPathCreateWithoutFromInput, StoryPathUncheckedCreateWithoutFromInput>
  }

  export type StoryPathCreateManyFromInputEnvelope = {
    data: StoryPathCreateManyFromInput | StoryPathCreateManyFromInput[]
    skipDuplicates?: boolean
  }

  export type StoryPathCreateWithoutToInput = {
    from: SceneCreateNestedOneWithoutFromPathsInput
    storylines?: StorylinePathCreateNestedManyWithoutPathInput
  }

  export type StoryPathUncheckedCreateWithoutToInput = {
    id?: number
    fromId: number
    storylines?: StorylinePathUncheckedCreateNestedManyWithoutPathInput
  }

  export type StoryPathCreateOrConnectWithoutToInput = {
    where: StoryPathWhereUniqueInput
    create: XOR<StoryPathCreateWithoutToInput, StoryPathUncheckedCreateWithoutToInput>
  }

  export type StoryPathCreateManyToInputEnvelope = {
    data: StoryPathCreateManyToInput | StoryPathCreateManyToInput[]
    skipDuplicates?: boolean
  }

  export type SceneCreateWithoutVariantsInput = {
    title: string
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    universe: UniverseCreateNestedOneWithoutScenesInput
    author: UserCreateNestedOneWithoutScenesInput
    anchors?: SceneAnchorCreateNestedManyWithoutDescriptionInput
    fromPaths?: StoryPathCreateNestedManyWithoutFromInput
    toPaths?: StoryPathCreateNestedManyWithoutToInput
    parent?: SceneCreateNestedOneWithoutVariantsInput
    sessions?: SessionCreateNestedManyWithoutLastSceneInput
  }

  export type SceneUncheckedCreateWithoutVariantsInput = {
    id?: number
    universeId: number
    title: string
    authorId: number
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    parentId?: number | null
    anchors?: SceneAnchorUncheckedCreateNestedManyWithoutDescriptionInput
    fromPaths?: StoryPathUncheckedCreateNestedManyWithoutFromInput
    toPaths?: StoryPathUncheckedCreateNestedManyWithoutToInput
    sessions?: SessionUncheckedCreateNestedManyWithoutLastSceneInput
  }

  export type SceneCreateOrConnectWithoutVariantsInput = {
    where: SceneWhereUniqueInput
    create: XOR<SceneCreateWithoutVariantsInput, SceneUncheckedCreateWithoutVariantsInput>
  }

  export type SceneCreateWithoutParentInput = {
    title: string
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    universe: UniverseCreateNestedOneWithoutScenesInput
    author: UserCreateNestedOneWithoutScenesInput
    anchors?: SceneAnchorCreateNestedManyWithoutDescriptionInput
    fromPaths?: StoryPathCreateNestedManyWithoutFromInput
    toPaths?: StoryPathCreateNestedManyWithoutToInput
    variants?: SceneCreateNestedManyWithoutParentInput
    sessions?: SessionCreateNestedManyWithoutLastSceneInput
  }

  export type SceneUncheckedCreateWithoutParentInput = {
    id?: number
    universeId: number
    title: string
    authorId: number
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    anchors?: SceneAnchorUncheckedCreateNestedManyWithoutDescriptionInput
    fromPaths?: StoryPathUncheckedCreateNestedManyWithoutFromInput
    toPaths?: StoryPathUncheckedCreateNestedManyWithoutToInput
    variants?: SceneUncheckedCreateNestedManyWithoutParentInput
    sessions?: SessionUncheckedCreateNestedManyWithoutLastSceneInput
  }

  export type SceneCreateOrConnectWithoutParentInput = {
    where: SceneWhereUniqueInput
    create: XOR<SceneCreateWithoutParentInput, SceneUncheckedCreateWithoutParentInput>
  }

  export type SceneCreateManyParentInputEnvelope = {
    data: SceneCreateManyParentInput | SceneCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutLastSceneInput = {
    id: string
    createdAt: Date | string
    lastOpened: Date | string
    moods?: SessionCreatemoodsInput | $Enums.SceneMood[]
    languages?: SessionCreatelanguagesInput | string[]
    reader: UserCreateNestedOneWithoutSessionsInput
    universe?: UniverseCreateNestedOneWithoutSessionsInput
    favorites?: FavoriteAnchorCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutLastSceneInput = {
    id: string
    readerId: number
    createdAt: Date | string
    lastOpened: Date | string
    universeId?: number | null
    moods?: SessionCreatemoodsInput | $Enums.SceneMood[]
    languages?: SessionCreatelanguagesInput | string[]
    favorites?: FavoriteAnchorUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutLastSceneInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutLastSceneInput, SessionUncheckedCreateWithoutLastSceneInput>
  }

  export type SessionCreateManyLastSceneInputEnvelope = {
    data: SessionCreateManyLastSceneInput | SessionCreateManyLastSceneInput[]
    skipDuplicates?: boolean
  }

  export type UniverseUpsertWithoutScenesInput = {
    update: XOR<UniverseUpdateWithoutScenesInput, UniverseUncheckedUpdateWithoutScenesInput>
    create: XOR<UniverseCreateWithoutScenesInput, UniverseUncheckedCreateWithoutScenesInput>
    where?: UniverseWhereInput
  }

  export type UniverseUpdateToOneWithWhereWithoutScenesInput = {
    where?: UniverseWhereInput
    data: XOR<UniverseUpdateWithoutScenesInput, UniverseUncheckedUpdateWithoutScenesInput>
  }

  export type UniverseUpdateWithoutScenesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contextDB?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    sources?: UniverseSourceUpdateManyWithoutUniverseNestedInput
    members?: UniverseMemberUpdateManyWithoutUniverseNestedInput
    sessions?: SessionUpdateManyWithoutUniverseNestedInput
  }

  export type UniverseUncheckedUpdateWithoutScenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contextDB?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    sources?: UniverseSourceUncheckedUpdateManyWithoutUniverseNestedInput
    members?: UniverseMemberUncheckedUpdateManyWithoutUniverseNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUniverseNestedInput
  }

  export type UserUpsertWithoutScenesInput = {
    update: XOR<UserUpdateWithoutScenesInput, UserUncheckedUpdateWithoutScenesInput>
    create: XOR<UserCreateWithoutScenesInput, UserUncheckedCreateWithoutScenesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScenesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScenesInput, UserUncheckedUpdateWithoutScenesInput>
  }

  export type UserUpdateWithoutScenesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    universes?: UniverseMemberUpdateManyWithoutUserNestedInput
    storylines?: StorylineUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUpdateManyWithoutReaderNestedInput
  }

  export type UserUncheckedUpdateWithoutScenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    universes?: UniverseMemberUncheckedUpdateManyWithoutUserNestedInput
    storylines?: StorylineUncheckedUpdateManyWithoutOwnerNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutReaderNestedInput
  }

  export type SceneAnchorUpsertWithWhereUniqueWithoutDescriptionInput = {
    where: SceneAnchorWhereUniqueInput
    update: XOR<SceneAnchorUpdateWithoutDescriptionInput, SceneAnchorUncheckedUpdateWithoutDescriptionInput>
    create: XOR<SceneAnchorCreateWithoutDescriptionInput, SceneAnchorUncheckedCreateWithoutDescriptionInput>
  }

  export type SceneAnchorUpdateWithWhereUniqueWithoutDescriptionInput = {
    where: SceneAnchorWhereUniqueInput
    data: XOR<SceneAnchorUpdateWithoutDescriptionInput, SceneAnchorUncheckedUpdateWithoutDescriptionInput>
  }

  export type SceneAnchorUpdateManyWithWhereWithoutDescriptionInput = {
    where: SceneAnchorScalarWhereInput
    data: XOR<SceneAnchorUpdateManyMutationInput, SceneAnchorUncheckedUpdateManyWithoutDescriptionInput>
  }

  export type SceneAnchorScalarWhereInput = {
    AND?: SceneAnchorScalarWhereInput | SceneAnchorScalarWhereInput[]
    OR?: SceneAnchorScalarWhereInput[]
    NOT?: SceneAnchorScalarWhereInput | SceneAnchorScalarWhereInput[]
    tag?: StringFilter<"SceneAnchor"> | string
    type?: EnumAnchorTypeFilter<"SceneAnchor"> | $Enums.AnchorType
    name?: StringFilter<"SceneAnchor"> | string
    descriptionId?: IntNullableFilter<"SceneAnchor"> | number | null
    timelineId?: IntNullableFilter<"SceneAnchor"> | number | null
    parentTag?: StringFilter<"SceneAnchor"> | string
  }

  export type StoryPathUpsertWithWhereUniqueWithoutFromInput = {
    where: StoryPathWhereUniqueInput
    update: XOR<StoryPathUpdateWithoutFromInput, StoryPathUncheckedUpdateWithoutFromInput>
    create: XOR<StoryPathCreateWithoutFromInput, StoryPathUncheckedCreateWithoutFromInput>
  }

  export type StoryPathUpdateWithWhereUniqueWithoutFromInput = {
    where: StoryPathWhereUniqueInput
    data: XOR<StoryPathUpdateWithoutFromInput, StoryPathUncheckedUpdateWithoutFromInput>
  }

  export type StoryPathUpdateManyWithWhereWithoutFromInput = {
    where: StoryPathScalarWhereInput
    data: XOR<StoryPathUpdateManyMutationInput, StoryPathUncheckedUpdateManyWithoutFromInput>
  }

  export type StoryPathScalarWhereInput = {
    AND?: StoryPathScalarWhereInput | StoryPathScalarWhereInput[]
    OR?: StoryPathScalarWhereInput[]
    NOT?: StoryPathScalarWhereInput | StoryPathScalarWhereInput[]
    id?: IntFilter<"StoryPath"> | number
    fromId?: IntFilter<"StoryPath"> | number
    toId?: IntFilter<"StoryPath"> | number
  }

  export type StoryPathUpsertWithWhereUniqueWithoutToInput = {
    where: StoryPathWhereUniqueInput
    update: XOR<StoryPathUpdateWithoutToInput, StoryPathUncheckedUpdateWithoutToInput>
    create: XOR<StoryPathCreateWithoutToInput, StoryPathUncheckedCreateWithoutToInput>
  }

  export type StoryPathUpdateWithWhereUniqueWithoutToInput = {
    where: StoryPathWhereUniqueInput
    data: XOR<StoryPathUpdateWithoutToInput, StoryPathUncheckedUpdateWithoutToInput>
  }

  export type StoryPathUpdateManyWithWhereWithoutToInput = {
    where: StoryPathScalarWhereInput
    data: XOR<StoryPathUpdateManyMutationInput, StoryPathUncheckedUpdateManyWithoutToInput>
  }

  export type SceneUpsertWithoutVariantsInput = {
    update: XOR<SceneUpdateWithoutVariantsInput, SceneUncheckedUpdateWithoutVariantsInput>
    create: XOR<SceneCreateWithoutVariantsInput, SceneUncheckedCreateWithoutVariantsInput>
    where?: SceneWhereInput
  }

  export type SceneUpdateToOneWithWhereWithoutVariantsInput = {
    where?: SceneWhereInput
    data: XOR<SceneUpdateWithoutVariantsInput, SceneUncheckedUpdateWithoutVariantsInput>
  }

  export type SceneUpdateWithoutVariantsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    universe?: UniverseUpdateOneRequiredWithoutScenesNestedInput
    author?: UserUpdateOneRequiredWithoutScenesNestedInput
    anchors?: SceneAnchorUpdateManyWithoutDescriptionNestedInput
    fromPaths?: StoryPathUpdateManyWithoutFromNestedInput
    toPaths?: StoryPathUpdateManyWithoutToNestedInput
    parent?: SceneUpdateOneWithoutVariantsNestedInput
    sessions?: SessionUpdateManyWithoutLastSceneNestedInput
  }

  export type SceneUncheckedUpdateWithoutVariantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    universeId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    anchors?: SceneAnchorUncheckedUpdateManyWithoutDescriptionNestedInput
    fromPaths?: StoryPathUncheckedUpdateManyWithoutFromNestedInput
    toPaths?: StoryPathUncheckedUpdateManyWithoutToNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutLastSceneNestedInput
  }

  export type SceneUpsertWithWhereUniqueWithoutParentInput = {
    where: SceneWhereUniqueInput
    update: XOR<SceneUpdateWithoutParentInput, SceneUncheckedUpdateWithoutParentInput>
    create: XOR<SceneCreateWithoutParentInput, SceneUncheckedCreateWithoutParentInput>
  }

  export type SceneUpdateWithWhereUniqueWithoutParentInput = {
    where: SceneWhereUniqueInput
    data: XOR<SceneUpdateWithoutParentInput, SceneUncheckedUpdateWithoutParentInput>
  }

  export type SceneUpdateManyWithWhereWithoutParentInput = {
    where: SceneScalarWhereInput
    data: XOR<SceneUpdateManyMutationInput, SceneUncheckedUpdateManyWithoutParentInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutLastSceneInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutLastSceneInput, SessionUncheckedUpdateWithoutLastSceneInput>
    create: XOR<SessionCreateWithoutLastSceneInput, SessionUncheckedCreateWithoutLastSceneInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutLastSceneInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutLastSceneInput, SessionUncheckedUpdateWithoutLastSceneInput>
  }

  export type SessionUpdateManyWithWhereWithoutLastSceneInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutLastSceneInput>
  }

  export type SceneCreateWithoutAnchorsInput = {
    title: string
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    universe: UniverseCreateNestedOneWithoutScenesInput
    author: UserCreateNestedOneWithoutScenesInput
    fromPaths?: StoryPathCreateNestedManyWithoutFromInput
    toPaths?: StoryPathCreateNestedManyWithoutToInput
    parent?: SceneCreateNestedOneWithoutVariantsInput
    variants?: SceneCreateNestedManyWithoutParentInput
    sessions?: SessionCreateNestedManyWithoutLastSceneInput
  }

  export type SceneUncheckedCreateWithoutAnchorsInput = {
    id?: number
    universeId: number
    title: string
    authorId: number
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    parentId?: number | null
    fromPaths?: StoryPathUncheckedCreateNestedManyWithoutFromInput
    toPaths?: StoryPathUncheckedCreateNestedManyWithoutToInput
    variants?: SceneUncheckedCreateNestedManyWithoutParentInput
    sessions?: SessionUncheckedCreateNestedManyWithoutLastSceneInput
  }

  export type SceneCreateOrConnectWithoutAnchorsInput = {
    where: SceneWhereUniqueInput
    create: XOR<SceneCreateWithoutAnchorsInput, SceneUncheckedCreateWithoutAnchorsInput>
  }

  export type StorylineCreateWithoutAnchorInput = {
    title: string
    description: string
    owner: UserCreateNestedOneWithoutStorylinesInput
    storyPaths?: StorylinePathCreateNestedManyWithoutStorylineInput
  }

  export type StorylineUncheckedCreateWithoutAnchorInput = {
    id?: number
    title: string
    description: string
    ownerId: number
    storyPaths?: StorylinePathUncheckedCreateNestedManyWithoutStorylineInput
  }

  export type StorylineCreateOrConnectWithoutAnchorInput = {
    where: StorylineWhereUniqueInput
    create: XOR<StorylineCreateWithoutAnchorInput, StorylineUncheckedCreateWithoutAnchorInput>
  }

  export type SceneAnchorCreateWithoutChildrenInput = {
    tag: string
    type: $Enums.AnchorType
    name: string
    description?: SceneCreateNestedOneWithoutAnchorsInput
    timeline?: StorylineCreateNestedOneWithoutAnchorInput
    parent?: SceneAnchorCreateNestedOneWithoutChildrenInput
    sessions?: FavoriteAnchorCreateNestedManyWithoutAnchorInput
  }

  export type SceneAnchorUncheckedCreateWithoutChildrenInput = {
    tag: string
    type: $Enums.AnchorType
    name: string
    descriptionId?: number | null
    timelineId?: number | null
    parentTag: string
    sessions?: FavoriteAnchorUncheckedCreateNestedManyWithoutAnchorInput
  }

  export type SceneAnchorCreateOrConnectWithoutChildrenInput = {
    where: SceneAnchorWhereUniqueInput
    create: XOR<SceneAnchorCreateWithoutChildrenInput, SceneAnchorUncheckedCreateWithoutChildrenInput>
  }

  export type SceneAnchorCreateWithoutParentInput = {
    tag: string
    type: $Enums.AnchorType
    name: string
    description?: SceneCreateNestedOneWithoutAnchorsInput
    timeline?: StorylineCreateNestedOneWithoutAnchorInput
    children?: SceneAnchorCreateNestedManyWithoutParentInput
    sessions?: FavoriteAnchorCreateNestedManyWithoutAnchorInput
  }

  export type SceneAnchorUncheckedCreateWithoutParentInput = {
    tag: string
    type: $Enums.AnchorType
    name: string
    descriptionId?: number | null
    timelineId?: number | null
    children?: SceneAnchorUncheckedCreateNestedManyWithoutParentInput
    sessions?: FavoriteAnchorUncheckedCreateNestedManyWithoutAnchorInput
  }

  export type SceneAnchorCreateOrConnectWithoutParentInput = {
    where: SceneAnchorWhereUniqueInput
    create: XOR<SceneAnchorCreateWithoutParentInput, SceneAnchorUncheckedCreateWithoutParentInput>
  }

  export type SceneAnchorCreateManyParentInputEnvelope = {
    data: SceneAnchorCreateManyParentInput | SceneAnchorCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteAnchorCreateWithoutAnchorInput = {
    anchorId: number
    session?: SessionCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteAnchorUncheckedCreateWithoutAnchorInput = {
    anchorId: number
    sessionId: string
  }

  export type FavoriteAnchorCreateOrConnectWithoutAnchorInput = {
    where: FavoriteAnchorWhereUniqueInput
    create: XOR<FavoriteAnchorCreateWithoutAnchorInput, FavoriteAnchorUncheckedCreateWithoutAnchorInput>
  }

  export type FavoriteAnchorCreateManyAnchorInputEnvelope = {
    data: FavoriteAnchorCreateManyAnchorInput | FavoriteAnchorCreateManyAnchorInput[]
    skipDuplicates?: boolean
  }

  export type SceneUpsertWithoutAnchorsInput = {
    update: XOR<SceneUpdateWithoutAnchorsInput, SceneUncheckedUpdateWithoutAnchorsInput>
    create: XOR<SceneCreateWithoutAnchorsInput, SceneUncheckedCreateWithoutAnchorsInput>
    where?: SceneWhereInput
  }

  export type SceneUpdateToOneWithWhereWithoutAnchorsInput = {
    where?: SceneWhereInput
    data: XOR<SceneUpdateWithoutAnchorsInput, SceneUncheckedUpdateWithoutAnchorsInput>
  }

  export type SceneUpdateWithoutAnchorsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    universe?: UniverseUpdateOneRequiredWithoutScenesNestedInput
    author?: UserUpdateOneRequiredWithoutScenesNestedInput
    fromPaths?: StoryPathUpdateManyWithoutFromNestedInput
    toPaths?: StoryPathUpdateManyWithoutToNestedInput
    parent?: SceneUpdateOneWithoutVariantsNestedInput
    variants?: SceneUpdateManyWithoutParentNestedInput
    sessions?: SessionUpdateManyWithoutLastSceneNestedInput
  }

  export type SceneUncheckedUpdateWithoutAnchorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    universeId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    fromPaths?: StoryPathUncheckedUpdateManyWithoutFromNestedInput
    toPaths?: StoryPathUncheckedUpdateManyWithoutToNestedInput
    variants?: SceneUncheckedUpdateManyWithoutParentNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutLastSceneNestedInput
  }

  export type StorylineUpsertWithoutAnchorInput = {
    update: XOR<StorylineUpdateWithoutAnchorInput, StorylineUncheckedUpdateWithoutAnchorInput>
    create: XOR<StorylineCreateWithoutAnchorInput, StorylineUncheckedCreateWithoutAnchorInput>
    where?: StorylineWhereInput
  }

  export type StorylineUpdateToOneWithWhereWithoutAnchorInput = {
    where?: StorylineWhereInput
    data: XOR<StorylineUpdateWithoutAnchorInput, StorylineUncheckedUpdateWithoutAnchorInput>
  }

  export type StorylineUpdateWithoutAnchorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutStorylinesNestedInput
    storyPaths?: StorylinePathUpdateManyWithoutStorylineNestedInput
  }

  export type StorylineUncheckedUpdateWithoutAnchorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    storyPaths?: StorylinePathUncheckedUpdateManyWithoutStorylineNestedInput
  }

  export type SceneAnchorUpsertWithoutChildrenInput = {
    update: XOR<SceneAnchorUpdateWithoutChildrenInput, SceneAnchorUncheckedUpdateWithoutChildrenInput>
    create: XOR<SceneAnchorCreateWithoutChildrenInput, SceneAnchorUncheckedCreateWithoutChildrenInput>
    where?: SceneAnchorWhereInput
  }

  export type SceneAnchorUpdateToOneWithWhereWithoutChildrenInput = {
    where?: SceneAnchorWhereInput
    data: XOR<SceneAnchorUpdateWithoutChildrenInput, SceneAnchorUncheckedUpdateWithoutChildrenInput>
  }

  export type SceneAnchorUpdateWithoutChildrenInput = {
    tag?: StringFieldUpdateOperationsInput | string
    type?: EnumAnchorTypeFieldUpdateOperationsInput | $Enums.AnchorType
    name?: StringFieldUpdateOperationsInput | string
    description?: SceneUpdateOneWithoutAnchorsNestedInput
    timeline?: StorylineUpdateOneWithoutAnchorNestedInput
    parent?: SceneAnchorUpdateOneWithoutChildrenNestedInput
    sessions?: FavoriteAnchorUpdateManyWithoutAnchorNestedInput
  }

  export type SceneAnchorUncheckedUpdateWithoutChildrenInput = {
    tag?: StringFieldUpdateOperationsInput | string
    type?: EnumAnchorTypeFieldUpdateOperationsInput | $Enums.AnchorType
    name?: StringFieldUpdateOperationsInput | string
    descriptionId?: NullableIntFieldUpdateOperationsInput | number | null
    timelineId?: NullableIntFieldUpdateOperationsInput | number | null
    parentTag?: StringFieldUpdateOperationsInput | string
    sessions?: FavoriteAnchorUncheckedUpdateManyWithoutAnchorNestedInput
  }

  export type SceneAnchorUpsertWithWhereUniqueWithoutParentInput = {
    where: SceneAnchorWhereUniqueInput
    update: XOR<SceneAnchorUpdateWithoutParentInput, SceneAnchorUncheckedUpdateWithoutParentInput>
    create: XOR<SceneAnchorCreateWithoutParentInput, SceneAnchorUncheckedCreateWithoutParentInput>
  }

  export type SceneAnchorUpdateWithWhereUniqueWithoutParentInput = {
    where: SceneAnchorWhereUniqueInput
    data: XOR<SceneAnchorUpdateWithoutParentInput, SceneAnchorUncheckedUpdateWithoutParentInput>
  }

  export type SceneAnchorUpdateManyWithWhereWithoutParentInput = {
    where: SceneAnchorScalarWhereInput
    data: XOR<SceneAnchorUpdateManyMutationInput, SceneAnchorUncheckedUpdateManyWithoutParentInput>
  }

  export type FavoriteAnchorUpsertWithWhereUniqueWithoutAnchorInput = {
    where: FavoriteAnchorWhereUniqueInput
    update: XOR<FavoriteAnchorUpdateWithoutAnchorInput, FavoriteAnchorUncheckedUpdateWithoutAnchorInput>
    create: XOR<FavoriteAnchorCreateWithoutAnchorInput, FavoriteAnchorUncheckedCreateWithoutAnchorInput>
  }

  export type FavoriteAnchorUpdateWithWhereUniqueWithoutAnchorInput = {
    where: FavoriteAnchorWhereUniqueInput
    data: XOR<FavoriteAnchorUpdateWithoutAnchorInput, FavoriteAnchorUncheckedUpdateWithoutAnchorInput>
  }

  export type FavoriteAnchorUpdateManyWithWhereWithoutAnchorInput = {
    where: FavoriteAnchorScalarWhereInput
    data: XOR<FavoriteAnchorUpdateManyMutationInput, FavoriteAnchorUncheckedUpdateManyWithoutAnchorInput>
  }

  export type FavoriteAnchorScalarWhereInput = {
    AND?: FavoriteAnchorScalarWhereInput | FavoriteAnchorScalarWhereInput[]
    OR?: FavoriteAnchorScalarWhereInput[]
    NOT?: FavoriteAnchorScalarWhereInput | FavoriteAnchorScalarWhereInput[]
    anchorId?: IntFilter<"FavoriteAnchor"> | number
    sessionId?: StringFilter<"FavoriteAnchor"> | string
    sceneAnchorTag?: StringNullableFilter<"FavoriteAnchor"> | string | null
  }

  export type SceneCreateWithoutFromPathsInput = {
    title: string
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    universe: UniverseCreateNestedOneWithoutScenesInput
    author: UserCreateNestedOneWithoutScenesInput
    anchors?: SceneAnchorCreateNestedManyWithoutDescriptionInput
    toPaths?: StoryPathCreateNestedManyWithoutToInput
    parent?: SceneCreateNestedOneWithoutVariantsInput
    variants?: SceneCreateNestedManyWithoutParentInput
    sessions?: SessionCreateNestedManyWithoutLastSceneInput
  }

  export type SceneUncheckedCreateWithoutFromPathsInput = {
    id?: number
    universeId: number
    title: string
    authorId: number
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    parentId?: number | null
    anchors?: SceneAnchorUncheckedCreateNestedManyWithoutDescriptionInput
    toPaths?: StoryPathUncheckedCreateNestedManyWithoutToInput
    variants?: SceneUncheckedCreateNestedManyWithoutParentInput
    sessions?: SessionUncheckedCreateNestedManyWithoutLastSceneInput
  }

  export type SceneCreateOrConnectWithoutFromPathsInput = {
    where: SceneWhereUniqueInput
    create: XOR<SceneCreateWithoutFromPathsInput, SceneUncheckedCreateWithoutFromPathsInput>
  }

  export type SceneCreateWithoutToPathsInput = {
    title: string
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    universe: UniverseCreateNestedOneWithoutScenesInput
    author: UserCreateNestedOneWithoutScenesInput
    anchors?: SceneAnchorCreateNestedManyWithoutDescriptionInput
    fromPaths?: StoryPathCreateNestedManyWithoutFromInput
    parent?: SceneCreateNestedOneWithoutVariantsInput
    variants?: SceneCreateNestedManyWithoutParentInput
    sessions?: SessionCreateNestedManyWithoutLastSceneInput
  }

  export type SceneUncheckedCreateWithoutToPathsInput = {
    id?: number
    universeId: number
    title: string
    authorId: number
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    parentId?: number | null
    anchors?: SceneAnchorUncheckedCreateNestedManyWithoutDescriptionInput
    fromPaths?: StoryPathUncheckedCreateNestedManyWithoutFromInput
    variants?: SceneUncheckedCreateNestedManyWithoutParentInput
    sessions?: SessionUncheckedCreateNestedManyWithoutLastSceneInput
  }

  export type SceneCreateOrConnectWithoutToPathsInput = {
    where: SceneWhereUniqueInput
    create: XOR<SceneCreateWithoutToPathsInput, SceneUncheckedCreateWithoutToPathsInput>
  }

  export type StorylinePathCreateWithoutPathInput = {
    seq?: number
    storyline: StorylineCreateNestedOneWithoutStoryPathsInput
  }

  export type StorylinePathUncheckedCreateWithoutPathInput = {
    storyLineId: number
    seq?: number
  }

  export type StorylinePathCreateOrConnectWithoutPathInput = {
    where: StorylinePathWhereUniqueInput
    create: XOR<StorylinePathCreateWithoutPathInput, StorylinePathUncheckedCreateWithoutPathInput>
  }

  export type StorylinePathCreateManyPathInputEnvelope = {
    data: StorylinePathCreateManyPathInput | StorylinePathCreateManyPathInput[]
    skipDuplicates?: boolean
  }

  export type SceneUpsertWithoutFromPathsInput = {
    update: XOR<SceneUpdateWithoutFromPathsInput, SceneUncheckedUpdateWithoutFromPathsInput>
    create: XOR<SceneCreateWithoutFromPathsInput, SceneUncheckedCreateWithoutFromPathsInput>
    where?: SceneWhereInput
  }

  export type SceneUpdateToOneWithWhereWithoutFromPathsInput = {
    where?: SceneWhereInput
    data: XOR<SceneUpdateWithoutFromPathsInput, SceneUncheckedUpdateWithoutFromPathsInput>
  }

  export type SceneUpdateWithoutFromPathsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    universe?: UniverseUpdateOneRequiredWithoutScenesNestedInput
    author?: UserUpdateOneRequiredWithoutScenesNestedInput
    anchors?: SceneAnchorUpdateManyWithoutDescriptionNestedInput
    toPaths?: StoryPathUpdateManyWithoutToNestedInput
    parent?: SceneUpdateOneWithoutVariantsNestedInput
    variants?: SceneUpdateManyWithoutParentNestedInput
    sessions?: SessionUpdateManyWithoutLastSceneNestedInput
  }

  export type SceneUncheckedUpdateWithoutFromPathsInput = {
    id?: IntFieldUpdateOperationsInput | number
    universeId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    anchors?: SceneAnchorUncheckedUpdateManyWithoutDescriptionNestedInput
    toPaths?: StoryPathUncheckedUpdateManyWithoutToNestedInput
    variants?: SceneUncheckedUpdateManyWithoutParentNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutLastSceneNestedInput
  }

  export type SceneUpsertWithoutToPathsInput = {
    update: XOR<SceneUpdateWithoutToPathsInput, SceneUncheckedUpdateWithoutToPathsInput>
    create: XOR<SceneCreateWithoutToPathsInput, SceneUncheckedCreateWithoutToPathsInput>
    where?: SceneWhereInput
  }

  export type SceneUpdateToOneWithWhereWithoutToPathsInput = {
    where?: SceneWhereInput
    data: XOR<SceneUpdateWithoutToPathsInput, SceneUncheckedUpdateWithoutToPathsInput>
  }

  export type SceneUpdateWithoutToPathsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    universe?: UniverseUpdateOneRequiredWithoutScenesNestedInput
    author?: UserUpdateOneRequiredWithoutScenesNestedInput
    anchors?: SceneAnchorUpdateManyWithoutDescriptionNestedInput
    fromPaths?: StoryPathUpdateManyWithoutFromNestedInput
    parent?: SceneUpdateOneWithoutVariantsNestedInput
    variants?: SceneUpdateManyWithoutParentNestedInput
    sessions?: SessionUpdateManyWithoutLastSceneNestedInput
  }

  export type SceneUncheckedUpdateWithoutToPathsInput = {
    id?: IntFieldUpdateOperationsInput | number
    universeId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    anchors?: SceneAnchorUncheckedUpdateManyWithoutDescriptionNestedInput
    fromPaths?: StoryPathUncheckedUpdateManyWithoutFromNestedInput
    variants?: SceneUncheckedUpdateManyWithoutParentNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutLastSceneNestedInput
  }

  export type StorylinePathUpsertWithWhereUniqueWithoutPathInput = {
    where: StorylinePathWhereUniqueInput
    update: XOR<StorylinePathUpdateWithoutPathInput, StorylinePathUncheckedUpdateWithoutPathInput>
    create: XOR<StorylinePathCreateWithoutPathInput, StorylinePathUncheckedCreateWithoutPathInput>
  }

  export type StorylinePathUpdateWithWhereUniqueWithoutPathInput = {
    where: StorylinePathWhereUniqueInput
    data: XOR<StorylinePathUpdateWithoutPathInput, StorylinePathUncheckedUpdateWithoutPathInput>
  }

  export type StorylinePathUpdateManyWithWhereWithoutPathInput = {
    where: StorylinePathScalarWhereInput
    data: XOR<StorylinePathUpdateManyMutationInput, StorylinePathUncheckedUpdateManyWithoutPathInput>
  }

  export type StorylinePathScalarWhereInput = {
    AND?: StorylinePathScalarWhereInput | StorylinePathScalarWhereInput[]
    OR?: StorylinePathScalarWhereInput[]
    NOT?: StorylinePathScalarWhereInput | StorylinePathScalarWhereInput[]
    storyLineId?: IntFilter<"StorylinePath"> | number
    pathId?: IntFilter<"StorylinePath"> | number
    seq?: IntFilter<"StorylinePath"> | number
  }

  export type UserCreateWithoutStorylinesInput = {
    email: string
    password: string
    name?: string | null
    universes?: UniverseMemberCreateNestedManyWithoutUserInput
    scenes?: SceneCreateNestedManyWithoutAuthorInput
    sessions?: SessionCreateNestedManyWithoutReaderInput
  }

  export type UserUncheckedCreateWithoutStorylinesInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    universes?: UniverseMemberUncheckedCreateNestedManyWithoutUserInput
    scenes?: SceneUncheckedCreateNestedManyWithoutAuthorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutReaderInput
  }

  export type UserCreateOrConnectWithoutStorylinesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStorylinesInput, UserUncheckedCreateWithoutStorylinesInput>
  }

  export type StorylinePathCreateWithoutStorylineInput = {
    seq?: number
    path: StoryPathCreateNestedOneWithoutStorylinesInput
  }

  export type StorylinePathUncheckedCreateWithoutStorylineInput = {
    pathId: number
    seq?: number
  }

  export type StorylinePathCreateOrConnectWithoutStorylineInput = {
    where: StorylinePathWhereUniqueInput
    create: XOR<StorylinePathCreateWithoutStorylineInput, StorylinePathUncheckedCreateWithoutStorylineInput>
  }

  export type StorylinePathCreateManyStorylineInputEnvelope = {
    data: StorylinePathCreateManyStorylineInput | StorylinePathCreateManyStorylineInput[]
    skipDuplicates?: boolean
  }

  export type SceneAnchorCreateWithoutTimelineInput = {
    tag: string
    type: $Enums.AnchorType
    name: string
    description?: SceneCreateNestedOneWithoutAnchorsInput
    parent?: SceneAnchorCreateNestedOneWithoutChildrenInput
    children?: SceneAnchorCreateNestedManyWithoutParentInput
    sessions?: FavoriteAnchorCreateNestedManyWithoutAnchorInput
  }

  export type SceneAnchorUncheckedCreateWithoutTimelineInput = {
    tag: string
    type: $Enums.AnchorType
    name: string
    descriptionId?: number | null
    parentTag: string
    children?: SceneAnchorUncheckedCreateNestedManyWithoutParentInput
    sessions?: FavoriteAnchorUncheckedCreateNestedManyWithoutAnchorInput
  }

  export type SceneAnchorCreateOrConnectWithoutTimelineInput = {
    where: SceneAnchorWhereUniqueInput
    create: XOR<SceneAnchorCreateWithoutTimelineInput, SceneAnchorUncheckedCreateWithoutTimelineInput>
  }

  export type UserUpsertWithoutStorylinesInput = {
    update: XOR<UserUpdateWithoutStorylinesInput, UserUncheckedUpdateWithoutStorylinesInput>
    create: XOR<UserCreateWithoutStorylinesInput, UserUncheckedCreateWithoutStorylinesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStorylinesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStorylinesInput, UserUncheckedUpdateWithoutStorylinesInput>
  }

  export type UserUpdateWithoutStorylinesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    universes?: UniverseMemberUpdateManyWithoutUserNestedInput
    scenes?: SceneUpdateManyWithoutAuthorNestedInput
    sessions?: SessionUpdateManyWithoutReaderNestedInput
  }

  export type UserUncheckedUpdateWithoutStorylinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    universes?: UniverseMemberUncheckedUpdateManyWithoutUserNestedInput
    scenes?: SceneUncheckedUpdateManyWithoutAuthorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutReaderNestedInput
  }

  export type StorylinePathUpsertWithWhereUniqueWithoutStorylineInput = {
    where: StorylinePathWhereUniqueInput
    update: XOR<StorylinePathUpdateWithoutStorylineInput, StorylinePathUncheckedUpdateWithoutStorylineInput>
    create: XOR<StorylinePathCreateWithoutStorylineInput, StorylinePathUncheckedCreateWithoutStorylineInput>
  }

  export type StorylinePathUpdateWithWhereUniqueWithoutStorylineInput = {
    where: StorylinePathWhereUniqueInput
    data: XOR<StorylinePathUpdateWithoutStorylineInput, StorylinePathUncheckedUpdateWithoutStorylineInput>
  }

  export type StorylinePathUpdateManyWithWhereWithoutStorylineInput = {
    where: StorylinePathScalarWhereInput
    data: XOR<StorylinePathUpdateManyMutationInput, StorylinePathUncheckedUpdateManyWithoutStorylineInput>
  }

  export type SceneAnchorUpsertWithoutTimelineInput = {
    update: XOR<SceneAnchorUpdateWithoutTimelineInput, SceneAnchorUncheckedUpdateWithoutTimelineInput>
    create: XOR<SceneAnchorCreateWithoutTimelineInput, SceneAnchorUncheckedCreateWithoutTimelineInput>
    where?: SceneAnchorWhereInput
  }

  export type SceneAnchorUpdateToOneWithWhereWithoutTimelineInput = {
    where?: SceneAnchorWhereInput
    data: XOR<SceneAnchorUpdateWithoutTimelineInput, SceneAnchorUncheckedUpdateWithoutTimelineInput>
  }

  export type SceneAnchorUpdateWithoutTimelineInput = {
    tag?: StringFieldUpdateOperationsInput | string
    type?: EnumAnchorTypeFieldUpdateOperationsInput | $Enums.AnchorType
    name?: StringFieldUpdateOperationsInput | string
    description?: SceneUpdateOneWithoutAnchorsNestedInput
    parent?: SceneAnchorUpdateOneWithoutChildrenNestedInput
    children?: SceneAnchorUpdateManyWithoutParentNestedInput
    sessions?: FavoriteAnchorUpdateManyWithoutAnchorNestedInput
  }

  export type SceneAnchorUncheckedUpdateWithoutTimelineInput = {
    tag?: StringFieldUpdateOperationsInput | string
    type?: EnumAnchorTypeFieldUpdateOperationsInput | $Enums.AnchorType
    name?: StringFieldUpdateOperationsInput | string
    descriptionId?: NullableIntFieldUpdateOperationsInput | number | null
    parentTag?: StringFieldUpdateOperationsInput | string
    children?: SceneAnchorUncheckedUpdateManyWithoutParentNestedInput
    sessions?: FavoriteAnchorUncheckedUpdateManyWithoutAnchorNestedInput
  }

  export type StorylineCreateWithoutStoryPathsInput = {
    title: string
    description: string
    owner: UserCreateNestedOneWithoutStorylinesInput
    anchor?: SceneAnchorCreateNestedOneWithoutTimelineInput
  }

  export type StorylineUncheckedCreateWithoutStoryPathsInput = {
    id?: number
    title: string
    description: string
    ownerId: number
    anchor?: SceneAnchorUncheckedCreateNestedOneWithoutTimelineInput
  }

  export type StorylineCreateOrConnectWithoutStoryPathsInput = {
    where: StorylineWhereUniqueInput
    create: XOR<StorylineCreateWithoutStoryPathsInput, StorylineUncheckedCreateWithoutStoryPathsInput>
  }

  export type StoryPathCreateWithoutStorylinesInput = {
    from: SceneCreateNestedOneWithoutFromPathsInput
    to: SceneCreateNestedOneWithoutToPathsInput
  }

  export type StoryPathUncheckedCreateWithoutStorylinesInput = {
    id?: number
    fromId: number
    toId: number
  }

  export type StoryPathCreateOrConnectWithoutStorylinesInput = {
    where: StoryPathWhereUniqueInput
    create: XOR<StoryPathCreateWithoutStorylinesInput, StoryPathUncheckedCreateWithoutStorylinesInput>
  }

  export type StorylineUpsertWithoutStoryPathsInput = {
    update: XOR<StorylineUpdateWithoutStoryPathsInput, StorylineUncheckedUpdateWithoutStoryPathsInput>
    create: XOR<StorylineCreateWithoutStoryPathsInput, StorylineUncheckedCreateWithoutStoryPathsInput>
    where?: StorylineWhereInput
  }

  export type StorylineUpdateToOneWithWhereWithoutStoryPathsInput = {
    where?: StorylineWhereInput
    data: XOR<StorylineUpdateWithoutStoryPathsInput, StorylineUncheckedUpdateWithoutStoryPathsInput>
  }

  export type StorylineUpdateWithoutStoryPathsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutStorylinesNestedInput
    anchor?: SceneAnchorUpdateOneWithoutTimelineNestedInput
  }

  export type StorylineUncheckedUpdateWithoutStoryPathsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    anchor?: SceneAnchorUncheckedUpdateOneWithoutTimelineNestedInput
  }

  export type StoryPathUpsertWithoutStorylinesInput = {
    update: XOR<StoryPathUpdateWithoutStorylinesInput, StoryPathUncheckedUpdateWithoutStorylinesInput>
    create: XOR<StoryPathCreateWithoutStorylinesInput, StoryPathUncheckedCreateWithoutStorylinesInput>
    where?: StoryPathWhereInput
  }

  export type StoryPathUpdateToOneWithWhereWithoutStorylinesInput = {
    where?: StoryPathWhereInput
    data: XOR<StoryPathUpdateWithoutStorylinesInput, StoryPathUncheckedUpdateWithoutStorylinesInput>
  }

  export type StoryPathUpdateWithoutStorylinesInput = {
    from?: SceneUpdateOneRequiredWithoutFromPathsNestedInput
    to?: SceneUpdateOneRequiredWithoutToPathsNestedInput
  }

  export type StoryPathUncheckedUpdateWithoutStorylinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutSessionsInput = {
    email: string
    password: string
    name?: string | null
    universes?: UniverseMemberCreateNestedManyWithoutUserInput
    scenes?: SceneCreateNestedManyWithoutAuthorInput
    storylines?: StorylineCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    universes?: UniverseMemberUncheckedCreateNestedManyWithoutUserInput
    scenes?: SceneUncheckedCreateNestedManyWithoutAuthorInput
    storylines?: StorylineUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type SceneCreateWithoutSessionsInput = {
    title: string
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    universe: UniverseCreateNestedOneWithoutScenesInput
    author: UserCreateNestedOneWithoutScenesInput
    anchors?: SceneAnchorCreateNestedManyWithoutDescriptionInput
    fromPaths?: StoryPathCreateNestedManyWithoutFromInput
    toPaths?: StoryPathCreateNestedManyWithoutToInput
    parent?: SceneCreateNestedOneWithoutVariantsInput
    variants?: SceneCreateNestedManyWithoutParentInput
  }

  export type SceneUncheckedCreateWithoutSessionsInput = {
    id?: number
    universeId: number
    title: string
    authorId: number
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    parentId?: number | null
    anchors?: SceneAnchorUncheckedCreateNestedManyWithoutDescriptionInput
    fromPaths?: StoryPathUncheckedCreateNestedManyWithoutFromInput
    toPaths?: StoryPathUncheckedCreateNestedManyWithoutToInput
    variants?: SceneUncheckedCreateNestedManyWithoutParentInput
  }

  export type SceneCreateOrConnectWithoutSessionsInput = {
    where: SceneWhereUniqueInput
    create: XOR<SceneCreateWithoutSessionsInput, SceneUncheckedCreateWithoutSessionsInput>
  }

  export type UniverseCreateWithoutSessionsInput = {
    name: string
    description: string
    contextDB: string
    visibility?: $Enums.Visibility
    sources?: UniverseSourceCreateNestedManyWithoutUniverseInput
    members?: UniverseMemberCreateNestedManyWithoutUniverseInput
    scenes?: SceneCreateNestedManyWithoutUniverseInput
  }

  export type UniverseUncheckedCreateWithoutSessionsInput = {
    id?: number
    name: string
    description: string
    contextDB: string
    visibility?: $Enums.Visibility
    sources?: UniverseSourceUncheckedCreateNestedManyWithoutUniverseInput
    members?: UniverseMemberUncheckedCreateNestedManyWithoutUniverseInput
    scenes?: SceneUncheckedCreateNestedManyWithoutUniverseInput
  }

  export type UniverseCreateOrConnectWithoutSessionsInput = {
    where: UniverseWhereUniqueInput
    create: XOR<UniverseCreateWithoutSessionsInput, UniverseUncheckedCreateWithoutSessionsInput>
  }

  export type FavoriteAnchorCreateWithoutSessionInput = {
    anchorId: number
    anchor?: SceneAnchorCreateNestedOneWithoutSessionsInput
  }

  export type FavoriteAnchorUncheckedCreateWithoutSessionInput = {
    anchorId: number
    sceneAnchorTag?: string | null
  }

  export type FavoriteAnchorCreateOrConnectWithoutSessionInput = {
    where: FavoriteAnchorWhereUniqueInput
    create: XOR<FavoriteAnchorCreateWithoutSessionInput, FavoriteAnchorUncheckedCreateWithoutSessionInput>
  }

  export type FavoriteAnchorCreateManySessionInputEnvelope = {
    data: FavoriteAnchorCreateManySessionInput | FavoriteAnchorCreateManySessionInput[]
    skipDuplicates?: boolean
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
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    universes?: UniverseMemberUpdateManyWithoutUserNestedInput
    scenes?: SceneUpdateManyWithoutAuthorNestedInput
    storylines?: StorylineUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    universes?: UniverseMemberUncheckedUpdateManyWithoutUserNestedInput
    scenes?: SceneUncheckedUpdateManyWithoutAuthorNestedInput
    storylines?: StorylineUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type SceneUpsertWithoutSessionsInput = {
    update: XOR<SceneUpdateWithoutSessionsInput, SceneUncheckedUpdateWithoutSessionsInput>
    create: XOR<SceneCreateWithoutSessionsInput, SceneUncheckedCreateWithoutSessionsInput>
    where?: SceneWhereInput
  }

  export type SceneUpdateToOneWithWhereWithoutSessionsInput = {
    where?: SceneWhereInput
    data: XOR<SceneUpdateWithoutSessionsInput, SceneUncheckedUpdateWithoutSessionsInput>
  }

  export type SceneUpdateWithoutSessionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    universe?: UniverseUpdateOneRequiredWithoutScenesNestedInput
    author?: UserUpdateOneRequiredWithoutScenesNestedInput
    anchors?: SceneAnchorUpdateManyWithoutDescriptionNestedInput
    fromPaths?: StoryPathUpdateManyWithoutFromNestedInput
    toPaths?: StoryPathUpdateManyWithoutToNestedInput
    parent?: SceneUpdateOneWithoutVariantsNestedInput
    variants?: SceneUpdateManyWithoutParentNestedInput
  }

  export type SceneUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    universeId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    anchors?: SceneAnchorUncheckedUpdateManyWithoutDescriptionNestedInput
    fromPaths?: StoryPathUncheckedUpdateManyWithoutFromNestedInput
    toPaths?: StoryPathUncheckedUpdateManyWithoutToNestedInput
    variants?: SceneUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UniverseUpsertWithoutSessionsInput = {
    update: XOR<UniverseUpdateWithoutSessionsInput, UniverseUncheckedUpdateWithoutSessionsInput>
    create: XOR<UniverseCreateWithoutSessionsInput, UniverseUncheckedCreateWithoutSessionsInput>
    where?: UniverseWhereInput
  }

  export type UniverseUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UniverseWhereInput
    data: XOR<UniverseUpdateWithoutSessionsInput, UniverseUncheckedUpdateWithoutSessionsInput>
  }

  export type UniverseUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contextDB?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    sources?: UniverseSourceUpdateManyWithoutUniverseNestedInput
    members?: UniverseMemberUpdateManyWithoutUniverseNestedInput
    scenes?: SceneUpdateManyWithoutUniverseNestedInput
  }

  export type UniverseUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contextDB?: StringFieldUpdateOperationsInput | string
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    sources?: UniverseSourceUncheckedUpdateManyWithoutUniverseNestedInput
    members?: UniverseMemberUncheckedUpdateManyWithoutUniverseNestedInput
    scenes?: SceneUncheckedUpdateManyWithoutUniverseNestedInput
  }

  export type FavoriteAnchorUpsertWithWhereUniqueWithoutSessionInput = {
    where: FavoriteAnchorWhereUniqueInput
    update: XOR<FavoriteAnchorUpdateWithoutSessionInput, FavoriteAnchorUncheckedUpdateWithoutSessionInput>
    create: XOR<FavoriteAnchorCreateWithoutSessionInput, FavoriteAnchorUncheckedCreateWithoutSessionInput>
  }

  export type FavoriteAnchorUpdateWithWhereUniqueWithoutSessionInput = {
    where: FavoriteAnchorWhereUniqueInput
    data: XOR<FavoriteAnchorUpdateWithoutSessionInput, FavoriteAnchorUncheckedUpdateWithoutSessionInput>
  }

  export type FavoriteAnchorUpdateManyWithWhereWithoutSessionInput = {
    where: FavoriteAnchorScalarWhereInput
    data: XOR<FavoriteAnchorUpdateManyMutationInput, FavoriteAnchorUncheckedUpdateManyWithoutSessionInput>
  }

  export type SceneAnchorCreateWithoutSessionsInput = {
    tag: string
    type: $Enums.AnchorType
    name: string
    description?: SceneCreateNestedOneWithoutAnchorsInput
    timeline?: StorylineCreateNestedOneWithoutAnchorInput
    parent?: SceneAnchorCreateNestedOneWithoutChildrenInput
    children?: SceneAnchorCreateNestedManyWithoutParentInput
  }

  export type SceneAnchorUncheckedCreateWithoutSessionsInput = {
    tag: string
    type: $Enums.AnchorType
    name: string
    descriptionId?: number | null
    timelineId?: number | null
    parentTag: string
    children?: SceneAnchorUncheckedCreateNestedManyWithoutParentInput
  }

  export type SceneAnchorCreateOrConnectWithoutSessionsInput = {
    where: SceneAnchorWhereUniqueInput
    create: XOR<SceneAnchorCreateWithoutSessionsInput, SceneAnchorUncheckedCreateWithoutSessionsInput>
  }

  export type SessionCreateWithoutFavoritesInput = {
    id: string
    createdAt: Date | string
    lastOpened: Date | string
    moods?: SessionCreatemoodsInput | $Enums.SceneMood[]
    languages?: SessionCreatelanguagesInput | string[]
    reader: UserCreateNestedOneWithoutSessionsInput
    lastScene?: SceneCreateNestedOneWithoutSessionsInput
    universe?: UniverseCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateWithoutFavoritesInput = {
    id: string
    readerId: number
    createdAt: Date | string
    lastOpened: Date | string
    lastSceneId?: number | null
    universeId?: number | null
    moods?: SessionCreatemoodsInput | $Enums.SceneMood[]
    languages?: SessionCreatelanguagesInput | string[]
  }

  export type SessionCreateOrConnectWithoutFavoritesInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutFavoritesInput, SessionUncheckedCreateWithoutFavoritesInput>
  }

  export type SceneAnchorUpsertWithoutSessionsInput = {
    update: XOR<SceneAnchorUpdateWithoutSessionsInput, SceneAnchorUncheckedUpdateWithoutSessionsInput>
    create: XOR<SceneAnchorCreateWithoutSessionsInput, SceneAnchorUncheckedCreateWithoutSessionsInput>
    where?: SceneAnchorWhereInput
  }

  export type SceneAnchorUpdateToOneWithWhereWithoutSessionsInput = {
    where?: SceneAnchorWhereInput
    data: XOR<SceneAnchorUpdateWithoutSessionsInput, SceneAnchorUncheckedUpdateWithoutSessionsInput>
  }

  export type SceneAnchorUpdateWithoutSessionsInput = {
    tag?: StringFieldUpdateOperationsInput | string
    type?: EnumAnchorTypeFieldUpdateOperationsInput | $Enums.AnchorType
    name?: StringFieldUpdateOperationsInput | string
    description?: SceneUpdateOneWithoutAnchorsNestedInput
    timeline?: StorylineUpdateOneWithoutAnchorNestedInput
    parent?: SceneAnchorUpdateOneWithoutChildrenNestedInput
    children?: SceneAnchorUpdateManyWithoutParentNestedInput
  }

  export type SceneAnchorUncheckedUpdateWithoutSessionsInput = {
    tag?: StringFieldUpdateOperationsInput | string
    type?: EnumAnchorTypeFieldUpdateOperationsInput | $Enums.AnchorType
    name?: StringFieldUpdateOperationsInput | string
    descriptionId?: NullableIntFieldUpdateOperationsInput | number | null
    timelineId?: NullableIntFieldUpdateOperationsInput | number | null
    parentTag?: StringFieldUpdateOperationsInput | string
    children?: SceneAnchorUncheckedUpdateManyWithoutParentNestedInput
  }

  export type SessionUpsertWithoutFavoritesInput = {
    update: XOR<SessionUpdateWithoutFavoritesInput, SessionUncheckedUpdateWithoutFavoritesInput>
    create: XOR<SessionCreateWithoutFavoritesInput, SessionUncheckedCreateWithoutFavoritesInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutFavoritesInput, SessionUncheckedUpdateWithoutFavoritesInput>
  }

  export type SessionUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOpened?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: SessionUpdatemoodsInput | $Enums.SceneMood[]
    languages?: SessionUpdatelanguagesInput | string[]
    reader?: UserUpdateOneRequiredWithoutSessionsNestedInput
    lastScene?: SceneUpdateOneWithoutSessionsNestedInput
    universe?: UniverseUpdateOneWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    readerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOpened?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    universeId?: NullableIntFieldUpdateOperationsInput | number | null
    moods?: SessionUpdatemoodsInput | $Enums.SceneMood[]
    languages?: SessionUpdatelanguagesInput | string[]
  }

  export type UniverseMemberCreateManyUserInput = {
    universeId: number
  }

  export type SceneCreateManyAuthorInput = {
    id?: number
    universeId: number
    title: string
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    parentId?: number | null
  }

  export type StorylineCreateManyOwnerInput = {
    id?: number
    title: string
    description: string
  }

  export type SessionCreateManyReaderInput = {
    id: string
    createdAt: Date | string
    lastOpened: Date | string
    lastSceneId?: number | null
    universeId?: number | null
    moods?: SessionCreatemoodsInput | $Enums.SceneMood[]
    languages?: SessionCreatelanguagesInput | string[]
  }

  export type UniverseMemberUpdateWithoutUserInput = {
    universe?: UniverseUpdateOneRequiredWithoutMembersNestedInput
  }

  export type UniverseMemberUncheckedUpdateWithoutUserInput = {
    universeId?: IntFieldUpdateOperationsInput | number
  }

  export type UniverseMemberUncheckedUpdateManyWithoutUserInput = {
    universeId?: IntFieldUpdateOperationsInput | number
  }

  export type SceneUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    universe?: UniverseUpdateOneRequiredWithoutScenesNestedInput
    anchors?: SceneAnchorUpdateManyWithoutDescriptionNestedInput
    fromPaths?: StoryPathUpdateManyWithoutFromNestedInput
    toPaths?: StoryPathUpdateManyWithoutToNestedInput
    parent?: SceneUpdateOneWithoutVariantsNestedInput
    variants?: SceneUpdateManyWithoutParentNestedInput
    sessions?: SessionUpdateManyWithoutLastSceneNestedInput
  }

  export type SceneUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    universeId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    anchors?: SceneAnchorUncheckedUpdateManyWithoutDescriptionNestedInput
    fromPaths?: StoryPathUncheckedUpdateManyWithoutFromNestedInput
    toPaths?: StoryPathUncheckedUpdateManyWithoutToNestedInput
    variants?: SceneUncheckedUpdateManyWithoutParentNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutLastSceneNestedInput
  }

  export type SceneUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    universeId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StorylineUpdateWithoutOwnerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    storyPaths?: StorylinePathUpdateManyWithoutStorylineNestedInput
    anchor?: SceneAnchorUpdateOneWithoutTimelineNestedInput
  }

  export type StorylineUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    storyPaths?: StorylinePathUncheckedUpdateManyWithoutStorylineNestedInput
    anchor?: SceneAnchorUncheckedUpdateOneWithoutTimelineNestedInput
  }

  export type StorylineUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SessionUpdateWithoutReaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOpened?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: SessionUpdatemoodsInput | $Enums.SceneMood[]
    languages?: SessionUpdatelanguagesInput | string[]
    lastScene?: SceneUpdateOneWithoutSessionsNestedInput
    universe?: UniverseUpdateOneWithoutSessionsNestedInput
    favorites?: FavoriteAnchorUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutReaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOpened?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    universeId?: NullableIntFieldUpdateOperationsInput | number | null
    moods?: SessionUpdatemoodsInput | $Enums.SceneMood[]
    languages?: SessionUpdatelanguagesInput | string[]
    favorites?: FavoriteAnchorUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutReaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOpened?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    universeId?: NullableIntFieldUpdateOperationsInput | number | null
    moods?: SessionUpdatemoodsInput | $Enums.SceneMood[]
    languages?: SessionUpdatelanguagesInput | string[]
  }

  export type UniverseSourceCreateManyUniverseInput = {
    id?: number
    format?: $Enums.FileFormat
    path: string
  }

  export type UniverseMemberCreateManyUniverseInput = {
    userId: number
  }

  export type SceneCreateManyUniverseInput = {
    id?: number
    title: string
    authorId: number
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
    parentId?: number | null
  }

  export type SessionCreateManyUniverseInput = {
    id: string
    readerId: number
    createdAt: Date | string
    lastOpened: Date | string
    lastSceneId?: number | null
    moods?: SessionCreatemoodsInput | $Enums.SceneMood[]
    languages?: SessionCreatelanguagesInput | string[]
  }

  export type UniverseSourceUpdateWithoutUniverseInput = {
    format?: EnumFileFormatFieldUpdateOperationsInput | $Enums.FileFormat
    path?: StringFieldUpdateOperationsInput | string
  }

  export type UniverseSourceUncheckedUpdateWithoutUniverseInput = {
    id?: IntFieldUpdateOperationsInput | number
    format?: EnumFileFormatFieldUpdateOperationsInput | $Enums.FileFormat
    path?: StringFieldUpdateOperationsInput | string
  }

  export type UniverseSourceUncheckedUpdateManyWithoutUniverseInput = {
    id?: IntFieldUpdateOperationsInput | number
    format?: EnumFileFormatFieldUpdateOperationsInput | $Enums.FileFormat
    path?: StringFieldUpdateOperationsInput | string
  }

  export type UniverseMemberUpdateWithoutUniverseInput = {
    user?: UserUpdateOneRequiredWithoutUniversesNestedInput
  }

  export type UniverseMemberUncheckedUpdateWithoutUniverseInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UniverseMemberUncheckedUpdateManyWithoutUniverseInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SceneUpdateWithoutUniverseInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneRequiredWithoutScenesNestedInput
    anchors?: SceneAnchorUpdateManyWithoutDescriptionNestedInput
    fromPaths?: StoryPathUpdateManyWithoutFromNestedInput
    toPaths?: StoryPathUpdateManyWithoutToNestedInput
    parent?: SceneUpdateOneWithoutVariantsNestedInput
    variants?: SceneUpdateManyWithoutParentNestedInput
    sessions?: SessionUpdateManyWithoutLastSceneNestedInput
  }

  export type SceneUncheckedUpdateWithoutUniverseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    anchors?: SceneAnchorUncheckedUpdateManyWithoutDescriptionNestedInput
    fromPaths?: StoryPathUncheckedUpdateManyWithoutFromNestedInput
    toPaths?: StoryPathUncheckedUpdateManyWithoutToNestedInput
    variants?: SceneUncheckedUpdateManyWithoutParentNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutLastSceneNestedInput
  }

  export type SceneUncheckedUpdateManyWithoutUniverseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUpdateWithoutUniverseInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOpened?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: SessionUpdatemoodsInput | $Enums.SceneMood[]
    languages?: SessionUpdatelanguagesInput | string[]
    reader?: UserUpdateOneRequiredWithoutSessionsNestedInput
    lastScene?: SceneUpdateOneWithoutSessionsNestedInput
    favorites?: FavoriteAnchorUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutUniverseInput = {
    id?: StringFieldUpdateOperationsInput | string
    readerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOpened?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    moods?: SessionUpdatemoodsInput | $Enums.SceneMood[]
    languages?: SessionUpdatelanguagesInput | string[]
    favorites?: FavoriteAnchorUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutUniverseInput = {
    id?: StringFieldUpdateOperationsInput | string
    readerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOpened?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSceneId?: NullableIntFieldUpdateOperationsInput | number | null
    moods?: SessionUpdatemoodsInput | $Enums.SceneMood[]
    languages?: SessionUpdatelanguagesInput | string[]
  }

  export type SceneAnchorCreateManyDescriptionInput = {
    tag: string
    type: $Enums.AnchorType
    name: string
    timelineId?: number | null
    parentTag: string
  }

  export type StoryPathCreateManyFromInput = {
    id?: number
    toId: number
  }

  export type StoryPathCreateManyToInput = {
    id?: number
    fromId: number
  }

  export type SceneCreateManyParentInput = {
    id?: number
    universeId: number
    title: string
    authorId: number
    content: string
    mood: $Enums.SceneMood
    genre: $Enums.SceneGenre
    lang?: string
    prompt?: string | null
  }

  export type SessionCreateManyLastSceneInput = {
    id: string
    readerId: number
    createdAt: Date | string
    lastOpened: Date | string
    universeId?: number | null
    moods?: SessionCreatemoodsInput | $Enums.SceneMood[]
    languages?: SessionCreatelanguagesInput | string[]
  }

  export type SceneAnchorUpdateWithoutDescriptionInput = {
    tag?: StringFieldUpdateOperationsInput | string
    type?: EnumAnchorTypeFieldUpdateOperationsInput | $Enums.AnchorType
    name?: StringFieldUpdateOperationsInput | string
    timeline?: StorylineUpdateOneWithoutAnchorNestedInput
    parent?: SceneAnchorUpdateOneWithoutChildrenNestedInput
    children?: SceneAnchorUpdateManyWithoutParentNestedInput
    sessions?: FavoriteAnchorUpdateManyWithoutAnchorNestedInput
  }

  export type SceneAnchorUncheckedUpdateWithoutDescriptionInput = {
    tag?: StringFieldUpdateOperationsInput | string
    type?: EnumAnchorTypeFieldUpdateOperationsInput | $Enums.AnchorType
    name?: StringFieldUpdateOperationsInput | string
    timelineId?: NullableIntFieldUpdateOperationsInput | number | null
    parentTag?: StringFieldUpdateOperationsInput | string
    children?: SceneAnchorUncheckedUpdateManyWithoutParentNestedInput
    sessions?: FavoriteAnchorUncheckedUpdateManyWithoutAnchorNestedInput
  }

  export type SceneAnchorUncheckedUpdateManyWithoutDescriptionInput = {
    tag?: StringFieldUpdateOperationsInput | string
    type?: EnumAnchorTypeFieldUpdateOperationsInput | $Enums.AnchorType
    name?: StringFieldUpdateOperationsInput | string
    timelineId?: NullableIntFieldUpdateOperationsInput | number | null
    parentTag?: StringFieldUpdateOperationsInput | string
  }

  export type StoryPathUpdateWithoutFromInput = {
    to?: SceneUpdateOneRequiredWithoutToPathsNestedInput
    storylines?: StorylinePathUpdateManyWithoutPathNestedInput
  }

  export type StoryPathUncheckedUpdateWithoutFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    storylines?: StorylinePathUncheckedUpdateManyWithoutPathNestedInput
  }

  export type StoryPathUncheckedUpdateManyWithoutFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
  }

  export type StoryPathUpdateWithoutToInput = {
    from?: SceneUpdateOneRequiredWithoutFromPathsNestedInput
    storylines?: StorylinePathUpdateManyWithoutPathNestedInput
  }

  export type StoryPathUncheckedUpdateWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    storylines?: StorylinePathUncheckedUpdateManyWithoutPathNestedInput
  }

  export type StoryPathUncheckedUpdateManyWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
  }

  export type SceneUpdateWithoutParentInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    universe?: UniverseUpdateOneRequiredWithoutScenesNestedInput
    author?: UserUpdateOneRequiredWithoutScenesNestedInput
    anchors?: SceneAnchorUpdateManyWithoutDescriptionNestedInput
    fromPaths?: StoryPathUpdateManyWithoutFromNestedInput
    toPaths?: StoryPathUpdateManyWithoutToNestedInput
    variants?: SceneUpdateManyWithoutParentNestedInput
    sessions?: SessionUpdateManyWithoutLastSceneNestedInput
  }

  export type SceneUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    universeId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    anchors?: SceneAnchorUncheckedUpdateManyWithoutDescriptionNestedInput
    fromPaths?: StoryPathUncheckedUpdateManyWithoutFromNestedInput
    toPaths?: StoryPathUncheckedUpdateManyWithoutToNestedInput
    variants?: SceneUncheckedUpdateManyWithoutParentNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutLastSceneNestedInput
  }

  export type SceneUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    universeId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumSceneMoodFieldUpdateOperationsInput | $Enums.SceneMood
    genre?: EnumSceneGenreFieldUpdateOperationsInput | $Enums.SceneGenre
    lang?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutLastSceneInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOpened?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: SessionUpdatemoodsInput | $Enums.SceneMood[]
    languages?: SessionUpdatelanguagesInput | string[]
    reader?: UserUpdateOneRequiredWithoutSessionsNestedInput
    universe?: UniverseUpdateOneWithoutSessionsNestedInput
    favorites?: FavoriteAnchorUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutLastSceneInput = {
    id?: StringFieldUpdateOperationsInput | string
    readerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOpened?: DateTimeFieldUpdateOperationsInput | Date | string
    universeId?: NullableIntFieldUpdateOperationsInput | number | null
    moods?: SessionUpdatemoodsInput | $Enums.SceneMood[]
    languages?: SessionUpdatelanguagesInput | string[]
    favorites?: FavoriteAnchorUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutLastSceneInput = {
    id?: StringFieldUpdateOperationsInput | string
    readerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastOpened?: DateTimeFieldUpdateOperationsInput | Date | string
    universeId?: NullableIntFieldUpdateOperationsInput | number | null
    moods?: SessionUpdatemoodsInput | $Enums.SceneMood[]
    languages?: SessionUpdatelanguagesInput | string[]
  }

  export type SceneAnchorCreateManyParentInput = {
    tag: string
    type: $Enums.AnchorType
    name: string
    descriptionId?: number | null
    timelineId?: number | null
  }

  export type FavoriteAnchorCreateManyAnchorInput = {
    anchorId: number
    sessionId: string
  }

  export type SceneAnchorUpdateWithoutParentInput = {
    tag?: StringFieldUpdateOperationsInput | string
    type?: EnumAnchorTypeFieldUpdateOperationsInput | $Enums.AnchorType
    name?: StringFieldUpdateOperationsInput | string
    description?: SceneUpdateOneWithoutAnchorsNestedInput
    timeline?: StorylineUpdateOneWithoutAnchorNestedInput
    children?: SceneAnchorUpdateManyWithoutParentNestedInput
    sessions?: FavoriteAnchorUpdateManyWithoutAnchorNestedInput
  }

  export type SceneAnchorUncheckedUpdateWithoutParentInput = {
    tag?: StringFieldUpdateOperationsInput | string
    type?: EnumAnchorTypeFieldUpdateOperationsInput | $Enums.AnchorType
    name?: StringFieldUpdateOperationsInput | string
    descriptionId?: NullableIntFieldUpdateOperationsInput | number | null
    timelineId?: NullableIntFieldUpdateOperationsInput | number | null
    children?: SceneAnchorUncheckedUpdateManyWithoutParentNestedInput
    sessions?: FavoriteAnchorUncheckedUpdateManyWithoutAnchorNestedInput
  }

  export type SceneAnchorUncheckedUpdateManyWithoutParentInput = {
    tag?: StringFieldUpdateOperationsInput | string
    type?: EnumAnchorTypeFieldUpdateOperationsInput | $Enums.AnchorType
    name?: StringFieldUpdateOperationsInput | string
    descriptionId?: NullableIntFieldUpdateOperationsInput | number | null
    timelineId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FavoriteAnchorUpdateWithoutAnchorInput = {
    anchorId?: IntFieldUpdateOperationsInput | number
    session?: SessionUpdateOneWithoutFavoritesNestedInput
  }

  export type FavoriteAnchorUncheckedUpdateWithoutAnchorInput = {
    anchorId?: IntFieldUpdateOperationsInput | number
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type FavoriteAnchorUncheckedUpdateManyWithoutAnchorInput = {
    anchorId?: IntFieldUpdateOperationsInput | number
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type StorylinePathCreateManyPathInput = {
    storyLineId: number
    seq?: number
  }

  export type StorylinePathUpdateWithoutPathInput = {
    seq?: IntFieldUpdateOperationsInput | number
    storyline?: StorylineUpdateOneRequiredWithoutStoryPathsNestedInput
  }

  export type StorylinePathUncheckedUpdateWithoutPathInput = {
    storyLineId?: IntFieldUpdateOperationsInput | number
    seq?: IntFieldUpdateOperationsInput | number
  }

  export type StorylinePathUncheckedUpdateManyWithoutPathInput = {
    storyLineId?: IntFieldUpdateOperationsInput | number
    seq?: IntFieldUpdateOperationsInput | number
  }

  export type StorylinePathCreateManyStorylineInput = {
    pathId: number
    seq?: number
  }

  export type StorylinePathUpdateWithoutStorylineInput = {
    seq?: IntFieldUpdateOperationsInput | number
    path?: StoryPathUpdateOneRequiredWithoutStorylinesNestedInput
  }

  export type StorylinePathUncheckedUpdateWithoutStorylineInput = {
    pathId?: IntFieldUpdateOperationsInput | number
    seq?: IntFieldUpdateOperationsInput | number
  }

  export type StorylinePathUncheckedUpdateManyWithoutStorylineInput = {
    pathId?: IntFieldUpdateOperationsInput | number
    seq?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteAnchorCreateManySessionInput = {
    anchorId: number
    sceneAnchorTag?: string | null
  }

  export type FavoriteAnchorUpdateWithoutSessionInput = {
    anchorId?: IntFieldUpdateOperationsInput | number
    anchor?: SceneAnchorUpdateOneWithoutSessionsNestedInput
  }

  export type FavoriteAnchorUncheckedUpdateWithoutSessionInput = {
    anchorId?: IntFieldUpdateOperationsInput | number
    sceneAnchorTag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavoriteAnchorUncheckedUpdateManyWithoutSessionInput = {
    anchorId?: IntFieldUpdateOperationsInput | number
    sceneAnchorTag?: NullableStringFieldUpdateOperationsInput | string | null
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