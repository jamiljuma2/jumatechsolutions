-- JumaTech Solutions: PostgreSQL schema for Neon
-- Generated from Drizzle schema.ts

-- Extensions
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Enums
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
    CREATE TYPE user_role AS ENUM ('admin','user');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'project_status') THEN
    CREATE TYPE project_status AS ENUM ('draft','published','archived');
  END IF;
END$$;

-- Users
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  password text NOT NULL,
  role user_role NOT NULL DEFAULT 'user',
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Projects
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text NOT NULL,
  category text NOT NULL,
  technologies text[] NOT NULL DEFAULT '{}'::text[],
  github_url text,
  live_url text,
  featured boolean NOT NULL DEFAULT false,
  status project_status NOT NULL DEFAULT 'draft',
  completion_date timestamptz,
  deleted_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Project images
CREATE TABLE IF NOT EXISTS project_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  image_url text NOT NULL,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  company text NOT NULL,
  photo text,
  review text NOT NULL,
  rating integer NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Contact messages
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Settings (single-row configuration table)
CREATE TABLE IF NOT EXISTS settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  logo text,
  email text NOT NULL,
  phone text,
  address text,
  facebook text,
  instagram text,
  linkedin text,
  twitter text,
  seo_title text NOT NULL,
  seo_description text NOT NULL
);

-- Activity logs
CREATE TABLE IF NOT EXISTS activity_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  action text NOT NULL,
  entity_type text NOT NULL,
  entity_id text NOT NULL,
  details jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_activity_logs_user_id ON activity_logs(user_id);

-- Notes:
-- - This script uses gen_random_uuid() (pgcrypto). If your Neon setup prefers uuid-ossp, replace
--   gen_random_uuid() with uuid_generate_v4() and enable extension "uuid-ossp" instead.
-- - Consider creating a single-row entry in `settings` after deployment with company metadata.
