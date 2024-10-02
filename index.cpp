// code for adding two arrays of same size 
#include<stdio.h>

void addArrays(int arr1[], int arr2[], int size) {
    int result[size];
    for (int i = 0; i < size; i++)
        result[i] = arr1[i] + arr2[i];
    printf("Sum of arrays: ");
    for (int i = 0; i < size; i++)
        printf("%d ", result[i]);
}

int main() {
    int arr1[] = {1, 2, 3, 4, 5};
    int arr2[] = {6, 7, 8, 9, 10};
    int size = sizeof(arr1) / sizeof(arr1[0]);

    addArrays(arr1, arr2, size);

    return 0;
}