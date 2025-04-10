
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
  email: 'email',
  password: 'password',
  name: 'name'
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

exports.Prisma.SessionScalarFieldEnum = {
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
  PDF: 'PDF'
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
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/joelgrenon/Projects/flooks/reader/src/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/joelgrenon/Projects/flooks/reader/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "postgresql://joelgrenon@localhost:5432/flooks?schema=public"
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-ini\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id         Int              @id @default(autoincrement())\n  email      String           @unique\n  password   String\n  name       String?\n  universes  UniverseMember[]\n  scenes     Scene[]\n  storylines Storyline[]\n  sessions   Session[]\n}\n\nenum Visibility {\n  PUBLIC\n  MEMBERSHIP\n}\n\nmodel UniverseMember {\n  user       User     @relation(fields: [userId], references: [id])\n  universe   Universe @relation(fields: [universeId], references: [id])\n  userId     Int\n  universeId Int\n\n  @@id([userId, universeId])\n}\n\nmodel Universe {\n  id          Int              @id @default(autoincrement())\n  name        String\n  description String\n  contextDB   String\n  visibility  Visibility       @default(PUBLIC)\n  sources     UniverseSource[]\n  members     UniverseMember[]\n  scenes      Scene[]\n  sessions    Session[]\n}\n\nenum FileFormat {\n  PDF\n}\n\nmodel UniverseSource {\n  id         Int        @id @default(autoincrement())\n  format     FileFormat @default(PDF)\n  path       String\n  universe   Universe   @relation(fields: [universeId], references: [id])\n  universeId Int\n}\n\nenum SceneMood {\n  JOYFUL\n  NERVOUS\n  PEACEFUL\n  MELANCHOLY\n  PANICKED\n  PENSIVE\n  RESENTFUL\n  ANGRY\n  HOPEFUL\n  LONELY\n  NOSTALGIC\n  ANXIOUS\n  CALM\n  SENTIMENTAL\n  CHEERFUL\n  UNEASY\n  HOPELESS\n  STRESSED\n  SORROWFUL\n  OPTIMISTIC\n}\n\nenum SceneGenre {\n  FANTASY\n  SCIFI\n  DYSTOPIAN\n  ACTION\n  MYSTERY\n  HORROR\n  THRILLER\n  HISTORICAL_FICTION\n  ROMANCE\n  CONTEMPORARY_FICTION\n  YOUNG_ADULT\n  CHILDREN\n  BIOGRAPHY\n  ART\n  FOOD_DRINKS\n  SELF_HELP\n  HISTORY\n  TRAVEL\n  TRUE_CRIME\n  HUMOR\n  ESSAYS\n  HOWTO\n  SPIRITUALITY\n  SOCIAL\n  FAMILY\n  SCIENCE_TECH\n}\n\nmodel Scene {\n  id         Int           @id @default(autoincrement())\n  universe   Universe      @relation(fields: [universeId], references: [id])\n  universeId Int\n  title      String\n  author     User          @relation(fields: [authorId], references: [id])\n  authorId   Int\n  anchors    SceneAnchor[]\n  content    String\n  mood       SceneMood\n  genre      SceneGenre\n  lang       String        @default(\"en\")\n  prompt     String?\n  fromPaths  StoryPath[]   @relation(\"fromPaths\")\n  toPaths    StoryPath[]   @relation(\"toPaths\")\n  parentId   Int?          @unique\n  parent     Scene?        @relation(\"variant\", fields: [parentId], references: [id])\n  variants   Scene[]       @relation(\"variant\")\n  sessions   Session[]\n}\n\nenum AnchorType {\n  PLACE\n  ACTOR\n  OBJECT\n  ORGANIZATION\n  MOMENT\n}\n\nmodel SceneAnchor {\n  tag           String           @id\n  type          AnchorType\n  name          String\n  description   Scene?           @relation(fields: [descriptionId], references: [id])\n  descriptionId Int?\n  timeline      Storyline?       @relation(fields: [timelineId], references: [id])\n  timelineId    Int?             @unique\n  parentTag     String           @unique\n  parent        SceneAnchor?     @relation(\"parent\", fields: [parentTag], references: [tag])\n  children      SceneAnchor[]    @relation(\"parent\")\n  sessions      FavoriteAnchor[]\n\n  @@index([name])\n}\n\nmodel StoryPath {\n  id         Int             @id @default(autoincrement())\n  from       Scene           @relation(\"fromPaths\", fields: [fromId], references: [id])\n  fromId     Int\n  to         Scene           @relation(\"toPaths\", fields: [toId], references: [id])\n  toId       Int\n  storylines StorylinePath[]\n}\n\nmodel Storyline {\n  id          Int             @id @default(autoincrement())\n  title       String\n  description String\n  owner       User            @relation(fields: [ownerId], references: [id])\n  storyPaths  StorylinePath[]\n  ownerId     Int\n  anchor      SceneAnchor?\n}\n\nmodel StorylinePath {\n  storyline   Storyline @relation(fields: [storyLineId], references: [id])\n  storyLineId Int\n  path        StoryPath @relation(fields: [pathId], references: [id])\n  pathId      Int\n  seq         Int       @default(0)\n\n  @@id([storyLineId, pathId])\n}\n\nmodel Session {\n  id          String           @id\n  reader      User             @relation(fields: [readerId], references: [id])\n  readerId    Int\n  createdAt   DateTime\n  lastOpened  DateTime\n  lastScene   Scene?           @relation(fields: [lastSceneId], references: [id])\n  lastSceneId Int?\n  universe    Universe?        @relation(fields: [universeId], references: [id])\n  universeId  Int?\n  moods       SceneMood[]\n  languages   String[]         @default([\"en\"])\n  favorites   FavoriteAnchor[]\n}\n\nmodel FavoriteAnchor {\n  anchor         SceneAnchor? @relation(fields: [sceneAnchorTag], references: [tag])\n  session        Session?     @relation(fields: [sessionId], references: [id])\n  anchorId       Int\n  sessionId      String\n  sceneAnchorTag String?\n\n  @@id([sessionId, anchorId])\n}\n",
  "inlineSchemaHash": "e269181bfc904df82d6b7e72a29c154325ce6163739a1cfe6ee57a58c0007806",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UniverseMember\",\"nativeType\":null,\"relationName\":\"UniverseMemberToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scenes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Scene\",\"nativeType\":null,\"relationName\":\"SceneToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storylines\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Storyline\",\"nativeType\":null,\"relationName\":\"StorylineToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Session\",\"nativeType\":null,\"relationName\":\"SessionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UniverseMember\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UniverseMemberToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universe\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Universe\",\"nativeType\":null,\"relationName\":\"UniverseToUniverseMember\",\"relationFromFields\":[\"universeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"universeId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Universe\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contextDB\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visibility\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Visibility\",\"nativeType\":null,\"default\":\"PUBLIC\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sources\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UniverseSource\",\"nativeType\":null,\"relationName\":\"UniverseToUniverseSource\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"members\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UniverseMember\",\"nativeType\":null,\"relationName\":\"UniverseToUniverseMember\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"scenes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Scene\",\"nativeType\":null,\"relationName\":\"SceneToUniverse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Session\",\"nativeType\":null,\"relationName\":\"SessionToUniverse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UniverseSource\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"format\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"FileFormat\",\"nativeType\":null,\"default\":\"PDF\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universe\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Universe\",\"nativeType\":null,\"relationName\":\"UniverseToUniverseSource\",\"relationFromFields\":[\"universeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Scene\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universe\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Universe\",\"nativeType\":null,\"relationName\":\"SceneToUniverse\",\"relationFromFields\":[\"universeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"SceneToUser\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anchors\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SceneAnchor\",\"nativeType\":null,\"relationName\":\"SceneToSceneAnchor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mood\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SceneMood\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genre\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SceneGenre\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"en\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prompt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fromPaths\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StoryPath\",\"nativeType\":null,\"relationName\":\"fromPaths\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toPaths\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StoryPath\",\"nativeType\":null,\"relationName\":\"toPaths\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Scene\",\"nativeType\":null,\"relationName\":\"variant\",\"relationFromFields\":[\"parentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"variants\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Scene\",\"nativeType\":null,\"relationName\":\"variant\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Session\",\"nativeType\":null,\"relationName\":\"SceneToSession\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SceneAnchor\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"tag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AnchorType\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Scene\",\"nativeType\":null,\"relationName\":\"SceneToSceneAnchor\",\"relationFromFields\":[\"descriptionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descriptionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timeline\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Storyline\",\"nativeType\":null,\"relationName\":\"SceneAnchorToStoryline\",\"relationFromFields\":[\"timelineId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timelineId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentTag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SceneAnchor\",\"nativeType\":null,\"relationName\":\"parent\",\"relationFromFields\":[\"parentTag\"],\"relationToFields\":[\"tag\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"children\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SceneAnchor\",\"nativeType\":null,\"relationName\":\"parent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FavoriteAnchor\",\"nativeType\":null,\"relationName\":\"FavoriteAnchorToSceneAnchor\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StoryPath\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"from\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Scene\",\"nativeType\":null,\"relationName\":\"fromPaths\",\"relationFromFields\":[\"fromId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fromId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"to\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Scene\",\"nativeType\":null,\"relationName\":\"toPaths\",\"relationFromFields\":[\"toId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storylines\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StorylinePath\",\"nativeType\":null,\"relationName\":\"StoryPathToStorylinePath\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Storyline\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"StorylineToUser\",\"relationFromFields\":[\"ownerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storyPaths\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StorylinePath\",\"nativeType\":null,\"relationName\":\"StorylineToStorylinePath\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ownerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anchor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SceneAnchor\",\"nativeType\":null,\"relationName\":\"SceneAnchorToStoryline\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StorylinePath\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"storyline\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Storyline\",\"nativeType\":null,\"relationName\":\"StorylineToStorylinePath\",\"relationFromFields\":[\"storyLineId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"storyLineId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StoryPath\",\"nativeType\":null,\"relationName\":\"StoryPathToStorylinePath\",\"relationFromFields\":[\"pathId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pathId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seq\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"storyLineId\",\"pathId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Session\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reader\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"SessionToUser\",\"relationFromFields\":[\"readerId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"readerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastOpened\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastScene\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Scene\",\"nativeType\":null,\"relationName\":\"SceneToSession\",\"relationFromFields\":[\"lastSceneId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastSceneId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universe\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Universe\",\"nativeType\":null,\"relationName\":\"SessionToUniverse\",\"relationFromFields\":[\"universeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"universeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moods\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SceneMood\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"languages\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":[\"en\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favorites\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FavoriteAnchor\",\"nativeType\":null,\"relationName\":\"FavoriteAnchorToSession\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FavoriteAnchor\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"anchor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SceneAnchor\",\"nativeType\":null,\"relationName\":\"FavoriteAnchorToSceneAnchor\",\"relationFromFields\":[\"sceneAnchorTag\"],\"relationToFields\":[\"tag\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"session\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Session\",\"nativeType\":null,\"relationName\":\"FavoriteAnchorToSession\",\"relationFromFields\":[\"sessionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anchorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sessionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sceneAnchorTag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"sessionId\",\"anchorId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Visibility\":{\"values\":[{\"name\":\"PUBLIC\",\"dbName\":null},{\"name\":\"MEMBERSHIP\",\"dbName\":null}],\"dbName\":null},\"FileFormat\":{\"values\":[{\"name\":\"PDF\",\"dbName\":null}],\"dbName\":null},\"SceneMood\":{\"values\":[{\"name\":\"JOYFUL\",\"dbName\":null},{\"name\":\"NERVOUS\",\"dbName\":null},{\"name\":\"PEACEFUL\",\"dbName\":null},{\"name\":\"MELANCHOLY\",\"dbName\":null},{\"name\":\"PANICKED\",\"dbName\":null},{\"name\":\"PENSIVE\",\"dbName\":null},{\"name\":\"RESENTFUL\",\"dbName\":null},{\"name\":\"ANGRY\",\"dbName\":null},{\"name\":\"HOPEFUL\",\"dbName\":null},{\"name\":\"LONELY\",\"dbName\":null},{\"name\":\"NOSTALGIC\",\"dbName\":null},{\"name\":\"ANXIOUS\",\"dbName\":null},{\"name\":\"CALM\",\"dbName\":null},{\"name\":\"SENTIMENTAL\",\"dbName\":null},{\"name\":\"CHEERFUL\",\"dbName\":null},{\"name\":\"UNEASY\",\"dbName\":null},{\"name\":\"HOPELESS\",\"dbName\":null},{\"name\":\"STRESSED\",\"dbName\":null},{\"name\":\"SORROWFUL\",\"dbName\":null},{\"name\":\"OPTIMISTIC\",\"dbName\":null}],\"dbName\":null},\"SceneGenre\":{\"values\":[{\"name\":\"FANTASY\",\"dbName\":null},{\"name\":\"SCIFI\",\"dbName\":null},{\"name\":\"DYSTOPIAN\",\"dbName\":null},{\"name\":\"ACTION\",\"dbName\":null},{\"name\":\"MYSTERY\",\"dbName\":null},{\"name\":\"HORROR\",\"dbName\":null},{\"name\":\"THRILLER\",\"dbName\":null},{\"name\":\"HISTORICAL_FICTION\",\"dbName\":null},{\"name\":\"ROMANCE\",\"dbName\":null},{\"name\":\"CONTEMPORARY_FICTION\",\"dbName\":null},{\"name\":\"YOUNG_ADULT\",\"dbName\":null},{\"name\":\"CHILDREN\",\"dbName\":null},{\"name\":\"BIOGRAPHY\",\"dbName\":null},{\"name\":\"ART\",\"dbName\":null},{\"name\":\"FOOD_DRINKS\",\"dbName\":null},{\"name\":\"SELF_HELP\",\"dbName\":null},{\"name\":\"HISTORY\",\"dbName\":null},{\"name\":\"TRAVEL\",\"dbName\":null},{\"name\":\"TRUE_CRIME\",\"dbName\":null},{\"name\":\"HUMOR\",\"dbName\":null},{\"name\":\"ESSAYS\",\"dbName\":null},{\"name\":\"HOWTO\",\"dbName\":null},{\"name\":\"SPIRITUALITY\",\"dbName\":null},{\"name\":\"SOCIAL\",\"dbName\":null},{\"name\":\"FAMILY\",\"dbName\":null},{\"name\":\"SCIENCE_TECH\",\"dbName\":null}],\"dbName\":null},\"AnchorType\":{\"values\":[{\"name\":\"PLACE\",\"dbName\":null},{\"name\":\"ACTOR\",\"dbName\":null},{\"name\":\"OBJECT\",\"dbName\":null},{\"name\":\"ORGANIZATION\",\"dbName\":null},{\"name\":\"MOMENT\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

