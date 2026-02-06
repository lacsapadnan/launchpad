import { pgTable, uuid, text, timestamp, pgEnum, primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const subscriptionStatusEnum = pgEnum("subscription_status", ["active", "trial", "past_due", "canceled"]);
export const userRoleEnum = pgEnum("user_role", ["owner", "admin", "member"]);

// Users table
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  fullName: text("full_name"),
  avatarUrl: text("avatar_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Teams table (Tenant)
export const teams = pgTable("teams", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  subscriptionStatus: subscriptionStatusEnum("subscription_status").default("trial").notNull(),
  xenditCustomerId: text("xendit_customer_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  deletedAt: timestamp("deleted_at"),
});

// Members table (Association)
export const members = pgTable("members", {
  userId: uuid("user_id").notNull().references(() => users.id),
  teamId: uuid("team_id").notNull().references(() => teams.id),
  role: userRoleEnum("role").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => {
  return {
    pk: primaryKey({ columns: [table.userId, table.teamId] }),
  };
});

// Invitations table
export const invitations = pgTable("invitations", {
  id: uuid("id").primaryKey().defaultRandom(),
  teamId: uuid("team_id").notNull().references(() => teams.id),
  email: text("email").notNull(),
  token: text("token").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Subscriptions table (Sync with Xendit)
export const subscriptions = pgTable("subscriptions", {
  teamId: uuid("team_id").primaryKey().references(() => teams.id),
  xenditSubId: text("xendit_sub_id").notNull(),
  currentPeriodEnd: timestamp("current_period_end").notNull(),
  planVariant: text("plan_variant").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Projects table (Demo App)
export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  teamId: uuid("team_id").notNull().references(() => teams.id),
  name: text("name").notNull(),
  status: text("status").notNull().default("active"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  members: many(members),
}));

export const teamsRelations = relations(teams, ({ many, one }) => ({
  members: many(members),
  projects: many(projects),
  subscription: one(subscriptions, {
    fields: [teams.id],
    references: [subscriptions.teamId],
  }),
}));

export const membersRelations = relations(members, ({ one }) => ({
  user: one(users, {
    fields: [members.userId],
    references: [users.id],
  }),
  team: one(teams, {
    fields: [members.teamId],
    references: [teams.id],
  }),
}));
