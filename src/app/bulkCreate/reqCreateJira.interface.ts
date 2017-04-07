export class ReqCreateJira {
    fields: Fields;
    constructor(){
        this.fields = new Fields();
    };
}
export class Fields {
    project: Project;
    summary: string;
    description: string;
    issuetype: Issuetype;
    customfield_10002: string;
    components: ListComponents;
    assignee: Assignee;
    priority: Priority;
    constructor(){
        this.project = new Project();
        this.issuetype = new Issuetype();
        this.assignee = new Assignee();
        this.priority = new Priority();
    };
}
export class Project {
    key: string;
}
export class Issuetype {
    name: string;
    id: string;
}
export class ListComponents {
    components: Component[];
    constructor() {
        this.components[100] = new Component;
    }
}
export class Component {
    name: string;
}
export class Assignee {
    name: string;
}
export class Priority {
    id: number;
    name: string;
}