#include "hashmap.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[]) {
  HashMap map;
  for (int i = 0; i < HASHMAP_SIZE; i++) {
    map.buckets[i] = NULL;
  }
}
