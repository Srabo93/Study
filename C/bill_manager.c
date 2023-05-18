#include "hashmap.h"
#include "menu.h"
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <strings.h>

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
