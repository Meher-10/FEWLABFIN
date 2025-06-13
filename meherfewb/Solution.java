import java.util.*;

public class Solution {
    // public static boolean rec(int index, int money, boolean used, int coupon, int[] arr) {
    //     if (index == arr.length) {
    //         return money >= 1;
    //     }
        
    //     boolean res = false;
        
    //     // If coupon is not used yet
    //     if (!used) {
    //         // Option 1: Use coupon at this stall
    //         if (money + coupon - arr[index] >= 1) {
    //             res = res || rec(index + 1, money + coupon - arr[index], true, coupon, arr);
    //         }
    //         // Option 2: Don't use coupon at this stall
    //         if (money - arr[index] >= 1) {
    //             res = res || rec(index + 1, money - arr[index], false, coupon, arr);
    //         }
    //     } else {
    //         // Coupon already used
    //         if (money - arr[index] >= 1) {
    //             res = res || rec(index + 1, money - arr[index], true, coupon, arr);
    //         }
    //     }
        
    //     return res;
    // }
    public static boolean rec(int index,int total,boolean used,int cup,int arr[]){
        //
        if(index==arr.length){
            if(total>=1){
                return true;
            }
            return false;
        }
        boolean t=false;
        boolean l=false;
        boolean r=false;
        boolean k=false;
        if(used==false){
            if(total+cup-arr[index]>=0){
                l=rec(index+1,total+cup-arr[index],true,cup,arr);

            }
            else if(total-arr[index]>=0){
                r=rec(index+1,total+cup-arr[index],true,cup,arr);

            }
            k=l|r;
           
            
        }
        else{
            if(total-arr[index]>=0){
                t=rec(index+1,total-arr[index],true,cup,arr);

            }
            
        }
        return k|t;
        
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int coupon = sc.nextInt();
        sc.nextLine(); // consume leftover newline
        String[] parts = sc.nextLine().split(",");
        
        int[] arr = new int[n];
        int sum = 0;
        
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(parts[i]);
            sum += arr[i];
        }
        
        for (int start = 1; start <= sum + coupon; start++) {
            if (rec(0, start, false, coupon, arr)) {
                System.out.println(start);
                return;
            }
        }
        
        System.out.println(-1); // Should never reach here
    }
}
