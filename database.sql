-- Images table for all image specific data
CREATE TABLE "images" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(120) NOT NULL,
    "path"  VARCHAR(120) NOT NULL
);

-- Tabs table stores all available tags that can be used
CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL
);

-- Initial image data
INSERT INTO "images" ("title", "path")
VALUES 
('Abstract Shapes', 'images/AbstractShapes.jpg'),
('Chroma Blast', 'images/Chroma.jpg'),
('Color Burst', 'images/ColorBurst.jpg'),
('Flower', 'images/Flower.jpg'),
('Reflection', 'images/Reflection.jpg');

-- initial tag data
INSERT INTO "tags" ("name")
VALUES 
('Energy'),
('Calming'),
('Inspirational'),
('Frantic'),
('Vertigo');

-- Junction table for tags and images relationships
CREATE TABLE "junc_images_tags" (
    "id" SERIAL PRIMARY KEY,
    "image_id" INT REFERENCES "images",
    "tag_id" INT REFERENCES "tags"
);
