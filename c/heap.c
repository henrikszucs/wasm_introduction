#include <stdio.h>
#include <stdlib.h>

int main() { 
  return 42;
}

int * test() {
  // Dynamically allocate memory using malloc()
  int n = 40;
  int * ptr = (int*)malloc(n * sizeof(int));
  for (int i = 0; i < n; ++i) {
    ptr[i] = i + 1;
  }
  return &ptr[20];
}