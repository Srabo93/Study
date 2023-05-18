#include "hashmap.h"
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <strings.h>

void menu() {
  printf(" \n");
  printf("== Manage Bills ==\n");
  printf("1. Add bill\n");
  printf("2. View bill\n");
  printf("3. View bills\n");
  printf("4. Remove bill\n");
  printf("5. Update bill\n");
  printf("6. Exit\n");
  printf(" \n");
  printf("Enter selection:\n");
}
void view_bill_menu(const HashMap *map) {
  char name[100];
  for (;;) {
    int inputStep = 0;
    printf("Enter Bill Name: \n");
    scanf(" %[^\n]", name);
    if (strcasecmp(name, "") == 0 || strcasecmp(name, " ") == 0) {
      break;
    }
    inputStep++;

    if (inputStep == 1) {
      int amount = hashmap_lookup(map, name);
      if (amount == -1) {
        break;
      }
      printf("%s has to pay: %i\n", name, amount);
      break;
    }
  }
}

void remove_bill_menu(HashMap *map) {
  char name[100];
  for (;;) {
    int inputStep = 0;
    printf("Enter Bill Name, that should be removed: \n");
    scanf(" %[^\n]", name);
    if (strcasecmp(name, "") == 0 || strcasecmp(name, " ") == 0) {
      break;
    }
    inputStep++;

    if (inputStep == 1) {
      hashmap_remove(map, name);
      break;
    }
  }
}

void update_bill_menu(HashMap *map) {
  char name[100];
  int amount;
  for (;;) {
    int inputStep = 0;
    printf("Enter Name: \n");
    scanf(" %[^\n]", name);
    if (strcasecmp(name, "") == 0 || strcasecmp(name, " ") == 0) {
      break;
    }
    inputStep++;

    if (inputStep == 1) {
      printf("Enter Amount: \n");
      scanf("%i", &amount);
      inputStep++;
    }

    if (inputStep == 2) {
      hashmap_update(map, name, amount);
      break;
    }
  }
}
void add_bill_menu(HashMap *map) {
  char name[100];
  int amount;
  for (;;) {
    int inputStep = 0;
    printf("Add Name: \n");
    scanf(" %[^\n]", name);
    if (strcasecmp(name, "") == 0 || strcasecmp(name, " ") == 0) {
      break;
    }

    for (int i = 0; name[i] != '\0'; i++) {
      name[i] = tolower(name[i]);
    }

    inputStep++;

    if (inputStep == 1) {
      printf("Add Amount: \n");
      scanf("%i", &amount);
      inputStep++;
    }

    if (inputStep == 2) {
      hashmap_insert(map, name, amount);
      break;
    }
  }
}
