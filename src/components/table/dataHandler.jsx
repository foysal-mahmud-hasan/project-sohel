import companyData from '../data/companies';
import departmentData from '../data/departments';
import employeeData from '../data/employees';


export const companies = companyData;
export const departments = departmentData.map(({ companyId, ...rest }) => ({
    ...rest,
    company: companies.find(({ id }) => id === companyId),
}));
export const employees = employeeData.map(({ departmentId, ...rest }) => ({
    ...rest,
    department: departments.find(({ id }) => id === departmentId),
}));