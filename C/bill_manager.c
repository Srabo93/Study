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
  printf(" \n");
  printf("Enter selection:");
}

void view_bill_menu() {}

void add_bill_menu(HashMap *map) {
  char name[100];
  int amount;
  for (;;) {
    int inputStep = 0;
    printf("Add Name: ");
    scanf(" %[^\n]", name);
    if (strcasecmp(name, "") == 0 || strcasecmp(name, " ") == 0) {
      break;
    }
    inputStep++;

    if (inputStep == 1) {
      printf("Add Amount: ");
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

    switch (user_input) {
    case ADD_BILL:
      add_bill_menu(&map);
      break;
    case VIEW_BILL:
      view_bill_menu();

    default:
      break;
    }
  }

  hashmap_print(&map);
  hashmap_destroy(&map);
}
