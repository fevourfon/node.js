#include<iostream>
#include<string>
using namespace std;
class student{
public:
    string name;
    int age=1;
private:
    int id;
    public:
    void displayname(){
        cout<<"name:"<<name<<"age:"<<age<<endl;
    }
    void sing(){
    cout<<"andrew is singing"<< endl;
    }

};
int main(){
    student andrew;
    andrew.displayname();
cout<<"hello world"<<endl;
}
