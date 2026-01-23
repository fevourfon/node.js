#include <iostream>

using namespace std;
int add(int a,int b);
int pow(int a,int b);
int mult(int a,int b);
void incrementbyreference(int &a);


int main()
{
    int num1,num2;
    cout<<"enter a number ur want to add";
    cin>>num1;
    cin>>num2;

    int sum=add(num1,num2);
    cout<<"sum:"<<sum;
    int index=pow(num1,num2);
    cout<<"sum:"<<index;
    int multiplies=mult(num1,num2);
    cout<<"sum:"<< multiplies;





    cout << "Hello world!" << endl;
    return 0;
}
int add(int a, int b){
    cout<<"hello mr andrew addition funtion"<<endl;
    return a+b;
}
int pow(int a, int b){
    cout<<"hello mr andrew addition funtion"<<endl;
    if(a!=1){
    return a*pow(a-1,b);
    }else{
   return 1;
    }
    }
    int mult(int a, int b){
    cout<<"hello mr andrew addition funtion"<<endl;
    for(int i=1;i<=b;i++){
        {a*=a;

        }
    }
    return a*b;
    }
void incrementbyreference(int &a)
{
   a=a+1;
}
