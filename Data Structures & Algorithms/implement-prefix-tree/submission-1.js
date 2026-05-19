class TreeNode {
    constructor(){
        this.child = new Map();
        this.end = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TreeNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;
        for(const ch of word){
            if(!curr.child.has(ch)){
                curr.child.set(ch, new TreeNode());
            }
            curr = curr.child.get(ch);
        }
        curr.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;
        for(const ch of word){
            if(!curr.child.has(ch)){
                return false;
            }
            curr = curr.child.get(ch);
        }
        return curr.end;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;
        for(const ch of prefix){
            if(!curr.child.has(ch)){
                return false;
            }
            curr = curr.child.get(ch);
        }
        return true;
    }
}
