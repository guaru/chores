ALTER TABLE public.status ADD orden int4 NULL;
ALTER TABLE public.status RENAME COLUMN orden TO "position";
