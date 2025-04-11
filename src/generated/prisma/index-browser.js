
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AccountScalarFieldEnum = {
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
  session_state: 'session_state',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SessionScalarFieldEnum = {
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.AuthenticatorScalarFieldEnum = {
  credentialID: 'credentialID',
  userId: 'userId',
  providerAccountId: 'providerAccountId',
  credentialPublicKey: 'credentialPublicKey',
  counter: 'counter',
  credentialDeviceType: 'credentialDeviceType',
  credentialBackedUp: 'credentialBackedUp',
  transports: 'transports'
};

exports.Prisma.UniverseMemberScalarFieldEnum = {
  userId: 'userId',
  universeId: 'universeId'
};

exports.Prisma.UniverseScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  contextDB: 'contextDB',
  visibility: 'visibility'
};

exports.Prisma.UniverseSourceScalarFieldEnum = {
  id: 'id',
  format: 'format',
  path: 'path',
  universeId: 'universeId'
};

exports.Prisma.SceneScalarFieldEnum = {
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

exports.Prisma.SceneAnchorScalarFieldEnum = {
  tag: 'tag',
  type: 'type',
  name: 'name',
  descriptionId: 'descriptionId',
  timelineId: 'timelineId',
  parentTag: 'parentTag'
};

exports.Prisma.StoryPathScalarFieldEnum = {
  id: 'id',
  fromId: 'fromId',
  toId: 'toId'
};

exports.Prisma.StorylineScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  ownerId: 'ownerId'
};

exports.Prisma.StorylinePathScalarFieldEnum = {
  storyLineId: 'storyLineId',
  pathId: 'pathId',
  seq: 'seq'
};

exports.Prisma.ReadingSessionScalarFieldEnum = {
  id: 'id',
  readerId: 'readerId',
  createdAt: 'createdAt',
  lastOpened: 'lastOpened',
  lastSceneId: 'lastSceneId',
  universeId: 'universeId',
  moods: 'moods',
  languages: 'languages'
};

exports.Prisma.FavoriteAnchorScalarFieldEnum = {
  anchorId: 'anchorId',
  sessionId: 'sessionId',
  sceneAnchorTag: 'sceneAnchorTag'
};

exports.Prisma.TransitionScalarFieldEnum = {
  id: 'id',
  sessionId: 'sessionId',
  storyPathId: 'storyPathId',
  rating: 'rating',
  occurences: 'occurences',
  ts: 'ts'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Visibility = exports.$Enums.Visibility = {
  PUBLIC: 'PUBLIC',
  MEMBERSHIP: 'MEMBERSHIP'
};

exports.FileFormat = exports.$Enums.FileFormat = {
  PDF: 'PDF',
  PLAINTEXT: 'PLAINTEXT',
  DOCX: 'DOCX',
  MARKDOWN: 'MARKDOWN'
};

exports.SceneMood = exports.$Enums.SceneMood = {
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

exports.SceneGenre = exports.$Enums.SceneGenre = {
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

exports.AnchorType = exports.$Enums.AnchorType = {
  PLACE: 'PLACE',
  ACTOR: 'ACTOR',
  OBJECT: 'OBJECT',
  ORGANIZATION: 'ORGANIZATION',
  MOMENT: 'MOMENT'
};

exports.Prisma.ModelName = {
  User: 'User',
  Account: 'Account',
  Session: 'Session',
  VerificationToken: 'VerificationToken',
  Authenticator: 'Authenticator',
  UniverseMember: 'UniverseMember',
  Universe: 'Universe',
  UniverseSource: 'UniverseSource',
  Scene: 'Scene',
  SceneAnchor: 'SceneAnchor',
  StoryPath: 'StoryPath',
  Storyline: 'Storyline',
  StorylinePath: 'StorylinePath',
  ReadingSession: 'ReadingSession',
  FavoriteAnchor: 'FavoriteAnchor',
  Transition: 'Transition'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
