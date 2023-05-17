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
  printf("Enter selection:");
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

typedef enum {
  ADD_BILL = 1,
  VIEW_BILL = 2,
  VIEW_BILLS = 3,
  REMOVE_BILL = 4,
  UPDATE_BILL = 5,
  EXIT = 6
} BillAction;

int main(int argc, char *argv[]) {
  HashMap map;
  for (int i = 0; i < HASHMAP_SIZE; i++) {
    map.buckets[i] = NULL;
  }

  for (;;) {
    menu();
    int user_input;
    scanf("%i", &user_input);

    if (isdigit(user_input)) {
      printf("Enter number\n");
      return -1;
    }

    if (user_input == EXIT) {
      printf("Bye\n");
      break;
    }

    switch (user_input) {
    case ADD_BILL:
      add_bill_menu(&map);
      break;
    case VIEW_BILL:
      view_bill_menu(&map);
      break;
    case VIEW_BILLS:
      hashmap_print(&map);
      break;
    case REMOVE_BILL:
      remove_bill_menu(&map);
      break;
    case UPDATE_BILL:
      update_bill_menu(&map);
      break;
    default:
      break;
    }
  }
  hashmap_destroy(&map);
}
