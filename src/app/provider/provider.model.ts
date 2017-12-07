export class CallerProvider {
    
    taxId: string;
    npi: string;
    providerName: string;    
    groupName: string ;
constructor(taxId: string, npi: string,  providerName: string,  groupName: string)
    {
      this.taxId = taxId;
      this.npi = npi;
      this.providerName= providerName;
      this.groupName= groupName ;
    }
}