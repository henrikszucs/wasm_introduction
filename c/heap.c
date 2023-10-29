#include <stdio.h>
#include <stdlib.h>

int main() { 
  return 42;
}
int * ptr;

int * test(int offset) {
  // Dynamically allocate memory using malloc()
  int n = 40;
  ptr = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; ++i) {
    ptr[i] = i + offset;
  }

  return &ptr[20];
}

void js_free() {
  free(ptr);
}