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
class person
{
public:
    int age;
    string name;
    person(int a,string n){

    name=n;
    age=a;
    }
    void whatsmyname(){
    }

};
int main(){

    person p1( 12,"Andrew");
    cout<<p1.age;
    cout<<p1.name;

    student student1;
    student1.displayname();
    student1.name="jane";
cout<<"hello world"<<endl;
}

