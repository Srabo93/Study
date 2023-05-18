#ifndef MENU_H
#define MENU_H

#include "hashmap.h"
void menu();
void view_bill_menu(const HashMap *map);
void remove_bill_menu(HashMap *map);
void update_bill_menu(HashMap *map);
void add_bill_menu(HashMap *map);

#endif /* MENU_H */
