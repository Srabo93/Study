#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define HASHMAP_SIZE 100

typedef struct HashMapNode {
  char *key;
  int value;
  struct HashMapNode *next;
} HashMapNode;

typedef struct HashMap {
  HashMapNode *buckets[HASHMAP_SIZE];
} HashMap;

unsigned int hash(const char *key) {
  unsigned int hash = 0;
  for (int i = 0; key[i] != '\0'; i++) {
    hash = (hash * 31) + key[i];
  }
  return hash % HASHMAP_SIZE;
}

void hashmap_insert(HashMap *map, const char *key, int value) {
  unsigned int index = hash(key);

  HashMapNode *new_node = malloc(sizeof(HashMapNode));
  new_node->key = strdup(key);
  new_node->value = value;
  new_node->next = NULL;

  if (map->buckets[index] == NULL) {
    map->buckets[index] = new_node;
  } else {
    HashMapNode *curr_node = map->buckets[index];
    while (curr_node->next != NULL) {
      curr_node = curr_node->next;
    }
    curr_node->next = new_node;
  }
}
void hashmap_remove(HashMap *map, const char *key) {
  unsigned int index = hash(key);

  HashMapNode *curr_node = map->buckets[index];
  HashMapNode *prev = NULL;

  while (curr_node != NULL) {
    if (strcmp(curr_node->key, key) == 0) {
      if (prev == NULL) {
        map->buckets[index] = curr_node->next;
      } else {
        prev->next = curr_node->next;
      }

      free(curr_node->key);
      free(curr_node);
      return;
    }
  }
  prev = curr_node;
  curr_node = curr_node->next;
}

int hashmap_update(const HashMap *map, const char *key, int value) {
  unsigned int index = hash(key);

  HashMapNode *curr_node = map->buckets[index];
  while (curr_node != NULL) {
    if (strcmp(curr_node->key, key) == 0) {
      curr_node->value = value;
      return 1;
    }
    curr_node = curr_node->next;
  }
  return -1;
}

void hashmap_print(const HashMap *map) {
  for (int i = 0; i < HASHMAP_SIZE; i++) {
    HashMapNode *curr_node = map->buckets[i];
    while (curr_node != NULL) {
      printf("Key: %s , Value: %i\n", curr_node->key, curr_node->value);
      curr_node = curr_node->next;
    }
  }
}

int hashmap_lookup(const HashMap *map, const char *key) {
  unsigned int index = hash(key);

  HashMapNode *curr_node = map->buckets[index];
  while (curr_node != NULL) {
    if (strcmp(curr_node->key, key) == 0) {
      return curr_node->value;
    }
    curr_node = curr_node->next;
  }
  return -1;
}

int main(int argc, char *argv[]) {
  HashMap map;
  for (int i = 0; i < HASHMAP_SIZE; i++) {
    map.buckets[i] = NULL;
  }
  hashmap_insert(&map, "key1", 100);
  hashmap_insert(&map, "key2", 300);
  hashmap_insert(&map, "key3", 500);
  hashmap_insert(&map, "key4", 330);

  int value = hashmap_lookup(&map, "key1");
  int value2 = hashmap_lookup(&map, "key2");
  int value4 = hashmap_lookup(&map, "key4");

  hashmap_remove(&map, "key3");
  int value3 = hashmap_lookup(&map, "key3");
  hashmap_update(&map, "key4", 6969);
  int value4modified = hashmap_lookup(&map, "key4");
  hashmap_print(&map);
}
