
#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() 
{
    int n;
    scanf("%d", &n);
      
    int a[n*2-1][n*2-1];
    
        //logic
    for(int c=0; c<n; c++)
    {
        for(int i=c; i < n*2-1-c; i++)
        {
            for(int j=c; j < n*2-1-c; j++)
            {
                a[i][j] = n-c;
            }
        }

    }

//Displaying
 for(int i=0;i<n*2-1;i++)
    {
        for(int j=0;j<n*2-1;j++)
        {
            printf("%d ",a[i][j]);
        }
        printf("\n");
    }

    return 0;


}