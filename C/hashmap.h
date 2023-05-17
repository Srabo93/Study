#ifndef HASHMAP_H
#define HASHMAP_H

#define HASHMAP_SIZE 100

typedef struct HashMapNode {
  char *key;
  int value;
  struct HashMapNode *next;
} HashMapNode;

typedef struct HashMap {
  HashMapNode *buckets[HASHMAP_SIZE];
} HashMap;

unsigned int hash(const char *key);
void hashmap_insert(HashMap *map, const char *key, int value);
void hashmap_remove(HashMap *map, const char *key);
int hashmap_update(const HashMap *map, const char *key, int value);
void hashmap_print(const HashMap *map);
int hashmap_lookup(const HashMap *map, const char *key);
void hashmap_destroy(const HashMap *map);

#endif /* HASHMAP_H */
